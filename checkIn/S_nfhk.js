/**
 作者：shawn
 日期：2023-11-29 重构 ps:签到1年多终于换了50E卡
 项目：南方航空
 功能：完成自动签到 查询积分功能
 抓包：开着抓包软件 手动签到 抓包https://wxapi.csair.com/marketing-tools/activity/join?type=APPTYPE&chanel=ss&lang=zh   请求cookie
 必填变量格式：export S_nfhkCk='cookie' 多个账号用 @ 或者 换行 分割
 选填变量格式：export S_nfhkUa='user-agent' 多个账号用 @ 或者 换行
 定时：一天1次
 cron：15 12 * * *
 [task_local]
 #南方航空
 [rewrite_local]
 https://wxapi.csair.com/marketing-tools/activity/join?type=APPTYPE&chanel=ss&lang=zh url script-request-headers https://raw.githubusercontent.com/Shawn220528/scripts/main/checkIn/nfhk.js
 [MITM]
 hostname = wxapi.csair.com
 */
const $ = new Env('南方航空');
var _0xod1='jsjiami.com.v7';const _0x13bc54=_0x2863;(function(_0x4fc30e,_0x59051c,_0x15ce7d,_0x2001c6,_0x924b4b,_0x5b98f7,_0x3fbca2){return _0x4fc30e=_0x4fc30e>>0x4,_0x5b98f7='hs',_0x3fbca2='hs',function(_0x583fab,_0x32f90d,_0x142ff3,_0x35d3cd,_0xfe2000){const _0x2c314b=_0x2863;_0x35d3cd='tfi',_0x5b98f7=_0x35d3cd+_0x5b98f7,_0xfe2000='up',_0x3fbca2+=_0xfe2000,_0x5b98f7=_0x142ff3(_0x5b98f7),_0x3fbca2=_0x142ff3(_0x3fbca2),_0x142ff3=0x0;const _0x1db484=_0x583fab();while(!![]&&--_0x2001c6+_0x32f90d){try{_0x35d3cd=parseInt(_0x2c314b(0x10d,'5Q7R'))/0x1+parseInt(_0x2c314b(0x156,'1A7q'))/0x2+-parseInt(_0x2c314b(0x1a1,'fw%d'))/0x3+parseInt(_0x2c314b(0x102,'uXgf'))/0x4+parseInt(_0x2c314b(0x1b6,'dzva'))/0x5+parseInt(_0x2c314b(0x112,'zjdQ'))/0x6*(-parseInt(_0x2c314b(0x15c,'WM)B'))/0x7)+-parseInt(_0x2c314b(0x10c,'G4Af'))/0x8;}catch(_0x6b316f){_0x35d3cd=_0x142ff3;}finally{_0xfe2000=_0x1db484[_0x5b98f7]();if(_0x4fc30e<=_0x2001c6)_0x142ff3?_0x924b4b?_0x35d3cd=_0xfe2000:_0x924b4b=_0xfe2000:_0x142ff3=_0xfe2000;else{if(_0x142ff3==_0x924b4b['replace'](/[WgVlFTEhIYrMyKqQdRDP=]/g,'')){if(_0x35d3cd===_0x32f90d){_0x1db484['un'+_0x5b98f7](_0xfe2000);break;}_0x1db484[_0x3fbca2](_0xfe2000);}}}}}(_0x15ce7d,_0x59051c,function(_0x22ed38,_0x484d8f,_0x1677a1,_0x3a4b61,_0x5f0809,_0x54b3ad,_0x258a08){return _0x484d8f='\x73\x70\x6c\x69\x74',_0x22ed38=arguments[0x0],_0x22ed38=_0x22ed38[_0x484d8f](''),_0x1677a1='\x72\x65\x76\x65\x72\x73\x65',_0x22ed38=_0x22ed38[_0x1677a1]('\x76'),_0x3a4b61='\x6a\x6f\x69\x6e',(0x1496df,_0x22ed38[_0x3a4b61](''));});}(0xc60,0xd7300,_0x2ed9,0xc8),_0x2ed9)&&(_0xod1=0x1516);const axios=require('axios'),{log}=console,Notify=0x1,specialNotify=0x0,debug=0x0;let scriptVersion='V2.0.0',scriptVersionLatest=_0x13bc54(0x23f,'aMIM'),scriptDhName=_0x13bc54(0x17b,'myG9'),scriptVarName='S_nfhkCk',scriptUaName=_0x13bc54(0x19c,'fm*0'),currVarName=process[_0x13bc54(0x23e,'fw%d')]['hasOwnProperty'](scriptVarName)?process['env'][scriptVarName]:'',currDhName=process[_0x13bc54(0x1f1,'Nt0C')][_0x13bc54(0x230,'G4Af')](scriptDhName)?process[_0x13bc54(0x247,'myG9')][scriptDhName]:'',currUaName=process[_0x13bc54(0x132,'rAHJ')][_0x13bc54(0x1c6,'zjdQ')](scriptUaName)?process['env'][scriptUaName]:'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2016_6_1\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148',scriptCk=($['isNode']()?currVarName:$[_0x13bc54(0x248,'Cs8U')](scriptVarName))||'',scriptDhCk=($[_0x13bc54(0x1e6,'zjdQ')]()?currDhName:$[_0x13bc54(0x1ec,'2UkT')](scriptDhName))||'',scriptUa=($[_0x13bc54(0x164,'5Q7R')]()?currUaName:$['getdata'](scriptUaName))||'',scriptCkArr=[],scriptUaArr=[_0x13bc54(0x187,'%xK)')],scriptMsg='',scriptSpecialMsg='',userList=[];class userInfo{constructor(_0x48550b){const _0x485aa3=_0x13bc54,_0x8e0264={'qkspU':_0x485aa3(0x250,'y%rK'),'Attpv':'gzip,\x20deflate,\x20br','dgLXM':_0x485aa3(0x168,'H52T'),'cjXQv':'zh-CN,zh-Hans;q=0.9','WeCtz':_0x485aa3(0x240,'zjdQ'),'DcCic':'wxapi.csair.com'},_0x1f0890=_0x485aa3(0x206,'G5CZ')[_0x485aa3(0x1ee,'Nt0C')]('|');let _0x29689c=0x0;while(!![]){switch(_0x1f0890[_0x29689c++]){case'0':this[_0x485aa3(0x133,'Nt0C')][_0x485aa3(0x1a7,'3cZv')]=_0x48550b['ck'];continue;case'1':this[_0x485aa3(0x1be,'fw%d')]['ua']=_0x48550b['ua'];continue;case'2':this[_0x485aa3(0x1ab,'u*Lg')]={'Sec-Fetch-Site':_0x8e0264[_0x485aa3(0x151,'Nt0C')],'Accept-Encoding':_0x8e0264['Attpv'],'Cookie':this[_0x485aa3(0x24f,'H52T')]['cookie'],'Connection':_0x485aa3(0x1af,'1A7q'),'Sec-Fetch-Mode':'cors','Accept':_0x485aa3(0x15e,'Nt0C'),'User-Agent':this['userObject']['ua'],'Referer':_0x485aa3(0x10e,'sM&E')+this[_0x485aa3(0x23d,'pMxy')]+'/h5/sign/','Sec-Fetch-Dest':_0x8e0264['dgLXM'],'Accept-Language':_0x8e0264[_0x485aa3(0x1a6,'3UQW')]};continue;case'3':this[_0x485aa3(0x1be,'fw%d')][_0x485aa3(0x21e,'aMIM')]=0x0;continue;case'4':this[_0x485aa3(0x1a2,'FBlU')]['endDate']=time(_0x8e0264['WeCtz']);continue;case'5':this[_0x485aa3(0x1a3,'fw%d')]=_0x8e0264['DcCic'];continue;case'6':this[_0x485aa3(0x21a,'WM)B')][_0x485aa3(0x225,'H52T')]=_0x48550b[_0x485aa3(0x14a,'ONoz')];continue;case'7':this['userObject'][_0x485aa3(0x222,'uXgf')]=_0x48550b['dhCk'];continue;case'8':this['userObject']=new Object();continue;case'9':this[_0x485aa3(0x1d3,'y%rK')]={'Content-Type':_0x485aa3(0x109,'sM&E'),'Origin':_0x485aa3(0x171,'W4XF')+this[_0x485aa3(0x199,'H52T')],'Accept-Encoding':_0x485aa3(0x152,'sM&E'),'Cookie':this['userObject'][_0x485aa3(0x21c,'WM)B')],'Connection':'keep-alive','Sec-Fetch-Mode':_0x485aa3(0x1c1,'FBlU'),'Accept':'application/json,\x20text/plain,\x20*/*','User-Agent':this[_0x485aa3(0x180,'bAC6')]['ua'],'Referer':_0x485aa3(0x105,'G5CZ')+this['scriptHost']+_0x485aa3(0x205,'CYzz'),'Sec-Fetch-Dest':_0x8e0264['dgLXM'],'Accept-Language':_0x485aa3(0x1e5,'!AvK')};continue;case'10':this[_0x485aa3(0x1d1,'CYzz')]='['+_0x48550b[_0x485aa3(0x103,'4Dd^')]+_0x485aa3(0x1dd,'HL9P');continue;}break;}}async[_0x13bc54(0x234,'yl@t')](){const _0x14610f=_0x13bc54,_0x177de3={'YyrVh':function(_0x19825c,_0x11e817){return _0x19825c+_0x11e817;},'smliK':_0x14610f(0x1bd,'u(Zl'),'xNLhZ':_0x14610f(0x208,'%xK)'),'dZwcU':function(_0x22fd3e,_0x5395cc){return _0x22fd3e!==_0x5395cc;},'aeKRx':'HQgQa','rOTch':_0x14610f(0x188,'Nt0C'),'WqdzF':_0x14610f(0x197,'G5CZ'),'jhSQA':function(_0x34e752,_0x5d3a33){return _0x34e752(_0x5d3a33);}};let _0x2159fb=![],_0x4f9ba2=_0x177de3['jhSQA'](getLastDay,!![]),_0x33257a=getLastDay(![]),_0x531014=this[_0x14610f(0x15d,'2UkT')],_0x4fa466=this[_0x14610f(0x24d,'W4XF')],_0x2badec=this[_0x14610f(0x1e9,'HL9P')]['endDate'];return new Promise(_0x6e6323=>{const _0x349376=_0x14610f,_0x5b2d84={'WmeIQ':function(_0x4a80b8,_0x29f4e6){const _0x5ea061=_0x2863;return _0x177de3[_0x5ea061(0x182,'&e*G')](_0x4a80b8,_0x29f4e6);},'Dnmuo':_0x177de3['smliK'],'WMTXS':_0x349376(0xff,'!AvK'),'zHUuI':function(_0x1aa08b,_0x2b06a3){return _0x1aa08b>=_0x2b06a3;},'NzRfd':'gkdqF','jRsaC':_0x177de3[_0x349376(0x1a4,'bAC6')],'LqTjn':function(_0x5e62ed,_0x1d015a){return _0x5e62ed(_0x1d015a);}};if(_0x177de3['dZwcU'](_0x177de3[_0x349376(0x1a9,'yl@t')],_0x177de3[_0x349376(0x14e,'bAC6')])){let _0x50edbf={'method':_0x177de3[_0x349376(0xf3,'3UQW')],'url':'https://'+this[_0x349376(0x165,'gY[g')]+_0x349376(0x16a,'H52T')+_0x4f9ba2+'&endQueryDate='+_0x33257a,'headers':_0x531014};axios[_0x349376(0x19a,'fm*0')](_0x50edbf)['then'](async function(_0x100de1){const _0x12fae6=_0x349376,_0x3742fc={'cKEyM':function(_0x56ac9f,_0x30ad83){return _0x5b2d84['WmeIQ'](_0x56ac9f,_0x30ad83);},'pqMGn':function(_0x261d45,_0x1ae8e5){const _0x2d4b17=_0x2863;return _0x5b2d84[_0x2d4b17(0x159,'%sBt')](_0x261d45,_0x1ae8e5);}};try{let _0x461dc3=_0x100de1['data'];var _0x17441e=0x0;_0x461dc3['hasOwnProperty'](_0x5b2d84[_0x12fae6(0xf1,'aMIM')])&&_0x461dc3[_0x12fae6(0x238,'1A7q')][_0x12fae6(0x126,'5Q7R')]('totalActivitySignDay')&&(_0x17441e=_0x461dc3[_0x12fae6(0x212,'y%rK')]['totalActivitySignDay']);var _0x4f18cf='未签到';if(_0x461dc3['hasOwnProperty'](_0x5b2d84[_0x12fae6(0x175,'Hbd2')])&&_0x461dc3[_0x12fae6(0x23c,'6Yfc')][_0x12fae6(0x22e,'@$2c')](_0x5b2d84[_0x12fae6(0x1cb,'4Dd^')])){var _0x59873a=_0x461dc3[_0x12fae6(0x104,'HL9P')][_0x12fae6(0x153,'3cZv')];if(_0x5b2d84[_0x12fae6(0xf7,'u*Lg')](_0x59873a[_0x12fae6(0x226,'sM&E')](_0x2badec),0x0)){if(_0x5b2d84[_0x12fae6(0x1f5,'ONoz')]!=='kYxZh')_0x2159fb=!![],_0x4f18cf=_0x5b2d84[_0x12fae6(0x203,'fw%d')];else{const _0x3b77f3=_0x113a0d[_0x12fae6(0x186,'myG9')]['Cookie'];if(_0x5ad4c5){if(_0x5bb34b[_0x12fae6(0x233,'FBlU')](_0x3b77f3)==-0x1){_0x32eed1=_0x3742fc['cKEyM'](_0x3742fc[_0x12fae6(0x11c,'!AvK')](_0x4388a9,'@'),_0x3b77f3),_0x2b5fcd[_0x12fae6(0x16c,'@$2c')](_0x69ca9c,_0xca8ba);let _0x302aeb=_0x13c588['split']('@');_0x4f4ed1['msg']('【'+_0x33d46d[_0x12fae6(0x1b5,'wT[!')]+'】'+('\x20获取第'+_0x302aeb[_0x12fae6(0x22d,'aMIM')]+'个\x20ck\x20成功:\x20'+_0x3b77f3+_0x12fae6(0xfe,'&e*G')));}}else _0x107b8d[_0x12fae6(0x20f,'FBlU')](_0x3b77f3,_0x2f238b),_0x8e1dc6[_0x12fae6(0xec,'dNNy')](_0x3742fc[_0x12fae6(0xe5,'dNNy')]('【'+_0x508462[_0x12fae6(0x16b,'5Q7R')]+'】',_0x12fae6(0x173,'dzva')+_0x3b77f3+_0x12fae6(0x11e,'myG9')));}}}log(_0x4fa466+'当天【'+_0x4f18cf+_0x12fae6(0x18e,'&e*G')+_0x17441e+'】天');}catch(_0x32787e){_0x5b2d84[_0x12fae6(0x1f3,'5Q7R')](log,_0x4fa466+_0x12fae6(0x236,'Nt0C')+_0x32787e['message']+'：'+JSON[_0x12fae6(0x129,'U&A&')](_0x100de1[_0x12fae6(0x1fa,'%xK)')])+'，请求：'+JSON['stringify'](_0x50edbf));}})['catch'](function(_0x4cb51a){const _0x2a5a1c=_0x349376;console[_0x2a5a1c(0x241,'pMxy')](_0x4cb51a);})['then'](_0x363c22=>{_0x6e6323(_0x2159fb);});}else _0x3fa634[_0x349376(0x22f,'u(Zl')]('\x0a')[_0x349376(0x189,'dzva')](_0x417592=>{const _0x4af837=_0x349376;_0x46a3ca[_0x4af837(0x191,'5Q7R')](_0x417592);});});}async[_0x13bc54(0x192,'Cfhm')](){const _0x1a1130=_0x13bc54,_0x59425b={'XguZb':_0x1a1130(0x1c3,'fm*0'),'FCVRu':_0x1a1130(0x211,'W4XF'),'HFBZm':'result','Kveeo':function(_0x2f1b31,_0xa09b7f,_0x370641,_0x5520e7){return _0x2f1b31(_0xa09b7f,_0x370641,_0x5520e7);},'RaCmf':function(_0x15b950,_0x2a8b79){return _0x15b950(_0x2a8b79);},'EZErU':_0x1a1130(0x21f,'fw%d'),'TJRqQ':'kYpSc','MOjZb':function(_0x56a607){return _0x56a607();},'PZPsf':function(_0x7ec0ab,_0x568433){return _0x7ec0ab===_0x568433;},'mHOox':_0x1a1130(0xee,'o9Yf'),'DgrlX':function(_0x1e0a95,_0x3f4db1){return _0x1e0a95!==_0x3f4db1;},'spHvU':_0x1a1130(0x176,'Hbd2'),'bUsAu':_0x1a1130(0x139,'FBlU')};let _0x135f46=this['headersPost'],_0x2a0ab8=this[_0x1a1130(0x24e,'2UkT')];return new Promise(_0x14c299=>{const _0x2aaabb=_0x1a1130,_0x22f4ca={'QmOXH':function(_0x58f1ad,_0x56fab0){return _0x59425b['PZPsf'](_0x58f1ad,_0x56fab0);},'ZUJoh':_0x2aaabb(0x1cd,'uXgf'),'okjNF':_0x59425b['mHOox']};if(_0x59425b[_0x2aaabb(0x1c4,'H52T')](_0x59425b['spHvU'],_0x59425b['spHvU']))_0x294e3a['msg'](_0xac911f);else{let _0x30a5bd={'method':_0x59425b[_0x2aaabb(0x1ea,'3cZv')],'url':_0x2aaabb(0x167,'%xK)')+this['scriptHost']+_0x2aaabb(0x145,'%sBt'),'headers':_0x135f46,'data':'{\x22activityType\x22:\x22sign\x22,\x22channel\x22:\x22app\x22}'};axios[_0x2aaabb(0x142,'U&A&')](_0x30a5bd)['then'](async function(_0xeb9f84){const _0x3edf58=_0x2aaabb;try{let _0x25b562=_0xeb9f84['data'];_0x25b562['respCode']==_0x59425b[_0x3edf58(0x15b,'o9Yf')]?_0x25b562['hasOwnProperty'](_0x59425b['FCVRu'])&&_0x25b562[_0x3edf58(0x238,'1A7q')][_0x3edf58(0x131,'G5CZ')](_0x59425b[_0x3edf58(0x138,'u(Zl')])?_0x59425b[_0x3edf58(0x143,'!AvK')](addNotifyStr,_0x2a0ab8+_0x3edf58(0x235,'yl@t')+_0x25b562[_0x3edf58(0x13a,'NCKN')][_0x3edf58(0x166,'%sBt')],![],!![]):_0x59425b[_0x3edf58(0x1de,'4Dd^')](log,_0x2a0ab8+_0x3edf58(0x128,'G4Af')+JSON[_0x3edf58(0x215,'6Yfc')](_0xeb9f84[_0x3edf58(0xf5,'3UQW')])):_0x59425b[_0x3edf58(0x19f,'NCKN')](log,_0x2a0ab8+_0x3edf58(0x123,'zjdQ')+_0x25b562[_0x3edf58(0x21d,'H52T')]);}catch(_0x59dcbf){log(_0x2a0ab8+_0x3edf58(0x113,'yl@t')+_0x59dcbf['message']+'：'+JSON[_0x3edf58(0x1cc,'o9Yf')](_0xeb9f84[_0x3edf58(0xe7,'Cs8U')])+_0x3edf58(0x1f2,'pMxy')+JSON[_0x3edf58(0x200,'HL9P')](_0x30a5bd));}})[_0x2aaabb(0x1c0,'&e*G')](function(_0x2c0115){const _0x516f93=_0x2aaabb;_0x22f4ca['QmOXH'](_0x22f4ca['ZUJoh'],_0x22f4ca['okjNF'])?_0x3301fb[_0x516f93(0x1d6,'sM&E')](_0xcba0b8):console[_0x516f93(0xfa,'NCKN')](_0x2c0115);})['then'](_0x557822=>{const _0xa06034=_0x2aaabb,_0x2e42dc={'RkqgB':function(_0x21c25e,_0x1bbc2b,_0xe91624,_0x3d60ed){return _0x59425b['Kveeo'](_0x21c25e,_0x1bbc2b,_0xe91624,_0x3d60ed);}};_0x59425b[_0xa06034(0x160,'WM)B')]===_0x59425b['TJRqQ']?_0x2e42dc[_0xa06034(0x246,'@$2c')](_0x226ec2,_0x42c1b1+_0xa06034(0x1a5,'WM)B')+_0x33126b[_0xa06034(0x10a,'%sBt')][_0xa06034(0x1d8,'U&A&')],![],!![]):_0x59425b[_0xa06034(0x13d,'@$2c')](_0x14c299);});}});}}!(async()=>{const _0x4ed351=_0x13bc54,_0x5542af={'UZXgn':function(_0x2f1270,_0x3be31b){return _0x2f1270!==_0x3be31b;},'KNqOp':function(_0x5a0a11){return _0x5a0a11();},'JgYfY':function(_0x2f6bf0,_0x590a7b){return _0x2f6bf0===_0x590a7b;},'hoqOl':_0x4ed351(0x1bb,'U&A&'),'AEGHw':function(_0x29c58d,_0x26f310){return _0x29c58d(_0x26f310);}};if(_0x5542af[_0x4ed351(0x1b8,'HL9P')](typeof $request,_0x4ed351(0x16f,'ONoz')))await getRewrite();else{if('eacnJ'!==_0x4ed351(0x106,'dzva'))_0x8bbf05(_0x43e84d+'签到失败：'+_0x5b3435['respMsg']);else{if(!await _0x5542af['KNqOp'](getEnvs))return;else{await showTips();for(let _0xdcb1ce of userList){if(_0x5542af['JgYfY'](_0x5542af['hoqOl'],_0x4ed351(0xf4,'Hbd2'))){let _0x1fa2f7=await _0xdcb1ce[_0x4ed351(0x154,'%sBt')]();await $[_0x4ed351(0x24b,'Cs8U')](0x7d0),!_0x1fa2f7&&(await _0xdcb1ce[_0x4ed351(0x17e,'myG9')](),await $['wait'](0x7d0));}else _0x359a36[_0x4ed351(0x19d,'3UQW')](_0x111936);}await SendMsg(scriptMsg),await _0x5542af[_0x4ed351(0xea,'mzGJ')](SendSpecialMsg,scriptSpecialMsg);}}}})()[_0x13bc54(0x1a8,'Hbd2')](_0x4867fb=>log(_0x4867fb))['finally'](()=>$[_0x13bc54(0x198,'@$2c')]());function _0x2ed9(){const _0xba3f3f=(function(){return[_0xod1,'MrjIsrjYKiqamWPDiy.cdorm.vy7KhgTEFlMVQRW==','W5fFgCoI','kwddUq','W7CirqOb','W7OQEW','4PY/W6pNP4FMRBZNLyJKUOlLLOdKUQ3NL7VPGRtVVQ3KUQpOGzFKVRZORkBLHyNLKzdMSPtMGkRVVjNLHypNOyhMGPRVVkBLRkhMLyZMGPlLKOlMNzhMLkVMGi3VVQ/ORBZMO6ZMJihMG5tLHidOH6JOO6JLI5ZMLz0','WPuyW50vW5y1W4miyMhdM8kpW5CrCmoIoG','4P+vW4/MNP3KUl3LRkJKUBFKV6NOHlhMNPdPLOxPO4xMPiVKUQdOTjZOTQBVVRtLJQ3MIyBKVktKUzhPMilKUitNL5FKUy7KVRlOHj7MN4NPLjhOR4lLRyBOHypNMkNKUBdKV7hMJRtLPlxMI5NMJyJLRPO','bb/cNHhcHa','W78dWO7cQSon','W5X1ceG','W4n8Cabd','i2NdT3lcV8oaz07dHSkqa8k7oqSvBSka','W6hdHCoowxrrWPnb','WPbCWRpdOCosW5JdISkRkmovWRhcNmkNWQdcHa','W61EmSkLva','WRamFmojlCooW4K0W5fqW5VdJvm','44ogWOZcV8oOWP7dHEobJ8oX6l+Q5PUU5l2h55U05yAK6yki6lsV5yYE5PEW57MMEtxcLW','n2pdSMVdPW','WQbuWQldU8oQ','W4vUnCo3W68','WPzRxCkTW5K','WOpcSSk/duuhWQpcU8owdCk4WRL3','W5DBfCoJW71VW6/cI0bS','W5nNCXX/W4W2nCkxk2vJgCoiW43cSeVdMaH/W5pcLaJcSHiMeINcVSolvSkBW5K','W4Hsqan/','W7ldNmodtYy','WP10WRr+iq','we4moW','W5pdJ8oawru','W59Pl0Lovq','WO7cJmodW67cOCo4W7reW48F','WOvCWRtdH8oxW4S','s8kIqmoXWQuMBty','W5BcNCkEi2i','W4KcWRJcTSouha7dRKdcPSk2mf4','WPZcNCkpjxddUCoKW6D/kMpdTKddNCoWWQZdMJH9WRaNx8khw23dQJNdOLrcW5ZdV8kuW5pdMCkMW6tdT15JW7v7w8oCimkMESkxcKfnW6eHWRTCt8oaWRTdWOTBW718W6Pej8onW4lcPsRcQchdRCoxrr7dVSoOW48eW4JcSmk4xW','W5H7dem','Ewb0m8ofzmkE','8l62HmkA5lI85ywj5y+P542q5lQZ','q8oeW58','W6eXCSoOW64JzqFcPW','us8gBCkG','ECofq8kOWPfjW6xcKG','W6yuwsGU','k+InHEwoGEETVmon5lMFjCoHWPit5OIl5yI7W5ff','sMtdGGVcMa','omoVWRVcGSol','fSoGWQBcRSoZ','yCo0qmk9WOm','Dmo/wmkXWPO','ACoNW704Da','W7eiWPm1WPK','W4uoqcSNW4vGW5VcGCkK','WR1gESoKW7FdMKq','4P2uWQhOH4ZMN5VMLkpKUOpLPAFMNOJKU6pMHPlOOA7NO5VOPRZMIBBKV7FMLkRNLPRNORtOPkRMI4xKVAFMLPlOGPNMIQpMIBW','W6u4ssmgW4a','WOVcO8o0W5lcUq','aYpcRWdcO8kSnebmW4m','WOSntCkYWQaUWQ7cP3r3FmodW4u','g8kjlqKm','W5HFo0rL','gq7dQCkF','EmkckwqU','W740tYKQW5X3','BSk5tSoOWRPWiZBdLmoPBbRdRSkpWQhdVedcSLCSW4pdRx5tzmkhb8ogo8olWQ4ZW6HvWOTcuCkBpmoJWQzWW4P3W5f0W53dU0xcP0udi8oAW5ZdS0SBWPaSWQKbD8osFSkBimo0ymohpafFW7iYxIaYm1VdRs3dM8oCWPSbW5pcVYldV8kVW6z5yvdcMCo8bSkNjfidWPeKqCkNW5ZcGdX7jW','W7rczHfb','BCkDjrxcNrzT','8j2GKhFORQFORzJNNARPMidORBNKUjZKUlJLO6VMMQO','W7BdLmowvuW','44cd77Y55P685Acm5ywI5yYI6yA1W6C','W5r4Ctv3W4W/','44gt5P+C5P2x56YH5yMu44o7','sEIpJownJoEVMXVKUPTgWPFdMSkd5OQG5yIZWP3dKq','W5pcHSk2rCkC','W4zVeK4','WQxcGCk9W6tcOSom','WOeyW50LW54SW4C','d8oXWRRcNSoq','WPtcL8oJW43cIW','W4FdS8o1vq','abxcJq','BMPUmG','W4dcK8kCpMVdQmoyW6fIoq','yeBdPXlcNSkjdG','W4q+WRpcPmoD','qxZdUahcK8krl8kM','ns3cTSkS','rCkwjbhcQa','ELO8pNy','ldBcOCkHoSk4dq','i3jTk8oUtCoSo8k9W4vjxmoi','W7m7WP7cVmoOWQ3cVmoHWQFdNG','yYKNCmkOc8ktjCkyW7u','dH7cHHRcTG','56+j5yQ25OQw5yQI772P','jJlcNCkvna','W6BdI8ovv1fD','h8oGWQlcLmom','WQ/dTepdPCoJ','zxBdMSo6WPy7','W4e8WRKzWRlcMSoduSo+CW','nthcT0XMW4W','aJZcS1fM','4P+MlowMQUs7UUAmNUwoKoAUS+ACNEASTUITIEEQSowmLEwjNoMzGoIeU+ACM+AvHEs5Kq','W6Hzl8kpnCkAWPuPW4Pd','44og57ct57If6ykq55Yo44kZ','WOeiW4SYW4SQ','F8k5fKy6','WO9vtmkCW6S','WOPNz8kaW50','WRrcy8of','omoky2xdIeaWW6pcJ3j2W5BcJG','W5tcLCkAa3ldSCo1','yIhcSfbT','WRtOJ6JLJ4dNRQhcUEs5OcSbWQGQ5OUt5yIOrCoQ','bmorWQFcVSoj','s1tdTCotWOe','W5HBamobW61XW7dcLub5tq','A8kVWONdHW','ztKWA8kxhCkXl8kiW7u','W6Cn44oZ'].concat((function(){return['iCkrkZWm','W6uNWONcVq','rf4rngtdGG','iHpcPLC','W7FcL8kCo0m','4P6UAoIhOEAFOUwnREwgUEs7U+A0JEwmJUEyRUs6N+s8KUIKR+wUVEwlNUAFLoEQUUw7Ho+/IEs6MoEuSos6NoA0LoIVGowsTEwSMEs6LUEJJoEPOW','hbtcO0f4hCkXfrCWC2VcLrS','W6SyDSkoW68','zKBdPrm','c8o0ECoCW6G','Fmocua','qmkoeKyZ','WR14wSkEW5uGWR4ACq','WRCtW7WyW4y','CmkMmKOjyCkJ','W6nnvH9q','W4tdGCoPsea','j8o2uCo2','C8kRbxu','v8koWQu/WPaYWOipWRVdUuO','p8oTBmoMW7O','zemtp0O','ngBdRwO','bd/cVXZcIa','E3BdH8oOWO4N','j0xdGIFdMG','DSkPWQyRWP8','776j5P6K5Psk54M05PYu5y+pW5Ov','8lkMKSkM5B2U5yI+546B5Act77+NW6G4WOBcPt3LVRJLIklMLkxPLQBVVP4','AUI1NEwmNW','rCkIbxmg','W7hdGCojsa','imo6vCoHW75geq','WQJcG8ocW5xcIa','tmkoWRa/WPq0WPa','gJxcPbxcMmkM','WPhcISoFW6dcPCoK','WObsWQhdGmkUbuhdPXVcR8k6leHHbvVdJSo1fW','hqBcNMfRfG','4PYFw+wLQUs4UUAoPUwpGUAVNoAFHUAVHoIVKEEORowoM+wiUUMBP+IhMEACPoAuLos5Ua','yxldH8osWPu9WOX/W53cUgHrg2m','qGJcJuvmD8osW4lcMvi','W6FdSCojFu0','W6CVESoKW7W','W5HBamoJW7LPW70','4PYIjEIeMUADU+AuO+s7PUwLVEAFOUs5UoAfLUIGIoEJPoILHUAlQ+s+U+AvHoExK+EGOEIKRUAiGos/QoAwR+IdQUAjNEAkLa','W4fNBXLI','y8kRWPpdGvldQa','8lcISLtMNO7LP6xNMPNPO6xNMklVVkNMRlROV7hMIixNQR4','W5D5Dq','776k6k665Rg477+M','W7PRnuXe','yJaeC8kP','W5OLrmoRW6W','W6VcOSkFESkx','WODjWQZdTSop','kHJdLvtdLd3cHW','8lQvIZBMR6NOHPlMNABPH4ZNLyRLHO7OTlpMQ6lLVRJJGB3XJBE1','r8k3qmoG','8loYMYpMNBNLPAVNMkVPOk7NMQ/VV7lMRABOV4xMI5NNQyW','WOP/W7VdPSkb','FJ84','mWpdGLK','gdRdUmkHya','ra/cML5TCSorW4hcGW','WOrmWQxdGCopW40','WRmRW7SIW6S','EHGMEmkB','badcO2y','Fmo3fmkQW6XBfWJcHa','FYZdR1q4W51dWOiqW647WP3cIHbNorKnWPVdOxJcPG','5lMOW5a8netMI7VLIiBdSqS','5BEr566O5yIe','44kgnuSVoSoj44cvWPpOVjVMM6dKVjZNMQlLH4xPGiNOTBBLJ5dMLPtNUzXqFCor','5lQS6lwU5yYm','WPrVWPnFdq','Fc87FSkSfW','n8oV5lMl55s26k6x6iEM6kkk5yEe6zs+6ywT5ys4WO8','gSo1WRJcUSog','W7uTWO/cQSogWRVcTW','kbhcTgfC','DCoqq8k5','w8kkWRa6','8ykKRCoN5Q+w6iAH5P6t6ywJ55Ea5yse6lAa5QU15B+944ob8y+hPq','rSooW7aWvG','xCodW4O4xdOtDSoc','W6yWxd4Q','nXNdVv7dJXpcJCkKWQFcQCkiWPa6pG','W70XCSoOW7afBq','W4ZdMCkbWR7dQmk8WOr9W4SroSoGW6G','W4ldTCoJtZXwW7RcMmofiW','uueLnua','W5tdQCoPvHPr','W4hcLCkDj1BdR8o3','cGNdV8ktq8offq','CYyeBSk3','bIxcUrO','5lID6lwD5yYF','WPyvW6OQ','qGNcHa','77YB5P+d5PE254Mw5P2m5y+7W7ZcLW','W53cHCkd','lx3dUMFdQ8kVzq','W4z1aCoJW7i','nYxcQKa','WQHNWOJcQ8ojWQVcMmoRWRddGWi+','4PYNW67OH6FMNORMLQhKUBBOR7RLNlZKUBZOVkVOR47NLzNLKlxcRZtLS7RMLlpLH7JOH5VOOyRLIBxPMjq','xSocW4S5','WR3dTgBdK8oic1FdOmkrWPZdLs7cNCkJWRddVI4','br7dTmkqxSoz','yMrZgmotFSkVWPKAAmogWQldKCke','Fmk+WPhdJ1i','aSkOWPpdK8kVWROQyJtcUIa7rCk2','DSouq8kmWOSEWQ8','jmkCmdaw','W68MWP/cQ8oFWOdcSa','WQNdThZdPmoYhfZdGmkzWPhdNa7cLSk2WQS','566W5yQH5OIy5yIO776b','56+m5yIN5P+M6k6s5BYu5BQx4PYB','44k55ysu6lE75Akn5PUz44o5','W6DDpSkE','WPHPWRZcUSks','nIZcT8kTlmkqaSk1W5C'].concat((function(){return['8ykuMCoN5lQY5yEk5y2U54Yu5lMU','sSowW4WW','W7uUsmkvW5BcNM/cJ3/dLW','DsqJ','p0NcTmohbmkb','dqZcQxCIpSkSsHWK','W6m/smktW5q','D8ofwCkvWOa','jSoWtCoKW54','W6eOtSkOW4/cH0lcMMpdJw7cPJldJGZcI1O','qehdQt45qmosiqGAtgdcHW','wg5XmmoM','W7m/wa','WOPiWPDybmkVtq','4P+MWRhNPONMR5xKUAdKVk7LHz7KVPtLJi/JG7ZOHzpLQ7lKVQhOViZOOPxKUApKVilLVOBLV5ZNMkFOVA/OVPRJGRhLJRJLUO4','y8kHcfiM','WPPmWOPi','W7DTpCkvBq','zCoyr8kR','W4Txbmo0','W4BcG8kljvtdVSo6W6TYoq','tmkkWQK+W5GVWOm2WRpdO1a','ixGsv8kzeCkuka','netdGctdPq','cCoYzmoGW7W','WOLmWPDD','W4K4vSkpW54','W43OJPRLJlxNRja','W6JcKCkqwmkA','wmo7W70ewG','kuBdQG','WP1lWO9ocq','WOvECCkcW5u','z0ldG8otWPa','W5KSWQSv','lrxdT8kcrq','4P6BW5dOH7tMNBVMLPZKUARORAFLNQBKUjROVldORPVNLQRLKkhcGmkO5Boq5Psd5yEo6iE+6kkB5yMP6zIu','eINcOCk+ba','pSogWPFcUCoh','itNcSCkL','Aw0Tmeq','W5mrWO0iWP4','k8kEoZOCWQtdVW','WP5vA8kaW48','tuKnpgi','mdJcTNXK','W7lcGCkOl18','WPtcVmkYW6VcIa','ySoC5lMs55w36k6t6isb6kov5yA46zEg6yAC5yweya','WP5BW7JdPSkSqeJdUW','WP1FW7JdI8kpxeNdVa','x2rul8oC','W4nlWPL4WOzOWP4KENxdMCkPW7q','ECk2kW','uXRcNfy','lYtcRvH6WPTCW5e','BSktnd7cTG','bSkSWO7dU8kSWRW','8l6gSmkA5B2V5yM1546x5AgJ77YVW4tdKSoa5B2q5yQ95Pwx6zsD776h','jwpdRM7dUSkdyL/dICktdmoGnLrAyG','WPnyWRpdKW','WPraWOZcPmkp','xSo6W5NcQCoGW6DiEWRcPqyADq','WOCPuruyct9SWRZcPgOFyW','lgFdQNldOmoAlaq','vCk8WRyZWOi','WODmWRtdMG','WP5DWO9veq','ruFcL0bohCkUbq','566W5yQH5BYk5BQp4P+x','W53cKCkdmG','WPG1eKnevebsWPVcPvWo','W5Xswrjz','WO/cJSoFW6pcVSoH','u8kJr8oP','WPrPWPzkfa','W5zqemoIW6bsW7O','4P68F+EML+AVR+EwOos7HowvJEs5UoExQ+MaNU+/J+s6UUIcGUs8L+ISP+wgKUwqG+AWN+AbN++9GEwhHUEGTEAbMU+/VEwSGEAuO+AdGUwsIEADSUAwGUAdJU++IUIVIUAHLEAmQEAaVUwfSUIhREIIRUwiQEAwSG','WOPlW4hdHmko','CCkSnfSbB8kU','WRz95lIJ55wL6k646iwe6kgi5yEa6zsV6ysc5yELbW','WPVcGmodW4lcSmoVW5q','y8kGWRBdHe8','mCkamZyq','WOtcVSk+d0ugWQFcJmoWe8kbWPnh','56Yk5yMf5AEH6lsR77Yv','lmkHkbew','44calJb7WQ0y44okAUI8SUAARUs9IUEAI+whTUMdRUI0UownOUAxKEE5GSkrW416','W557eMLDxL5pWOdcVf8fzcO','W4hcLCkEo3RdV8o1','56Yu5yU55OUW5yId77+u5P++556F5l+X5Oc077+q','EMFdHSo0WOW0WRvRW4S','WOLkW6ddQSku','W7nJjLb8','zLnkoCoL','W6FdJ8o/s04','ACoAxSkbWOq','yMBdOqlcMG','5yA/5OMY5yIy','lZhcQMD+W48JWOXiW6jTWPpdIHu','WR5QWO4','W4DKzGjzW409jmkDma','44c+5yE66lAB5AkH5PI844gm','W6ldGCooB11BWO9BW7hdUq','WRVcNmoqW4VcGG','W64Ow8kyW4pcMfq','r8kiWR/dVeS','W5yhWQJcMG','tfOlmG','ddxdTCkEuG','WP1FW7JdHCkvrvFdLLpcHSkP','r0PQdCog','neddVGS','WRz3WP8','W5TqeSk6yG','W47cSCkJvmkmB0i','E3BdHCoOWOCGWQG','WRfmW6NdPSkp','iZFcT8kbi8kuaW','W5HuWQBdGmoqW5RdKmkbj8oEW7NcHSkSWQ7cMSokWPhdJ8kapmoEfIjUzwLBW7FdT3lcVSkaWR/dLYBcMYn9WOGRvCo4zv3dM8oWWPFdM8o5kLKRvYv6ab0IWPHdWOC','wLOrn3/dHW'];}()));}()));}());_0x2ed9=function(){return _0xba3f3f;};return _0x2ed9();};async function showTips(){const _0x3ab0ff=_0x13bc54,_0x49b5e4={'pEwea':function(_0x1b720c,_0x279bed){return _0x1b720c(_0x279bed);},'aYkGN':function(_0x29cc93,_0x31c435){return _0x29cc93(_0x31c435);},'NdsAT':function(_0x5bc543,_0x380e68){return _0x5bc543(_0x380e68);},'zECsi':function(_0x4d2074,_0x34ed7b){return _0x4d2074===_0x34ed7b;},'BvHjz':_0x3ab0ff(0x15a,'2UkT')};return _0x49b5e4['pEwea'](log,'📢\x20请认真阅读以下声明'),_0x49b5e4[_0x3ab0ff(0x12f,'fm*0')](log,_0x3ab0ff(0x134,'6Yfc')),log('✨\x20脚本及其中涉及的任何解密分析程序，仅用于测试和学习研究'),_0x49b5e4[_0x3ab0ff(0x1fc,'!AvK')](log,_0x3ab0ff(0x11b,'ONoz')),log(_0x3ab0ff(0x249,'yl@t')),_0x49b5e4[_0x3ab0ff(0x177,'W4XF')](log,'✨\x20本人对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害'),log(_0x3ab0ff(0xf2,'H52T')),_0x49b5e4[_0x3ab0ff(0x149,'myG9')](log,_0x3ab0ff(0x17d,'Hbd2')),log(_0x3ab0ff(0x1e7,'HL9P')),log(_0x3ab0ff(0x1b0,'Cfhm')),_0x49b5e4[_0x3ab0ff(0x172,'myG9')](log,_0x3ab0ff(0x1fb,'Nt0C')),log('🔔\x20当前脚本版本号:\x20'+scriptVersion+_0x3ab0ff(0x224,'4Dd^')+scriptVersionLatest),log(_0x3ab0ff(0x1f9,'ONoz')),_0x49b5e4[_0x3ab0ff(0x19e,'dzva')](log,_0x3ab0ff(0x16d,'3cZv')+scriptCkArr['length']+'个账号'),debug&&(_0x49b5e4[_0x3ab0ff(0x15f,'Nt0C')](_0x49b5e4[_0x3ab0ff(0x1f6,'mzGJ')],_0x49b5e4[_0x3ab0ff(0x19b,'FBlU')])?log(_0x3ab0ff(0x157,'Cfhm')+JSON['stringify'](scriptCkArr)):_0x3262ca[_0x3ab0ff(0x110,'%sBt')](_0x2ccc07)),!![];}async function getRewrite(){const _0x53c535=_0x13bc54,_0x13c8bd={'OfgFe':function(_0x4f6a01,_0x40875b){return _0x4f6a01(_0x40875b);},'vLEUh':function(_0x1b2481,_0x5aca0f){return _0x1b2481+_0x5aca0f;},'xkiYf':function(_0x1bebb1,_0x26ec6a){return _0x1bebb1*_0x26ec6a;},'ftnMb':function(_0xda086,_0x4f9f10){return _0xda086*_0x4f9f10;},'XqGlV':function(_0xc0adea,_0x1d6204){return _0xc0adea>_0x1d6204;},'hzPXZ':function(_0x262592,_0x5532cc){return _0x262592===_0x5532cc;},'BNyFM':'sEBSw','PYCwt':function(_0x316152,_0x4dbb4d){return _0x316152+_0x4dbb4d;},'yvGVD':'HISIw'};_0x13c8bd['OfgFe'](log,_0x53c535(0x108,'3cZv')+new Date(_0x13c8bd[_0x53c535(0x17f,'gY[g')](new Date()[_0x53c535(0x1b7,'H52T')](),_0x13c8bd[_0x53c535(0x12e,'W4XF')](new Date()[_0x53c535(0x14c,'uXgf')](),0x3c)*0x3e8)+_0x13c8bd[_0x53c535(0x20e,'Hbd2')](_0x13c8bd[_0x53c535(0x242,'W4XF')](0x8,0x3c),0x3c)*0x3e8)[_0x53c535(0x217,'CGFS')]());if(_0x13c8bd['XqGlV']($request[_0x53c535(0x223,'HL9P')][_0x53c535(0x1f8,'CGFS')]('marketing-tools/activity/join'),-0x1)){if(_0x13c8bd[_0x53c535(0x1b2,'4Dd^')](_0x13c8bd['BNyFM'],'sEBSw')){const _0x34bbdd=$request[_0x53c535(0x137,'pMxy')]['Cookie'];if(scriptCk){if(scriptCk[_0x53c535(0xf8,'&e*G')](_0x34bbdd)==-0x1){scriptCk=_0x13c8bd['vLEUh'](scriptCk+'@',_0x34bbdd),$[_0x53c535(0x1e0,'CYzz')](scriptCk,scriptVarName);let _0x1fac67=scriptCk[_0x53c535(0x158,'sM&E')]('@');$[_0x53c535(0x1ca,'W4XF')](_0x13c8bd[_0x53c535(0xf9,'o9Yf')]('【'+$[_0x53c535(0x147,'2UkT')]+'】',_0x53c535(0xe9,'Cs8U')+_0x1fac67[_0x53c535(0x1e4,'gY[g')]+_0x53c535(0x207,'&e*G')+_0x34bbdd+'\x20,不用请自行关闭重写!'));}}else _0x13c8bd['yvGVD']==='OGrEn'?_0x17a041['push'](_0x3a642c):($[_0x53c535(0x193,'uXgf')](_0x34bbdd,scriptVarName),$[_0x53c535(0x148,'sM&E')](_0x13c8bd[_0x53c535(0xeb,'6Yfc')]('【'+$['name']+'】',_0x53c535(0x1b9,'ONoz')+_0x34bbdd+'\x20,不用请自行关闭重写!')));}else _0x33a077[_0x53c535(0x22f,'u(Zl')]('\x0a')[_0x53c535(0x11f,'gY[g')](_0x7984f3=>{const _0x399983=_0x53c535;_0x532942[_0x399983(0x220,'bAC6')](_0x7984f3);});}}function getLastDay(_0x4b3c00){const _0x3cc2d8=_0x13bc54,_0x3cb721={'AVRcT':function(_0x413818,_0x5ce15b){return _0x413818(_0x5ce15b);},'MidhM':function(_0x1902de,_0x4e68cc){return _0x1902de(_0x4e68cc);},'XlXEz':function(_0xc01970,_0x1556d3){return _0xc01970(_0x1556d3);},'LxllZ':function(_0x2ec7b7,_0x5eb3da){return _0x2ec7b7(_0x5eb3da);},'XkXYw':function(_0x4ba354,_0x4ae9bd){return _0x4ba354(_0x4ae9bd);},'UlFWj':function(_0x2b8907,_0x1c4160){return _0x2b8907(_0x1c4160);},'ttLLk':function(_0x3e554e,_0x1d182e){return _0x3e554e(_0x1d182e);},'AqFxD':function(_0x263346,_0x58cdc5){return _0x263346+_0x58cdc5;},'lnKbi':function(_0x41a12c,_0x15d0cd){return _0x41a12c<_0x15d0cd;},'mULrI':function(_0x1ffb38,_0x36cae0){return _0x1ffb38+_0x36cae0;},'YVmWd':_0x3cc2d8(0x124,'&e*G')};var _0x447dfa=new Date()[_0x3cc2d8(0x13c,'!AvK')](),_0x8aafca=_0x3cb721[_0x3cc2d8(0xfc,'H52T')](new Date()['getMonth'](),0x1),_0x5bb8fb=new Date(_0x447dfa,_0x8aafca,0x0)[_0x3cc2d8(0x17c,'wT[!')]();_0x8aafca=_0x8aafca<0xa?'0'+_0x8aafca:_0x8aafca,_0x5bb8fb=_0x3cb721[_0x3cc2d8(0x120,'u(Zl')](_0x5bb8fb,0xa)?_0x3cb721[_0x3cc2d8(0x1c7,'pMxy')]('0',_0x5bb8fb):_0x5bb8fb;if(_0x4b3c00){if(_0x3cc2d8(0xef,'U&A&')===_0x3cb721['YVmWd'])_0x5bb8fb='01';else{const _0x26a9f5='3|1|2|8|4|11|9|15|14|5|6|12|13|0|10|7'[_0x3cc2d8(0x12a,'!AvK')]('|');let _0x5187d7=0x0;while(!![]){switch(_0x26a9f5[_0x5187d7++]){case'0':_0x52fc30(_0x3cc2d8(0x23b,'%sBt')+_0x44e17f['length']+_0x3cc2d8(0x221,'HL9P'));continue;case'1':_0x54bbc7(_0x3cc2d8(0x237,'u*Lg'));continue;case'2':_0x3cb721[_0x3cc2d8(0x202,'uXgf')](_0xff126c,_0x3cc2d8(0x1c5,'FBlU'));continue;case'3':_0x1fa710(_0x3cc2d8(0x18a,'dzva'));continue;case'4':_0x3cb721['MidhM'](_0x9e0854,'✨\x20禁止任何公众号、自媒体进行任何形式的转载、发布');continue;case'5':_0x3cb721['MidhM'](_0xe2a96a,'【系统通知】');continue;case'6':_0x3cb721[_0x3cc2d8(0x140,'1A7q')](_0x29c7fe,_0x3cc2d8(0x1f0,'2UkT'));continue;case'7':return!![];case'8':_0x48e548(_0x3cc2d8(0x14b,'4Dd^'));continue;case'9':_0x3cb721[_0x3cc2d8(0x1d5,'NCKN')](_0x262d77,_0x3cc2d8(0x22a,'u(Zl'));continue;case'10':_0x1ed01a&&_0x3cb721[_0x3cc2d8(0x1c9,'CYzz')](_0x343a09,_0x3cc2d8(0x125,'fw%d')+_0x2d4d33['stringify'](_0x4bd905));continue;case'11':_0x58f17c(_0x3cc2d8(0x14d,'gY[g'));continue;case'12':_0x210484('🔔\x20当前脚本版本号:\x20'+_0x13ee9b+_0x3cc2d8(0x1db,'3cZv')+_0xe91219);continue;case'13':_0x3cb721['UlFWj'](_0x23dd5d,_0x3cc2d8(0x213,'%sBt'));continue;case'14':_0x3cb721[_0x3cc2d8(0xf6,'NCKN')](_0x197440,_0x3cc2d8(0x1ae,'o9Yf'));continue;case'15':_0x3cb721['ttLLk'](_0x30362a,_0x3cc2d8(0x1ed,'@$2c'));continue;}break;}}}return[_0x447dfa,_0x8aafca,_0x5bb8fb][_0x3cc2d8(0x150,'5Q7R')]('');}function time(_0x35a601,_0x1d5d91=null){const _0x14e3f2=_0x13bc54,_0x1f3793={'nEZbO':function(_0x528db1,_0x57600e){return _0x528db1+_0x57600e;},'ixRJZ':function(_0x23a2d4,_0xa04551){return _0x23a2d4+_0xa04551;},'fTZMi':function(_0x3e9200,_0xa8e00c){return _0x3e9200+_0xa8e00c;}},_0x5a2d0d=_0x1d5d91?new Date(_0x1d5d91):new Date();let _0x581203={'M+':_0x1f3793['nEZbO'](_0x5a2d0d['getMonth'](),0x1),'d+':_0x5a2d0d[_0x14e3f2(0x141,'mzGJ')](),'H+':_0x5a2d0d[_0x14e3f2(0x100,'!AvK')](),'m+':_0x5a2d0d['getMinutes'](),'s+':_0x5a2d0d[_0x14e3f2(0x135,'3cZv')](),'q+':Math[_0x14e3f2(0x232,'&e*G')]((_0x5a2d0d['getMonth']()+0x3)/0x3),'S':_0x5a2d0d['getMilliseconds']()};if(/(y+)/[_0x14e3f2(0x1df,'3cZv')](_0x35a601))_0x35a601=_0x35a601['replace'](RegExp['$1'],_0x1f3793[_0x14e3f2(0x116,'Nt0C')](_0x5a2d0d[_0x14e3f2(0x1bc,'2UkT')](),'')[_0x14e3f2(0x201,'%sBt')](0x4-RegExp['$1'][_0x14e3f2(0x1c2,'NCKN')]));for(let _0x512b9f in _0x581203)if(new RegExp(_0x1f3793['nEZbO'](_0x1f3793[_0x14e3f2(0x183,'5Q7R')]('(',_0x512b9f),')'))[_0x14e3f2(0x1c8,'fm*0')](_0x35a601))_0x35a601=_0x35a601[_0x14e3f2(0x127,'H52T')](RegExp['$1'],RegExp['$1'][_0x14e3f2(0x1ef,'u(Zl')]==0x1?_0x581203[_0x512b9f]:_0x1f3793[_0x14e3f2(0x195,'gY[g')]('00',_0x581203[_0x512b9f])[_0x14e3f2(0x1b1,'uXgf')](_0x1f3793['fTZMi']('',_0x581203[_0x512b9f])[_0x14e3f2(0x1aa,'U&A&')]));return _0x35a601;}async function getEnvs(){const _0x3d70d5=_0x13bc54,_0x4024a7={'eNoix':function(_0x2a43cb,_0x1197b8){return _0x2a43cb(_0x1197b8);},'WDSSS':_0x3d70d5(0x243,'CYzz'),'Oulsx':function(_0x1a5386,_0xbc7c58){return _0x1a5386+_0xbc7c58;},'Eljyo':function(_0x527679,_0x2e32da){return _0x527679(_0x2e32da);},'yKudj':function(_0x257e21,_0x3d05aa){return _0x257e21*_0x3d05aa;},'BThac':function(_0x1be986,_0x31a2dd){return _0x1be986*_0x31a2dd;},'zRaUq':function(_0x33885e,_0x1f0454){return _0x33885e===_0x1f0454;},'ppkDt':_0x3d70d5(0x1ba,'Hbd2'),'lVJnA':_0x3d70d5(0x10f,'y%rK'),'CmDUm':function(_0x5ed01a,_0xd3b5ee){return _0x5ed01a!=_0xd3b5ee;},'yBpch':function(_0x2e3489,_0x1b8ed5){return _0x2e3489!=_0x1b8ed5;},'QZUoF':_0x3d70d5(0x24c,'1A7q'),'rzQjq':function(_0x540312,_0x3d03bd){return _0x540312===_0x3d03bd;},'hyHad':_0x3d70d5(0x1d4,'CYzz'),'ODtKp':function(_0x36169b,_0x258ebc){return _0x36169b(_0x258ebc);},'bzNZM':function(_0x2a2f03,_0x237be5){return _0x2a2f03!==_0x237be5;},'FsaLS':_0x3d70d5(0xe6,'CYzz'),'DkOwf':function(_0xb7493d,_0x2bf238){return _0xb7493d!=_0x2bf238;},'xeSAI':function(_0x1dd49d,_0x27bbd2){return _0x1dd49d!=_0x27bbd2;},'pflrl':function(_0xdf8c0c,_0x2182a5){return _0xdf8c0c<_0x2182a5;},'TkmkO':function(_0x9031ae,_0x20d8d1){return _0x9031ae===_0x20d8d1;},'tbNLF':'nIcPp','bkEwv':_0x3d70d5(0x1fd,'fw%d')};_0x4024a7[_0x3d70d5(0x13b,'aMIM')](log,_0x3d70d5(0x1dc,'WM)B')+new Date(_0x4024a7['Oulsx'](new Date()[_0x3d70d5(0x231,'W4XF')](),_0x4024a7[_0x3d70d5(0x227,'2UkT')](new Date()[_0x3d70d5(0x244,'pMxy')](),0x3c)*0x3e8)+_0x4024a7[_0x3d70d5(0xfd,'Cfhm')](_0x4024a7[_0x3d70d5(0x14f,'FBlU')](0x8,0x3c)*0x3c,0x3e8))['toLocaleString']());if(scriptUa){if(scriptUa['indexOf']('@')!=-0x1)_0x4024a7[_0x3d70d5(0x190,'mzGJ')](_0x4024a7[_0x3d70d5(0x1f7,'%sBt')],_0x4024a7[_0x3d70d5(0x12c,'@$2c')])?(_0x3ff352&&_0x4024a7[_0x3d70d5(0x13b,'aMIM')](_0x311022,_0x1aa266+'\x0a'),_0x31e29f+=_0x240882+'\x0a',_0x5f8237&&(_0x5b4020+=_0x23400a+'\x0a')):scriptUa[_0x3d70d5(0x121,'&e*G')]('@')[_0x3d70d5(0x18d,'Nt0C')](_0x8e54f2=>{const _0x410a36=_0x3d70d5,_0x19dbd2={'AhlXP':function(_0x3733b2,_0x327b78){return _0x3733b2+_0x327b78;}};if(_0x4024a7['WDSSS']===_0x4024a7['WDSSS'])scriptUaArr[_0x410a36(0xf0,'u*Lg')](_0x8e54f2);else return _0x52f470[_0x410a36(0x1d7,'bAC6')](_0x19dbd2['AhlXP'](_0x168b9c[_0x410a36(0x1ac,'G5CZ')]()*(_0x4868e6-_0x1b86ce),_0x41cb85));});else _0x4024a7[_0x3d70d5(0x239,'rAHJ')](scriptUa[_0x3d70d5(0x218,'ONoz')]('\x0a'),-0x1)?scriptUa['split']('\x0a')[_0x3d70d5(0x11d,'4Dd^')](_0x1858c2=>{const _0x18f10a=_0x3d70d5;scriptUaArr[_0x18f10a(0x196,'WM)B')](_0x1858c2);}):scriptUaArr['push'](scriptUa);}var _0x406e23=[];if(scriptCk){if(_0x4024a7[_0x3d70d5(0x20b,'Cs8U')](scriptCk[_0x3d70d5(0x11a,'2UkT')]('@'),-0x1))scriptCk[_0x3d70d5(0x18b,'3cZv')]('@')['forEach'](_0x24126a=>{const _0x3a4056=_0x3d70d5;_0x406e23[_0x3a4056(0x204,'zjdQ')](_0x24126a);});else scriptCk['indexOf']('\x0a')!=-0x1?_0x4024a7[_0x3d70d5(0x1cf,'Nt0C')]===_0x4024a7['QZUoF']?scriptCk['split']('\x0a')['forEach'](_0x38f8c8=>{const _0x46b37e=_0x3d70d5;_0x406e23[_0x46b37e(0x1fe,'CGFS')](_0x38f8c8);}):(_0x6cc0d8[_0x3d70d5(0x1e2,'y%rK')](_0x1f569c,_0x173533),_0x451874['msg'](_0x4024a7[_0x3d70d5(0xe8,'pMxy')]('【'+_0xbf40f['name']+'】',_0x3d70d5(0x18f,'aMIM')+_0x2b4f9a+_0x3d70d5(0x20d,'4Dd^')))):_0x406e23[_0x3d70d5(0x13e,'dNNy')](scriptCk);}else{if(_0x4024a7[_0x3d70d5(0x1f4,'fw%d')](_0x4024a7[_0x3d70d5(0x214,'6Yfc')],'lrMce')){_0x4024a7['ODtKp'](log,_0x3d70d5(0x1bf,'Cs8U')+$[_0x3d70d5(0x114,'H52T')]+_0x3d70d5(0x18c,'fm*0')+scriptVarName);return;}else _0x434171[_0x3d70d5(0x118,'%xK)')](_0x3a5069);}let _0x931d7e=[];if(scriptDhCk){if(_0x4024a7['bzNZM'](_0x3d70d5(0xfb,'G5CZ'),_0x4024a7[_0x3d70d5(0x136,'gY[g')])){if(_0x4024a7[_0x3d70d5(0x1b4,'o9Yf')](scriptDhCk['indexOf']('@'),-0x1))scriptDhCk[_0x3d70d5(0x194,'Hbd2')]('@')[_0x3d70d5(0x144,'3UQW')](_0x260757=>{const _0x3a6d48=_0x3d70d5;_0x931d7e[_0x3a6d48(0x110,'%sBt')](_0x260757);});else _0x4024a7['xeSAI'](scriptDhCk[_0x3d70d5(0x1a0,'3UQW')]('\x0a'),-0x1)?scriptDhCk[_0x3d70d5(0x1eb,'ONoz')]('\x0a')['forEach'](_0x270382=>{const _0x5257af=_0x3d70d5;_0x931d7e[_0x5257af(0x228,'G5CZ')](_0x270382);}):_0x931d7e['push'](scriptDhCk);}else _0x4024a7[_0x3d70d5(0x178,'W4XF')](_0x287ca1,_0xe98660);}for(let _0x8074ef=0x0;_0x4024a7[_0x3d70d5(0xed,'Cs8U')](_0x8074ef,_0x406e23[_0x3d70d5(0x107,'G4Af')]);_0x8074ef++){if(_0x4024a7['TkmkO'](_0x3d70d5(0x155,'1A7q'),_0x4024a7[_0x3d70d5(0x24a,'4Dd^')]))_0x4024a7[_0x3d70d5(0x1ad,'G5CZ')](_0x422140,_0x3d70d5(0x209,'myG9')+_0x5f27af[_0x3d70d5(0x23a,'3UQW')](_0x6efdfb));else{let _0x324ee7=_0x8074ef+0x1,_0x2c5210=scriptUaArr['hasOwnProperty'](_0x8074ef)?scriptUaArr[_0x8074ef]:scriptUa,_0x4173be=new Object();_0x4173be[_0x4024a7[_0x3d70d5(0x12d,'3cZv')]]=_0x324ee7,_0x4173be[_0x3d70d5(0x1d2,'4Dd^')]=_0x931d7e[_0x3d70d5(0x1e8,'U&A&')](_0x8074ef)?_0x931d7e[_0x8074ef]:_0x931d7e[0x0],_0x4173be['ua']=_0x2c5210,_0x4173be['ck']=_0x406e23[_0x8074ef],scriptCkArr[_0x3d70d5(0x22b,'6Yfc')](_0x4173be);}}scriptCkArr=_0x4024a7[_0x3d70d5(0x10b,'rAHJ')](shuffle,scriptCkArr);for(let _0x1ecde9 of scriptCkArr){userList['push'](new userInfo(_0x1ecde9));}return console['log'](_0x3d70d5(0x130,'o9Yf')+scriptCkArr[_0x3d70d5(0x20c,'fw%d')]+_0x3d70d5(0x20a,'FBlU')),!![];}function shuffle(_0x45cbda){const _0x4dc57f=_0x13bc54;var _0x131790=_0x45cbda[_0x4dc57f(0x1e3,'bAC6')],_0x45624b,_0x4a298a;while(_0x131790){_0x45624b=Math['floor'](Math[_0x4dc57f(0x146,'NCKN')]()*_0x131790--),_0x4a298a=_0x45cbda[_0x45624b],_0x45cbda[_0x45624b]=_0x45cbda[_0x131790],_0x45cbda[_0x131790]=_0x4a298a;}return _0x45cbda;}function addNotifyStr(_0x4398cf,_0x4fb91f=![],_0x21d7b9=!![]){_0x21d7b9&&log(_0x4398cf+'\x0a'),scriptMsg+=_0x4398cf+'\x0a',_0x4fb91f&&(scriptSpecialMsg+=_0x4398cf+'\x0a');}function _0x2863(_0x2a039b,_0x934f6b){const _0x2ed98d=_0x2ed9();return _0x2863=function(_0x286359,_0x1bb9a1){_0x286359=_0x286359-0xe5;let _0x57b48e=_0x2ed98d[_0x286359];if(_0x2863['gbQFVS']===undefined){var _0x13e676=function(_0xec8ff3){const _0x94f834='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5305e5='',_0xeccf34='';for(let _0x13cfae=0x0,_0x587899,_0x5caf6d,_0xe3559b=0x0;_0x5caf6d=_0xec8ff3['charAt'](_0xe3559b++);~_0x5caf6d&&(_0x587899=_0x13cfae%0x4?_0x587899*0x40+_0x5caf6d:_0x5caf6d,_0x13cfae++%0x4)?_0x5305e5+=String['fromCharCode'](0xff&_0x587899>>(-0x2*_0x13cfae&0x6)):0x0){_0x5caf6d=_0x94f834['indexOf'](_0x5caf6d);}for(let _0x4597f9=0x0,_0x976f28=_0x5305e5['length'];_0x4597f9<_0x976f28;_0x4597f9++){_0xeccf34+='%'+('00'+_0x5305e5['charCodeAt'](_0x4597f9)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0xeccf34);};const _0x152777=function(_0xa74694,_0x4e0e79){let _0x2f3f3b=[],_0x143e43=0x0,_0x2d3211,_0x31300b='';_0xa74694=_0x13e676(_0xa74694);let _0x28128a;for(_0x28128a=0x0;_0x28128a<0x100;_0x28128a++){_0x2f3f3b[_0x28128a]=_0x28128a;}for(_0x28128a=0x0;_0x28128a<0x100;_0x28128a++){_0x143e43=(_0x143e43+_0x2f3f3b[_0x28128a]+_0x4e0e79['charCodeAt'](_0x28128a%_0x4e0e79['length']))%0x100,_0x2d3211=_0x2f3f3b[_0x28128a],_0x2f3f3b[_0x28128a]=_0x2f3f3b[_0x143e43],_0x2f3f3b[_0x143e43]=_0x2d3211;}_0x28128a=0x0,_0x143e43=0x0;for(let _0xdb52eb=0x0;_0xdb52eb<_0xa74694['length'];_0xdb52eb++){_0x28128a=(_0x28128a+0x1)%0x100,_0x143e43=(_0x143e43+_0x2f3f3b[_0x28128a])%0x100,_0x2d3211=_0x2f3f3b[_0x28128a],_0x2f3f3b[_0x28128a]=_0x2f3f3b[_0x143e43],_0x2f3f3b[_0x143e43]=_0x2d3211,_0x31300b+=String['fromCharCode'](_0xa74694['charCodeAt'](_0xdb52eb)^_0x2f3f3b[(_0x2f3f3b[_0x28128a]+_0x2f3f3b[_0x143e43])%0x100]);}return _0x31300b;};_0x2863['jaDbqq']=_0x152777,_0x2a039b=arguments,_0x2863['gbQFVS']=!![];}const _0x109467=_0x2ed98d[0x0],_0x4bab51=_0x286359+_0x109467,_0x4afb73=_0x2a039b[_0x4bab51];return!_0x4afb73?(_0x2863['CoMezY']===undefined&&(_0x2863['CoMezY']=!![]),_0x57b48e=_0x2863['jaDbqq'](_0x57b48e,_0x1bb9a1),_0x2a039b[_0x4bab51]=_0x57b48e):_0x57b48e=_0x4afb73,_0x57b48e;},_0x2863(_0x2a039b,_0x934f6b);}async function SendMsg(_0x332eb1){const _0xca0501=_0x13bc54,_0x500839={'oAmIU':function(_0xe1519d){return _0xe1519d();},'XQhJd':function(_0x4e3977,_0x264690){return _0x4e3977===_0x264690;},'yzZfP':_0xca0501(0x17a,'u*Lg'),'ToRyS':_0xca0501(0x1e1,'gY[g'),'WNryO':function(_0x1b1dc7,_0x403bb0){return _0x1b1dc7(_0x403bb0);},'JlQDN':_0xca0501(0x115,'5Q7R'),'EyGvV':function(_0x765529,_0x4974d4){return _0x765529!==_0x4974d4;},'AeStx':_0xca0501(0x179,'6Yfc')};if(!_0x332eb1)return;if(Notify>0x0){if($['isNode']()){if(_0x500839['XQhJd'](_0x500839[_0xca0501(0x21b,'NCKN')],_0x500839['ToRyS']))_0x3bc035[_0xca0501(0x184,'aMIM')](_0x164351);else{var _0x25a684=_0x500839['WNryO'](require,_0x500839['JlQDN']);await _0x25a684['sendNotify']($['name'],_0x332eb1);}}else $[_0xca0501(0x13f,'rAHJ')](_0x332eb1);}else _0x500839[_0xca0501(0x12b,'5Q7R')](_0x500839[_0xca0501(0x170,'fw%d')],_0x500839[_0xca0501(0x1d0,'3cZv')])?_0x500839[_0xca0501(0x210,'G5CZ')](_0x1ef4dc):_0x500839['WNryO'](log,_0x332eb1);}async function SendSpecialMsg(_0x146145){const _0x4e3278=_0x13bc54,_0x3f4ff3={'yDuvq':function(_0x37022b,_0x3ba548){return _0x37022b!==_0x3ba548;},'qAbVJ':_0x4e3278(0x1da,'y%rK'),'yTkuq':_0x4e3278(0x174,'fm*0'),'AYdkP':function(_0x3886a6,_0x10f9f5){return _0x3886a6(_0x10f9f5);},'cpODQ':function(_0x3a584d,_0x4d7e08){return _0x3a584d===_0x4d7e08;},'pYWBD':function(_0x578ed4,_0x3a164f){return _0x578ed4(_0x3a164f);}};if(!_0x146145)return;if(specialNotify>0x0){if($[_0x4e3278(0x164,'5Q7R')]()){if(_0x3f4ff3[_0x4e3278(0x119,'Cs8U')](_0x3f4ff3[_0x4e3278(0x1ff,'aMIM')],_0x3f4ff3['yTkuq'])){var _0x3898ff=_0x3f4ff3[_0x4e3278(0x1b3,'o9Yf')](require,_0x4e3278(0x229,'FBlU'));await _0x3898ff[_0x4e3278(0x22c,'yl@t')]($['name'],_0x146145);}else _0x39a849[_0x4e3278(0x111,'Cs8U')]('@')[_0x4e3278(0x189,'dzva')](_0x1b5914=>{_0x3f25ea['push'](_0x1b5914);});}else $[_0x4e3278(0x16e,'6Yfc')](_0x146145);}else _0x3f4ff3[_0x4e3278(0x1d9,'dNNy')](_0x4e3278(0x163,'WM)B'),_0x4e3278(0x185,'4Dd^'))?_0x5139bb[_0x4e3278(0x162,'NCKN')](_0xe02948):_0x3f4ff3[_0x4e3278(0x161,'Cs8U')](log,_0x146145);}function randomInt(_0x415f29,_0x1d8d30){const _0xec8567=_0x13bc54,_0x14fbb4={'UaTxx':function(_0x5b4ae0,_0x5341d4){return _0x5b4ae0+_0x5341d4;},'OuoHi':function(_0x52bb17,_0x34bdf6){return _0x52bb17*_0x34bdf6;}};return Math['round'](_0x14fbb4[_0xec8567(0x101,'@$2c')](_0x14fbb4['OuoHi'](Math[_0xec8567(0x117,'gY[g')](),_0x1d8d30-_0x415f29),_0x415f29));}function timestampMs(){const _0x189846=_0x13bc54;return new Date()[_0x189846(0x1ce,'4Dd^')]();}function timestampS(){const _0x439a2d=_0x13bc54;return Date[_0x439a2d(0x216,'myG9')](new Date())/0x3e8;}var version_ = 'jsjiami.com.v7';

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