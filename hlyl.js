/**
 作者：shawn
 日期：2023-11-25 去除验证
 软件：活力伊利小程序
 功能：签到、积分查询
 抓包：开着抓包软件打开签到，抓包域名https://msmarket.msx.digitalyili.com 请求头部access-token 抓完不要再进小程序，会挤掉
 变量格式：export hlylCk='access-token1@access-token2'  多个账号用 @ 或者 换行 分割
 定时：一天一次
 cron: 32 7 * * *

 [task_local]
 #活力伊利小程序
 32 10 * * * https://github.com/Shawn220528/scripts/blob/main/hlyl.js, tag=xx, enabled=false
 [rewrite_local]
 https://msmarket.msx.digitalyili.com/gateway/api/member/sign/status url script-request-header https://github.com/Shawn220528/scripts/blob/main/hlyl.js
 [MITM]
 hostname = msmarket.msx.digitalyili.com
 */

const $ = new Env('活力伊利小程序');
var _0xodY='jsjiami.com.v7';const _0x3394bd=_0xd2a8;(function(_0x30ceab,_0x330b38,_0x29d3e3,_0x14c7c6,_0x3c3285,_0x2da596,_0x54d2af){return _0x30ceab=_0x30ceab>>0x7,_0x2da596='hs',_0x54d2af='hs',function(_0x2498a2,_0x507465,_0x4054d8,_0x4c5ead,_0x343c73){const _0x16af8b=_0xd2a8;_0x4c5ead='tfi',_0x2da596=_0x4c5ead+_0x2da596,_0x343c73='up',_0x54d2af+=_0x343c73,_0x2da596=_0x4054d8(_0x2da596),_0x54d2af=_0x4054d8(_0x54d2af),_0x4054d8=0x0;const _0x189e31=_0x2498a2();while(!![]&&--_0x14c7c6+_0x507465){try{_0x4c5ead=parseInt(_0x16af8b(0x23b,'kmvd'))/0x1+-parseInt(_0x16af8b(0x1a7,'$%p9'))/0x2*(-parseInt(_0x16af8b(0x187,'Jcih'))/0x3)+parseInt(_0x16af8b(0x138,'Ab1z'))/0x4*(parseInt(_0x16af8b(0x1ab,'@@h&'))/0x5)+parseInt(_0x16af8b(0xe7,'37#1'))/0x6*(parseInt(_0x16af8b(0x1d0,'j[o0'))/0x7)+parseInt(_0x16af8b(0x1c1,'APw1'))/0x8*(-parseInt(_0x16af8b(0x175,'[cES'))/0x9)+parseInt(_0x16af8b(0xf0,'Wl^!'))/0xa+parseInt(_0x16af8b(0x128,'W3Tv'))/0xb*(-parseInt(_0x16af8b(0xec,'P2l6'))/0xc);}catch(_0x246421){_0x4c5ead=_0x4054d8;}finally{_0x343c73=_0x189e31[_0x2da596]();if(_0x30ceab<=_0x14c7c6)_0x4054d8?_0x3c3285?_0x4c5ead=_0x343c73:_0x3c3285=_0x343c73:_0x4054d8=_0x343c73;else{if(_0x4054d8==_0x3c3285['replace'](/[wqRWSGeUtYVBXFNTHD=]/g,'')){if(_0x4c5ead===_0x507465){_0x189e31['un'+_0x2da596](_0x343c73);break;}_0x189e31[_0x54d2af](_0x343c73);}}}}}(_0x29d3e3,_0x330b38,function(_0x4ac97d,_0x4f25d2,_0x4079f3,_0x58d41b,_0xbfbafe,_0x52b188,_0x1625b7){return _0x4f25d2='\x73\x70\x6c\x69\x74',_0x4ac97d=arguments[0x0],_0x4ac97d=_0x4ac97d[_0x4f25d2](''),_0x4079f3='\x72\x65\x76\x65\x72\x73\x65',_0x4ac97d=_0x4ac97d[_0x4079f3]('\x76'),_0x58d41b='\x6a\x6f\x69\x6e',(0x148f0b,_0x4ac97d[_0x58d41b](''));});}(0x6500,0xc9861,_0x1c64,0xcc),_0x1c64)&&(_0xodY=0x241c);const {log}=console,Notify=0x1,debug=0x0;let scriptVersion=_0x3394bd(0x22e,'a)mV'),scriptVersionCheck=![],hlylCk=($[_0x3394bd(0x19b,'lJ9b')]()?process[_0x3394bd(0xf1,'oHf[')][_0x3394bd(0x107,'37#1')]:$['getdata'](_0x3394bd(0x108,'oHf[')))||'',hlylCkArr=[],data='',msg='',isSign=![],userAgent=_0x3394bd(0xf4,'QR12');!(async()=>{const _0x595961=_0x3394bd,_0x34e7ec={'Umprh':function(_0x5a8430,_0x54926b){return _0x5a8430(_0x54926b);},'oViqq':function(_0x1c0b39,_0x3902bc){return _0x1c0b39/_0x3902bc;},'JANft':function(_0x5c57d2,_0x46d034){return _0x5c57d2!==_0x46d034;},'cKxDI':function(_0x3cf294,_0x18ff3a){return _0x3cf294(_0x18ff3a);},'xWyHl':function(_0x1b8f07,_0x3cb5bb){return _0x1b8f07+_0x3cb5bb;},'NiJXV':function(_0xbf9c66,_0x1647e0){return _0xbf9c66+_0x1647e0;},'qdnOq':function(_0x565c04,_0x52e841){return _0x565c04*_0x52e841;},'sCGQP':function(_0x52db3e,_0x296fb2){return _0x52db3e(_0x296fb2);},'LChYa':function(_0xda446,_0x2b163b){return _0xda446(_0x2b163b);},'GQKVF':function(_0x3b2d29,_0x4eaf68){return _0x3b2d29!==_0x4eaf68;},'rgCws':_0x595961(0x163,'wcN$'),'pwreY':function(_0x5f2a5f,_0x1dce74,_0x171f24){return _0x5f2a5f(_0x1dce74,_0x171f24);},'ejPwg':function(_0x324d9e,_0x4da9ec){return _0x324d9e(_0x4da9ec);},'bRjdm':_0x595961(0x1da,'J6#7'),'HLOmq':_0x595961(0x1bd,'Jap!'),'rpHcQ':_0x595961(0x20e,'f)$5'),'FkDdf':function(_0x39e1bb,_0x232514){return _0x39e1bb*_0x232514;}};if(_0x34e7ec['JANft'](typeof $request,_0x595961(0x142,'RgSq')))await GetRewrite();else{if(!await Envs())return;else{_0x34e7ec['cKxDI'](log,_0x595961(0x13f,'NHb$')+new Date(_0x34e7ec[_0x595961(0x221,'W3Tv')](_0x34e7ec['NiJXV'](new Date()[_0x595961(0x1bb,'NHb$')](),new Date()[_0x595961(0x218,'$%@J')]()*0x3c*0x3e8),_0x34e7ec[_0x595961(0x1a5,'QuPW')](_0x34e7ec[_0x595961(0x198,'a)mV')](0x8*0x3c,0x3c),0x3e8)))[_0x595961(0x236,'QR12')]()+_0x595961(0x112,'XA(a')),_0x34e7ec['sCGQP'](log,_0x595961(0x12f,'0o]z')+scriptVersion+_0x595961(0x25d,'90Sy')),_0x34e7ec[_0x595961(0x182,'38#(')](log,_0x595961(0x18f,'6u6I')+hlylCkArr['length']+_0x595961(0x19e,'K9wN'));debug&&_0x34e7ec['Umprh'](log,_0x595961(0xe2,'HO#0')+hlylCkArr);for(let _0x2b4e94=0x0;_0x2b4e94<hlylCkArr[_0x595961(0x231,'@@h&')];_0x2b4e94++){if(_0x34e7ec[_0x595961(0x1f4,'W3Tv')](_0x34e7ec[_0x595961(0x1c3,'RgSq')],_0x595961(0x1b5,'@@h&')))_0x34e7ec[_0x595961(0x207,'wcN$')](_0x23bfc4,'查询签到状态失败，原因是：'+_0x4dd494['error'][_0x595961(0x177,'21[a')]);else{let _0x1fdc46=_0x34e7ec[_0x595961(0x106,'[I[F')](_0x2b4e94,0x1);addNotifyStr(_0x595961(0x12e,'o&rq')+_0x1fdc46+_0x595961(0x21e,'38#('),!![]),hlylCk=hlylCkArr[_0x2b4e94],_0x34e7ec[_0x595961(0x1c8,'$%@J')](addNotifyStr,'\x0a====\x20每日签到\x20====\x0a',!![]),await _0x34e7ec[_0x595961(0x16d,'Ab1z')](getSignStatus,0x2*0x3e8),await $[_0x595961(0xea,'QR12')](0x7d0);if(isSign)_0x34e7ec[_0x595961(0x167,'lJ9b')](_0x34e7ec[_0x595961(0x22c,'$%p9')],_0x34e7ec[_0x595961(0x25b,'K9wN')])?_0x34e7ec[_0x595961(0x156,'UQsC')](addNotifyStr,_0x595961(0x251,'@@h&')+_0x1fdc46+'】已经签到了！'):_0xb8626a(_0x595961(0x217,'RgSq')+_0x17df85);else{if(_0x34e7ec['rpHcQ']!==_0x34e7ec['rpHcQ'])return _0x34e7ec[_0x595961(0x22f,'xvUW')](_0x12f2ac[_0x595961(0x166,'3$Di')](new _0x5b3563()),0x3e8);else await signIn(_0x34e7ec[_0x595961(0x11a,'UQsC')](0x2,0x3e8)),await $['wait'](0x7d0);}addNotifyStr(_0x595961(0x1ae,'5(Y@'),!![]),await _0x34e7ec[_0x595961(0x1e5,'azXT')](getPoint,_0x34e7ec[_0x595961(0x11a,'UQsC')](0x2,0x3e8)),await $[_0x595961(0x176,'90Sy')](0x7d0);}}await _0x34e7ec[_0x595961(0x1d4,'o&rq')](SendMsg,msg);}}})()['catch'](_0x2501cd=>log(_0x2501cd))['finally'](()=>$['done']());async function getSignStatus(_0x51a819=0x7d0){const _0x4d4712=_0x3394bd,_0x435435={'QfDCZ':function(_0x2a3c25,_0x46b1ec,_0x90ab6){return _0x2a3c25(_0x46b1ec,_0x90ab6);},'aKvxs':function(_0xafe8aa){return _0xafe8aa();},'tieHi':function(_0x317140,_0x329031){return _0x317140(_0x329031);},'LVqcA':_0x4d4712(0x197,'3$Di'),'QWIlh':_0x4d4712(0x196,'3$Di'),'mIQSK':'application/json','gbdap':'gzip,compress,br,deflate'};let _0x47ecb3={'url':'https://msmarket.msx.digitalyili.com/gateway/api/member/sign/status','headers':{'Host':_0x435435[_0x4d4712(0x116,'HO#0')],'Connection':_0x435435[_0x4d4712(0x14e,'J6#7')],'content-type':_0x435435[_0x4d4712(0x1f9,'Wl^!')],'access-token':hlylCk,'Accept-Encoding':_0x435435[_0x4d4712(0x1a8,'$%p9')],'User-Agent':userAgent,'Referer':_0x4d4712(0x173,'3wt]')}};return debug&&(_0x435435['tieHi'](log,_0x4d4712(0xf5,'a)mV')),log(JSON['stringify'](_0x47ecb3))),new Promise(_0x585534=>{const _0x3043ef=_0x4d4712,_0x8e0c31={'MODyF':function(_0x30605d,_0x961b8f,_0x3414eb){const _0x2b50ee=_0xd2a8;return _0x435435[_0x2b50ee(0xfd,'Wl^!')](_0x30605d,_0x961b8f,_0x3414eb);},'fwLwr':function(_0x480298){const _0x5c3dc2=_0xd2a8;return _0x435435[_0x5c3dc2(0x13a,'U7W^')](_0x480298);},'VBXVT':function(_0x6dc9d6,_0xacc4ef){const _0x342a5f=_0xd2a8;return _0x435435[_0x342a5f(0x1ed,'NHb$')](_0x6dc9d6,_0xacc4ef);},'mgCqk':function(_0x13fb40,_0x4aeb32){return _0x13fb40===_0x4aeb32;},'QurfM':_0x3043ef(0x139,'S6qC')};$[_0x3043ef(0x1f1,'RgSq')](_0x47ecb3,async(_0x22dfaa,_0xdb4066,_0x112e77)=>{const _0xb92953=_0x3043ef,_0x8ef365={'SJDDG':function(_0xe9ec44,_0x5815c4){const _0x53e394=_0xd2a8;return _0x8e0c31[_0x53e394(0x23c,'@@h&')](_0xe9ec44,_0x5815c4);}};try{debug&&(_0x8e0c31['VBXVT'](log,'\x0a\x0a【debug】===============这是\x20查询签到状态\x20返回data=============='),_0x8e0c31['VBXVT'](log,_0x112e77));let _0x347429=JSON[_0xb92953(0x18e,'RgSq')](_0x112e77);if(_0x347429[_0xb92953(0x1af,'Hqt6')]==!![]){if(_0x8e0c31['mgCqk'](_0x8e0c31['QurfM'],_0x8e0c31[_0xb92953(0x204,'U7W^')])){isSign=_0x347429[_0xb92953(0x110,'37#1')]['signed'];var _0x61546f=_0x347429['data']['signedDays'];log(_0xb92953(0x153,'QuPW'));}else _0x8ef365[_0xb92953(0x132,'90Sy')](_0x50a8d6,'\x0a【debug】===============\x20这是\x20签到\x20请求\x20url\x20==============='),_0x8ef365[_0xb92953(0xe8,'XA(a')](_0x563a8f,_0x7fedf6[_0xb92953(0x158,'$%@J')](_0x3fa706));}else{if(_0xb92953(0x185,'3$Di')===_0xb92953(0x18c,'f)$5'))log(_0xb92953(0x150,'QuPW')+_0x347429[_0xb92953(0x14a,'tc8T')][_0xb92953(0x1ca,'tc8T')]);else try{_0x1b1f2a=_0x4d4a67[_0xb92953(0x12a,'q3&(')](_0x6a0075),_0x948692(_0xd8daf1[_0xb92953(0x254,'[cES')]+_0xb92953(0x24e,'lJ9b')+_0x3736a6[_0xb92953(0x1b8,'XA(a')]+'》'+_0x1acb76['author']);}catch(_0x3330b8){_0x8e0c31[_0xb92953(0x1dc,'37#1')](_0x200c9a,_0x3330b8,_0x513a53);}finally{_0x8e0c31[_0xb92953(0x152,'f)$5')](_0x2ec51c);}}}catch(_0x5d6c3d){log(_0x5d6c3d);}finally{_0x8e0c31[_0xb92953(0x1e1,'Byxj')](_0x585534);}},_0x51a819);});}async function signIn(_0x1b77e3=0x7d0){const _0xed8e41=_0x3394bd,_0x583464={'RAldR':function(_0x598619,_0x422924){return _0x598619(_0x422924);},'bQmmP':function(_0x1f93a8,_0xe02cf2){return _0x1f93a8+_0xe02cf2;},'ckSDg':function(_0x3858d5,_0x17a140){return _0x3858d5===_0x17a140;},'yLkfj':_0xed8e41(0x15d,'tc8T'),'nkFsL':'iyxPZ','eXPYL':function(_0x46fc27,_0x5874ee,_0x68b1df){return _0x46fc27(_0x5874ee,_0x68b1df);},'bJEvs':'NBkXp','pcMQH':function(_0x349b6e,_0xdc2164,_0x37bcb6){return _0x349b6e(_0xdc2164,_0x37bcb6);},'VBuFg':function(_0x578cf4){return _0x578cf4();},'TnsPr':function(_0x5f487e,_0x35c530){return _0x5f487e!==_0x35c530;},'mjYNh':_0xed8e41(0x19f,'NHb$'),'dWhzD':_0xed8e41(0x104,'j[o0'),'wWgFm':function(_0x559e10,_0x27a9d0){return _0x559e10===_0x27a9d0;},'JRiqh':function(_0x442eb0,_0x4e6563){return _0x442eb0(_0x4e6563);},'aPTXR':'msmarket.msx.digitalyili.com','UWFBn':_0xed8e41(0x130,'HO#0')};let _0x3644cd={'url':'https://msmarket.msx.digitalyili.com/gateway/api/member/daily/sign','headers':{'Host':_0x583464[_0xed8e41(0xf9,'Byxj')],'Connection':_0x583464[_0xed8e41(0x18a,'lJ9b')],'content-type':'application/json','access-token':hlylCk,'Accept-Encoding':_0xed8e41(0x16f,'Wl^!'),'User-Agent':userAgent,'Referer':_0xed8e41(0x174,'NHb$')},'body':'{}'};return new Promise(_0x40b328=>{const _0x9042ae=_0xed8e41,_0x5f2c9a={'oNHzL':function(_0x1fbe22,_0x3a0b5a){const _0x2b10d9=_0xd2a8;return _0x583464[_0x2b10d9(0x233,'U7W^')](_0x1fbe22,_0x3a0b5a);},'eynoW':_0x583464[_0x9042ae(0x133,'xvUW')],'pydCw':_0x583464['nkFsL'],'PDxAs':function(_0x4ec10b,_0x105579){const _0xb4e49b=_0x9042ae;return _0x583464[_0xb4e49b(0x193,'90Sy')](_0x4ec10b,_0x105579);},'mSqin':function(_0x5343cf,_0x3493ec){return _0x5343cf==_0x3493ec;},'bUATI':function(_0x12ebc4,_0x4bd9e5,_0x254fac){const _0x13461b=_0x9042ae;return _0x583464[_0x13461b(0x114,'3$Di')](_0x12ebc4,_0x4bd9e5,_0x254fac);},'GDCtM':_0x583464[_0x9042ae(0x129,'5(Y@')],'sbNKH':function(_0x444f33,_0x3f903c,_0x35d438){const _0x4cc275=_0x9042ae;return _0x583464[_0x4cc275(0x140,'lJ9b')](_0x444f33,_0x3f903c,_0x35d438);},'XHirI':function(_0x9d7029){const _0x4ce87d=_0x9042ae;return _0x583464[_0x4ce87d(0x11d,'RgSq')](_0x9d7029);}};if(_0x583464['TnsPr'](_0x583464[_0x9042ae(0x123,'21[a')],_0x583464[_0x9042ae(0x10a,'$%@J')])){if(debug){if(_0x583464[_0x9042ae(0x183,'3$Di')](_0x9042ae(0x241,'5(Y@'),_0x9042ae(0xf6,'90Sy'))){_0x4b1012=_0x47ef4d['data'][_0x9042ae(0x1de,'QR12')];var _0x496664=_0x5c65bd[_0x9042ae(0x164,'Byxj')]['signedDays'];_0x54c408(_0x9042ae(0x127,'kmvd'));}else log('\x0a【debug】===============\x20这是\x20签到\x20请求\x20url\x20==============='),_0x583464['JRiqh'](log,JSON['stringify'](_0x3644cd));}$['post'](_0x3644cd,async(_0x2f3e21,_0x286e8a,_0x15e176)=>{const _0x412830=_0x9042ae;if(_0x5f2c9a[_0x412830(0x203,'@@h&')](_0x5f2c9a['eynoW'],_0x5f2c9a['pydCw']))_0x18505f=!![];else try{debug&&(_0x5f2c9a[_0x412830(0x179,'QuPW')](log,_0x412830(0x1ba,'[I[F')),_0x5f2c9a[_0x412830(0x1bc,'37#1')](log,_0x15e176));let _0x1e59cf=JSON['parse'](_0x15e176);_0x5f2c9a[_0x412830(0x186,'J6#7')](_0x1e59cf[_0x412830(0x21a,'a)mV')],!![])?_0x5f2c9a[_0x412830(0x1df,'@@h&')](addNotifyStr,_0x412830(0x220,'UQsC')+_0x1e59cf[_0x412830(0x1d2,'Ab1z')][_0x412830(0x256,'3^9D')][_0x412830(0x212,'@@h&')]+',成长值+'+_0x1e59cf['data'][_0x412830(0xe5,'kmvd')][_0x412830(0x101,'UQsC')],!![]):_0x5f2c9a[_0x412830(0x1ad,'lJ9b')](_0x5f2c9a[_0x412830(0x10e,'lJ9b')],_0x5f2c9a[_0x412830(0x194,'W3Tv')])?_0x5f2c9a['sbNKH'](addNotifyStr,'签到失败，原因是：'+_0x1e59cf[_0x412830(0x18d,'S6qC')][_0x412830(0x247,'M6sF')],!![]):_0x5a56dc[_0x412830(0x229,'21[a')](_0x41cfea);}catch(_0x567bb5){_0x5f2c9a['PDxAs'](log,_0x567bb5);}finally{_0x5f2c9a[_0x412830(0x214,'HO#0')](_0x40b328);}},_0x1b77e3);}else return _0x583464[_0x9042ae(0x24b,'q3&(')](_0x3d074d,_0x583464['bQmmP']('读取文件失败！',_0x36463e));});}async function getPoint(_0x35a22b=0x7d0){const _0x258fb9=_0x3394bd,_0x1fb655={'wqFcY':function(_0x30988f,_0x16fced){return _0x30988f(_0x16fced);},'sgEcV':function(_0x2a3ccf,_0x397b7c){return _0x2a3ccf==_0x397b7c;},'FnMrU':function(_0x3040ef,_0x93fd0a,_0x5c4246){return _0x3040ef(_0x93fd0a,_0x5c4246);},'rrKTi':function(_0x5bad4e,_0x181bf4){return _0x5bad4e==_0x181bf4;},'DGkXe':function(_0x1ad3e2,_0x3cfc75,_0x3a5d19){return _0x1ad3e2(_0x3cfc75,_0x3a5d19);},'xqute':function(_0x42c1f9,_0x34fe25){return _0x42c1f9===_0x34fe25;},'XRUif':'KDoQu','ZrueI':'Keep-Alive','HwbFh':_0x258fb9(0x245,'QR12'),'dzSKd':_0x258fb9(0x147,'wcN$')};let _0x5e9b93={'url':_0x258fb9(0x16a,'[I[F'),'headers':{'Host':_0x258fb9(0x1a0,'tc8T'),'Connection':_0x1fb655['ZrueI'],'content-type':_0x1fb655['HwbFh'],'access-token':hlylCk,'Accept-Encoding':'gzip,compress,br,deflate','User-Agent':userAgent,'Referer':_0x1fb655[_0x258fb9(0x1b7,'APw1')]}};return debug&&(log(_0x258fb9(0x213,'21[a')),log(JSON[_0x258fb9(0x21f,'38#(')](_0x5e9b93))),new Promise(_0x34763=>{const _0x5251f5=_0x258fb9,_0x4be995={'JRtjf':function(_0x1e2bdb,_0x3ae660){return _0x1fb655['wqFcY'](_0x1e2bdb,_0x3ae660);},'MOhZU':function(_0xbe4cca,_0x3a37d4){const _0x3009a3=_0xd2a8;return _0x1fb655[_0x3009a3(0x1f7,'21[a')](_0xbe4cca,_0x3a37d4);},'zlPOQ':function(_0x5400d4,_0x20ba17,_0x1a63e6){const _0x2ce4a0=_0xd2a8;return _0x1fb655[_0x2ce4a0(0x16c,'wcN$')](_0x5400d4,_0x20ba17,_0x1a63e6);},'iTLnR':_0x5251f5(0x1c5,'WT#L'),'NzbmT':function(_0x273f79,_0xa8d423){return _0x273f79(_0xa8d423);},'SJzoP':function(_0x16fc4b,_0x352656){return _0x1fb655['rrKTi'](_0x16fc4b,_0x352656);},'cPBtw':function(_0xd1445f,_0x13bac0,_0x4697da){const _0x2660ac=_0x5251f5;return _0x1fb655[_0x2660ac(0x1b6,'Wl^!')](_0xd1445f,_0x13bac0,_0x4697da);},'NJIWU':function(_0x4da0d3,_0x4fcc28){const _0x3a0c1b=_0x5251f5;return _0x1fb655[_0x3a0c1b(0x20f,'21[a')](_0x4da0d3,_0x4fcc28);},'uBodB':_0x1fb655['XRUif']};$[_0x5251f5(0x1a2,'90Sy')](_0x5e9b93,async(_0x5d6b05,_0x5678fa,_0x48ac40)=>{const _0x2cbba0=_0x5251f5,_0x6b06de={'bqzoo':function(_0x40cd8d,_0x208f2e){const _0x21f7f5=_0xd2a8;return _0x4be995[_0x21f7f5(0x1dd,'38#(')](_0x40cd8d,_0x208f2e);},'mfjjl':function(_0x18115e,_0x1ab3af){return _0x4be995['MOhZU'](_0x18115e,_0x1ab3af);},'Zzvdq':function(_0xc0d1dd,_0x55d425,_0x59e257){return _0x4be995['zlPOQ'](_0xc0d1dd,_0x55d425,_0x59e257);}};if(_0x2cbba0(0x205,'3$Di')===_0x2cbba0(0x192,'QuPW'))_0x3d7b85(_0x259755+'\x0a');else try{if(_0x4be995['iTLnR']!==_0x2cbba0(0x22b,'21[a'))_0x46dbda();else{debug&&(_0x4be995['NzbmT'](log,'\x0a\x0a【debug】===============这是\x20查询积分\x20返回data=============='),log(_0x48ac40));let _0x47dc9b=JSON[_0x2cbba0(0x1f2,'1b]f')](_0x48ac40);_0x4be995['SJzoP'](_0x47dc9b[_0x2cbba0(0x1f5,'$%@J')],!![])?_0x4be995[_0x2cbba0(0x199,'W3Tv')](addNotifyStr,_0x2cbba0(0x178,'a)mV')+_0x47dc9b[_0x2cbba0(0xe6,'xvUW')],!![]):addNotifyStr(_0x2cbba0(0x230,'M6sF')+_0x47dc9b['error'][_0x2cbba0(0x249,'QR12')],!![]);}}catch(_0x32f611){if(_0x4be995[_0x2cbba0(0x126,'Ab1z')](_0x2cbba0(0x113,'21[a'),_0x4be995[_0x2cbba0(0x227,'WT#L')])){_0x5adfa1&&(_0x1bae7a('\x0a\x0a【debug】===============这是\x20签到\x20返回data=============='),_0x6b06de[_0x2cbba0(0x131,'0o]z')](_0x5c9a6f,_0x5af274));let _0x395b84=_0x5338e8['parse'](_0x1bc6eb);_0x6b06de[_0x2cbba0(0x160,'Byxj')](_0x395b84[_0x2cbba0(0x157,'tc8T')],!![])?_0x7cfa04(_0x2cbba0(0x149,'QuPW')+_0x395b84[_0x2cbba0(0x20c,'5(Y@')]['dailySign'][_0x2cbba0(0x250,'S6qC')]+',成长值+'+_0x395b84['data'][_0x2cbba0(0x1a3,'tc8T')]['bonusGrowth'],!![]):_0x6b06de[_0x2cbba0(0x103,'Byxj')](_0x39cd31,_0x2cbba0(0xfe,'3$Di')+_0x395b84[_0x2cbba0(0xe3,'QuPW')][_0x2cbba0(0x1eb,'Byxj')],!![]);}else log(_0x32f611);}finally{_0x34763();}},_0x35a22b);});}function _0xd2a8(_0x4a6464,_0xb4c7dd){const _0x1c64d7=_0x1c64();return _0xd2a8=function(_0xd2a8d0,_0x2b68b1){_0xd2a8d0=_0xd2a8d0-0xe2;let _0x1a6e0c=_0x1c64d7[_0xd2a8d0];if(_0xd2a8['lTSGyq']===undefined){var _0x280b4c=function(_0x34f8dc){const _0xb8626a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x17df85='',_0xec0cbc='';for(let _0xb016e2=0x0,_0x58c3ff,_0x46fde9,_0x185df7=0x0;_0x46fde9=_0x34f8dc['charAt'](_0x185df7++);~_0x46fde9&&(_0x58c3ff=_0xb016e2%0x4?_0x58c3ff*0x40+_0x46fde9:_0x46fde9,_0xb016e2++%0x4)?_0x17df85+=String['fromCharCode'](0xff&_0x58c3ff>>(-0x2*_0xb016e2&0x6)):0x0){_0x46fde9=_0xb8626a['indexOf'](_0x46fde9);}for(let _0x21f733=0x0,_0x3052dc=_0x17df85['length'];_0x21f733<_0x3052dc;_0x21f733++){_0xec0cbc+='%'+('00'+_0x17df85['charCodeAt'](_0x21f733)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xec0cbc);};const _0x4e5c20=function(_0x2a1338,_0x1246e4){let _0x2f2df2=[],_0x1c77c4=0x0,_0x293ec8,_0x4de278='';_0x2a1338=_0x280b4c(_0x2a1338);let _0x1e644c;for(_0x1e644c=0x0;_0x1e644c<0x100;_0x1e644c++){_0x2f2df2[_0x1e644c]=_0x1e644c;}for(_0x1e644c=0x0;_0x1e644c<0x100;_0x1e644c++){_0x1c77c4=(_0x1c77c4+_0x2f2df2[_0x1e644c]+_0x1246e4['charCodeAt'](_0x1e644c%_0x1246e4['length']))%0x100,_0x293ec8=_0x2f2df2[_0x1e644c],_0x2f2df2[_0x1e644c]=_0x2f2df2[_0x1c77c4],_0x2f2df2[_0x1c77c4]=_0x293ec8;}_0x1e644c=0x0,_0x1c77c4=0x0;for(let _0x509b8b=0x0;_0x509b8b<_0x2a1338['length'];_0x509b8b++){_0x1e644c=(_0x1e644c+0x1)%0x100,_0x1c77c4=(_0x1c77c4+_0x2f2df2[_0x1e644c])%0x100,_0x293ec8=_0x2f2df2[_0x1e644c],_0x2f2df2[_0x1e644c]=_0x2f2df2[_0x1c77c4],_0x2f2df2[_0x1c77c4]=_0x293ec8,_0x4de278+=String['fromCharCode'](_0x2a1338['charCodeAt'](_0x509b8b)^_0x2f2df2[(_0x2f2df2[_0x1e644c]+_0x2f2df2[_0x1c77c4])%0x100]);}return _0x4de278;};_0xd2a8['kIjIDW']=_0x4e5c20,_0x4a6464=arguments,_0xd2a8['lTSGyq']=!![];}const _0x1cbd73=_0x1c64d7[0x0],_0x4543ad=_0xd2a8d0+_0x1cbd73,_0x2291ad=_0x4a6464[_0x4543ad];return!_0x2291ad?(_0xd2a8['nrQfTr']===undefined&&(_0xd2a8['nrQfTr']=!![]),_0x1a6e0c=_0xd2a8['kIjIDW'](_0x1a6e0c,_0x2b68b1),_0x4a6464[_0x4543ad]=_0x1a6e0c):_0x1a6e0c=_0x2291ad,_0x1a6e0c;},_0xd2a8(_0x4a6464,_0xb4c7dd);}async function GetRewrite(){const _0x52bdf9=_0x3394bd,_0x3fe513={'YLoNJ':function(_0x5ccada,_0x5c79c2){return _0x5ccada(_0x5c79c2);},'LebnW':function(_0x23488f,_0x28b3c2){return _0x23488f==_0x28b3c2;},'VsfNo':function(_0x76a1d8,_0x7faee4){return _0x76a1d8(_0x7faee4);},'lDnfa':function(_0x680525,_0x52e37f){return _0x680525>_0x52e37f;},'syNSu':_0x52bdf9(0x1c2,'37#1'),'lALNX':function(_0x259426,_0x2495c6){return _0x259426===_0x2495c6;},'isRNM':'MrHZG','XluHG':_0x52bdf9(0x154,'XA(a'),'kathj':function(_0x542586,_0xa7cd2f){return _0x542586!==_0xa7cd2f;},'RBPJe':_0x52bdf9(0x248,'P2l6'),'dxdan':function(_0x405c45,_0x5dce43){return _0x405c45+_0x5dce43;},'VXwvv':_0x52bdf9(0x148,'S6qC'),'bWWYZ':_0x52bdf9(0x12b,'QuPW'),'zWCft':'hgwAT','bQMaY':function(_0x29d4c0,_0x5b5aff){return _0x29d4c0+_0x5b5aff;}};if(_0x3fe513[_0x52bdf9(0x13b,'a)mV')]($request['url'][_0x52bdf9(0x15b,'[cES')](_0x3fe513[_0x52bdf9(0x1d3,'5(Y@')]),-0x1)){if(_0x3fe513[_0x52bdf9(0x15c,'6u6I')](_0x52bdf9(0x24a,'3$Di'),_0x3fe513['isRNM'])){const _0x1f9d16=$request[_0x52bdf9(0x1be,'HO#0')][_0x3fe513['XluHG']];if(hlylCk){if(hlylCk[_0x52bdf9(0x226,'WT#L')](_0x1f9d16)==-0x1){if(_0x3fe513[_0x52bdf9(0x200,'APw1')](_0x3fe513['RBPJe'],_0x3fe513[_0x52bdf9(0x100,'kmvd')])){_0x2182aa&&(_0x299efe(_0x52bdf9(0x1b4,'HO#0')),_0x3fe513[_0x52bdf9(0x1cc,'RgSq')](_0xd431fe,_0x1cd9c7));let _0x3e8ccb=_0x593a64[_0x52bdf9(0x15f,'U7W^')](_0x3dc8a2);if(_0x3fe513[_0x52bdf9(0x17d,'3$Di')](_0x3e8ccb['status'],!![])){_0x457eb3=_0x3e8ccb[_0x52bdf9(0x1e4,'U7W^')][_0x52bdf9(0x170,'Byxj')];var _0x1c8238=_0x3e8ccb['data'][_0x52bdf9(0x258,'oHf[')];_0x3fe513['VsfNo'](_0x51efe1,_0x52bdf9(0x1b9,'q3&('));}else _0x3fe513[_0x52bdf9(0x20b,'WT#L')](_0x40adc0,_0x52bdf9(0xfb,'o&rq')+_0x3e8ccb[_0x52bdf9(0x223,'3wt]')][_0x52bdf9(0x239,'QuPW')]);}else hlylCk=_0x3fe513[_0x52bdf9(0x208,'W3Tv')](_0x3fe513[_0x52bdf9(0x162,'3$Di')](hlylCk,'@'),_0x1f9d16),$[_0x52bdf9(0x13e,'K9wN')](hlylCk,_0x3fe513['VXwvv']),List=hlylCk[_0x52bdf9(0x146,'f)$5')]('@'),$[_0x52bdf9(0x1e2,'S6qC')]('【'+$[_0x52bdf9(0x1d5,'Jcih')]+'】'+(_0x52bdf9(0x16b,'90Sy')+hlylCk[_0x52bdf9(0xee,'QR12')]+_0x52bdf9(0x1d8,'J6#7')+_0x1f9d16+_0x52bdf9(0x1aa,'q3&(')));}}else _0x3fe513[_0x52bdf9(0x1ea,'QR12')]===_0x3fe513[_0x52bdf9(0x201,'WT#L')]?_0x5c23c2[_0x52bdf9(0x211,'Jcih')]('@')[_0x52bdf9(0xfa,'Wl^!')](_0x5ca8ca=>{const _0x1ff8ed=_0x52bdf9;_0x337d3a[_0x1ff8ed(0x145,'APw1')](_0x5ca8ca);}):($[_0x52bdf9(0xed,'[I[F')](_0x1f9d16,_0x52bdf9(0x1f0,'@@h&')),$['msg'](_0x3fe513['bQMaY']('【'+$[_0x52bdf9(0x1c4,'37#1')]+'】',_0x52bdf9(0x21b,'a)mV')+_0x1f9d16+_0x52bdf9(0x1e3,'[I[F'))));}else _0x3fe513[_0x52bdf9(0x125,'3wt]')](_0x4e5580,_0x52bdf9(0x216,'3wt]')),_0x1114ad(_0x1b5bba);}}async function Envs(){const _0x2dcd30=_0x3394bd,_0x37e7c0={'ZuJiI':function(_0x26b1a2,_0x472b14){return _0x26b1a2(_0x472b14);},'SRwoy':function(_0x136ac1,_0x1eb0e9){return _0x136ac1(_0x1eb0e9);},'VZwXU':function(_0x43f1aa,_0x584a50){return _0x43f1aa===_0x584a50;},'rHMGQ':_0x2dcd30(0x259,'[cES'),'gptEc':_0x2dcd30(0xf2,'W3Tv'),'BszxH':function(_0x377d47,_0x5a6207){return _0x377d47==_0x5a6207;},'IoLPa':function(_0x3af379,_0x434790){return _0x3af379+_0x434790;},'zNPtd':function(_0x1fe0f6,_0xd5c591){return _0x1fe0f6+_0xd5c591;},'YoujX':_0x2dcd30(0x23f,'Byxj'),'hKyEi':function(_0x1e1e2f,_0x836d9c){return _0x1e1e2f!==_0x836d9c;},'FThEa':_0x2dcd30(0x234,'3wt]'),'HGnQu':function(_0x1086fd,_0x530d9f){return _0x1086fd!=_0x530d9f;},'RozqA':_0x2dcd30(0x1e6,'W3Tv'),'XcFKq':_0x2dcd30(0x17e,'Jcih'),'uznHX':function(_0x204264,_0x311536){return _0x204264!=_0x311536;},'uXxAH':_0x2dcd30(0x161,'J6#7')};if(hlylCk){if(_0x37e7c0[_0x2dcd30(0x105,'kmvd')](_0x37e7c0['FThEa'],_0x37e7c0[_0x2dcd30(0x180,'WT#L')]))_0x5c77a4[_0x2dcd30(0x11e,'S6qC')](_0x471906);else{if(_0x37e7c0['HGnQu'](hlylCk[_0x2dcd30(0x11b,'o&rq')]('@'),-0x1))_0x37e7c0[_0x2dcd30(0x19a,'S6qC')]!==_0x37e7c0[_0x2dcd30(0x1ce,'f)$5')]?hlylCk[_0x2dcd30(0x141,'3^9D')]('@')[_0x2dcd30(0x1d7,'o&rq')](_0x1fbf50=>{const _0x257b02=_0x2dcd30;hlylCkArr[_0x257b02(0x1a1,'@@h&')](_0x1fbf50);}):_0x391489['push'](_0x268e7e);else{if(_0x37e7c0[_0x2dcd30(0x119,'Jcih')](hlylCk['indexOf']('\x0a'),-0x1))hlylCk['split']('\x0a')['forEach'](_0xf35549=>{const _0x398067=_0x2dcd30;_0x37e7c0[_0x398067(0x1ef,'J6#7')]('DQiFC',_0x37e7c0[_0x398067(0x1bf,'oHf[')])?(_0x37e7c0['ZuJiI'](_0x3030a1,_0x398067(0xe4,'S6qC')),_0x37e7c0[_0x398067(0x16e,'Byxj')](_0x28d146,_0x2f43f4)):hlylCkArr['push'](_0xf35549);});else{if(_0x37e7c0[_0x2dcd30(0x1ff,'$%@J')]('OvINr',_0x37e7c0[_0x2dcd30(0x190,'J6#7')]))hlylCkArr[_0x2dcd30(0x1cf,'Wl^!')](hlylCk);else{const _0x5f591b=_0x247149[_0x2dcd30(0x1be,'HO#0')][_0x37e7c0[_0x2dcd30(0x24d,'90Sy')]];_0xd94de1?_0x37e7c0['BszxH'](_0x15c290[_0x2dcd30(0x109,'3^9D')](_0x5f591b),-0x1)&&(_0x39ad62=_0x37e7c0['IoLPa'](_0x37e7c0[_0x2dcd30(0x23e,'$%p9')](_0x42ff8f,'@'),_0x5f591b),_0x271a05[_0x2dcd30(0x23d,'P2l6')](_0x2364d3,_0x37e7c0['YoujX']),_0xad531=_0x2ad2c3[_0x2dcd30(0x1a9,'$%p9')]('@'),_0x46407f[_0x2dcd30(0x249,'QR12')]('【'+_0x3d1c71[_0x2dcd30(0x22d,'$%p9')]+'】'+('\x20获取第'+_0xf23aed[_0x2dcd30(0x17c,'wcN$')]+_0x2dcd30(0x117,'xvUW')+_0x5f591b+'\x20,不用请自行关闭重写!'))):(_0x1bfbb2[_0x2dcd30(0x1c7,'Hqt6')](_0x5f591b,_0x37e7c0[_0x2dcd30(0x255,'wcN$')]),_0x41db13[_0x2dcd30(0x19d,'lJ9b')]('【'+_0x1f83a1[_0x2dcd30(0x1fb,'21[a')]+'】'+('\x20获取第1个\x20ck\x20成功:\x20'+_0x5f591b+'\x20,不用请自行关闭重写!')));}}}}}else{_0x37e7c0[_0x2dcd30(0x195,'oHf[')](log,_0x2dcd30(0x1ac,'a)mV')+$['name']+_0x2dcd30(0x1b1,'37#1'));return;}return!![];}function addNotifyStr(_0x33728b,_0x3b21f0=!![]){const _0x5da89a=_0x3394bd,_0x7fe53={'YQTNR':function(_0x58bb56,_0xf95387){return _0x58bb56(_0xf95387);},'PiMdt':function(_0xaf013c,_0x1a8663){return _0xaf013c!==_0x1a8663;},'oLksD':'uysdL'};_0x3b21f0&&(_0x7fe53[_0x5da89a(0x1e7,'[I[F')]('ALwSH',_0x7fe53['oLksD'])?log(_0x33728b+'\x0a'):(_0x7fe53[_0x5da89a(0x1e8,'HO#0')](_0x1246e4,'\x0a【debug】===============\x20这是\x20查询签到状态\x20请求\x20url\x20==============='),_0x7fe53[_0x5da89a(0x10b,'RgSq')](_0x2f2df2,_0x1c77c4[_0x5da89a(0x21f,'38#(')](_0x293ec8)))),msg+=_0x33728b+'\x0a';}async function SendMsg(_0x4fdef0){const _0xf6fda2=_0x3394bd,_0x40b3af={'iLmEp':function(_0x1d0a33,_0x1c7ad9){return _0x1d0a33(_0x1c7ad9);},'hvNoO':function(_0x1e4186,_0x1a7945){return _0x1e4186>_0x1a7945;},'DdMUl':function(_0x1f1521,_0xeb0590){return _0x1f1521(_0xeb0590);},'kBhPm':_0xf6fda2(0x1fe,'38#('),'kqOAx':function(_0x259e56,_0x4de2a8){return _0x259e56===_0x4de2a8;},'kgEWW':'YjcTC','sjJHU':function(_0x5d09b5,_0x5ed8de){return _0x5d09b5(_0x5ed8de);}};if(!_0x4fdef0)return;if(_0x40b3af[_0xf6fda2(0x13c,'3wt]')](Notify,0x0)){if($[_0xf6fda2(0x12c,'90Sy')]()){var _0x13eeba=_0x40b3af[_0xf6fda2(0x1fd,'K9wN')](require,_0x40b3af['kBhPm']);await _0x13eeba[_0xf6fda2(0x137,'WT#L')]($[_0xf6fda2(0x1c4,'37#1')],_0x4fdef0);}else _0x40b3af[_0xf6fda2(0xf8,'HO#0')](_0x40b3af[_0xf6fda2(0x181,'3^9D')],_0x40b3af[_0xf6fda2(0x1e9,'a)mV')])?$[_0xf6fda2(0x17b,'@@h&')](_0x4fdef0):(_0x1ed2db=_0x17be3c[_0xf6fda2(0x15e,'6u6I')](_0x11d4a2),_0x40b3af[_0xf6fda2(0x1fc,'kmvd')](_0x42d06c,_0x47c5e1[_0xf6fda2(0x134,'XA(a')]+_0xf6fda2(0x19c,'xvUW')+_0x36eb41[_0xf6fda2(0x191,'lJ9b')]+'》'+_0xf9f5a5[_0xf6fda2(0x1c6,'j[o0')]));}else _0x40b3af['sjJHU'](log,_0x4fdef0);}function randomString(_0x1c8317){const _0x9c7557=_0x3394bd,_0xf77a92={'vVpmf':function(_0x212aa8,_0x1b6b03){return _0x212aa8||_0x1b6b03;},'gfkGG':function(_0x1fc9f9,_0x32d91c){return _0x1fc9f9<_0x32d91c;},'wuFmV':function(_0xa1c0fa,_0x26f3b1){return _0xa1c0fa*_0x26f3b1;}};_0x1c8317=_0xf77a92[_0x9c7557(0x20a,'3^9D')](_0x1c8317,0x20);var _0x574875=_0x9c7557(0x14d,'azXT'),_0x671bb1=_0x574875['length'],_0x3793c2='';for(i=0x0;_0xf77a92[_0x9c7557(0x25a,'J6#7')](i,_0x1c8317);i++)_0x3793c2+=_0x574875[_0x9c7557(0x20d,'Ab1z')](Math[_0x9c7557(0x124,'1b]f')](_0xf77a92['wuFmV'](Math['random'](),_0x671bb1)));return _0x3793c2;}function randomInt(_0x44537d,_0x3d8697){const _0x1a37b6=_0x3394bd,_0x2c65b2={'PIqNS':function(_0x54058c,_0x25ab90){return _0x54058c+_0x25ab90;},'IlikI':function(_0x13fc62,_0x1c9790){return _0x13fc62*_0x1c9790;}};return Math[_0x1a37b6(0x169,'0o]z')](_0x2c65b2['PIqNS'](_0x2c65b2[_0x1a37b6(0x188,'[cES')](Math[_0x1a37b6(0x10d,'kmvd')](),_0x3d8697-_0x44537d),_0x44537d));}function _0x1c64(){const _0x37201d=(function(){return[_0xodY,'TjRsHFjVwiBaHqmiwS.RDGceVNoDUmWHe.YXvUt7==','WP8RWQVcTHC','5P2t6k2n566E5yUZ54Iz5Ok+5OMQ5yMO','WQRdQgFdOXCbamoPCSoDWQJcGq','pmk9WRLlW5K','WRhdLwVcKbK','jhhdJmo4W77dGG','aSoIvwGnW5P5WQpdTq','W6CdW4aHW4K','yLGLWQBdVq','W7CuW6uEW4VdKmke','g1GbWONdOW','phldGCo5W4O','b3G/WRtdNG','W4HBFSkHWO8','zCo4WPWZtq','WR/cRSkFW7tdUq','W5RdJNTMWQe','W7VcN0OoCq','Bmo/WOi4','FKCEWQJdOq','W47dL210WQO','W5/dQSoxECk1','mmkiWPnbW70','WQ0mva7dNa','W78EeIjqWR3dUGCmW5JcS3JcKmkJWOtdGtnzWQVcO09dvmo2rmkCBLBcN8oFnMxcJsflt0FdSXqYWP/dHCk/vCorW5JdVmoaiSkmWRTiW40xWOSuWOlcIYhcRSka','W6VOJ43LJAJNROy','W6JcKfuFDW','WQqRW7xcM8k0','w8omWOe2wa','nrq5rJqKur4DW4fZDmodW45AW7dcH8k6W5ZdQmopW6FcMGO','E8o3WPe3rcS','b8kgWPn3Eq','W5tdJSopt8kw','WPxcMCk6WPbTW6xdSYDeWOa7W5rzoSoxWPiSFWWvmaWWW6mDWPldHaOzpZPIW64FvwzAEmkLWOJdPMiJq8okW48XW6S9WQFdQdpdL0hcT1aoCmkvW77cR8oDumow','kcvoWORcTLtcI0/dU8kYumkiW7VcUSk3FCkkW7FdR8oKW70xW6ldG8kAl8o/ssBcISkyzCkwiCkoW7Ciw8kgDGVcQmoCmmkfWOfwWOv8ArldOCk0tCk9cmoWW5ZcISoprSk6uMC','WQC1W5eSW7BdPCkO','WRWBW5FdNG','cwHc','5P6K6kYq56sQ5yUH5OIo5yU977YN5B+E5yUB56sm5yM377Ya','W6BdQ8kyWOldNa','F8owWP8/uG','Deqw','W4lcM3ykvN4','W7ldK31PWPG','yZ1pW5ldSG','WQTpWO0aW4S','W6zeW4TRWQi','AXC/ktO','b8oUW79JW7S','W4NdOxHbWQi','hWaEwee','W5hdSM1ZWOi','WQdcKmkHW7JdKW','hrjVW4ZdJWRcPa','W5CwW6GqW7O','ErhdNxaZ','W4ddVmoFxCkV','WOhOJ5hLJjtNRle','WPyyWPxcTsG','BmoIcx4h','WQu4zmkZW4O','FsrWW7RcHJFcJKr4hc4Ucmk0WQpdVCoMDHe+xEwgSoAlMEwiIha','WRJcM8kOW5ddTq','W7RdMCoWEmkOW7O','W6/dOCkmWRBdIW','WPK7W5ldJSkJ','te5ltSog','gmkgxmkvlq','W7xdK3P3W6i/W4yvW5i2','W5pdHxjMWR0vW48iWOO+Cfrjz13cUruaE0OsWONcLsNdISoxpbK','mmkwWQVcQg8','AfPktSo8','w8o/awa0','W7ZdMmoxCmkLW7e','W4zvxEkaN+kdNUkbVokdGoobSq','W7JdMmo+','c+s5KoI2G+wpNx9zWQ3dIeBcLwrfEmktW4TxW6/dI04bAmkbrrW','fYTmWRxcTW','oNBdGmoTW7NdMSkpymkTWRhdTCktew7cLKuoW79zWORcRw0qW7C9p3FcPq','AuicW6W','WQWFW4O','m2tdHmoGW7ldOSkdC8oT','hxDQ','W4FdI8koWOZdNG','WOtcK8kKW5BdMW','WRHIW408W4SZWPvAWQ3cLZ/dTCkW','W645WP9LWO8','W7ORWPDTWOS','zCoI5lUD55sr6k+l6isa6koM5yAl6zsb6ywr5yAQrG','lfyEW68CWQC4','s8os44ov','W7RdPCorzCkn','WQtdMCobgCkaW7ZNPQxLI4BMNBNORA1uEWWRW7tcRa','WO/cUSkFW5JcUSkU','pLbrrCol','44kd776g5P+f5AkP5yEX5yYJ6ysaW4j6W5VcNglcHCkp','jrW5qN0bvX8i','WRRdV2BcJYe','WQTS44osEx1OvmkF44ouWRPXW6jGWRhcNmkBW5XBW5H7W5dcG8kjWPxOV47MMRmu5P+a6k2056Yz5yUL54MH5Oo6aUI+MowyIXJdNIxcOY0cDwWEa1fzp8oTjmoguCoo','tfyJW6C+','fIK7BN0','FfeIWOZdTW','WQtdUw3dOq0C','5P6G6kYS566U5yIj54Qk5OoR5OQ65yMN','WP1G44g2nKBdPCkGt+obSmkwW6mKW5/dTCoCWOGGcCoLW6zCgGdcRoI/ToABHY/NRytLI5BcLUI+JUwBKSohi1bdvCkPshVdH8kpW6mrW4pcHmkXWPqWW5W','jZroWQ7cRapdGq','W4ldMmkxWOmB','x8o1WR5PEa','W4KdWQn5FxHs','mmk7w8k7nq','kmkbWRz+CG','krncW7/cPmkEjSoWcmocWR4qW4i','W7xdVCkBWQCFWPRcTSonC8ohWOWHWQVcGCoSW604W4OqWPtdMmkesMfUW5LQW6JdGCkO','WQC+vCk3W5W','W7ZdVCkcWQC','W4rvW5DIWQG','W4xcTc7dMmoKvW','WO/cQ8kkW4JcRSkPfq','aCoHvwq6','WRKFW5/dJSk3WQnpW4u','oNBdIG','BJFdSNmm','WOWvECkoW6u','W4pdM8kgW7S','WQe/WQhcIHq','iHSJxG'].concat((function(){return['WPldTgNcGSk6hmkhCcOhW6ddTW','5P2t6k2n56sp5yUf5AAE6lAA77225y2O5zUd5PIw772R','WQuGW5hcJq','W53cNCkYD8oi','WQxcHCkGAhu','qbjLW7O','W6qOWPW','WPBcH8kIx3ZcSqu','5lUNW6pcS8o6WP3MIjpLIzrYsa','W4PvECk8WO4','WP/cGSk0W5ldSq','W5dcISo0WPddU8kY','W5/dK8kRWRSU','aCo/W6nqW7W','cxT5W5Lqhq','E2iWW5aK','vNW5W4CU','BSoPWROUuW','zmoJha','WRDg5lMR55w66k+u6iwT6kkz5ywB6zAm6ywM5ywhoa','W5XBEmkZ','WRT0WPKTW7y','Bf5YDCoU','W4CdkZzx','W7G3WPztsG','kSkvWOdcSeK','gevjW65V','zCoTWPe','sbxdI146cSoK','ndHFWRlcRa','jCoSWPedFHJcM8oObSkuWOCEW7VdRCoZW4zeB8oaWPVcJJ3cGCklW68','WPVcMCkNW4NdQa','CvSiW6GUWOm','WRi8yG','e8o6mNG5','jCk8WRG','tfTdBmon','aSoIrNuwW44','aJKFw08','f3XGFSo8','W7qRW4iiW5a','pYCbzvm','F8ozlh0+','cNPiEa','iCkdWRjIW68','BX7dQh8Z','zCkcW6rFW7rKW71VW4alkqe','gCoDxKqk','C0OfWQ/dUq','W5PhW6biWRC','W4RdH1vGWOK','DNK5W74H','W6LpFSk0WQC','W4/dV35dWRW','W7SSkcPX','W7VcK2GFsG','B3jSw8oL','evBdNmoRW4m','DIykeWS','W7LCW4XGWOK','W4RcHCkirq','WQiPW4tcNSksW40','WQ4vWQ3cHJi','hgPqACop','dL/KUixNLRFORy/OHRJOOQlLHiJPL4xPHyhLHAa7','xqnKW7BdJa','E1GFW7eEWRGYW7CJW4K','BUoaI0f4W4JcKCoL44oHWOzaAmk6WQBdGCk6WQTOWRRcNmozW4qAmMhOVQ/MMzfo5P+o6kYX56wQ5yM2WQ7OR4BMSkddMtxcJSoxW6riWQTkW6tcKthcT353cSkbW6PeWOCZ','W7KUWQTVuq','W6FdN8kcWPqy','W7FdP+odNSkeE8k9WQLV44cMW5H0WP8nzmkpW5H0ivLjEr9UWRhOVQNMMPlcK+AEL+IVJ+ENOEwjNIBOViRLMQCan0OGW73dLmk6oNHgW5JdHd3dPY/dQSk0Aq','44ofpxpcOSoAW6hJG6mB6l6w5PIg5lYA55IL5ywW6yc+6lEJ5y+y5PwD57QUW7umW4q','fSoZu1ukW5b1WR/dOYlcJCk/W7XtlmkNWPW','AaqodH7cIWJdPGtdKLzkWRL8WOxdOY4TW6LmaSkLAJzdpsJcPmk9s8kOWQ/dQSoX','mSkgWQtcK2Sr','yEInHEwmK+EVIY/KUyGlW67dVCod5OMH5yQfE8or','W6ZcJtpdVCoz','AK4bWQVdSSojDW','A+s6H+I2SEwpJEocIZ3cJJ3cIwG','omozW6vtW7rNW5PMW40','566d5yQM5OIt5yMw772056Eu5yQyWPS','C11XCSoN','A8kGDSkteq','WPJcN8k8WO9S','W5VcPmoaWRxdMW','5lMDos7cRmkB5OIA5yISq2u','W4L+W4DlWRTUW7e','W5vsW4XkWOe','BSkEv8kxla','fg5wDq','WO/cJIW/W7HkWP4LW6i+qNOi','af5ruCob','W6SjWPfGWPi','W6C6WPzH','CmoCW7xdIs4','WOKJpNRcUW','5P2z6kYn56w15yUX5AA+6lE/77Ye5y2A5zIF5PQ4772t','DviFW6mzWOa','W5q8mXLN','W5Trx8kwWO0','WQJcPCkVWRvY','bwVdLmoRW6u','dN1sW5HwgmkCW4HGWO/cGYiOhW','WQ8GW4JcIq','jmkQWRfaW6VcOq','W5VdNmkh','WQfFvwasWR7cKgmTW6tcJM4','Cmo9W6SFWQJdU8o3CSklW7hcHSkg','t3uPW5i5','wSk0s8kwaSk0WRq','W7mvWQTWWPS','ymoYWO81yIq','Fr88gxWMsHjcW5b5ACowWOTFWQ3dImkXW5FdQmokW6hdGbWh','W4pcRSkwsCoE','jLnMu8oV','mSkszmkpaq','eSo+rNmIW4K','g2jUW5TCgSkrW5LAWPtcN2qSc3eD','jXO2dG','W5hcNmo9','EmkEvSkEnG','f2f5','W7pdHfDDWOG','f8kpWRXDBG','W4BcImkfsmo+WRC','WQWkW4RdR8ks','WRxcI8kt4Ocl4Oov4Oka4Ogc44gR','WO4xWQ4YFgTvWPNdQSoKi8kXo8oLW4BcICkccCklimkeW5NcMSoBFW'].concat((function(){return['A8o/fwqgW4JdT1TwWRu','6ls/5y+a44gH','imkhWRhcJ3eq','WQHkW64IW57dUSkMEq','W70vW68pW5BdSCkw','W7FcKw0hEG','zbeteHtdOK7cRHW','dSk5WO3cPf0','mCkACCksat/cQvhdKSoi','W4qrW5CuW6m','WQRcPCk7W5BdUG','yZBdQKCU','lSoyW6j3W5C','W6ThWOpcL8omW7CEWP1LFtaCW5y','W4mtWR9mWQW','44kXaSkNF21T44cWW5JOVjZMMQJKVkZNMzVLHlxPGAtOTOFLJzhMLPhNUQldN0ZdJq','W5pdNCksWQZdNq','a8kA44gRDrddUSoTvEoaQCo8k397g1HjjW3cM8ozW5aYDYhOVPJMMlCc56Yk5yM7W4FOVQtLMPdcHmkeASkGW5yKWQNdI8k/W63cGa7cPreIW5WBW6m','lmkUWRzlW6BcMSoQw8kd','WOiui2O','WQBcRSkoWOqgWP3cM8kB','WPJdGuddGIm','W7JdGSkfWO7dVW','dxn3W4m','W4VcNCoZWOpdQSkCyCkPWPO','h8oHumkRdSkLWPhcVG','W6qpeJzcW7pcTa','fNDWW5bbeq','WPixD8kdW5u','y11NacHXcum1W4PUySouWRi','j8kDya','AMLRx8o4ve4YECk3DSkQ','cNnSW4rq','n31KW55zfCkrWOigW5xdGwTUeu4BW7TuW5XGWQr3wSoIWOtcI8kzhsFdJZexW6akkeddOmoaW4b9W7iXW4SxeM4jW5aDawhcMKiGbrddHSoAWQFcGSoTqSoRfSoNW47cT8kgA8oQzCozWPBcT8oItXn/W5hcLeldIYHfwKKWEI7cUgZdT8o5WQW8WOK+W7VcVmk1W6JdRqCBWQuynSohWODtmmoohSotW4SwWQpdKSoUt0qJWOzEWOJdKCotidT9u27cUKxdP8oaWQXtWPWXbmoggSkrWQtcVHBdLCkVW6BcTHtcS8k0uCk2W4JcVvhdOfbhW7OhWPpcOmkQxJDEoa','s+odOSkHWOj8f0ZJGPZcQ8oEtcD8W4ZdIW7dQdmdW5H5drna6lYU5PQ0hEACR+IUGUEUTUwlSUElGUAbMmkO6k2d5RcDimoTW4xcT8kWWQNcOrLRW63cNmkFW7ewWOJdJZxcGCoFyW','WPKcW47dQ8kl','WOZcRCkrW4JcTq','W4OxWO1Cya','ACooWQibCW','naeIC3KKvG','5PYv6kYk566U5yIQ54QR5Oot5AwC6lwd776Y5y+P5zQd5PUv77+N','WRmGW4VcImk8W5q','aWGuDui','56+a5yQg5AsU6lsI77+d5y+H5zMk5PMt776+','zcKpltK','gSknWO9TW7O','WP/dUw3cVaT8W6ZdNZZcQCoZ','WQSBW64qW4ldKmkh','uSoKWOa9ua','W5ZcItZdImoh','imkeWQzIW7y','W5KdlaP1','W7RdSmkwWQ4RWPa','kSkFB8kqjZa','Ar4EgXxdVKe','fCobt3SN','WOWiqSkoW70','q8o1WOX9wa','oSkUWRfdW7dcPa','W5ldR8oAA8km','WPtdK0RcJGK','W7BdVCkBWQm','ogFdHCoaW6i','W6VcGtNcU1LpemkGimklW7ddKJH7WPOOW5jYd8kxt3CwFmoHoKebs1/dUfX/WR/dICofp8kMW5CFa8oYr8kmjxaUka','fuPCBSod','W5VdRK9EWOm','ESobiSoeu2NcMx7dJCoIW7Co','W60WWRn+wq','5lUmvtrGW6RMIBJLIyTbWQy','W4tdISkqWQ/dJSoChW','wWLMW5FdOa','WRVdVuFcRr4','WPNcHSk0F2xcNqS','WQNcRCk3W6VcNG','WOmBy8kgW4G','ECoLchK','EbxdTL0C','W5ZcGX3dUCok','W7anpGfg','A04fWQpdSSoECW','cxf8u8oc','bCo3l2qU','WQtcOCkHWQ5u','WO8lW6ZcU8kg','5P6T6kYT566H5yIx54IP5Ooi5OQt5yQJ','pti7dCk6h1eNrCkmwmkJW6a','W4ZcRSk5uSoo','nCkVWQjkwq','W5ZdMCkoWQJdVa','WQijW7ddHCkvWQ8','W5pcUmoIWQpdNa','W7RdLCoTjYddSUw9REwMREocRUETMKm','W5vEhf3cHw7dN8kVduNdS2n6WOhLVAdLIPlNIkRMNQ3VV4S','W4OdWQDTnwTnWPhcS8oI','WR0swW/dLW','WPGWW7RdRSk2','WP85pg3cOa','WQJdPgRdSGeCwq','W7mIpcfB','W5hdICkFWRqc','W5n1W41kWO1oW6ngcMa','W7bZWPZdLmoQWONdQYtdONyrW60J','ASo8fgG3','W5LXESkQWPK','lCk2WQVcGx8','WPxcM8kaWO9r','eLGuWPtdUa','wb/dKu4+emoX','sLShW4FdUfpcMv3cTCoQh8odWQ/dPmoVn8osWQNcUSk4WRqeWRZcKCokpCk1dc/cHSohpmkBESkcW7Prx8oEkLFdSmkhnCkxWOPAWPrZovpcJoIhI+ADJoAkVoIGTSkXWPZdJ+wpTUs6GUAuUoMxIYpdJghdVvpcRulVVli','W6xdImoutSkj','CWawfXK','WQa3CSkLW4NdR8kCxIS','nCk6WOrTza','W7ZcMZddOCoF','Af4cWQ8','WOOSWOVcQbe','W4BcIMWDusZcQaFdOmoXiCkmW4pdTZ7dTSkjDbVcSxxcPCoNkmoVqq8VF8k3D8ocECkUWO3cTe5Kya1NvSkjW4CmpmkJW4ZcLxJcPmkHd8kIW5SnW5TiW5qset9jWRy','yCo8aN02W7m','56+i5yQF5OUW5yMC776J56wq5yM8W5W','mNFdN8oJW7K','rIT0W7/cGJRcGZiYEuP8yq','baujwwi','WOLOWQq7W6SzW4uPWP3cMhqxamkkWRBcOe3dLSkKW6/cMg/dUtv4W7ZdOglcTWD4umkCfCoRva','WPZcLmkzW73dLq','W4GDW6KnW6u','5P2t6k2n566E5yUZ54Iz5Ok+5Awl6lEs77YV5y6M5zQr5PME77+A','WORdTxFcOJm'];}()));}()));}());_0x1c64=function(){return _0x37201d;};return _0x1c64();};function timestampMs(){return new Date()['getTime']();}function timestampS(){const _0x1ee82a=_0x3394bd,_0x99326f={'lptlr':function(_0x4bc614,_0x4868e8){return _0x4bc614/_0x4868e8;}};return _0x99326f['lptlr'](Date[_0x1ee82a(0x243,'oHf[')](new Date()),0x3e8);}function poem(_0x15acfa=0x3*0x3e8){const _0x3dbad9=_0x3394bd,_0xacfe62={'GieFY':_0x3dbad9(0x1f6,'Wl^!'),'BWhOe':_0x3dbad9(0x11c,'Hqt6'),'iEIGq':_0x3dbad9(0x228,'P2l6'),'qVtEw':function(_0x369893,_0x429562){return _0x369893(_0x429562);},'CUpvj':function(_0x3a73a0){return _0x3a73a0();},'CVUKD':'lMvHN','obhLi':_0x3dbad9(0x144,'j[o0')};return new Promise(_0x201e92=>{const _0x3f3e83=_0x3dbad9,_0x534431={'ggXSe':function(_0x52cc35){const _0x4df717=_0xd2a8;return _0xacfe62[_0x4df717(0x136,'37#1')](_0x52cc35);}};if(_0xacfe62[_0x3f3e83(0x232,'[I[F')]!==_0xacfe62[_0x3f3e83(0x111,'tc8T')]){let _0x3873f3={'url':_0x3f3e83(0x219,'3^9D')};$[_0x3f3e83(0x1a4,'QR12')](_0x3873f3,async(_0x813a8,_0x4b1553,_0x2d764e)=>{const _0x30731b=_0x3f3e83;try{if('PWOmW'===_0xacfe62[_0x30731b(0x1b3,'UQsC')])_0x2d764e=JSON[_0x30731b(0xf3,'QR12')](_0x2d764e),log(_0x2d764e[_0x30731b(0x1ec,'K9wN')]+'\x20\x20\x0a————《'+_0x2d764e['origin']+'》'+_0x2d764e[_0x30731b(0x252,'a)mV')]);else return _0x1daf7b(_0x21206a);}catch(_0xa0f357){log(_0xa0f357,_0x4b1553);}finally{_0xacfe62['BWhOe']!==_0xacfe62[_0x30731b(0x10f,'UQsC')]?_0x201e92():_0x534431[_0x30731b(0x121,'[I[F')](_0x234752);}},_0x15acfa);}else _0xacfe62['qVtEw'](_0x503c47,_0x179cc2);});}function modify(){const _0x111eaf=_0x3394bd,_0x44b9aa={'GNaCz':function(_0x3e3ce6,_0x38fa87){return _0x3e3ce6(_0x38fa87);},'IPtGf':function(_0xf063eb,_0x3e0ef5){return _0xf063eb+_0x3e0ef5;},'BqIar':function(_0x18fd9b,_0x4f5b16){return _0x18fd9b*_0x4f5b16;},'NmeMP':function(_0x2bfe9a,_0x3ae555,_0x1fc2b3){return _0x2bfe9a(_0x3ae555,_0x1fc2b3);},'MnNnY':function(_0x295119,_0x2d20f7){return _0x295119===_0x2d20f7;},'Jagzb':function(_0x17b07a,_0x556582){return _0x17b07a===_0x556582;},'IhqQB':_0x111eaf(0x1e0,'@@h&'),'BLfmc':'读取文件失败！','yyAZz':_0x111eaf(0x246,'Wl^!'),'xGLfb':_0x111eaf(0x240,'Wl^!')};fs[_0x111eaf(0x1c9,'90Sy')](_0x44b9aa[_0x111eaf(0x168,'kmvd')],_0x111eaf(0x1cd,'QuPW'),function(_0x3741f4,_0x13b6a2){const _0x5f3ecc=_0x111eaf,_0x42cd61={'wHifs':function(_0x53319a,_0x2aeae7){const _0x1bbbb2=_0xd2a8;return _0x44b9aa[_0x1bbbb2(0x1a6,'J6#7')](_0x53319a,_0x2aeae7);},'JHDHS':function(_0x407ecd,_0x4c3a49){const _0x523a14=_0xd2a8;return _0x44b9aa[_0x523a14(0x222,'P2l6')](_0x407ecd,_0x4c3a49);},'puSkv':function(_0x46191e,_0x1ffdb9,_0x139dd2){const _0x42e3ee=_0xd2a8;return _0x44b9aa[_0x42e3ee(0xe9,'QuPW')](_0x46191e,_0x1ffdb9,_0x139dd2);}};if(_0x44b9aa[_0x5f3ecc(0x184,'Wl^!')](_0x5f3ecc(0x171,'q3&('),_0x5f3ecc(0x242,'21[a'))){if(_0x3741f4)return _0x44b9aa['Jagzb'](_0x44b9aa[_0x5f3ecc(0x10c,'Jap!')],_0x5f3ecc(0x257,'a)mV'))?_0x44b9aa[_0x5f3ecc(0xef,'RgSq')](log,_0x44b9aa['BLfmc']+_0x3741f4):_0x2c0ba9[_0x5f3ecc(0x1d9,'U7W^')](_0x42cd61[_0x5f3ecc(0x17a,'Byxj')](_0x42cd61[_0x5f3ecc(0x25e,'$%p9')](_0x5a0a03[_0x5f3ecc(0xfc,'Ab1z')](),_0x3ab334-_0x509e01),_0x3d2ffa));else{var _0x31b77e=_0x13b6a2[_0x5f3ecc(0x21d,'APw1')](/regular/g,string);fs[_0x5f3ecc(0xeb,'M6sF')](_0x5f3ecc(0x24f,'HO#0'),_0x31b77e,_0x44b9aa[_0x5f3ecc(0x159,'[cES')],function(_0x1c8776){if(_0x1c8776)return _0x44b9aa['GNaCz'](log,_0x1c8776);});}}else _0x42cd61['puSkv'](_0x859dd7,_0x5f3ecc(0x1d1,'QuPW')+_0x50abc1['error'][_0x5f3ecc(0x1f3,'kmvd')],!![]);});}function getVersion(_0x4fedcd=0x3*0x3e8){const _0x148f18=_0x3394bd,_0x291385={'VghvV':function(_0x4ee5f7,_0x1b94ac){return _0x4ee5f7==_0x1b94ac;},'jQCsc':function(_0x13e584,_0x1fd094){return _0x13e584+_0x1fd094;},'Lcsqh':_0x148f18(0x24c,'5(Y@'),'EZfmM':function(_0xc6cd63,_0x57ba10){return _0xc6cd63+_0x57ba10;},'FhJSt':function(_0x512452,_0x4a4b97){return _0x512452<_0x4a4b97;},'oWxTS':function(_0x45ee52,_0x4ed01b){return _0x45ee52(_0x4ed01b);},'oXApL':_0x148f18(0x1ee,'Jap!'),'hGcXF':function(_0x52bcd9,_0x56ebbd){return _0x52bcd9===_0x56ebbd;},'wctkK':_0x148f18(0xf7,'Hqt6'),'uCmVp':function(_0x138f95,_0x1cb781){return _0x138f95!==_0x1cb781;},'UGkqH':_0x148f18(0x120,'j[o0'),'Rnygn':'vDLDI','gKZBT':'ec0169412a74e01452f78301442178ddb225e947','FSqgH':'BUeVz'};return scriptVersionCheck=![],new Promise(_0x227c25=>{const _0x2a89dd=_0x148f18,_0x36c876={'RkxZl':function(_0xb83ddd,_0xce60e4){const _0x47fb7f=_0xd2a8;return _0x291385[_0x47fb7f(0x14f,'[cES')](_0xb83ddd,_0xce60e4);},'aFWBO':function(_0x576648,_0xe16f12){const _0x25baf0=_0xd2a8;return _0x291385[_0x25baf0(0x1f8,'[cES')](_0x576648,_0xe16f12);},'ptTTX':_0x291385['Lcsqh'],'yClSx':function(_0x9ab6b2,_0x2fbc6e){return _0x291385['EZfmM'](_0x9ab6b2,_0x2fbc6e);},'VkYoz':function(_0x4e7ada,_0x38d091){return _0x291385['FhJSt'](_0x4e7ada,_0x38d091);},'vIWlK':function(_0x4efbe8,_0x3e82f0){const _0x1269d6=_0xd2a8;return _0x291385[_0x1269d6(0x12d,'M6sF')](_0x4efbe8,_0x3e82f0);},'SoSwC':_0x291385['oXApL'],'dHZsx':function(_0x117a4b,_0x489c65){return _0x291385['hGcXF'](_0x117a4b,_0x489c65);},'eAYSC':_0x291385[_0x2a89dd(0x151,'UQsC')],'YxlAZ':function(_0x2258c6,_0x29f710){const _0x5b7fa5=_0x2a89dd;return _0x291385[_0x5b7fa5(0x215,'37#1')](_0x2258c6,_0x29f710);},'euuMM':_0x291385['UGkqH'],'dYuST':_0x291385[_0x2a89dd(0x235,'tc8T')],'lFNxR':function(_0x31b45b,_0x1538b1){return _0x31b45b!=_0x1538b1;},'HLiMR':_0x291385[_0x2a89dd(0x224,'M6sF')],'EMWYS':function(_0x2f2beb,_0xc49019){return _0x2f2beb!==_0xc49019;},'tqJgF':_0x291385[_0x2a89dd(0x209,'tc8T')],'trflF':'TYIzq'};let _0x3658e5={'url':'https://ghproxy.com/https://github.com/Shawn220528/scripts/blob/main/version.txt'};$['get'](_0x3658e5,async(_0x3accde,_0x1b70ef,_0x2d6723)=>{const _0x12dd24=_0x2a89dd,_0x4cae53={'ZKtXa':function(_0x4331e8,_0x4d164b){const _0x5aa026=_0xd2a8;return _0x36c876[_0x5aa026(0x14c,'Wl^!')](_0x4331e8,_0x4d164b);},'AeVPW':function(_0x5a3695,_0x1b3e99){return _0x5a3695*_0x1b3e99;},'mOfGN':function(_0xec5801,_0xaab5b2){const _0x1fefcc=_0xd2a8;return _0x36c876[_0x1fefcc(0x1fa,'S6qC')](_0xec5801,_0xaab5b2);},'zsTan':_0x36c876[_0x12dd24(0x11f,'K9wN')]};if(_0x36c876[_0x12dd24(0x135,'[I[F')](_0x36c876[_0x12dd24(0x13d,'6u6I')],_0x36c876['eAYSC']))try{if(_0x36c876['YxlAZ'](_0x36c876[_0x12dd24(0x25c,'38#(')],_0x36c876[_0x12dd24(0xff,'3^9D')])){if(_0x36c876[_0x12dd24(0x206,'[I[F')](_0x2d6723['indexOf'](_0x36c876[_0x12dd24(0x21c,'j[o0')]),-0x1)){if(_0x36c876[_0x12dd24(0x1cb,'K9wN')](_0x36c876[_0x12dd24(0x202,'3$Di')],_0x36c876[_0x12dd24(0x155,'kmvd')]))scriptVersionCheck=!![];else{_0xe778b9=_0x118504||0x20;var _0x2edb00='QWERTYUIOPASDFGHJKLZXCVBNM1234567890',_0x5370a5=_0x2edb00[_0x12dd24(0x238,'kmvd')],_0x28ecb2='';for(_0x35096b=0x0;_0x4cae53[_0x12dd24(0x1b0,'21[a')](_0x472807,_0x5e5cd5);_0x59a8dd++)_0x28ecb2+=_0x2edb00[_0x12dd24(0x244,'$%@J')](_0x30f83e[_0x12dd24(0x165,'APw1')](_0x4cae53[_0x12dd24(0x172,'lJ9b')](_0x4fb637['random'](),_0x5370a5)));return _0x28ecb2;}}}else _0x36c876[_0x12dd24(0x189,'K9wN')](_0x3b1c13[_0x12dd24(0x226,'WT#L')](_0x5f093d),-0x1)&&(_0x19d9b5=_0x36c876['aFWBO'](_0x4e2ffd+'@',_0x3b4cfe),_0xe24f73[_0x12dd24(0x122,'APw1')](_0x2796a6,_0x36c876[_0x12dd24(0x143,'q3&(')]),_0x144e1b=_0xc50a9c[_0x12dd24(0x17f,'azXT')]('@'),_0x5e3139[_0x12dd24(0x1d6,'$%p9')](_0x36c876['yClSx']('【'+_0xa92e9c[_0x12dd24(0x237,'Ab1z')]+'】',_0x12dd24(0x18b,'HO#0')+_0x4b7d98[_0x12dd24(0x1db,'M6sF')]+_0x12dd24(0x225,'6u6I')+_0x1eb163+_0x12dd24(0x210,'Jcih'))));}catch(_0x47f6f8){$['logErr'](_0x47f6f8,_0x1b70ef);}finally{_0x227c25();}else{var _0x238289=_0x57e937[_0x12dd24(0x118,'QuPW')](/regular/g,_0x388a8e);_0x4a76ce[_0x12dd24(0x1b2,'Wl^!')](_0x4cae53[_0x12dd24(0x15a,'APw1')],_0x238289,'utf8',function(_0x156786){const _0x319070=_0x12dd24;if(_0x156786)return _0x4cae53[_0x319070(0x1c0,'q3&(')](_0x4be0b9,_0x156786);});}},_0x4fedcd);});}var version_ = 'jsjiami.com.v7';

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