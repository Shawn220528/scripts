/**
 作者：shawn
 日期：8-4
 微信小程序：鸿星尔克 完成自动签到 查询积分功能
 抓包：开着抓包软件进行签到 获取签到请求全部 body 关键字gic-wx-app/member_sign.json 
 变量格式：export hxekCk='11'@'22' 多账户 换行 或者 @ 分割
 定时一天一次
 Cron：15 9 * * *
 */
const $=new Env('鸿星尔克');const notify=$['isNode']()?require('./sendNotify'):'';const fs=require('fs');const {log}=console;const Notify=0xae119^0xae118;const debug=0xe1371^0xe1371;let scriptVersion='1.0.0';let scriptVersionCheck=![];let hxekCk=($['isNode']()?process['env']['hxekCk']:$['getdata']('hxekCk'))||'';let hxekCkArr=[];let msg='';let currTime='';let gicWxaVersion='3.8.44';let version='8';!(async()=>{if(typeof $request!=='undefined'){await GetRewrite();}else{if(!await Envs())return;else{currTime=new Date(new Date()['getTime']()+new Date()['getTimezoneOffset']()*(0x7256d^0x72551)*(0xf282a^0xf2bc2)+(0xf313e^0xf3136)*(0xa9fcc^0xa9ff0)*(0x49fa2^0x49f9e)*(0x79715^0x794fd))['toLocaleString']();log('\x0a\x0a=============================================\x20\x20\x20\x20\x0a脚本执行\x20-\x20北京时间(UTC+8)：'+currTime+'\x20\x0a=============================================\x0a');if(!scriptVersionCheck){log('版本验证失败，请更新版本重试！');return;}log('\x0a============\x20当前版本：'+scriptVersion+'============');log('\x0a===================\x20共找到\x20'+hxekCkArr['length']+'\x20个账号\x20===================');if(debug){log('【debug】\x20这是你的全部账号数组:\x0a\x20'+hxekCkArr);}for(let _0x161d79=0xde17c^0xde17c;_0x161d79<hxekCkArr['length'];_0x161d79++){let _0x20fb96=_0x161d79+(0x4234c^0x4234d);log('\x0a=========\x20开始【第\x20'+_0x20fb96+'\x20个账号】=========\x0a');hxekCk=hxekCkArr[_0x161d79];if(debug){log('\x0a\x20【debug】\x20这是你第\x20'+_0x20fb96+'\x20账号CK信息:\x0a\x20'+hxekCk+'\x0a');}msg+='\x0a\x0a第'+_0x20fb96+'个账号运行结果：';log('【开始签到】随机休眠游一下....');await $['wait'](randomInt(0x69d10^0x696a8,0xda33b^0xdb44b));await doSignIn();log('【开始获取信息】随机休眠游一下....');await $['wait'](randomInt(0xbb8,0x3e57b^0x3f20b));await getInfo();}await SendMsg(msg);}}})()['catch'](_0x2f304d=>log(_0x2f304d))['finally'](()=>$['done']());async function getInfo(){const _0x3bfe51=new Object();const _0x22fb06=formdataToObject(hxekCk);const _0x2dac67=''+_0x22fb06['appid'];const _0x25515b=randomInt(0x40ae4a,0x954b1d);const _0xf127d=time('yyyy-MM-dd\x20HH:mm:ss');const _0x43ccaa=''+_0x22fb06['appid']+_0xf127d;_0x3bfe51['version']=''+version;_0x3bfe51['tabIndex']='1';_0x3bfe51['memberId']=''+_0x22fb06['memberId'];_0x3bfe51['cliqueId']=''+_0x22fb06['cliqueId'];_0x3bfe51['cliqueMemberId']=''+_0x22fb06['cliqueMemberId'];_0x3bfe51['useClique']=''+_0x22fb06['useClique'];_0x3bfe51['enterpriseId']=''+_0x22fb06['enterpriseId'];_0x3bfe51['unionid']=''+_0x22fb06['unionid'];_0x3bfe51['openid']=''+_0x22fb06['openid'];_0x3bfe51['random']=''+_0x25515b;_0x3bfe51['appid']=''+_0x22fb06['appid'];_0x3bfe51['transId']=''+_0x43ccaa;_0x3bfe51['sign']=md5('timestamp='+_0xf127d+'transId='+_0x43ccaa+'secret=damogic8888random='+_0x25515b+'memberId='+_0x22fb06['memberId']);_0x3bfe51['timestamp']=''+_0xf127d;_0x3bfe51['gicWxaVersion']=''+gicWxaVersion;_0x3bfe51['launchOptions']=''+_0x22fb06['launchOptions'];return new Promise((_0x1a8866,_0x371b5c)=>{let _0x28e9b2={'url':'https://hope.demogic.com/gic-wx-app/page-custom/guide-page.json','body':''+objectToFormdata(_0x3bfe51),'headers':{'sign':''+_0x3bfe51['sign'],'Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/x-www-form-urlencoded','Host':'hope.demogic.com','Connection':'keep-alive','User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2015_6\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.26(0x18001a2b)\x20NetType/WIFI\x20Language/zh_CN','Referer':'https://servicewechat.com/'+_0x2dac67+'/21/page-frame.html'}};$['post'](_0x28e9b2,async(_0x4fca6f,_0x48c87f,_0x574e04)=>{try{if(_0x4fca6f){log('鸿星尔克:\x20API查询请求失败\x20‼️‼️');log(JSON['stringify'](_0x4fca6f));log(_0x4fca6f);}else{if(safeGet(_0x574e04)){let _0x41fd6c=JSON['parse'](_0x574e04);if(debug)console['log'](_0x41fd6c);await $['wait'](0x64);if(_0x41fd6c['errcode']==0x0){if(_0x41fd6c['hasOwnProperty']('response')&&_0x41fd6c['response']['hasOwnProperty']('data')&&_0x41fd6c['response']['data']['hasOwnProperty']('modules')){for(var _0x2b4504 in _0x41fd6c['response']['data']['modules']){let _0x15afc5=_0x41fd6c['response']['data']['modules'][_0x2b4504]['key'];if(_0x15afc5=='B1'){msg+='\x0a'+_0x41fd6c['response']['data']['modules'][_0x2b4504]['integral']['title']+':'+_0x41fd6c['response']['data']['modules'][_0x2b4504]['integral']['value'];log(_0x41fd6c['response']['data']['modules'][_0x2b4504]['integral']['title']+':'+_0x41fd6c['response']['data']['modules'][_0x2b4504]['integral']['value']);}}}}else{log('信息查询失败：'+_0x41fd6c['errmsg']+'\x0a');}}}}catch(_0x5182b0){log(_0x5182b0,_0x48c87f);}finally{_0x1a8866();}});});}function doSignIn(){if(!scriptVersionCheck){log('版本验证失败，请更新版本重试！');return;}return new Promise(_0x4e2bb4=>{const _0x191750=formdataToObject(hxekCk);const _0x3e9b2e=''+_0x191750['appid'];const _0x1eae91=randomInt(0x40ae4a,0x954b1d);const _0x13ab16=time('yyyy-MM-dd\x20HH:mm:ss');_0x191750['random']=''+_0x1eae91;_0x191750['timestamp']=_0x13ab16;_0x191750['transId']=''+_0x191750['appid']+_0x191750['timestamp'];_0x191750['sign']=md5('timestamp='+_0x191750['timestamp']+'transId='+_0x191750['transId']+'secret=damogic8888random='+_0x191750['random']+'memberId='+_0x191750['memberId']);const _0x22b94b={'url':'https://hope.demogic.com/gic-wx-app/member_sign.json','headers':{'sign':''+_0x191750['sign'],'Accept-Encoding':'gzip,compress,br,deflate','Content-Type':'application/x-www-form-urlencoded','Host':'hope.demogic.com','Connection':'keep-alive','User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2015_6\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148\x20MicroMessenger/8.0.26(0x18001a2b)\x20NetType/WIFI\x20Language/zh_CN','Referer':'https://servicewechat.com/'+_0x3e9b2e+'/21/page-frame.html'},'body':''+objectToFormdata(_0x191750)};$['post'](_0x22b94b,(_0x7d14df,_0x146fac,_0x26b438)=>{try{if(_0x7d14df){log('鸿星尔克:\x20API签到请求失败\x20‼️‼️');log(JSON['stringify'](_0x7d14df));log(_0x7d14df);}else{if(safeGet(_0x26b438)){let _0x14c309=JSON['parse'](_0x26b438);if(debug)console['log'](_0x14c309);if(_0x14c309['errcode']==(0x23dd4^0x23dd4)){if(_0x14c309['hasOwnProperty']('response')&&_0x14c309['response']['hasOwnProperty']('memberSign')){let _0x2d2a5c=_0x14c309['response']['memberSign']['continuousCount'];let _0x2847ab=_0x14c309['response']['memberSign']['integralCount'];msg+='\x0a'+_0x14c309['errmsg']+'，连续签到：'+_0x2d2a5c+'天，签到奖励积分：'+_0x2847ab;log(_0x14c309['errmsg']+'，连续签到：'+_0x2d2a5c+'天，签到奖励积分：'+_0x2847ab);}else{msg+='\x0a'+_0x14c309['errmsg'];log(''+_0x14c309['errmsg']);}}else{msg+='\x0a'+_0x14c309['errmsg'];log(''+_0x14c309['errmsg']);}}}}catch(_0x5d42c6){$['logErr'](_0x5d42c6,_0x146fac);$['msg']($['name'],'出错啦',''+_0x5d42c6);}finally{_0x4e2bb4();}});});}function formdataToObject(_0x498eae){return JSON['parse']('{\x22'+_0x498eae['replace'](/&/g,'\x22,\x22')['replace'](/=/g,'\x22:\x22')+'\x22}',function(_0x28b084,_0x4a8af6){return _0x28b084===''?_0x4a8af6:decodeURIComponent(_0x4a8af6);});}function objectToFormdata(_0x506e4c){let _0xa36560=[];for(let _0x4cb10b in _0x506e4c)if(_0x506e4c['hasOwnProperty'](_0x4cb10b)){_0xa36560['push'](encodeURIComponent(_0x4cb10b)+'='+encodeURIComponent(_0x506e4c[_0x4cb10b]));}return _0xa36560['join']('&');}function time(_0x3b9b5e,_0x38c854=null){const _0x58c088=_0x38c854?new Date(_0x38c854):new Date();let _0x3eee97={'M+':_0x58c088['getMonth']()+0x1,'d+':_0x58c088['getDate'](),'H+':_0x58c088['getHours'](),'m+':_0x58c088['getMinutes'](),'s+':_0x58c088['getSeconds'](),'q+':Math['floor']((_0x58c088['getMonth']()+0x3)/(0x3577a^0x35779)),'S':_0x58c088['getMilliseconds']()};if(/(y+)/['test'](_0x3b9b5e))_0x3b9b5e=_0x3b9b5e['replace'](RegExp['$1'],(_0x58c088['getFullYear']()+'')['substr'](0x4-RegExp['$1']['length']));for(let _0x1a620f in _0x3eee97)if(new RegExp('('+_0x1a620f+')')['test'](_0x3b9b5e))_0x3b9b5e=_0x3b9b5e['replace'](RegExp['$1'],RegExp['$1']['length']==(0xe143b^0xe143a)?_0x3eee97[_0x1a620f]:('00'+_0x3eee97[_0x1a620f])['substr']((''+_0x3eee97[_0x1a620f])['length']));return _0x3b9b5e;}function md5(_0x2f0b6b){var _0x413858='0123456789abcdef';function _0x35e527(_0x54b5a9){var _0x19dcf5,_0x3e3b85='';for(_0x19dcf5=0x35cdc^0x35cdc;_0x19dcf5<=0x3;_0x19dcf5++)_0x3e3b85+=_0x413858['charAt'](_0x54b5a9>>_0x19dcf5*0x8+(0x68f00^0x68f04)&0xf)+_0x413858['charAt'](_0x54b5a9>>_0x19dcf5*0x8&(0xcd730^0xcd73f));return _0x3e3b85;}function _0x268959(_0x439a85,_0x1d232a){var _0x15aa7a=(_0x439a85&(0xdfa94^0xd056b))+(_0x1d232a&(0x44c54^0x4b3ab));var _0x5c3589=(_0x439a85>>0x10)+(_0x1d232a>>(0x76f46^0x76f56))+(_0x15aa7a>>0x10);return _0x5c3589<<0x10|_0x15aa7a&(0x76fd0^0x7902f);}function _0x20018a(_0x3600ea,_0x9b0da6){return _0x3600ea<<_0x9b0da6|_0x3600ea>>>0x20-_0x9b0da6;}function _0x1ef1f7(_0x58e967,_0x4546f2,_0x35d266,_0x4973ee,_0x3acb53,_0xfb24c){return _0x268959(_0x20018a(_0x268959(_0x268959(_0x4546f2,_0x58e967),_0x268959(_0x4973ee,_0xfb24c)),_0x3acb53),_0x35d266);}function _0x2a97d3(_0xd503ca,_0x32c522,_0x58e016,_0xf0c71a,_0x363fb3,_0x1aa061,_0x88c278){return _0x1ef1f7(_0x32c522&_0x58e016|~_0x32c522&_0xf0c71a,_0xd503ca,_0x32c522,_0x363fb3,_0x1aa061,_0x88c278);}function _0x3699cc(_0x4b4795,_0x56b677,_0x5372af,_0x116218,_0x4a14b0,_0x169042,_0x3fbf54){return _0x1ef1f7(_0x56b677&_0x116218|_0x5372af&~_0x116218,_0x4b4795,_0x56b677,_0x4a14b0,_0x169042,_0x3fbf54);}function _0x3155ba(_0x8c8e48,_0x899c13,_0x1faf2,_0x1c168e,_0x1ec19,_0x355153,_0xd86458){return _0x1ef1f7(_0x899c13^_0x1faf2^_0x1c168e,_0x8c8e48,_0x899c13,_0x1ec19,_0x355153,_0xd86458);}function _0x1e001b(_0x24ba42,_0x55fd19,_0x1df468,_0x4e3033,_0x3ac7dc,_0x463a28,_0x425de0){return _0x1ef1f7(_0x1df468^(_0x55fd19|~_0x4e3033),_0x24ba42,_0x55fd19,_0x3ac7dc,_0x463a28,_0x425de0);}function _0xf1b32e(_0x3576cf){var _0x5130b3;var _0x58ed63=(_0x3576cf['length']+(0xf0eda^0xf0ed2)>>(0x1f0d2^0x1f0d4))+0x1;var _0x15354d=new Array(_0x58ed63*0x10);for(_0x5130b3=0x0;_0x5130b3<_0x58ed63*(0xf33b2^0xf33a2);_0x5130b3++)_0x15354d[_0x5130b3]=0x78744^0x78744;for(_0x5130b3=0x0;_0x5130b3<_0x3576cf['length'];_0x5130b3++)_0x15354d[_0x5130b3>>(0x884d5^0x884d7)]|=_0x3576cf['charCodeAt'](_0x5130b3)<<_0x5130b3%0x4*(0x84537^0x8453f);_0x15354d[_0x5130b3>>0x2]|=(0x36f78^0x36ff8)<<_0x5130b3%0x4*0x8;_0x15354d[_0x58ed63*0x10-(0xd3e3a^0xd3e38)]=_0x3576cf['length']*0x8;return _0x15354d;}var _0x16798e,_0x3b1dcf=_0xf1b32e(_0x2f0b6b),_0x1644e7=0x67452301,_0x2dbd9c=-0x10325477,_0x3bd626=-0x67452302,_0x2c11e3=0x10325476,_0x2490ae,_0x4a03a9,_0x586c95,_0x4d4034;for(_0x16798e=0xc4959^0xc4959;_0x16798e<_0x3b1dcf['length'];_0x16798e+=0x47b20^0x47b30){_0x2490ae=_0x1644e7;_0x4a03a9=_0x2dbd9c;_0x586c95=_0x3bd626;_0x4d4034=_0x2c11e3;_0x1644e7=_0x2a97d3(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+(0x32321^0x32321)],0x7,-0x28955b88);_0x2c11e3=_0x2a97d3(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0x1],0xc,-0x173848aa);_0x3bd626=_0x2a97d3(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0x2],0x11,0x242070db);_0x2dbd9c=_0x2a97d3(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0x3],0x16,-0x3e423112);_0x1644e7=_0x2a97d3(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0x4],0x2ed94^0x2ed93,-0xa83f051);_0x2c11e3=_0x2a97d3(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+(0x462d4^0x462d1)],0x7ef8f^0x7ef83,0x4787c62a);_0x3bd626=_0x2a97d3(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0x6],0xaef09^0xaef18,-0x57cfb9ed);_0x2dbd9c=_0x2a97d3(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+(0x48bc7^0x48bc0)],0xa7326^0xa7330,-0x2b96aff);_0x1644e7=_0x2a97d3(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0x8],0x7,0x698098d8);_0x2c11e3=_0x2a97d3(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0x9],0x62d0c^0x62d00,-0x74bb0851);_0x3bd626=_0x2a97d3(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0xa],0x11,-0xa44f);_0x2dbd9c=_0x2a97d3(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0xb],0x16,-0x76a32842);_0x1644e7=_0x2a97d3(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+(0xe1e6d^0xe1e61)],0x7,0x6b901122);_0x2c11e3=_0x2a97d3(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0xd],0xef1e9^0xef1e5,-0x2678e6d);_0x3bd626=_0x2a97d3(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+(0x72b9e^0x72b90)],0x11,-0x5986bc72);_0x2dbd9c=_0x2a97d3(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0xf],0x34211^0x34207,0x49b40821);_0x1644e7=_0x3699cc(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+(0x56758^0x56759)],0x5,-0x9e1da9e);_0x2c11e3=_0x3699cc(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0x6],0x8a6a8^0x8a6a1,-0x3fbf4cc0);_0x3bd626=_0x3699cc(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0xb],0xe,0x265e5a51);_0x2dbd9c=_0x3699cc(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0x0],0x9aa0a^0x9aa1e,-0x16493856);_0x1644e7=_0x3699cc(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0x5],0x5,-0x29d0efa3);_0x2c11e3=_0x3699cc(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+(0x24f68^0x24f62)],0xcc580^0xcc589,0x2441453);_0x3bd626=_0x3699cc(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+(0x73464^0x7346b)],0x9b499^0x9b497,-0x275e197f);_0x2dbd9c=_0x3699cc(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0x4],0x1afd2^0x1afc6,-0x182c0438);_0x1644e7=_0x3699cc(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0x9],0x5,0x21e1cde6);_0x2c11e3=_0x3699cc(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0xe],0x9,-0x3cc8f82a);_0x3bd626=_0x3699cc(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+(0x33b82^0x33b81)],0xe,-0xb2af279);_0x2dbd9c=_0x3699cc(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0x8],0x14,0x455a14ed);_0x1644e7=_0x3699cc(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0xd],0xee838^0xee83d,-0x561c16fb);_0x2c11e3=_0x3699cc(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0x2],0x2fc25^0x2fc2c,-0x3105c08);_0x3bd626=_0x3699cc(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+(0x67ee8^0x67eef)],0xe,0x676f02d9);_0x2dbd9c=_0x3699cc(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0xc],0x14,-0x72d5b376);_0x1644e7=_0x3155ba(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0x5],0x777e0^0x777e4,-0x5c6be);_0x2c11e3=_0x3155ba(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+(0x89b69^0x89b61)],0x79412^0x79419,-0x788e097f);_0x3bd626=_0x3155ba(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0xb],0x10,0x6d9d6122);_0x2dbd9c=_0x3155ba(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+(0x7457a^0x74574)],0x17,-0x21ac7f4);_0x1644e7=_0x3155ba(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0x1],0x4,-0x5b4115bc);_0x2c11e3=_0x3155ba(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0x4],0xb,0x4bdecfa9);_0x3bd626=_0x3155ba(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0x7],0xd88ec^0xd88fc,-0x944b4a0);_0x2dbd9c=_0x3155ba(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0xa],0x17,-0x41404390);_0x1644e7=_0x3155ba(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+(0xbf254^0xbf259)],0x4,0x289b7ec6);_0x2c11e3=_0x3155ba(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+(0x24dc3^0x24dc3)],0xb,-0x155ed806);_0x3bd626=_0x3155ba(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+(0xe5ca4^0xe5ca7)],0x10,-0x2b10cf7b);_0x2dbd9c=_0x3155ba(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0x6],0x17,0x4881d05);_0x1644e7=_0x3155ba(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+(0x95d17^0x95d1e)],0x65070^0x65074,-0x262b2fc7);_0x2c11e3=_0x3155ba(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+(0xb0316^0xb031a)],0xb,-0x1924661b);_0x3bd626=_0x3155ba(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0xf],0x10,0x1fa27cf8);_0x2dbd9c=_0x3155ba(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0x2],0xc7061^0xc7076,-0x3b53a99b);_0x1644e7=_0x1e001b(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+(0x2ebaf^0x2ebaf)],0x6,-0xbd6ddbc);_0x2c11e3=_0x1e001b(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0x7],0x6ede7^0x6eded,0x432aff97);_0x3bd626=_0x1e001b(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0xe],0x4070a^0x40705,-0x546bdc59);_0x2dbd9c=_0x1e001b(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0x5],0x15,-0x36c5fc7);_0x1644e7=_0x1e001b(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0xc],0x6,0x655b59c3);_0x2c11e3=_0x1e001b(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0x3],0xa,-0x70f3336e);_0x3bd626=_0x1e001b(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0xa],0xf,-0x100b83);_0x2dbd9c=_0x1e001b(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0x1],0x15,-0x7a7ba22f);_0x1644e7=_0x1e001b(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0x8],0x6,0x6fa87e4f);_0x2c11e3=_0x1e001b(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0xf],0xa,-0x1d31920);_0x3bd626=_0x1e001b(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0x6],0xf,-0x5cfebcec);_0x2dbd9c=_0x1e001b(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0xd],0x15,0x4e0811a1);_0x1644e7=_0x1e001b(_0x1644e7,_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x3b1dcf[_0x16798e+0x4],0x6,-0x8ac817e);_0x2c11e3=_0x1e001b(_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3bd626,_0x3b1dcf[_0x16798e+0xb],0xa,-0x42c50dcb);_0x3bd626=_0x1e001b(_0x3bd626,_0x2c11e3,_0x1644e7,_0x2dbd9c,_0x3b1dcf[_0x16798e+0x2],0xf,0x2ad7d2bb);_0x2dbd9c=_0x1e001b(_0x2dbd9c,_0x3bd626,_0x2c11e3,_0x1644e7,_0x3b1dcf[_0x16798e+0x9],0x15,-0x14792c6f);_0x1644e7=_0x268959(_0x1644e7,_0x2490ae);_0x2dbd9c=_0x268959(_0x2dbd9c,_0x4a03a9);_0x3bd626=_0x268959(_0x3bd626,_0x586c95);_0x2c11e3=_0x268959(_0x2c11e3,_0x4d4034);}return _0x35e527(_0x1644e7)+_0x35e527(_0x2dbd9c)+_0x35e527(_0x3bd626)+_0x35e527(_0x2c11e3);}async function GetRewrite(){if($request['url']['indexOf']('gic-wx-app/member_sign.json')>-0x1){const _0x4a98c7=$request['body'];if(hxekCk){if(hxekCk['indexOf'](_0x4a98c7)==-0x1){hxekCk=hxekCk+'@'+_0x4a98c7;$['setdata'](hxekCk,'hxekCk');let _0x93a1f5=hxekCk['split']('@');$['msg']('【'+$['name']+'】'+('\x20获取第'+_0x93a1f5['length']+'个\x20ck\x20成功:\x20'+_0x4a98c7+'\x20,不用请自行关闭重写!'));}}else{$['setdata'](_0x4a98c7,'hxekCk');$['msg']('【'+$['name']+'】'+('\x20获取第1个\x20ck\x20成功:\x20'+_0x4a98c7+'\x20,不用请自行关闭重写!'));}}}async function Envs(){fs['readFile']('version.js','utf8',function(_0x3328de,_0x7cd672){if(_0x3328de){log('读取文件失败！'+_0x3328de);return;}else{if(_0x7cd672['indexOf']('86e06ead0a4d9b47dd97e7d5589847642070ed5c')!=-0x1){scriptVersionCheck=!![];log('版本验证成功');}else{return;}}});if(hxekCk){if(hxekCk['indexOf']('@')!=-0x1){hxekCk['split']('@')['forEach'](_0x1b9f61=>{hxekCkArr['push'](_0x1b9f61);});}else if(hxekCk['indexOf']('\x0a')!=-0x1){hxekCk['split']('\x0a')['forEach'](_0x3416a7=>{hxekCkArr['push'](_0x3416a7);});}else{hxekCkArr['push'](hxekCk);}}else{log('\x0a\x20【'+$['name']+'】：未填写变量\x20hxekCk');return;}return!![];}function safeGet(_0x5f5d9b){try{if(typeof JSON['parse'](_0x5f5d9b)=='object'){return!![];}}catch(_0x9c08f1){console['log'](_0x9c08f1);console['log']('服务器访问数据为空，请检查自身设备网络情况');return![];}}async function SendMsg(_0x4610a1){if(!_0x4610a1)return;if(Notify>0x0){if($['isNode']()){var _0x272367=require('./sendNotify');await _0x272367['sendNotify']($['name'],_0x4610a1);}else{$['msg'](_0x4610a1);}}else{log(_0x4610a1);}}function randomString(_0x5c64f8){_0x5c64f8=_0x5c64f8||0x20;var _0x7a1969='QWERTYUIOPASDFGHJKLZXCVBNM1234567890',_0x16dfbb=_0x7a1969['length'],_0x377b0e='';for(i=0x0;i<_0x5c64f8;i++)_0x377b0e+=_0x7a1969['charAt'](Math['floor'](Math['random']()*_0x16dfbb));return _0x377b0e;}function randomInt(_0xd97a7a,_0x4b6bc7){return Math['round'](Math['random']()*(_0x4b6bc7-_0xd97a7a)+_0xd97a7a);}function timestampMs(){return new Date()['getTime']();}function timestampS(){return Date['parse'](new Date())/0x3e8;}function modify(){fs['readFile']('/ql/data/config/config.sh','utf8',function(_0xe4264a,_0x4beac4){if(_0xe4264a){return log('读取文件失败！'+_0xe4264a);}else{var _0x4a5692=_0x4beac4['replace'](/regular/g,string);fs['writeFile']('/ql/data/config/config.sh',_0x4a5692,'utf8',function(_0x1f7b58){if(_0x1f7b58){return log(_0x1f7b58);}});}});}function getVersion(_0x5cc3c1=0x3*0x3e8){return new Promise(_0x17eb6a=>{let _0x226a28={'url':'https://ghproxy.com/https://github.com/Shawn220528/scripts/blob/main/version.js'};$['get'](_0x226a28,async(_0x51d0c3,_0x1f3d60,_0x5479d2)=>{try{if(_0x5479d2['indexOf']('86e06ead0a4d9b47dd97e7d5589847642070ed5c')!=-0x1){scriptVersionCheck=!![];log('版本验证成功');}}catch(_0x2ba58b){$['logErr'](_0x2ba58b,_0x1f3d60);}finally{_0x17eb6a();}},_0x5cc3c1);});}function Env(_0xcda7c1,_0x414958){'undefined'!=typeof process&&JSON['stringify'](process['env'])['indexOf']('GITHUB')>-0x1&&process['exit'](0x0);class _0x481bb3{constructor(_0xac1347){this['env']=_0xac1347;}['send'](_0x3fab72,_0x50cbb2='GET'){_0x3fab72='string'==typeof _0x3fab72?{'url':_0x3fab72}:_0x3fab72;let _0x2a6397=this['get'];return'POST'===_0x50cbb2&&(_0x2a6397=this['post']),new Promise((_0x423925,_0x2f9d1a)=>{_0x2a6397['call'](this,_0x3fab72,(_0x2f518b,_0x21fb36,_0x3b22a6)=>{_0x2f518b?_0x2f9d1a(_0x2f518b):_0x423925(_0x21fb36);});});}['get'](_0x39b793){return this['send']['call'](this['env'],_0x39b793);}['post'](_0x2eaff6){return this['send']['call'](this['env'],_0x2eaff6,'POST');}}return new class{constructor(_0x2a2294,_0x33a27e){this['name']=_0x2a2294,this['http']=new _0x481bb3(this),this['data']=null,this['dataFile']='box.dat',this['logs']=[],this['isMute']=!0x1,this['isNeedRewrite']=!0x1,this['logSeparator']='\x0a',this['startTime']=new Date()['getTime'](),Object['assign'](this,_0x33a27e),this['log']('','🔔'+this['name']+',\x20开始!');}['isNode'](){return'undefined'!=typeof module&&!!module['exports'];}['isQuanX'](){return'undefined'!=typeof $task;}['isSurge'](){return'undefined'!=typeof $httpClient&&'undefined'==typeof $loon;}['isLoon'](){return'undefined'!=typeof $loon;}['toObj'](_0x2379de,_0x2e6736=null){try{return JSON['parse'](_0x2379de);}catch{return _0x2e6736;}}['toStr'](_0x3769f1,_0x516ea6=null){try{return JSON['stringify'](_0x3769f1);}catch{return _0x516ea6;}}['getjson'](_0x9334f2,_0x112851){let _0x3b6b13=_0x112851;const _0x37e1ee=this['getdata'](_0x9334f2);if(_0x37e1ee)try{_0x3b6b13=JSON['parse'](this['getdata'](_0x9334f2));}catch{}return _0x3b6b13;}['setjson'](_0x4e9222,_0x146d81){try{return this['setdata'](JSON['stringify'](_0x4e9222),_0x146d81);}catch{return!0x1;}}['getScript'](_0x340e35){return new Promise(_0x2ceefd=>{this['get']({'url':_0x340e35},(_0x709354,_0x1279b3,_0x2224e7)=>_0x2ceefd(_0x2224e7));});}['runScript'](_0xa3b07c,_0x31cb6c){return new Promise(_0x202b45=>{let _0x352b03=this['getdata']('@chavy_boxjs_userCfgs.httpapi');_0x352b03=_0x352b03?_0x352b03['replace'](/\n/g,'')['trim']():_0x352b03;let _0x545bcb=this['getdata']('@chavy_boxjs_userCfgs.httpapi_timeout');_0x545bcb=_0x545bcb?0x1*_0x545bcb:0x14,_0x545bcb=_0x31cb6c&&_0x31cb6c['timeout']?_0x31cb6c['timeout']:_0x545bcb;const [_0xc3c1ca,_0x3448f2]=_0x352b03['split']('@'),_0x8c0740={'url':'http://'+_0x3448f2+'/v1/scripting/evaluate','body':{'script_text':_0xa3b07c,'mock_type':'cron','timeout':_0x545bcb},'headers':{'X-Key':_0xc3c1ca,'Accept':'*/*'}};this['post'](_0x8c0740,(_0x421c58,_0x3ddacd,_0x2a35b3)=>_0x202b45(_0x2a35b3));})['catch'](_0x1a4555=>this['logErr'](_0x1a4555));}['loaddata'](){if(!this['isNode']())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this['path']?this['path']:require('path');const _0x2a93de=this['path']['resolve'](this['dataFile']),_0x3141d8=this['path']['resolve'](process['cwd'](),this['dataFile']),_0x4e76f1=this['fs']['existsSync'](_0x2a93de),_0x4a5432=!_0x4e76f1&&this['fs']['existsSync'](_0x3141d8);if(!_0x4e76f1&&!_0x4a5432)return{};{const _0x36f07f=_0x4e76f1?_0x2a93de:_0x3141d8;try{return JSON['parse'](this['fs']['readFileSync'](_0x36f07f));}catch(_0x28d65d){return{};}}}}['writedata'](){if(this['isNode']()){this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this['path']?this['path']:require('path');const _0x40c439=this['path']['resolve'](this['dataFile']),_0x48b625=this['path']['resolve'](process['cwd'](),this['dataFile']),_0x1d8356=this['fs']['existsSync'](_0x40c439),_0x15742b=!_0x1d8356&&this['fs']['existsSync'](_0x48b625),_0x1a4ece=JSON['stringify'](this['data']);_0x1d8356?this['fs']['writeFileSync'](_0x40c439,_0x1a4ece):_0x15742b?this['fs']['writeFileSync'](_0x48b625,_0x1a4ece):this['fs']['writeFileSync'](_0x40c439,_0x1a4ece);}}['lodash_get'](_0x675ae1,_0x4b00e2,_0x412f05){const _0x3eacd7=_0x4b00e2['replace'](/\[(\d+)\]/g,'.$1')['split']('.');let _0x5b07d6=_0x675ae1;for(const _0x5b6ffe of _0x3eacd7)if(_0x5b07d6=Object(_0x5b07d6)[_0x5b6ffe],void 0x0===_0x5b07d6)return _0x412f05;return _0x5b07d6;}['lodash_set'](_0x14aa28,_0x309252,_0x346586){return Object(_0x14aa28)!==_0x14aa28?_0x14aa28:(Array['isArray'](_0x309252)||(_0x309252=_0x309252['toString']()['match'](/[^.[\]]+/g)||[]),_0x309252['slice'](0x0,-0x1)['reduce']((_0x2ed6c6,_0x24e5d5,_0x3004d7)=>Object(_0x2ed6c6[_0x24e5d5])===_0x2ed6c6[_0x24e5d5]?_0x2ed6c6[_0x24e5d5]:_0x2ed6c6[_0x24e5d5]=Math['abs'](_0x309252[_0x3004d7+0x1])>>0x0==+_0x309252[_0x3004d7+0x1]?[]:{},_0x14aa28)[_0x309252[_0x309252['length']-0x1]]=_0x346586,_0x14aa28);}['getdata'](_0x57ca48){let _0x293cf2=this['getval'](_0x57ca48);if(/^@/['test'](_0x57ca48)){const [,_0x4a0287,_0x383c50]=/^@(.*?)\.(.*?)$/['exec'](_0x57ca48),_0x2ad569=_0x4a0287?this['getval'](_0x4a0287):'';if(_0x2ad569)try{const _0x33387a=JSON['parse'](_0x2ad569);_0x293cf2=_0x33387a?this['lodash_get'](_0x33387a,_0x383c50,''):_0x293cf2;}catch(_0x15023e){_0x293cf2='';}}return _0x293cf2;}['setdata'](_0x501823,_0x2e8c14){let _0x302c2d=!0x1;if(/^@/['test'](_0x2e8c14)){const [,_0x16bc12,_0x14f5d3]=/^@(.*?)\.(.*?)$/['exec'](_0x2e8c14),_0x2de33e=this['getval'](_0x16bc12),_0x43df4b=_0x16bc12?'null'===_0x2de33e?null:_0x2de33e||'{}':'{}';try{const _0x537a5e=JSON['parse'](_0x43df4b);this['lodash_set'](_0x537a5e,_0x14f5d3,_0x501823),_0x302c2d=this['setval'](JSON['stringify'](_0x537a5e),_0x16bc12);}catch(_0xfcc6be){const _0x3f863c={};this['lodash_set'](_0x3f863c,_0x14f5d3,_0x501823),_0x302c2d=this['setval'](JSON['stringify'](_0x3f863c),_0x16bc12);}}else _0x302c2d=this['setval'](_0x501823,_0x2e8c14);return _0x302c2d;}['getval'](_0x299e2d){return this['isSurge']()||this['isLoon']()?$persistentStore['read'](_0x299e2d):this['isQuanX']()?$prefs['valueForKey'](_0x299e2d):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x299e2d]):this['data']&&this['data'][_0x299e2d]||null;}['setval'](_0x220e38,_0x3f3ca0){return this['isSurge']()||this['isLoon']()?$persistentStore['write'](_0x220e38,_0x3f3ca0):this['isQuanX']()?$prefs['setValueForKey'](_0x220e38,_0x3f3ca0):this['isNode']()?(this['data']=this['loaddata'](),this['data'][_0x3f3ca0]=_0x220e38,this['writedata'](),!0x0):this['data']&&this['data'][_0x3f3ca0]||null;}['initGotEnv'](_0x4a7962){this['got']=this['got']?this['got']:require('got'),this['cktough']=this['cktough']?this['cktough']:require('tough-cookie'),this['ckjar']=this['ckjar']?this['ckjar']:new this['cktough']['CookieJar'](),_0x4a7962&&(_0x4a7962['headers']=_0x4a7962['headers']?_0x4a7962['headers']:{},void 0x0===_0x4a7962['headers']['Cookie']&&void 0x0===_0x4a7962['cookieJar']&&(_0x4a7962['cookieJar']=this['ckjar']));}['get'](_0x49a7ad,_0x39d9e5=()=>{}){_0x49a7ad['headers']&&(delete _0x49a7ad['headers']['Content-Type'],delete _0x49a7ad['headers']['Content-Length']),this['isSurge']()||this['isLoon']()?(this['isSurge']()&&this['isNeedRewrite']&&(_0x49a7ad['headers']=_0x49a7ad['headers']||{},Object['assign'](_0x49a7ad['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['get'](_0x49a7ad,(_0x54e482,_0x3ee0ab,_0x1bb733)=>{!_0x54e482&&_0x3ee0ab&&(_0x3ee0ab['body']=_0x1bb733,_0x3ee0ab['statusCode']=_0x3ee0ab['status']),_0x39d9e5(_0x54e482,_0x3ee0ab,_0x1bb733);})):this['isQuanX']()?(this['isNeedRewrite']&&(_0x49a7ad['opts']=_0x49a7ad['opts']||{},Object['assign'](_0x49a7ad['opts'],{'hints':!0x1})),$task['fetch'](_0x49a7ad)['then'](_0x5c0a68=>{const {statusCode:_0x5887f0,statusCode:_0x47fbc9,headers:_0x446343,body:_0x25614e}=_0x5c0a68;_0x39d9e5(null,{'status':_0x5887f0,'statusCode':_0x47fbc9,'headers':_0x446343,'body':_0x25614e},_0x25614e);},_0x42e411=>_0x39d9e5(_0x42e411))):this['isNode']()&&(this['initGotEnv'](_0x49a7ad),this['got'](_0x49a7ad)['on']('redirect',(_0x2b0ec1,_0x25e700)=>{try{if(_0x2b0ec1['headers']['set-cookie']){const _0x1e1a0d=_0x2b0ec1['headers']['set-cookie']['map'](this['cktough']['Cookie']['parse'])['toString']();_0x1e1a0d&&this['ckjar']['setCookieSync'](_0x1e1a0d,null),_0x25e700['cookieJar']=this['ckjar'];}}catch(_0x15a7b2){this['logErr'](_0x15a7b2);}})['then'](_0x1a30be=>{const {statusCode:_0x2b4377,statusCode:_0xa6834d,headers:_0x49f732,body:_0x4eb9bd}=_0x1a30be;_0x39d9e5(null,{'status':_0x2b4377,'statusCode':_0xa6834d,'headers':_0x49f732,'body':_0x4eb9bd},_0x4eb9bd);},_0x2dd2a2=>{const {message:_0x57ce96,response:_0x4424e8}=_0x2dd2a2;_0x39d9e5(_0x57ce96,_0x4424e8,_0x4424e8&&_0x4424e8['body']);}));}['post'](_0x5ef9ea,_0x3d563a=()=>{}){if(_0x5ef9ea['body']&&_0x5ef9ea['headers']&&!_0x5ef9ea['headers']['Content-Type']&&(_0x5ef9ea['headers']['Content-Type']='application/x-www-form-urlencoded'),_0x5ef9ea['headers']&&delete _0x5ef9ea['headers']['Content-Length'],this['isSurge']()||this['isLoon']())this['isSurge']()&&this['isNeedRewrite']&&(_0x5ef9ea['headers']=_0x5ef9ea['headers']||{},Object['assign'](_0x5ef9ea['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x5ef9ea,(_0x1ca80e,_0x15ca62,_0x370011)=>{!_0x1ca80e&&_0x15ca62&&(_0x15ca62['body']=_0x370011,_0x15ca62['statusCode']=_0x15ca62['status']),_0x3d563a(_0x1ca80e,_0x15ca62,_0x370011);});else if(this['isQuanX']())_0x5ef9ea['method']='POST',this['isNeedRewrite']&&(_0x5ef9ea['opts']=_0x5ef9ea['opts']||{},Object['assign'](_0x5ef9ea['opts'],{'hints':!0x1})),$task['fetch'](_0x5ef9ea)['then'](_0x180216=>{const {statusCode:_0x591b3b,statusCode:_0x30e321,headers:_0x2b8bec,body:_0x464d25}=_0x180216;_0x3d563a(null,{'status':_0x591b3b,'statusCode':_0x30e321,'headers':_0x2b8bec,'body':_0x464d25},_0x464d25);},_0x1c7b4d=>_0x3d563a(_0x1c7b4d));else if(this['isNode']()){this['initGotEnv'](_0x5ef9ea);const {url:_0x2a1a08,..._0x43a1ec}=_0x5ef9ea;this['got']['post'](_0x2a1a08,_0x43a1ec)['then'](_0x3b2316=>{const {statusCode:_0x3ea137,statusCode:_0x2f78c1,headers:_0x2a8489,body:_0x12d2ae}=_0x3b2316;_0x3d563a(null,{'status':_0x3ea137,'statusCode':_0x2f78c1,'headers':_0x2a8489,'body':_0x12d2ae},_0x12d2ae);},_0x7ce510=>{const {message:_0x37d479,response:_0x346dbf}=_0x7ce510;_0x3d563a(_0x37d479,_0x346dbf,_0x346dbf&&_0x346dbf['body']);});}}['time'](_0x19510b,_0x3ae458=null){const _0x9a2aa=_0x3ae458?new Date(_0x3ae458):new Date();let _0x55e238={'M+':_0x9a2aa['getMonth']()+0x1,'d+':_0x9a2aa['getDate'](),'H+':_0x9a2aa['getHours'](),'m+':_0x9a2aa['getMinutes'](),'s+':_0x9a2aa['getSeconds'](),'q+':Math['floor']((_0x9a2aa['getMonth']()+0x3)/0x3),'S':_0x9a2aa['getMilliseconds']()};/(y+)/['test'](_0x19510b)&&(_0x19510b=_0x19510b['replace'](RegExp['$1'],(_0x9a2aa['getFullYear']()+'')['substr'](0x4-RegExp['$1']['length'])));for(let _0x236017 in _0x55e238)new RegExp('('+_0x236017+')')['test'](_0x19510b)&&(_0x19510b=_0x19510b['replace'](RegExp['$1'],0x1==RegExp['$1']['length']?_0x55e238[_0x236017]:('00'+_0x55e238[_0x236017])['substr']((''+_0x55e238[_0x236017])['length'])));return _0x19510b;}['msg'](_0x2df6f7=_0xcda7c1,_0x55588a='',_0x2d8cb1='',_0x578c0e){const _0x526550=_0x14ce56=>{if(!_0x14ce56)return _0x14ce56;if('string'==typeof _0x14ce56)return this['isLoon']()?_0x14ce56:this['isQuanX']()?{'open-url':_0x14ce56}:this['isSurge']()?{'url':_0x14ce56}:void 0x0;if('object'==typeof _0x14ce56){if(this['isLoon']()){let _0x5af696=_0x14ce56['openUrl']||_0x14ce56['url']||_0x14ce56['open-url'],_0x4f9523=_0x14ce56['mediaUrl']||_0x14ce56['media-url'];return{'openUrl':_0x5af696,'mediaUrl':_0x4f9523};}if(this['isQuanX']()){let _0x1106ec=_0x14ce56['open-url']||_0x14ce56['url']||_0x14ce56['openUrl'],_0x12100b=_0x14ce56['media-url']||_0x14ce56['mediaUrl'];return{'open-url':_0x1106ec,'media-url':_0x12100b};}if(this['isSurge']()){let _0x3eba18=_0x14ce56['url']||_0x14ce56['openUrl']||_0x14ce56['open-url'];return{'url':_0x3eba18};}}};if(this['isMute']||(this['isSurge']()||this['isLoon']()?$notification['post'](_0x2df6f7,_0x55588a,_0x2d8cb1,_0x526550(_0x578c0e)):this['isQuanX']()&&$notify(_0x2df6f7,_0x55588a,_0x2d8cb1,_0x526550(_0x578c0e))),!this['isMuteLog']){let _0x1f788f=['','==============📣系统通知📣=============='];_0x1f788f['push'](_0x2df6f7),_0x55588a&&_0x1f788f['push'](_0x55588a),_0x2d8cb1&&_0x1f788f['push'](_0x2d8cb1),console['log'](_0x1f788f['join']('\x0a')),this['logs']=this['logs']['concat'](_0x1f788f);}}['log'](..._0x26d304){_0x26d304['length']>0x0&&(this['logs']=[...this['logs'],..._0x26d304]),console['log'](_0x26d304['join'](this['logSeparator']));}['logErr'](_0x18e439,_0x4a6517){const _0x262ef4=!this['isSurge']()&&!this['isQuanX']()&&!this['isLoon']();_0x262ef4?this['log']('','❗️'+this['name']+',\x20错误!',_0x18e439['stack']):this['log']('','❗️'+this['name']+',\x20错误!',_0x18e439);}['wait'](_0xd4535a){return new Promise(_0x2c7678=>setTimeout(_0x2c7678,_0xd4535a));}['done'](_0x94880e={}){const _0x122cf4=new Date()['getTime'](),_0x31629d=(_0x122cf4-this['startTime'])/0x3e8;this['log']('','🔔'+this['name']+',\x20结束!\x20🕛\x20'+_0x31629d+'\x20秒'),this['log'](),(this['isSurge']()||this['isQuanX']()||this['isLoon']())&&$done(_0x94880e);}}(_0xcda7c1,_0x414958);}