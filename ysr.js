/**
 作者：shawn
 日期：10.31
 软件：优酸乳小程序 CK有效期未知
 功能：签到/分享
 抓包：开启抓包软件 , 打开种山楂抓取域名 https://ysr.yili.com 请求头部accessToken
 变量: ysrCk='accessToken' 多个账号用 @ 或者 换行 分割
 定时1次
 cron: 22 8 * * *
 [task_local]
 #优酸乳小程序
 [rewrite_local]
 https://ysr.yili.com/api/user/sign/status   url script-request-headers https://github.com/Shawn220528/scripts/blob/main/ysr.js
 [MITM]
 hostname = ysr.yili.com
 */
const $ = new Env('优酸乳');
const axios = require('axios');
const {log} = console;
const Notify = 1; //0为关闭通知，1为打开通知,默认为1
const debug = 0; //0为关闭调试，1为打开调试,默认为0
let scriptVersion = "1.0.0";
let scriptVersionCheck = false;
let ysrCk = ($.isNode() ? process.env.ysrCk : $.getdata("ysrCk")) || "";
let ysrCkArr = [];
let userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d32) NetType/WIFI Language/zh_CN"
let msg = "";
let isSign = false;
let goodsIds = [];
!(async () => {
    if (typeof $request !== "undefined") {
        await GetRewrite();
    } else {
        if (!(await Envs()))
            return;
        else {
            currTime = new Date(
                new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 +
                8 * 60 * 60 * 1000).toLocaleString();
            log(`\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：${currTime} \n=============================================\n`);
            await getVersion();
            await $.wait(randomInt(1000, 3000));
            if (!scriptVersionCheck) {
                log(`远程版本验证失败，请检查网络或更新版本重试！`);
                return;
            }
            log(`\n=================== 当前版本：${scriptVersion} ===================`)
            log(`\n=================== 共找到 ${ysrCkArr.length} 个账号 ===================`)
            if (debug) {
                log(`【debug】 这是你的全部账号数组:\n ${ysrCkArr}`);
            }

            for (let index = 0; index < ysrCkArr.length; index++) {
                await delay();
                let num = index + 1
                log(`\n=================== 开始【第 ${num} 个账号】 ===================`)
                ysrCk = ysrCkArr[index];
                log(`\n=================== 签到任务 ===================`)
                await signStatus();
                await $.wait(2 * 1000);
                if (isSign) {
                    log(`账号【${num}】已经签到了！`)
                } else {
                    await signIn();
                    await $.wait(2 * 1000);
                }
                log(`\n=================== 分享任务 ===================`)
                await getList();
                await $.wait(2 * 1000);
                if (goodsIds.length == 0) {
                    log(`账号【${num}】获取商品异常！`)
                } else {
                    var productId = goodsIds[randomInt(0, (goodsIds.length - 1))];
                    await share(productId);
                    await $.wait(2 * 1000);
                }

                log(`\n=================== 获取积分 ===================`)
                await userScore();
                await $.wait(2 * 1000);

            }
            await SendMsg(msg);
        }

    }

})()
    .catch((e) => log(e))
    .finally(() => $.done())



async function login(){
    return new Promise((resolve) => {

    var options = {
        method: 'POST',
        url: 'https://ysr.yili.com/api/user/wxInfoLogin',
        headers: {
            Host: 'ysr.yili.com',
            Connection: 'keep-alive',
            'content-type': 'application/json',
            'Accept-Encoding': 'gzip,compress,br,deflate',
            'User-Agent': userAgent,
            Referer: 'https://servicewechat.com/wx7f338283deea52a8/398/page-frame.html'
        },
        data: {
            openId: 'ogLHE5CUlwmmgKPGyorOjCaxdATQ',
            unionId: 'o6QWL1E4aohHcu8zu7NQpnB7fB3E',
            key: 'd30f4547-3d0a-49c3-ba13-c9d1ecf4a876'
        }
    };

    axios.request(options).then(function (response) {
        var data = response.data;
        if (data.hasOwnProperty('code') && data.code == "200") {
           ysrCk = data.data;
        } else {
            log(`获取签到状态失败，【${JSON.stringify(data)}】`)
        }
    }).catch(function (error) {
        console.error(error);
    }).then(res => {
        //这里处理正确返回
        resolve();
    });

    })

}



/**
 * 获取签到状态
 * @returns {Promise<unknown>}
 */
async function signStatus() {
    return new Promise((resolve) => {
        var options = {
            method: 'GET',
            url: 'https://ysr.yili.com/api/user/sign/status',
            headers: {
                Host: 'ysr.yili.com',
                Connection: 'keep-alive',
                'content-type': 'application/x-www-form-urlencoded',
                accessToken: ysrCk,
                channel: 'message',
                'Accept-Encoding': 'gzip,compress,br,deflate',
                'User-Agent': userAgent,
                Referer: 'https://servicewechat.com/wx7f338283deea52a8/397/page-frame.html'
            },
            data: {}
        };
        axios.request(options).then(function (response) {
            var data = response.data;
            if (data.hasOwnProperty('code') && data.code == "200") {
                isSign = data.data.signed;
                addNotifyStr(`本月签到天数：${data.data.monthSignDays},连续签到天数：${data.data.signDays}`, true);
            } else {
                log(`获取签到状态失败，【${JSON.stringify(data)}】`)
            }
        }).catch(function (error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });

    })
}

/**
 * 获取商品列表
 * @returns {Promise<unknown>}
 */
async function getList() {
    goodsIds = []
    return new Promise((resolve) => {
        var options = {
            method: 'GET',
            url: 'https://ysr.yili.com/api/product/getList',
            params: {
                sortType: '1',
                sortOrderBy: 'asc',
                productList: '5539,5538,5550,5549,5594,5590',
                listStatus: '1'
            },
            headers: {
                Host: 'ysr.yili.com',
                Connection: 'keep-alive',
                accessToken: ysrCk,
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'gzip,compress,br,deflate',
                'User-Agent': userAgent,
                Referer: 'https://servicewechat.com/wx7f338283deea52a8/398/page-frame.html'
            },
            data: {}
        };

        axios.request(options).then(function (response) {
            var data = response.data;
            if (data.hasOwnProperty('code') && data.code == "200") {
                for (var i in data.data) {
                    goodsIds.push(data.data[i]['id'])
                }
                log(`获取商品列表成功`)
            } else {
                log(`获取商品列表失败，【${JSON.stringify(data)}】`)
            }
        }).catch(function (error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}

/**
 * 分享任务
 * @returns {Promise<unknown>}
 */
async function share(productId) {
    return new Promise((resolve) => {
        var options = {
            method: 'GET',
            url: 'https://ysr.yili.com/api/integral/product/share',
            params: {productId: productId},
            headers: {
                Host: 'ysr.yili.com',
                Connection: 'keep-alive',
                'content-type': 'application/x-www-form-urlencoded',
                accessToken: ysrCk,
                scene: '1089',
                'Accept-Encoding': 'gzip,compress,br,deflate',
                'User-Agent': userAgent,
                Referer: 'https://servicewechat.com/wx7f338283deea52a8/398/page-frame.html'
            },
            data: {}
        };

        axios.request(options).then(function (response) {
            var data = response.data;
            if (data.hasOwnProperty('code') && data.code == "200") {
                log(`分享商品成功`)
            } else {
                log(`分享商品失败，【${JSON.stringify(data)}】`)
            }
        }).catch(function (error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })
}

/**
 * 签到
 * @returns {Promise<unknown>}
 */
async function signIn() {
    return new Promise((resolve) => {
        var options = {
            method: 'GET',
            url: 'https://ysr.yili.com/api/user/daily/sign',
            params: {exParams: false},
            headers: {
                Host: 'ysr.yili.com',
                Connection: 'keep-alive',
                'content-type': 'application/x-www-form-urlencoded',
                accessToken: ysrCk,
                channel: 'message',
                'Accept-Encoding': 'gzip,compress,br,deflate',
                'User-Agent': userAgent,
                Referer: 'https://servicewechat.com/wx7f338283deea52a8/398/page-frame.html'
            },
            data: {}
        };

        axios.request(options).then(function (response) {
            var data = response.data;
            if (data.hasOwnProperty('code') && data.code == "200") {
                addNotifyStr(`签到成功，积分奖励【${data.data.dailySign.bonusPoints}】,积分增长：${data.data.dailySign.bonusGrowths}`, true);
            } else {
                log(`签到失败，【${data.msg}】`)
            }
        }).catch(function (error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })
}

/**
 * 获取用户积分
 * @returns {Promise<unknown>}
 */
async function userScore() {
    return new Promise((resolve) => {

        var options = {
            method: 'GET',
            url: 'https://ysr.yili.com/api/user/score',
            headers: {
                Host: 'ysr.yili.com',
                Connection: 'keep-alive',
                'content-type': 'application/x-www-form-urlencoded',
                accessToken: ysrCk,
                channel: 'message',
                'Accept-Encoding': 'gzip,compress,br,deflate',
                'User-Agent': userAgent,
                Referer: 'https://servicewechat.com/wx7f338283deea52a8/397/page-frame.html'
            },
            data: {}
        };

        axios.request(options).then(function (response) {
            var data = response.data;
            if (data.hasOwnProperty('code') && data.code == "200") {
                addNotifyStr(`🎉🎉 当前积分：${data.data} 🎉🎉`, true);
            } else {
                log(`获取积分失败，【${data.msg}】`)
            }
        }).catch(function (error) {
            console.error(error);
        }).then(res => {
            //这里处理正确返回
            resolve();
        });
    })

}


/////////////////////////////////////////////// 基础模块 //////////////////////////////////////////////////

/**
 * 随机整数生成
 */
function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

/**
 * 变量检查
 * @returns {Promise<boolean>}
 * @constructor
 */
async function Envs() {
    if (ysrCk) {
        if (ysrCk.indexOf("@") != -1) {
            ysrCk.split("@").forEach((item) => {
                ysrCkArr.push(item);
            });
        } else if (ysrCk.indexOf("\n") != -1) {
            ysrCk.split("\n").forEach((item) => {
                ysrCkArr.push(item);
            });
        } else {
            ysrCkArr.push(ysrCk);
        }
    } else {
        log(`\n 【${$.name}】：未填写变量 ysrCk`)
        return;
    }
    return true;
}

/**
 * 重写
 * @returns {Promise<void>}
 * @constructor
 */
async function GetRewrite() {
    if ($request.url.indexOf("api/user/sign/status") > -1) {
        const ck = $request.headers.accessToken;
        if (ysrCk) {
            if (ysrCk.indexOf(ck) == -1 && ck != '') {
                ysrCk = ysrCk + "@" + ck;
                $.setdata(ysrCk, "ysrCk");
                let List = ysrCk.split("@");
                $.msg(`【${$.name}】` + ` 获取第${List.length}个 ck 成功: ${ck} ,不用请自行关闭重写!`);
            }
        } else {
            $.setdata(ck, "ysrCk");
            $.msg(`【${$.name}】` + ` 获取第1个 ck 成功: ${ck} ,不用请自行关闭重写!`);
        }
    }
}

//添加消息
function addNotifyStr(str, is_log = true) {
    if (is_log) {
        log(`${str}\n`)
    }
    msg += `${str}\n`
}

//通知
async function SendMsg(message) {
    if (!message)
        return;

    if (Notify > 0) {
        if ($.isNode()) {
            var notify = require('./sendNotify');
            await notify.sendNotify($.name, message);
        } else {
            $.msg(message);
        }
    } else {
        log(message);
    }
}


/**
 * 随机延时1-30s，避免大家运行时间一样
 * @returns {*|number}
 */
function delay() {
    let time = parseInt(Math.random() * 100000);
    if (time > 30000) {// 大于30s重新生成
        return delay();
    } else {
        console.log('随机延时：', `${time}ms, 避免大家运行时间一样`)
        return time;// 小于30s，返回
    }
}

/**
 * 获取远程版本
 */
function getVersion(timeout = 3 * 1000) {
    scriptVersionCheck = false;
    return new Promise((resolve) => {
        let url = {
            url: `https://ghproxy.com/https://github.com/Shawn220528/scripts/blob/main/version.txt`,
        }
        $.get(url, async (err, resp, data) => {
            try {
                if (data.indexOf("be72b590d71075ba12c85b73f1646130fb8b1cf8") != -1) {
                    scriptVersionCheck = true;
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve()
            }
        }, timeout)
    })
}

function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}