/**
 作者：shawn
 日期：2023-11-25 去除验证
 南方航空app 进去手动签到
 抓包https://wxapi.csair.com/marketing-tools/activity/join?type=APPTYPE&chanel=ss&lang=zh
 变量格式：export nfhkCk='cookie1'@'cookie2' 多账户 换行 或者 @ 分割
 定时1天一次
 cron: 15 12 * * *
 [task_local]
 #南方航空
 [rewrite_local]
 https://wxapi.csair.com/marketing-tools/activity/join?type=APPTYPE&chanel=ss&lang=zh url script-request-headers https://github.com/Shawn220528/scripts/blob/main/nfhk.js
 [MITM]
 hostname = wxapi.csair.com
 */
const $ = new Env('南方航空');
var _0xod6='jsjiami.com.v7';const _0xc5493b=_0x4d12;(function(_0xfa39df,_0x3ad4e3,_0x377280,_0x54a710,_0x2eb0a3,_0x59a251,_0x1de881){return _0xfa39df=_0xfa39df>>0x6,_0x59a251='hs',_0x1de881='hs',function(_0x292b9b,_0x421250,_0x532ee1,_0x327747,_0x275cfe){const _0x2a682e=_0x4d12;_0x327747='tfi',_0x59a251=_0x327747+_0x59a251,_0x275cfe='up',_0x1de881+=_0x275cfe,_0x59a251=_0x532ee1(_0x59a251),_0x1de881=_0x532ee1(_0x1de881),_0x532ee1=0x0;const _0x138a2b=_0x292b9b();while(!![]&&--_0x54a710+_0x421250){try{_0x327747=parseInt(_0x2a682e(0x1e8,'%^6u'))/0x1+-parseInt(_0x2a682e(0x18c,'aZ2$'))/0x2*(parseInt(_0x2a682e(0x1cf,'F*fk'))/0x3)+-parseInt(_0x2a682e(0x126,'jA7o'))/0x4+parseInt(_0x2a682e(0x1d2,'cPEU'))/0x5*(parseInt(_0x2a682e(0x1e0,')BB@'))/0x6)+parseInt(_0x2a682e(0x176,'F*fk'))/0x7+-parseInt(_0x2a682e(0x208,'CzQp'))/0x8*(parseInt(_0x2a682e(0x184,'b(HS'))/0x9)+-parseInt(_0x2a682e(0x16c,'il@k'))/0xa*(-parseInt(_0x2a682e(0x133,'p[tx'))/0xb);}catch(_0x9a130f){_0x327747=_0x532ee1;}finally{_0x275cfe=_0x138a2b[_0x59a251]();if(_0xfa39df<=_0x54a710)_0x532ee1?_0x2eb0a3?_0x327747=_0x275cfe:_0x2eb0a3=_0x275cfe:_0x532ee1=_0x275cfe;else{if(_0x532ee1==_0x2eb0a3['replace'](/[OMVudBygARlnGCHJwEkYf=]/g,'')){if(_0x327747===_0x421250){_0x138a2b['un'+_0x59a251](_0x275cfe);break;}_0x138a2b[_0x1de881](_0x275cfe);}}}}}(_0x377280,_0x3ad4e3,function(_0x40aaed,_0x1c8062,_0x9a40e7,_0xbda230,_0x2dc1d9,_0x2ca1b0,_0xbb8fdf){return _0x1c8062='\x73\x70\x6c\x69\x74',_0x40aaed=arguments[0x0],_0x40aaed=_0x40aaed[_0x1c8062](''),_0x9a40e7='\x72\x65\x76\x65\x72\x73\x65',_0x40aaed=_0x40aaed[_0x9a40e7]('\x76'),_0xbda230='\x6a\x6f\x69\x6e',(0x148f01,_0x40aaed[_0xbda230](''));});}(0x2fc0,0x71aed,_0x2ed9,0xc1),_0x2ed9)&&(_0xod6=`\x315`);const {log}=console,Notify=0x1,debug=0x0;let scriptVersion=_0xc5493b(0x1c8,'4iA6'),scriptVersionCheck=![],nfhkCk=($['isNode']()?process[_0xc5493b(0x1ec,'9*TX')][_0xc5493b(0x187,'cPEU')]:$[_0xc5493b(0x17e,'U1Bl')](_0xc5493b(0x1ed,'ZV4B')))||'',nfhkCkArr=[],msg='',currTime='',userAgent=_0xc5493b(0x179,'rUpU');!(async()=>{const _0x5648bf=_0xc5493b,_0x59ffa7={'LkFkG':function(_0x11cf44,_0x1d64bc){return _0x11cf44==_0x1d64bc;},'JFkxX':function(_0x3d1c9f,_0xa0d75a){return _0x3d1c9f+_0xa0d75a;},'wRROh':_0x5648bf(0x1e6,'oZh['),'CMTXE':function(_0x502290){return _0x502290();},'vGmSl':function(_0x5c3a71,_0x203aca){return _0x5c3a71!==_0x203aca;},'iiVvJ':function(_0x2ed57e,_0x1e4fc9){return _0x2ed57e!==_0x1e4fc9;},'wXXrM':'oraKn','vshMv':function(_0x3382e0,_0x4fbe00){return _0x3382e0===_0x4fbe00;},'Eenon':_0x5648bf(0x122,'lRld'),'KrKAE':'ftSyr','aUFEf':function(_0x15b7a5,_0x2bed00){return _0x15b7a5+_0x2bed00;},'ChrcR':function(_0x126c25,_0x12dc37){return _0x126c25*_0x12dc37;},'OqfvA':function(_0x2bae59,_0x464d55){return _0x2bae59*_0x464d55;},'GufJz':function(_0x311fc1,_0x27a0e6,_0x4d5288){return _0x311fc1(_0x27a0e6,_0x4d5288);},'HnthU':'OZiHi','YJHgX':function(_0x5e33b3,_0x4ffeaf){return _0x5e33b3+_0x4ffeaf;},'vExzN':function(_0x2b6ecf,_0x3e7293,_0x2ba36a){return _0x2b6ecf(_0x3e7293,_0x2ba36a);},'mSFLs':_0x5648bf(0x1f1,'BXos'),'yRGLJ':function(_0x3383a3,_0x5f1eb2,_0x483a48){return _0x3383a3(_0x5f1eb2,_0x483a48);},'JbtCG':function(_0x4e76db){return _0x4e76db();},'PYjdU':function(_0x4a6efe,_0x35b8c4){return _0x4a6efe(_0x35b8c4);}};if(_0x59ffa7[_0x5648bf(0x19d,'#1r!')](typeof $request,_0x5648bf(0x12d,'ZV4B'))){if(_0x59ffa7[_0x5648bf(0x11a,'CC@@')](_0x59ffa7[_0x5648bf(0x1da,'jA7o')],_0x5648bf(0x194,'&gP*'))){const _0x114395=_0xbb4462[_0x5648bf(0x15f,'BXos')][_0x5648bf(0x1ca,'kHK)')];if(_0x25589c){if(_0x59ffa7[_0x5648bf(0x1c6,'rUpU')](_0x3b9dae['indexOf'](_0x114395),-0x1)){_0x4a0258=_0x59ffa7[_0x5648bf(0x134,'hfG(')](_0x59ffa7[_0x5648bf(0x1c4,'CC@@')](_0x455584,'@'),_0x114395),_0xf13799[_0x5648bf(0x20c,'CC@@')](_0x150e3e,_0x59ffa7[_0x5648bf(0x11f,'6Q*U')]);let _0xe1b7bf=_0x56b4fd[_0x5648bf(0x181,'kHK)')]('@');_0x1016a6[_0x5648bf(0x142,'UUq4')]('【'+_0x39a005['name']+'】'+(_0x5648bf(0x1f0,'p[tx')+_0xe1b7bf[_0x5648bf(0x1bb,'YQit')]+'个\x20ck\x20成功:\x20'+_0x114395+_0x5648bf(0x1b0,'b(HS')));}}else _0xa124d6['setdata'](_0x114395,_0x59ffa7['wRROh']),_0x3d6790[_0x5648bf(0x137,'P4(5')](_0x59ffa7['JFkxX']('【'+_0x1d67c5[_0x5648bf(0x114,'r@fg')]+'】',_0x5648bf(0x1ce,'aZ2$')+_0x114395+_0x5648bf(0x14b,'hfG(')));}else await GetRewrite();}else{if(_0x59ffa7[_0x5648bf(0x1ba,'H9LY')](_0x59ffa7[_0x5648bf(0x1f9,'P4(5')],_0x59ffa7[_0x5648bf(0x163,'pr*q')]))return!![];else{if(!await _0x59ffa7['CMTXE'](Envs))return;else{currTime=new Date(_0x59ffa7[_0x5648bf(0x115,'2Sg5')](new Date()[_0x5648bf(0x1a6,'[ieq')](),_0x59ffa7['ChrcR'](new Date()[_0x5648bf(0x127,'f[46')]()*0x3c,0x3e8))+_0x59ffa7[_0x5648bf(0x1d0,'#1r!')](_0x59ffa7['ChrcR'](0x8*0x3c,0x3c),0x3e8))[_0x5648bf(0x177,'vix7')](),_0x59ffa7[_0x5648bf(0x166,'R0JF')](addNotifyStr,'\x0a\x0a=============================================\x20\x20\x20\x20\x0a脚本执行\x20-\x20北京时间(UTC+8)：'+currTime+_0x5648bf(0x13e,'#)ab'),!![]),_0x59ffa7['GufJz'](addNotifyStr,'\x0a============\x20当前版本：'+scriptVersion+'============',!![]),addNotifyStr(_0x5648bf(0x13a,'il@k')+nfhkCkArr[_0x5648bf(0x13c,'aZ2$')]+_0x5648bf(0x15e,'BXos'),!![]);debug&&addNotifyStr(_0x5648bf(0x190,'Q&PT')+nfhkCkArr,!![]);for(let _0x677cc5=0x0;_0x677cc5<nfhkCkArr['length'];_0x677cc5++){if('IVWDe'!==_0x59ffa7[_0x5648bf(0x11e,'jbqT')]){let _0x5e5628=_0x59ffa7['YJHgX'](_0x677cc5,0x1);_0x59ffa7[_0x5648bf(0x173,'sJmF')](addNotifyStr,_0x5648bf(0x130,'8Hu]')+_0x5e5628+'\x20个账号】=========\x0a',!![]),nfhkCk=nfhkCkArr[_0x677cc5],debug&&_0x59ffa7[_0x5648bf(0x1ee,'H9LY')](addNotifyStr,_0x5648bf(0x147,'pQl[')+_0x5e5628+_0x5648bf(0x17c,'YQit')+nfhkCk+'\x0a',!![]),await _0x59ffa7[_0x5648bf(0x19e,'%^6u')](delay),_0x59ffa7[_0x5648bf(0x1cd,'8Hu]')](addNotifyStr,'第'+_0x5e5628+_0x5648bf(0x113,'BXos'),!![]),addNotifyStr(_0x59ffa7[_0x5648bf(0x1c7,'PpLQ')],!![]),await $[_0x5648bf(0x1ac,'%jt2')](_0x59ffa7[_0x5648bf(0x16a,'cPEU')](randomInt,0xbb8,0x1770)),await _0x59ffa7['JbtCG'](doSignIn);}else _0x59ffa7[_0x5648bf(0x1ab,'uL32')](_0x270a39);}await _0x59ffa7['PYjdU'](SendMsg,msg);}}}})()[_0xc5493b(0x19a,'jA7o')](_0x27c79f=>log(_0x27c79f))['finally'](()=>$[_0xc5493b(0x153,'p[tx')]());function doSignIn(){const _0x4b61ba=_0xc5493b,_0x3d9315={'nLVag':function(_0x34410d,_0xbf12d6){return _0x34410d==_0xbf12d6;},'NOyJX':_0x4b61ba(0x12a,'CzQp'),'zzSmx':function(_0x2b0a88){return _0x2b0a88();},'nuCUu':function(_0x4ecad4,_0x2f35b2){return _0x4ecad4/_0x2f35b2;},'wVVkW':_0x4b61ba(0x188,'H9LY'),'pQaGr':function(_0x48f796,_0xbb2f3,_0x5843b7){return _0x48f796(_0xbb2f3,_0x5843b7);},'GJFZi':_0x4b61ba(0x165,'f[46'),'gAOba':function(_0x591322,_0x5208ad,_0x18e718){return _0x591322(_0x5208ad,_0x18e718);},'hxxvP':function(_0x2b929f,_0x53f96e,_0x1e6e93){return _0x2b929f(_0x53f96e,_0x1e6e93);},'mnpuu':function(_0xf53988,_0x1a260b){return _0xf53988==_0x1a260b;},'lIhLl':'0000','vXqzw':_0x4b61ba(0x125,'R0JF'),'KTxsF':'result','FGaAf':'HqyMb','dVxZJ':_0x4b61ba(0x140,'aZ2$'),'ytqle':function(_0x162842,_0x9f09ef){return _0x162842!==_0x9f09ef;},'JiJeN':_0x4b61ba(0x1e9,')BB@'),'dJugb':function(_0x221911,_0x10772b,_0x2b9235){return _0x221911(_0x10772b,_0x2b9235);}};if(!scriptVersionCheck){addNotifyStr(_0x4b61ba(0x1be,'BXos'),!![]);return;}return new Promise(_0x45c152=>{const _0x581786=_0x4b61ba,_0x533135={'ZaroV':function(_0x1a13a3,_0x430f00,_0x1cb56b){const _0x458c94=_0x4d12;return _0x3d9315[_0x458c94(0x16e,'hMVu')](_0x1a13a3,_0x430f00,_0x1cb56b);}},_0x43417f={'url':_0x581786(0x16d,'H9LY'),'headers':{'Host':_0x581786(0x213,'UUq4'),'Content-Type':_0x581786(0x168,'sJmF'),'Origin':_0x581786(0x209,'kHK)'),'Accept-Encoding':_0x581786(0x12b,'U1Bl'),'Cookie':''+nfhkCk,'Connection':'application/json,\x20text/plain,\x20*/*','Accept':_0x581786(0x14d,'f[46'),'User-Agent':''+userAgent,'Referer':'https://wxapi.csair.com/h5/sign/','Content-Length':'39','Accept-Language':_0x581786(0x146,'b(HS')},'body':'{\x22activityType\x22:\x22sign\x22,\x22channel\x22:\x22app\x22}'};$[_0x581786(0x1d4,'9*TX')](_0x43417f,(_0x1ff2f3,_0x2aa1af,_0x4763a1)=>{const _0x3852bf=_0x581786,_0x5241f8={'FKhzx':function(_0x441c39,_0x798c4f){return _0x3d9315['nLVag'](_0x441c39,_0x798c4f);},'JinED':_0x3d9315['NOyJX'],'zfzBF':function(_0x561802){const _0x19b783=_0x4d12;return _0x3d9315[_0x19b783(0x135,'kbF!')](_0x561802);},'rYOqL':function(_0x253231,_0x3a202a){const _0x4397e3=_0x4d12;return _0x3d9315[_0x4397e3(0x199,'BXos')](_0x253231,_0x3a202a);}};try{if(_0x3852bf(0x186,'sJmF')===_0x3d9315['wVVkW']){if(_0x1ff2f3)_0x3d9315[_0x3852bf(0x144,'@]0h')](addNotifyStr,_0x3d9315[_0x3852bf(0x15b,'BXos')],!![]),_0x3d9315[_0x3852bf(0x1ef,'R0JF')](addNotifyStr,JSON['stringify'](_0x1ff2f3),!![]),_0x3d9315[_0x3852bf(0x17d,'F*fk')](addNotifyStr,_0x1ff2f3,!![]);else{if(safeGet(_0x4763a1)){if('HKgxz'==='HKgxz'){let _0x11ffaf=JSON[_0x3852bf(0x1d5,'H9LY')](_0x4763a1);if(debug)_0x3d9315[_0x3852bf(0x1f7,'H9LY')](addNotifyStr,''+_0x4763a1,!![]);_0x3d9315[_0x3852bf(0x1c9,'il@k')](_0x11ffaf[_0x3852bf(0x1b1,'R0JF')],_0x3d9315[_0x3852bf(0x171,'lRld')])?_0x11ffaf[_0x3852bf(0x197,'9*TX')](_0x3d9315['vXqzw'])&&_0x11ffaf['data'][_0x3852bf(0x145,'kbF!')](_0x3d9315[_0x3852bf(0x1b2,'il@k')])?addNotifyStr(_0x3852bf(0x1b4,'hMVu')+_0x11ffaf[_0x3852bf(0x207,'2Sg5')][_0x3852bf(0x1c3,'WS!D')],!![]):_0x3852bf(0x20a,'il@k')!==_0x3d9315[_0x3852bf(0x1d3,'pr*q')]?addNotifyStr(_0x3852bf(0x143,'ycl(')+_0x4763a1,!![]):_0x34b970[_0x3852bf(0x185,')BB@')](_0x3852bf(0x169,'jbqT'))!=-0x1&&(_0x432f9a=!![]):_0x3d9315[_0x3852bf(0x1d6,'2Sg5')](addNotifyStr,_0x3852bf(0x1e4,'BXos')+_0x4763a1,!![]);}else{if(_0x5241f8['FKhzx'](typeof _0x592451[_0x3852bf(0x1e7,'#)ab')](_0x184d98),_0x5241f8[_0x3852bf(0x11c,'p[tx')]))return!![];}}}}else _0x533135[_0x3852bf(0x162,'kbF!')](_0x2aeb9b,_0x3852bf(0x204,'pr*q')+_0x290aef,!![]);}catch(_0x262f60){_0x3d9315[_0x3852bf(0x1d8,'ZV4B')]===_0x3852bf(0x1e3,'#)ab')?($[_0x3852bf(0x131,'P4(5')](_0x262f60,_0x2aa1af),$[_0x3852bf(0x17a,'%jt2')]($['name'],_0x3852bf(0x12f,'@]0h'),''+_0x262f60)):_0x5241f8[_0x3852bf(0x1cc,'rUpU')](_0x22078d);}finally{if(_0x3d9315[_0x3852bf(0x10d,'sJmF')](_0x3d9315['JiJeN'],_0x3852bf(0x172,'ycl(')))return _0x5241f8[_0x3852bf(0x13b,'8Hu]')](_0x5b9784[_0x3852bf(0x1f3,'pQl[')](new _0x47522c()),0x3e8);else _0x45c152();}});});}async function GetRewrite(){const _0x17c670=_0xc5493b,_0xf68bd9={'VDGCP':function(_0x212efb,_0x4e8815){return _0x212efb+_0x4e8815;},'yobtp':'nfhkCk','CSfMx':function(_0x159438,_0x5bbac0){return _0x159438+_0x5bbac0;},'gjkyn':function(_0x5020dc,_0x42afab){return _0x5020dc===_0x42afab;},'JTmLi':_0x17c670(0x141,'H9LY'),'wATgP':_0x17c670(0x11d,'R0JF'),'DXlem':function(_0x1f1b0d,_0x284981){return _0x1f1b0d==_0x284981;},'VzPMG':function(_0x4bf5c4,_0x472641){return _0x4bf5c4+_0x472641;},'hjWiC':function(_0x5e0b0f,_0xa2caac){return _0x5e0b0f+_0xa2caac;},'gCftu':'ZqdUF','ZZoGj':_0x17c670(0x148,'@]0h')};if($request['url'][_0x17c670(0x201,'CC@@')](_0x17c670(0x120,'#1r!'))>-0x1){const _0x4ec906=$request['headers'][_0x17c670(0x1f6,'jbqT')];if(nfhkCk){if(_0xf68bd9[_0x17c670(0x14e,'H9LY')](_0xf68bd9[_0x17c670(0x1a1,'hfG(')],_0xf68bd9[_0x17c670(0x1fc,'WS!D')]))_0x436201['msg'](_0x1b0e0e);else{if(_0xf68bd9[_0x17c670(0x1a0,'#)ab')](nfhkCk[_0x17c670(0x1a2,'&gP*')](_0x4ec906),-0x1)){nfhkCk=_0xf68bd9[_0x17c670(0x118,'8Hu]')](nfhkCk+'@',_0x4ec906),$['setdata'](nfhkCk,_0xf68bd9['yobtp']);let _0x5634f0=nfhkCk[_0x17c670(0x10f,'r@fg')]('@');$[_0x17c670(0x1b3,'BXos')](_0xf68bd9[_0x17c670(0x132,'%jt2')]('【'+$[_0x17c670(0x1b8,'pr*q')]+'】',_0x17c670(0x170,'8Hu]')+_0x5634f0[_0x17c670(0x161,'FVfV')]+'个\x20ck\x20成功:\x20'+_0x4ec906+_0x17c670(0x18d,'vix7')));}}}else{if(_0xf68bd9['gjkyn'](_0xf68bd9['gCftu'],_0xf68bd9[_0x17c670(0x19c,'p[tx')])){_0x319a2d=_0xf68bd9['VDGCP'](_0x27b37a+'@',_0x4dc211),_0xe4aee9[_0x17c670(0x121,'cPEU')](_0x223af1,_0xf68bd9[_0x17c670(0x1fa,'hfG(')]);let _0x1a0eb4=_0x20d6a0[_0x17c670(0x182,'il@k')]('@');_0x51e1b3[_0x17c670(0x1a4,'hMVu')](_0xf68bd9['CSfMx']('【'+_0x3957b4[_0x17c670(0x1a9,'%^6u')]+'】','\x20获取第'+_0x1a0eb4[_0x17c670(0x119,'2Sg5')]+'个\x20ck\x20成功:\x20'+_0x117d43+_0x17c670(0x124,'FVfV')));}else $['setdata'](_0x4ec906,'nfhkCk'),$[_0x17c670(0x17f,'%^6u')](_0xf68bd9['VDGCP']('【'+$[_0x17c670(0x18e,'CC@@')]+'】',_0x17c670(0x1c1,'9*TX')+_0x4ec906+'\x20,不用请自行关闭重写!'));}}}async function Envs(){const _0x1873b5=_0xc5493b,_0x185534={'dNKQL':function(_0x44cdfd,_0x1257f9){return _0x44cdfd+_0x1257f9;},'trLje':function(_0x526295,_0xb5afce,_0x22ea16){return _0x526295(_0xb5afce,_0x22ea16);},'SOyLx':_0x1873b5(0x1f2,')BB@'),'DUDqR':_0x1873b5(0x15a,'sJmF'),'FZuDd':function(_0x2dd3fb,_0x113d60){return _0x2dd3fb!=_0x113d60;},'fsAvP':'PZsrr'};if(nfhkCk){if(nfhkCk['indexOf']('@')!=-0x1)_0x185534['SOyLx']!==_0x185534['DUDqR']?nfhkCk[_0x1873b5(0x19b,')BB@')]('@')[_0x1873b5(0x11b,'f[46')](_0x3ebb1a=>{const _0x913020=_0x1873b5;nfhkCkArr[_0x913020(0x1b5,'aZ2$')](_0x3ebb1a);}):(_0x47e187[_0x1873b5(0x1ff,'BXos')](_0xafa584,_0x1873b5(0x159,'U1Bl')),_0x296bec[_0x1873b5(0x116,'pr*q')](_0x185534[_0x1873b5(0x16f,'PpLQ')]('【'+_0x19ca42['name']+'】','\x20获取第1个\x20ck\x20成功:\x20'+_0x2a1829+_0x1873b5(0x1ad,'Q&PT'))));else _0x185534['FZuDd'](nfhkCk[_0x1873b5(0x1ae,'pQl[')]('\x0a'),-0x1)?_0x1873b5(0x183,'ycl(')===_0x185534['fsAvP']?nfhkCk['split']('\x0a')['forEach'](_0x2a35df=>{const _0x43c087=_0x1873b5;nfhkCkArr[_0x43c087(0x1b9,'8Hu]')](_0x2a35df);}):_0x185534[_0x1873b5(0x1e2,'9*TX')](_0x32afdf,_0x1873b5(0x210,'kHK)')+_0x1d9db6[_0x1873b5(0x1a8,'[ieq')][_0x1873b5(0x189,'f[46')],!![]):nfhkCkArr[_0x1873b5(0x1db,'lRld')](nfhkCk);}else{addNotifyStr('\x0a\x20【'+$[_0x1873b5(0x1a9,'%^6u')]+_0x1873b5(0x1de,'Q&PT'),!![]);return;}return!![];}function safeGet(_0x3859a3){const _0x2b43bc=_0xc5493b,_0x5319bc={'gjopO':function(_0x41f95a,_0x13bb00){return _0x41f95a===_0x13bb00;},'hKGnq':_0x2b43bc(0x20f,'aZ2$'),'xystI':_0x2b43bc(0x20d,'sJmF')};try{if(_0x5319bc[_0x2b43bc(0x1e5,'#)ab')](_0x5319bc[_0x2b43bc(0x129,')BB@')],_0x5319bc['hKGnq'])){if(typeof JSON['parse'](_0x3859a3)==_0x5319bc[_0x2b43bc(0x1b6,'vix7')])return!![];}else _0x57e281[_0x2b43bc(0x191,'oZh[')]('@')['forEach'](_0x3cb279=>{_0x59b4f1['push'](_0x3cb279);});}catch(_0x85116a){return console[_0x2b43bc(0x15d,'hMVu')](_0x85116a),console[_0x2b43bc(0x192,'&gP*')](_0x2b43bc(0x1c5,'H9LY')),![];}}function delay(){const _0x219fa5=_0xc5493b,_0x1ffd38={'xngtp':'随机延时：','VxVeU':function(_0x5d13a5,_0x58dd20){return _0x5d13a5(_0x58dd20);},'BMrhh':function(_0x3e8019,_0x4dc95e){return _0x3e8019>_0x4dc95e;},'axEkg':function(_0x5f5629,_0xfe6d2){return _0x5f5629!==_0xfe6d2;},'yPzxE':_0x219fa5(0x1f8,'b(HS'),'GJSUh':'MvPGm'};let _0x33c757=_0x1ffd38[_0x219fa5(0x1bf,'sJmF')](parseInt,Math['random']()*0x186a0);return _0x1ffd38[_0x219fa5(0x158,'oZh[')](_0x33c757,0x7530)?_0x1ffd38[_0x219fa5(0x1a5,'ZV4B')](_0x1ffd38['yPzxE'],_0x1ffd38[_0x219fa5(0x13f,'ycl(')])?delay():(_0x47c02d[_0x219fa5(0x200,'#1r!')](_0x1ffd38[_0x219fa5(0x203,'F*fk')],_0x5683ac+'ms,\x20避免大家运行时间一样'),_0x9c46ed):(console[_0x219fa5(0x1eb,'F*fk')](_0x1ffd38['xngtp'],_0x33c757+_0x219fa5(0x139,'[ieq')),_0x33c757);}function _0x4d12(_0xc72bbe,_0x80c09d){const _0x2ed94e=_0x2ed9();return _0x4d12=function(_0x4d12d4,_0x44e655){_0x4d12d4=_0x4d12d4-0x10d;let _0x51cbc2=_0x2ed94e[_0x4d12d4];if(_0x4d12['fMfXMF']===undefined){var _0x139e05=function(_0x5e9161){const _0x35d422='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x42c2f4='',_0x2127a6='';for(let _0x2ff541=0x0,_0x44fc68,_0x1ffd46,_0x5f6a79=0x0;_0x1ffd46=_0x5e9161['charAt'](_0x5f6a79++);~_0x1ffd46&&(_0x44fc68=_0x2ff541%0x4?_0x44fc68*0x40+_0x1ffd46:_0x1ffd46,_0x2ff541++%0x4)?_0x42c2f4+=String['fromCharCode'](0xff&_0x44fc68>>(-0x2*_0x2ff541&0x6)):0x0){_0x1ffd46=_0x35d422['indexOf'](_0x1ffd46);}for(let _0x2c4502=0x0,_0x35b3ab=_0x42c2f4['length'];_0x2c4502<_0x35b3ab;_0x2c4502++){_0x2127a6+='%'+('00'+_0x42c2f4['charCodeAt'](_0x2c4502)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2127a6);};const _0x17b142=function(_0x708bcb,_0x173681){let _0x939cf7=[],_0x62dba4=0x0,_0x47a6ed,_0x564a9f='';_0x708bcb=_0x139e05(_0x708bcb);let _0x463226;for(_0x463226=0x0;_0x463226<0x100;_0x463226++){_0x939cf7[_0x463226]=_0x463226;}for(_0x463226=0x0;_0x463226<0x100;_0x463226++){_0x62dba4=(_0x62dba4+_0x939cf7[_0x463226]+_0x173681['charCodeAt'](_0x463226%_0x173681['length']))%0x100,_0x47a6ed=_0x939cf7[_0x463226],_0x939cf7[_0x463226]=_0x939cf7[_0x62dba4],_0x939cf7[_0x62dba4]=_0x47a6ed;}_0x463226=0x0,_0x62dba4=0x0;for(let _0x34e4ea=0x0;_0x34e4ea<_0x708bcb['length'];_0x34e4ea++){_0x463226=(_0x463226+0x1)%0x100,_0x62dba4=(_0x62dba4+_0x939cf7[_0x463226])%0x100,_0x47a6ed=_0x939cf7[_0x463226],_0x939cf7[_0x463226]=_0x939cf7[_0x62dba4],_0x939cf7[_0x62dba4]=_0x47a6ed,_0x564a9f+=String['fromCharCode'](_0x708bcb['charCodeAt'](_0x34e4ea)^_0x939cf7[(_0x939cf7[_0x463226]+_0x939cf7[_0x62dba4])%0x100]);}return _0x564a9f;};_0x4d12['QHKBYb']=_0x17b142,_0xc72bbe=arguments,_0x4d12['fMfXMF']=!![];}const _0x4b4032=_0x2ed94e[0x0],_0x44f59c=_0x4d12d4+_0x4b4032,_0x5d2449=_0xc72bbe[_0x44f59c];return!_0x5d2449?(_0x4d12['NOSpTt']===undefined&&(_0x4d12['NOSpTt']=!![]),_0x51cbc2=_0x4d12['QHKBYb'](_0x51cbc2,_0x44e655),_0xc72bbe[_0x44f59c]=_0x51cbc2):_0x51cbc2=_0x5d2449,_0x51cbc2;},_0x4d12(_0xc72bbe,_0x80c09d);}function addNotifyStr(_0x29c1ac,_0x2d0c24=!![]){const _0x534566=_0xc5493b,_0x538f89={'tNeCF':function(_0x4c0286,_0x9c07c5){return _0x4c0286!==_0x9c07c5;},'pfbpa':'rEOZE','buvyg':function(_0x3830a9,_0x5444af){return _0x3830a9(_0x5444af);}};_0x2d0c24&&(_0x538f89[_0x534566(0x152,'4iA6')]('OaMJd',_0x538f89['pfbpa'])?_0x538f89[_0x534566(0x17b,'cPEU')](log,_0x29c1ac+'\x0a'):_0x2499c8[_0x534566(0x202,'jA7o')](_0x9bc0d5,_0x4b4756)),msg+=_0x29c1ac+'\x0a';}function _0x2ed9(){const _0x4f29f8=(function(){return[_0xod6,'ujsljVBniyEaOmuink.CHlcom.gvOAR7GdMfyYJw==','W7iuhCo1va','WQjqWOq','WPRKUz/OTAFLJ6rEdSkeWPyqF8oRfe1zWOhcTWJdNMS1ymk9W63dLq','W5iqihCBqCok','W4pcKCkqrdS','WQFdIXrrsY4','yfBdS8ojgq','nLbwW45A','W68qrSoPW40','5y6P5PEo6iMd56I8mHxdV8k5boESTUwjGoITOEAXQowLPUI1USkG4Ock77QV4Oc+77U+','W4NcVmoMW7RcSa','z8kdWQ1Ph8knvSkbW5ddVCovEa','W4DgodrRdXJcN8kig8k8W5DGfLNdGW','ACoBrSoMvb0gW747WPqqkI/dO8kgvLlcTmkppWf6cCoxW4eEtLihWRZdSN1bWPj6WOtdRSosqSoQ','iwPgbr4','WQFcTSkBB+MaNEweG+wKQowSM+I8RUIGKoAvGUMxPos7S+AHSq','iSolWO8MW7FcQmkRrxzF','p8o8W6SlWOixWOGCrfewW7ldISkeWQ/cVqLWWRJdNxVdRZOvW4VcKmkVWQxcQHCDrM9ZjK7cRZtcTv3dRmouEmoWWPruW5GpW6xcR8oqp8kciXmzWPVdS8opWPhcVCkuW7nJW4rRscijvbhcH0SexJb5WRlcI0SkuYux','WQP1WPzYja','W6fZqSoqW6S','WP/OJARLJzhNR54','W4tcVLZcL8kP','W6hcRmkdWQCT','W6fdlHj4','AGK0Es4Me8oRW4XR','WOldOCkC','CrJcHqtcS8o6r8k1W7NcQmo3WOa0','ugW0u3rLWOqnCmoCW4NdNHFcJa','WQ4vWRZcHCk7','WQ4xWPdcGSkTW400WRfJW6OxW6ZcISkDWP3dVXZdQCo4WO/dP8oyg14aESkaWQFcLHebwSk+x8kxCmofq8kcW5hcH8oaWPbyemkQo8ksz1n4W6mWnwhcH8k9asHXW7JcQComEYJcN8kZAgtcICk4cNe7W4qxWRdcL1ZdRwxcVZFcPSkebSkQWP4JbZu3W43cTYpcKSkPWORcUt4FWR7dUJqiWRpdJSoSW7O','EgKb','oK13mdm','wEI0IEwpT2zw5lYP5Ocdq8obvG','i2JdVf/dPG','WR7cNmkdeH9swa','W5NcUmop','jgLLW6vk','W6CbFGKm','y8kkW5z/W7K','W7ZcLCkbWOCC','WRLaWOPRBhj4W63cGW','jCofWOjGWQ0dWPW','W4LHatjy','nL5PiHC1','omoFW5yrWQS','WOWsgJnKqq','WOpcVCopnI0','WPtdVSkNnCkm','WOZcQrtdSs3cHq1RxuldR8ox','bc/KUBxNLjtOR6dOH67OOQtLHjVPL47PHAxLHklcLG','W6vYWOKv','WQ8GWO7cUmkT','44o9m8kCWQRcGCkr44c7foI9V+AyMEs9VEEAKowfPUMcJEI0UownJUAwR+E4Gf/cSmoI','D8ktWRrFwq','W4vHAa','dCoLW5Gbua','W4z8BSkAW54','lCoYWO1sWOy','W7/dSCkobWaIxSo7WQy','AJ9qDuyVWPJcGSocW7xdVSk8dmk/','mSo4W5BcShC','W5qaaKyl','lmoQx8oVsW','p8oBWOPSWQe','WR/dNSkhc8kS','W44txSo2W5a','W7FcHSo8wCkQ','W4dcO8oKqmk3','WOWceh9x','W6VcTh05W4m','W4bGA8k0W4HhWQC','s8kKWOH7xW','WQnmWOq','W70OeCoYva','W6ZcH8kxvXzcaG','WRicdaj7','W6/cG8kxyG','W5RcQSofza','ySkFW4LJW6hcPa','WQHHomokWP0','yNSpfq','W4175lU055EG6kYd6isC6kgM5ywh6zwl6yE75yAenq','WQpcQ8otkHObAq','W5jlz8o5W58','WQXy5lQ+55sl6k+56iE06kgL5yEi6zs26yAP5ywUW7e','W7ZcRmoZW4dcIrxcVmob','w8kUW4jLW4S'].concat((function(){return['W5CgjG','566W5yIp5OUZ5yQk772C','W43dRfBcQq','xhOlsf4','WQaUcgPjWQpcNCoSW5BcSmkjWOVcPeZcVdBcGg7cJSoDWRrInSkxWO8HcSohiSoCuXXyWRqGELXtW4enW7itgtGdWRFcICkPoSoRDu7cH8orFsZcN8kzW53dUmkmW7ZcH8kej2ZcRSocFLrJuCkzW5ddUmofW7PlbSko','e0nWW6O','W4/cQmo0WPO','iCo7W7C2WOC','fuPUqMNcOa','W5POymktW5G','iSkzbH3cLG','54UY5P2z6AUn6k+s5Awp6lsw77616k2C5PUz5PEY54QE5PYf6yA96k6X7769','W7bohJ1x','W69YWPar','iUIpQEwpTEESLGdKUAVdQmktW4BcPEAkI+wjKuldPG','kwZdOh7dTW','WQrrW71NWOrV','W4fvWO8iWOi','5P2A5yIP5zU36k+e6zsF5PwD5O+j5lIj56Mj77YL6k6a5Qgc5P2g6iwa6lMN6k2W5AwV572i57Iw5Oc25yAT','WQ8tWQZcGmkg','W6HUt8onW5q','W4JdH8kxW7Sy','FCkuW4PJW7G','W5CEFqSrW4a','W4PzlX1WhG','WPKEWPdcQCkh','W4NcMmo/WOJdGa','WP3OJk7LJ7pNR60S5lQzBeDyl+AkTEwiGenl','CbhdMxddQSkEnCkH','W7CLvCotW70','W5RcLLRcV8kQW70','BvDTbGmwpa','o2v8W455','CJfqtG','j8oPW60iWPq','pmopW6eNEa','zSk4WQ5lW4eBW6z8xwq9W4O','W7GglmodEq','W7tcGdjfWP3cRmkiWPBdO8kWECk6zdxdNdTYmrldOmoPW7hdNXldLtFdMWZdK8oXW7pcP8oBpCkxk8oSWQVdIqC','omotC8o+BG','W5JcGKFcSW','sgWF','WRJcRSkXhYS','44o8772n5P+t5AkJ5ywT5yYU6yELfmoiuhv/tq4','6zUC5P6B5BMl5Psr77Y+','FCkCW5e1W6b+W4GEWPP4ECoxoG','WOWaWR/cOCkH','DIXVufq','WPWOk1nt','56+e5yMf5AwW6ls2772K','WQ8We2P1','ASkfWRbDBLi','WRG7dMLF','WOFdV8kCoCoyWQurW7OBW55jWOG','aCoiWPDxWPy','lSoJW7S6CG','keBdLa','zZbv','W7i2pmoYCgq','iConW6CbWR8','W77cMmoHW7FcUa','W4xOJlpLJl7NRAa','44kQ5B215AAk562T5yMo44cI','iCoZWQHXWPq','WRRcPmofpaC','WPVcVYihWPm','WPCejYLSua','gSkbt8k7xb0','p8oWW6CnWQe','W4uaW6vfEW','ihmnq8oV','W5JcJ3ibW5O','s8o/pNvv','WQf1W5P1WRG','p8o4W40FWRC','W45aA8kRW7e','W4KqnxCFr8oy','W5q7va','W6j9WOavWQlcVN8','i8oKtmojuva','peFdLeNdTW','56Yd5yIs5AsS6lAQ77Yf','W6XGtmkKW4q','WQPMWQLBnW','mmowW60W','ySkyWO3dKrdcRSohvY9jyG','W7WfzHalWP/cLabGFmkaAg3dNt0dWPNcVWCcWOldVfG','wCkxW7jXW6G','WQy7ex8'].concat((function(){return['W7H2WPauWRVcHxG','W4LuiJ1Hga','FxSvlSoFaK7dNmoFWPzXF8kCW7q','W7FdMNBcSuO','56+Q5yMb5OIc5yU/772I','WR7dOtXJDa','W7nSmcT2','iSkzaJtcJmopiCksWOJcUCoXWPrSe8kp','W59cotrN','ySkBW5rYW6lcVq','WQZcHaW+WQe','jSoIxmo/tW','W4xcJ07cI8kK','WPiydGn6rW','5lQq6lwt5y626l+d6kcY57UG5PYL776X','WRhcLq0Y','nCoIW58utG','eff6','W5X/ktjm','W6NcP8oxWR/dIq','omosW7C2xmos','W6j6WRigWPa','WPGygWnPvSow','WQ/dRCkgcCkc','W7tcO8ovW7tcJW','eCkavmk4ya','uSoPjvzA','W5u1qCooW5KmldTnESoRW7jXvSoAgmkPW6tcLmk+W6Wem8otW4GDqeu3','k111ltuQfq','W77cSx7cNCkP','WOeHWONcPmkX','W6VcGUs5T+EuNUIVIoIgRoIIGEwgR+MuLUMeHowhM8oV','W6RcQmo0W5e','Fmk9hCk0gXPIEstdUchcUSow','WPKshrjHwmoBWPmIjHxdMuWXlmoLqG','qgC6D3a','jmoGWQfRWQq','pmodW5FcGKFcVW','WR7cG8kEbLigxCkguCo+ESkNW7BdL8oiW5ft','W4OXqmoqW5am','W6K+mmo8vwBdSafq','WOVcMSo1WQr8','5ys+6zAS5zsY','WRxdOmk6W4/cS8o1amoWW4xdOYJLVRlLPQFJGk7NRjqH','cxKeACoZlG','FxaXcmoR','W5hcVCoyFmoZWOtdVbO1W6jQ','W6VcPNSnW7i','qe3dKSolnW','F0BdS8oaha','cgue','W7ZcPSo1W57cRG','W6BcKCopi+MaGowfOUwLGowTLEI/VoIHMoAxTUMwGUs7LEAJQW','gSohWOCRWRddRCoXnrGnjIZcOmk+FSkaWQFdQCkUDSoU5yA75OQ75yMrra','W43cHmoiWOpdGG','W5hdVeVcPMNdMW','leJdGhldSmkKlSkbW7dcVCo5WP8xdW','W6HqqsChWQtcJ8o+WOZdPCoeW4tdTGNdUcxdNJZdNSopW6eRF8oAW4eMgmovEmkigKKqW6SZja4dW5nJWQDpu2SmWRJcHmkw','W6VcHCkHWQag','W6NdQ3lcIhq','amo5W7WUWRG','omksba','56+s5yU/5A2+5OUL772I5PYG552h5l+M5OkS77Y2','WRtdPdu0WO4','uLBdSSoPobFcUcymzbqiWRi4','W7yCWP5GqdjtW5pdTIZcLSk+WOBcImohCSkPy8ob','W4ddPEocPYShlhRdIUodR3ZOVA3MMl/KVPpNRAOC','WOpdMGyzWQ8','dCozW5GJFG','pSokWOHHWROH','WOhdJos4NEEvNEITNEIgN+IHHUweSoMwLUMfOEwfLem','WO/dJ2mqW4qrrcWpW4xcQXS','WP8hgsPHvSoFWP0KjX7cUuaKmmoUgSkaDSkuWOizf8k2wYTiW7Wpj8kJWOxcPa','mmoIW7qcWP8','W6ulCaOo','Fmk6WPPxrq','W7XJtcOpW6RdVSkZW6NcMSkm','WO3cP8ocWPzU','WOhdQ8kgkq','W4GAnh0A','WQNcHdqnWOC','W5uVkh4j','WRSsWONcPmk7','rSkUWQPErq','WRFcN8kFht1n','W4fflGbZ','W70/b0Kx'];}()));}()));}());_0x2ed9=function(){return _0x4f29f8;};return _0x2ed9();};async function SendMsg(_0x3d7e28){const _0x4bfeb9=_0xc5493b,_0x14cf35={'DKBPF':function(_0x2d879f,_0x3e2daa){return _0x2d879f(_0x3e2daa);},'yGZSb':function(_0x213765,_0x5c0ec1){return _0x213765+_0x5c0ec1;},'YRAPx':function(_0x746dfc,_0xc5ee44){return _0x746dfc*_0xc5ee44;},'VEplO':_0x4bfeb9(0x1c0,'CC@@'),'jeKWj':_0x4bfeb9(0x12c,'#1r!'),'ddBKg':function(_0x3f167a,_0x29054d,_0x5815b2){return _0x3f167a(_0x29054d,_0x5815b2);},'rsRqT':function(_0x470cd3,_0x36013f,_0xbe7ed7){return _0x470cd3(_0x36013f,_0xbe7ed7);},'OGPMr':function(_0x5aa79d,_0x42eab7){return _0x5aa79d===_0x42eab7;},'BwwpY':'MXTeA','iiwsl':_0x4bfeb9(0x150,'oZh['),'TafYv':function(_0x326e04,_0x51c128){return _0x326e04===_0x51c128;},'IxxyO':_0x4bfeb9(0x156,'BXos'),'EnCut':'voVPu','zIajN':function(_0x27f357,_0xed73f0){return _0x27f357(_0xed73f0);},'MmVnz':_0x4bfeb9(0x180,'pr*q'),'qzOyJ':_0x4bfeb9(0x149,'2Sg5')};if(!_0x3d7e28)return;if(Notify>0x0){if(_0x14cf35[_0x4bfeb9(0x1a3,'oZh[')](_0x14cf35[_0x4bfeb9(0x18f,'Q&PT')],_0x14cf35[_0x4bfeb9(0x110,'jA7o')]))_0x31ffab&&_0x14cf35[_0x4bfeb9(0x1f4,'r@fg')](_0x3c3419,_0x329ded+'\x0a'),_0x312f40+=_0x2224cf+'\x0a';else{if($[_0x4bfeb9(0x1f5,'f[46')]()){if(_0x14cf35['TafYv'](_0x14cf35[_0x4bfeb9(0x18a,'pQl[')],_0x14cf35[_0x4bfeb9(0x205,'&gP*')]))return _0x53e837[_0x4bfeb9(0x154,'BXos')](_0x14cf35['yGZSb'](_0x14cf35[_0x4bfeb9(0x193,'2Sg5')](_0x31950f[_0x4bfeb9(0x1d1,'lRld')](),_0xf92d2b-_0x5e8aa5),_0x2efdad));else{var _0x452698=_0x14cf35[_0x4bfeb9(0x117,'sJmF')](require,_0x4bfeb9(0x14c,'hfG('));await _0x452698['sendNotify']($['name'],_0x3d7e28);}}else $['msg'](_0x3d7e28);}}else _0x14cf35['TafYv'](_0x14cf35[_0x4bfeb9(0x178,'rUpU')],_0x14cf35[_0x4bfeb9(0x18b,'p[tx')])?_0x4d6c92[_0x4bfeb9(0x20e,'%jt2')](_0x14cf35[_0x4bfeb9(0x157,'Q&PT')])&&_0x3eb22a['data'][_0x4bfeb9(0x13d,'F*fk')](_0x14cf35['jeKWj'])?_0x14cf35[_0x4bfeb9(0x128,'vix7')](_0x3cb657,'签到成功：'+_0x28b21a[_0x4bfeb9(0x1a8,'[ieq')][_0x4bfeb9(0x1aa,'il@k')],!![]):_0x14cf35[_0x4bfeb9(0x12e,'4iA6')](_0x139c15,'签到完成，未知信息：'+_0x5d0922,!![]):log(_0x3d7e28);}function randomInt(_0xc027d3,_0xe1750){const _0x55f38d=_0xc5493b,_0x212927={'zTbkZ':function(_0x896fa1,_0x383810){return _0x896fa1*_0x383810;},'dYJNq':function(_0x419a22,_0x23a231){return _0x419a22-_0x23a231;}};return Math[_0x55f38d(0x138,'R0JF')](_0x212927[_0x55f38d(0x1ea,'2Sg5')](Math[_0x55f38d(0x10e,'il@k')](),_0x212927[_0x55f38d(0x206,'hMVu')](_0xe1750,_0xc027d3))+_0xc027d3);}function timestampMs(){return new Date()['getTime']();}function timestampS(){const _0x5553b3=_0xc5493b,_0x23dff2={'HssGD':function(_0x48beea,_0x204296){return _0x48beea/_0x204296;}};return _0x23dff2[_0x5553b3(0x160,'[ieq')](Date['parse'](new Date()),0x3e8);}function getVersion(_0x12d88d=0x3*0x3e8){const _0x3e9863=_0xc5493b,_0x11585a={'gNdzA':function(_0x5df7c5,_0x546c2b){return _0x5df7c5(_0x546c2b);},'iZDhu':function(_0x5d7d68,_0x54df61){return _0x5d7d68*_0x54df61;},'grLdE':function(_0x667df,_0x3fe51f){return _0x667df>_0x3fe51f;},'bYcOp':function(_0x4004e0){return _0x4004e0();},'jwPJO':_0x3e9863(0x1e1,'Q&PT'),'WDuLq':function(_0xec39d0,_0x3aaf44){return _0xec39d0!=_0x3aaf44;},'lIxPx':_0x3e9863(0x1d9,'@]0h'),'QSHQn':_0x3e9863(0x111,'lRld'),'LueDs':_0x3e9863(0x1bd,'UUq4'),'EqrfS':function(_0x1401cc,_0x1f08a9){return _0x1401cc!==_0x1f08a9;},'Wvnxx':_0x3e9863(0x15c,'ZV4B'),'qzbjv':function(_0x526092,_0x529ecf){return _0x526092===_0x529ecf;}};return scriptVersionCheck=![],new Promise(_0x53d675=>{const _0x53e21c=_0x3e9863,_0x3455d6={'cNCpR':function(_0x5483f8,_0x2bc2e2){const _0x4dee94=_0x4d12;return _0x11585a[_0x4dee94(0x1fe,'&gP*')](_0x5483f8,_0x2bc2e2);},'hpRdF':function(_0x167079,_0x3241df){return _0x11585a['iZDhu'](_0x167079,_0x3241df);},'NzMPm':function(_0x26deab,_0x2ac308){return _0x11585a['grLdE'](_0x26deab,_0x2ac308);},'rSYmj':function(_0x5bb3a1){const _0x184606=_0x4d12;return _0x11585a[_0x184606(0x123,'rUpU')](_0x5bb3a1);},'ArRQr':_0x11585a['jwPJO'],'mESCp':function(_0x2084b5,_0x1a3d20){const _0x48a8e9=_0x4d12;return _0x11585a[_0x48a8e9(0x164,'#1r!')](_0x2084b5,_0x1a3d20);},'UZxst':_0x11585a['lIxPx'],'thLAX':_0x11585a['QSHQn'],'sfoBh':_0x11585a[_0x53e21c(0x1a7,'f[46')],'vpTZR':function(_0x18f6a1,_0x366132){const _0x108f7c=_0x53e21c;return _0x11585a[_0x108f7c(0x136,'kbF!')](_0x18f6a1,_0x366132);},'voNBT':_0x11585a[_0x53e21c(0x1af,'PpLQ')]};if(_0x11585a[_0x53e21c(0x14f,'kHK)')](_0x53e21c(0x198,'CzQp'),_0x53e21c(0x195,')BB@'))){let _0x286ac1={'url':_0x53e21c(0x1b7,'#)ab')};$[_0x53e21c(0x175,'p[tx')](_0x286ac1,async(_0xaec94e,_0x39d6d2,_0x55ace7)=>{const _0x16ca66=_0x53e21c,_0x845ac5={'uOFUK':function(_0x4de544,_0x57882d){return _0x4de544(_0x57882d);}};try{_0x16ca66(0x1dd,'U1Bl')!==_0x3455d6['ArRQr']?_0x845ac5[_0x16ca66(0x211,'FVfV')](_0x1acf4a,_0x5f08c2):_0x3455d6[_0x16ca66(0x1c2,'F*fk')](_0x55ace7['indexOf'](_0x3455d6[_0x16ca66(0x212,'sJmF')]),-0x1)&&(_0x3455d6[_0x16ca66(0x19f,'%^6u')]===_0x3455d6[_0x16ca66(0x1bc,'&gP*')]?_0x4926a7(_0x54266c+'\x0a'):scriptVersionCheck=!![]);}catch(_0x51b535){if(_0x3455d6[_0x16ca66(0x155,'r@fg')](_0x16ca66(0x1fb,'6Q*U'),_0x3455d6['voNBT'])){let _0x3ed949=_0x3455d6['cNCpR'](_0x4d735e,_0x3455d6[_0x16ca66(0x1fd,'H9LY')](_0x45240a[_0x16ca66(0x14a,')BB@')](),0x186a0));return _0x3455d6['NzMPm'](_0x3ed949,0x7530)?_0x3455d6['rSYmj'](_0xaad6b9):(_0x16e6e9[_0x16ca66(0x1dc,'vix7')](_0x16ca66(0x1df,'CzQp'),_0x3ed949+_0x16ca66(0x16b,'pQl[')),_0x3ed949);}else $[_0x16ca66(0x112,'f[46')](_0x51b535,_0x39d6d2);}finally{_0x53d675();}},_0x12d88d);}else _0x44e83f[_0x53e21c(0x1cb,'sJmF')](_0x36a66b,_0x3c5ff1),_0x2ce0e2['msg'](_0x284731[_0x53e21c(0x20b,'#)ab')],'出错啦',''+_0x5d7034);});}var version_ = 'jsjiami.com.v7';

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