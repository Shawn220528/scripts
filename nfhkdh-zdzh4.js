/*
南方航空兑换-指定账号
单帐号冲击版----多帐号并发不想写
au：雨夜
cron 59 9 * * *  MRLYT_rainy_main/nfhkdh-zdzh.js

仅适配青龙
变量名：NFHKAPP
变量格式：uid & memberNo @ uid & memberNo ‘
抓包域名：nhugc.mycz.cn  请求体
@隔开

兑换商品
变量名：NFHKPID
变量格式：商品pid
    30元机票优惠券：BZECRKGVYS
    50元京东卡：DHELOXDAPF
    100元京东卡：XLUNIEAXJV
    200里程：ZIYAHEKWBO
    200元京东卡：DLENWOCMQI
    800元京东卡：ZKBTJIYDEW

变量名：NFHKINDEX
变量格式：1,2,4,5
变量说明：指定需要执行兑换的账号序号

写死循环，兑换失败自动跳出，只需制定好执行时间即可
*/

const $ = new Env("南方航空兑换-指定账号");
var usertokenArr = []
const notify = $.isNode() ? require('./sendNotify') : '';
if (process.env.NFHKAPP4 && process.env.NFHKAPP4.indexOf('@') > -1) {
    usertokenArr = process.env.NFHKAPP4.split('@');
    console.log(`您选择的是用"@"隔开\n`)
} else {
    usertokenArr.push(process.env.NFHKAPP4)
}
var pid = ''
if (process.env.NFHKPID4 && process.env.NFHKPID4.indexOf('@') > -1) {
    pid = process.env.NFHKPID4.split('@');
    console.log(`您选择的是用"@"隔开\n`)
} else {
    pid = process.env.NFHKPID4
}
var indexArr = []
if (process.env.NFHKINDEX4 && process.env.NFHKINDEX4.indexOf(',') > -1) {
    indexArr = process.env.NFHKINDEX4.split(',');
    console.log(`您选择的是用"@"隔开\n`)
} else {
    indexArr = process.env.NFHKINDEX4
}
/*
var exnum = 200
if (process.env.NFHKEXNUM && process.env.NFHKEXNUM.indexOf('@') > -1) {
    exnum = process.env.NFHKEXNUM.split('@');
    console.log(`您选择的是用"@"隔开\n`)
} else {
    if (process.env.NFHKEXNUM >= 200) {
        exnum = process.env.NFHKEXNUM
    }
}
*/
var msgall

!(async () => {
    $.log(`============= 共${indexArr.length}个账号 ============\n`)
    for (let i = 0; i < indexArr.length; i++) {
        indexa = indexArr[i] - 1
        if (pid == '') {
            $.log('\n未填写兑换商品pid，请检查变量')
            break
        }
        if (usertokenArr[indexa]) {
            $.index = i + 1
            print(`\n\n----------开始第${$.index}个账号----------`)
            var uid
            var memberNo
            var param = usertokenArr[indexa].split('&')
            if (param[0].length == 32) {
                uid = param[0]
                memberNo = param[1]
            } else {
                uid = param[1]
                memberNo = param[0]
            }
            if ($.index == 1) {
                // await getPrizeList(uid, memberNo)
            }
            print('\n执行账号ID：' + memberNo)
            let flag = 0
            // let integral = await getUserSignIntegral(uid, memberNo)
            // if (integral < 70 && pid == 'DHELOXDAPF') {
            //     print('兑换50京东E卡金币不足，执行下一账号！')
            //     continue
            // } else if (integral < 200 && pid == 'XLUNIEAXJV') {
            //     print('兑换100京东E卡金币不足，执行下一账号！')
            //     continue
            // }
            let exchangeFlag = await exchange(uid, pid)
            if (exchangeFlag == 3) {
                print('\n不可重复兑换，执行下一账号')
                continue
            }
            while(true){
                flag = await exchange(uid, pid)
                if (flag == 1 || flag == 2 || flag == 3) {
                    break
                }
            }

            if (flag == 1) {
                print('\n执行结束，本次执行结果：兑换成功！')
            } else if (flag == 2) {
                print('\n执行结束，本次执行结果：兑换失败，请明天再试！')
            } else if (flag == 3) {
                print('\n不可重复兑换！')
            }
        }
    }
    if ($.isNode() && msgall) {
        await notify.sendNotify(`${$.name}`, `${msgall}` )
    }
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())

async function getPrizeList(uid, memberNo) {
    return new Promise((resolve) => {
        var options = {
            'method': 'POST',
            'url': 'https://nhjdugc.mycz.cn/nhjd_h5api/sign/prizeList',
            'headers': {
                'Origin': 'https://m.csair.com',
                'requestToken': '91628d5b7b3de79f2ffc5a63ff4ec71a',
                'requestWT': '1535165585748259031423133383834323135394338313445',
                'Host': 'nhjdugc.mycz.cn',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x1800172a) NetType/4G Language/zh_CN miniProgram/wx729238547ac7a14c',
                'Referer': 'https://m.csair.com/',
                'Connection': 'keep-alive',
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryyrcTEmlsaNjboHEk',
                'Accept': '*/*'
            },
            body: `------WebKitFormBoundaryyrcTEmlsaNjboHEk\r\nContent-Disposition: form-data; name="memberNo"\r\n\r\n${memberNo}\r\n------WebKitFormBoundaryyrcTEmlsaNjboHEk\r\nContent-Disposition: form-data; name="uid"\r\n\r\n${uid}\r\n------WebKitFormBoundaryyrcTEmlsaNjboHEk--`
        };
        $.post(options,async(error, response, data) =>{
            try{
                var result = JSON.parse(data)
                if (result.code == 0 && result.msg == "success") {
                    var prizeArr = result.data
                    for (let i = 0; i < prizeArr.length; i++) {
                        print('\n' + prizeArr[i].introduce + '--价格:' + prizeArr[i].prizePrice + '--总余量:' + prizeArr[i].allSurplusNums + '--今日余量:' + prizeArr[i].overPrizeNums)
                    }
                }
            } catch(e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}

async function getUserSignIntegral(uid,memberNo) {
    return new Promise((resolve) => {
        var options = {
            'method': 'POST',
            'url': 'https://nhjdugc.mycz.cn/nhjd_h5api/sign/getUserSignIntegral',
            'headers': {
                'Origin': 'https://m.csair.com',
                'requestToken': '91628d5b7b3de79f2ffc5a63ff4ec71a',
                'requestWT': '1535165585748259031423133383834323135394338313445',
                'Host': 'nhjdugc.mycz.cn',
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x1800172a) NetType/4G Language/zh_CN miniProgram/wx729238547ac7a14c',
                'Referer': 'https://m.csair.com/',
                'Connection': 'keep-alive',
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryyrcTEmlsaNjboHEk'
            },
            body: `------WebKitFormBoundaryyrcTEmlsaNjboHEk\r\nContent-Disposition: form-data; name="memberNo"\r\n\r\n${memberNo}\r\n------WebKitFormBoundaryyrcTEmlsaNjboHEk\r\nContent-Disposition: form-data; name="uid"\r\n\r\n${uid}\r\n------WebKitFormBoundaryyrcTEmlsaNjboHEk--`
        };
        $.post(options,async(error, response, data) =>{
            try{
                var result = JSON.parse(data)
                if (result.code == 0 && result.msg == "success") {
                    var userdata = result.data
                    print('\n当前金币余额：' + userdata.integral)
                    resolve(userdata.integral)
                }
            } catch(e) {
                $.logErr(e, response);
            } finally {
                resolve();
            }
        })
    })
}

async function exchange(uid,pid) {
    return new Promise((resolve) => {
        var options = {
            'method': 'POST',
            'url': 'https://nhjdugc.mycz.cn/nhjd_h5api/sign/exchangeGoodss',
            'headers': {
              'Origin': 'https://m.csair.com',
              'requestToken': '91628d5b7b3de79f2ffc5a63ff4ec71a',
              'requestWT': '1535165585748259031423133383834323135394338313445',
              'Host': 'nhjdugc.mycz.cn',
              'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.23(0x1800172a) NetType/4G Language/zh_CN miniProgram/wx729238547ac7a14c',
              'Referer': 'https://m.csair.com/',
              'Connection': 'keep-alive',
              'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryyrcTEmlsaNjboHEk',
              'Accept': '*/*'
            },
            body: `------WebKitFormBoundaryyrcTEmlsaNjboHEk\r\nContent-Disposition: form-data; name="uid"\r\n\r\n${uid}\r\n------WebKitFormBoundaryyrcTEmlsaNjboHEk\r\nContent-Disposition: form-data; name="pid"\r\n\r\n${pid}\r\n------WebKitFormBoundaryyrcTEmlsaNjboHEk--`
          
          };
        $.post(options,async(error, response, data) =>{
            try{
                var result = JSON.parse(data)
                if (result.code == 1) {
                    var resultdata = result.data
                    print('\n兑换成功')
                    print('\n兑换码：' + resultdata.discount_code)
                    print('\n每一种类型的奖品每位用户只能兑换一次，如活动期间，每人只能兑换50元京东卡一次。\n京东卡兑换方式：复制兑换码后，前往【京东】APP-【我的】-【我的钱包】-【礼品卡】选择“绑定新卡”输入兑换码后点击绑定，绑定成功后即为激活成功。')
                    resolve(1)
                } else {
                    $.log('\n==' + result.msg)
                    if (result.msg == '不可重复兑换！') {
                        resolve(3)
                    } else if (result.msg != '每天10点准时开始~') {
                        resolve(2)
                    }
                }
            } catch(e) {
                $.logErr(e, response);
            } finally {
                resolve(0);
            }
        })

    })
}

function print(content) {
    $.log(content)
    msgall += content
}

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
