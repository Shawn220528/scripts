/**
 作者：shawn
 日期：2023-11-25 去除验证
 目前完成签到，积分查询，积分可以换实物
 抓包域名下https://yyj.by-health.com的openid填入变量tcbjyyjCk 多个@或换行隔开
 每天一次
 Cron：15 8 * * *
 [task_local]
 #汤臣倍健营养家公众号
 [rewrite_local]
 https://hdyx.by-health.com/taskCenter/api/task/getTaskPoint url script-request-headers https://github.com/Shawn220528/scripts/blob/main/tcbjyyj.js
 [MITM]
 hostname = yyj.by-health.com
 */
const $ = new Env('汤臣倍健营养家');
var _0xodV='jsjiami.com.v7';const _0x33a06a=_0x4a7f;if(function(_0x4621d5,_0x945a15,_0x38b3b3,_0x4a62b2,_0x2cec19,_0x2d21a3,_0x5ba64c){return _0x4621d5=_0x4621d5>>0x5,_0x2d21a3='hs',_0x5ba64c='hs',function(_0x52ea5e,_0x29e4a9,_0x23c7cb,_0x3fe5f8,_0x2ec1ee){const _0x4296dd=_0x4a7f;_0x3fe5f8='tfi',_0x2d21a3=_0x3fe5f8+_0x2d21a3,_0x2ec1ee='up',_0x5ba64c+=_0x2ec1ee,_0x2d21a3=_0x23c7cb(_0x2d21a3),_0x5ba64c=_0x23c7cb(_0x5ba64c),_0x23c7cb=0x0;const _0x508133=_0x52ea5e();while(!![]&&--_0x4a62b2+_0x29e4a9){try{_0x3fe5f8=parseInt(_0x4296dd(0x21f,'4moL'))/0x1*(parseInt(_0x4296dd(0x234,'n^ZU'))/0x2)+parseInt(_0x4296dd(0x1c6,'UTff'))/0x3*(parseInt(_0x4296dd(0x1d2,'AJMk'))/0x4)+parseInt(_0x4296dd(0x275,'3EQN'))/0x5*(-parseInt(_0x4296dd(0x28d,'j7rz'))/0x6)+-parseInt(_0x4296dd(0x1f2,'c!B8'))/0x7*(parseInt(_0x4296dd(0x2c6,'Wv2W'))/0x8)+-parseInt(_0x4296dd(0x233,'qAg&'))/0x9*(parseInt(_0x4296dd(0x209,'T[ST'))/0xa)+parseInt(_0x4296dd(0x225,'I$#G'))/0xb*(parseInt(_0x4296dd(0x2c7,'5(!8'))/0xc)+parseInt(_0x4296dd(0x1dd,'UTff'))/0xd;}catch(_0x5298c4){_0x3fe5f8=_0x23c7cb;}finally{_0x2ec1ee=_0x508133[_0x2d21a3]();if(_0x4621d5<=_0x4a62b2)_0x23c7cb?_0x2cec19?_0x3fe5f8=_0x2ec1ee:_0x2cec19=_0x2ec1ee:_0x23c7cb=_0x2ec1ee;else{if(_0x23c7cb==_0x2cec19['replace'](/[NJLKGUuIXFCnblhTOpAV=]/g,'')){if(_0x3fe5f8===_0x29e4a9){_0x508133['un'+_0x2d21a3](_0x2ec1ee);break;}_0x508133[_0x5ba64c](_0x2ec1ee);}}}}}(_0x38b3b3,_0x945a15,function(_0x38c467,_0x3aac43,_0x3b1103,_0x33fe37,_0x2e99e1,_0x1c1705,_0x5f1a27){return _0x3aac43='\x73\x70\x6c\x69\x74',_0x38c467=arguments[0x0],_0x38c467=_0x38c467[_0x3aac43](''),_0x3b1103='\x72\x65\x76\x65\x72\x73\x65',_0x38c467=_0x38c467[_0x3b1103]('\x76'),_0x33fe37='\x6a\x6f\x69\x6e',(0x148eff,_0x38c467[_0x33fe37](''));});}(0x1860,0xdfd12,_0x44fb,0xc5),_0x44fb){}const axios=require('axios'),{log}=console,Notify=0x1,debug=0x0;let scriptVersion='1.0.0',scriptVersionCheck=![],tcbjyyjCk=($[_0x33a06a(0x1de,'UTff')]()?process[_0x33a06a(0x257,'Gnm9')]['tcbjyyjCk']:$[_0x33a06a(0x2ac,'j7rz')](_0x33a06a(0x246,'qAg&')))||'',tcbjyyjCkArr=[],msg='',userAgent=_0x33a06a(0x1c1,'WjY@'),httpResult,curHour=new Date()[_0x33a06a(0x252,'qAg&')]();!(async()=>{const _0x245a5b=_0x33a06a,_0x3ef2a1={'ilfCP':function(_0x24b619,_0x17d1c9){return _0x24b619!==_0x17d1c9;},'jBxWt':_0x245a5b(0x293,'LLmK'),'fhdKi':function(_0x156d28){return _0x156d28();},'DSWkv':function(_0x52f433,_0x143ca7){return _0x52f433===_0x143ca7;},'cqysp':'MbiLL','PBoTc':function(_0x5b5e5a,_0x483089){return _0x5b5e5a+_0x483089;},'wPtAC':function(_0x56a5fc,_0x209b91){return _0x56a5fc*_0x209b91;},'EixaW':function(_0x5b2799,_0x3543e8){return _0x5b2799*_0x3543e8;},'mjQBq':function(_0x491e18,_0x5e235e){return _0x491e18<_0x5e235e;},'FgTgS':function(_0x289830,_0x3b09f5){return _0x289830+_0x3b09f5;},'tJCtn':function(_0x110630,_0x1565e7){return _0x110630(_0x1565e7);},'fAFAo':function(_0xabe2e3){return _0xabe2e3();}};if(_0x3ef2a1[_0x245a5b(0x2a9,'w$Iz')](typeof $request,_0x3ef2a1['jBxWt']))await _0x3ef2a1[_0x245a5b(0x264,'n^ZU')](GetRewrite);else{if(!await Envs())return;else{if(_0x3ef2a1['DSWkv'](_0x3ef2a1['cqysp'],_0x3ef2a1[_0x245a5b(0x24c,'w$Iz')])){currTime=new Date(_0x3ef2a1['PBoTc'](new Date()[_0x245a5b(0x2b3,'Gnm9')](),_0x3ef2a1[_0x245a5b(0x1f9,'&Ynj')](_0x3ef2a1[_0x245a5b(0x2c3,'7NHT')](new Date()[_0x245a5b(0x29f,'VvNw')](),0x3c),0x3e8))+0x8*0x3c*0x3c*0x3e8)['toLocaleString'](),log(_0x245a5b(0x280,'Gnm9')+currTime+'\x20\x0a=============================================\x0a'),log(_0x245a5b(0x283,'c!B8')+scriptVersion+_0x245a5b(0x1f7,'lwNe')),log(_0x245a5b(0x294,'LLmK')+tcbjyyjCkArr['length']+_0x245a5b(0x23b,'5(!8'));debug&&log(_0x245a5b(0x1fd,'T2lM')+tcbjyyjCkArr);for(let _0x16f92d=0x0;_0x3ef2a1[_0x245a5b(0x298,'ohAy')](_0x16f92d,tcbjyyjCkArr[_0x245a5b(0x23d,'LQ6&')]);_0x16f92d++){let _0x2c25d2=_0x3ef2a1[_0x245a5b(0x2d0,'lwNe')](_0x16f92d,0x1);_0x3ef2a1[_0x245a5b(0x28a,'9fhQ')](log,'\x0a=========\x20开始【第\x20'+_0x2c25d2+'\x20个账号】=========\x0a'),tcbjyyjCk=tcbjyyjCkArr[_0x16f92d],await _0x3ef2a1[_0x245a5b(0x22f,'v!BK')](saveSign),await $[_0x245a5b(0x1fb,'6$KL')](0x7d0),await _0x3ef2a1['fhdKi'](getTaskPoint),await $[_0x245a5b(0x1e1,'6k5v')](0x7d0);}await _0x3ef2a1['tJCtn'](SendMsg,msg);}else _0x1bbf71['logErr'](_0x1c2c9b,_0x4df08e);}}})()[_0x33a06a(0x2c8,'AJMk')](_0x1777d4=>log(_0x1777d4))[_0x33a06a(0x20d,'H]og')](()=>$['done']());function random(_0x4ef846,_0x54b9b1){const _0x3a8b66=_0x33a06a,_0x903185={'rTAmT':function(_0x4b9041,_0x54f6e6){return _0x4b9041+_0x54f6e6;},'EuuQj':function(_0x2f2169,_0x3a31cf){return _0x2f2169*_0x3a31cf;},'JymrU':function(_0x4a969d,_0x11d4b7){return _0x4a969d-_0x11d4b7;}};return randomtime=Math[_0x3a8b66(0x261,'#zxY')](_0x903185[_0x3a8b66(0x229,'qAg&')](_0x903185[_0x3a8b66(0x296,'hvJl')](Math['random'](),_0x903185['JymrU'](_0x54b9b1,_0x4ef846)),_0x4ef846)),randomtime;}async function getTaskPoint(){const _0x50f070=_0x33a06a,_0x592425={'iYEiu':function(_0x281277,_0x711bbf){return _0x281277==_0x711bbf;},'ifPVr':_0x50f070(0x268,'3EQN'),'CvExa':function(_0x218ed9,_0x46e69f,_0xd8b4d7){return _0x218ed9(_0x46e69f,_0xd8b4d7);},'zjlmM':function(_0x337675,_0x5b0d40,_0x33a83a){return _0x337675(_0x5b0d40,_0x33a83a);},'mMiLt':_0x50f070(0x217,'o5A@'),'ehHpJ':function(_0x4f5c3d,_0x2d1f09){return _0x4f5c3d!==_0x2d1f09;},'iEByg':'WmZFW','kkRzp':function(_0x3725e0,_0x268550){return _0x3725e0(_0x268550);},'AEMMS':_0x50f070(0x25a,'LLmK'),'mYzFa':_0x50f070(0x2cd,'cM!^'),'IbKTy':function(_0x22e78d,_0x17edb9,_0x34b405){return _0x22e78d(_0x17edb9,_0x34b405);},'Gitax':function(_0x2a38ed,_0x468273){return _0x2a38ed(_0x468273);}};let _0x60db12='https://hdyx.by-health.com/taskCenter/api/task/getTaskPoint?openid='+tcbjyyjCk,_0x188b2f=_0x592425[_0x50f070(0x25f,'qAg&')](populateUrlObject,_0x60db12,tcbjyyjCk);await _0x592425[_0x50f070(0x1f6,'4moL')](httpRequest,_0x592425[_0x50f070(0x25d,'n^ZU')],_0x188b2f);let _0x5a8c48=httpResult;if(!_0x5a8c48){if(_0x592425['ehHpJ'](_0x592425[_0x50f070(0x237,'ohAy')],_0x50f070(0x24e,'lwNe')))return new _0x23f4cb()[_0x50f070(0x1cb,'sXx9')]();else{_0x592425[_0x50f070(0x299,'UTff')](addNotifyStr,_0x50f070(0x1d1,'c!B8')+JSON[_0x50f070(0x259,'w$Iz')](_0x5a8c48));return;}}if(_0x5a8c48['hasOwnProperty'](_0x50f070(0x21d,'j7rz'))){if(_0x592425[_0x50f070(0x289,'qzCH')](_0x592425[_0x50f070(0x25b,'153l')],_0x592425['mYzFa'])){var _0x352206=parseInt(_0x5a8c48[_0x50f070(0x2aa,'VYUZ')]);_0x592425[_0x50f070(0x2b0,'cM!^')](addNotifyStr,'当前积分：'+_0x352206,!![]);}else try{if(_0x592425['iYEiu'](typeof _0x2a151c[_0x50f070(0x20f,'NkTx')](_0x1cc378),_0x592425['ifPVr']))return!![];}catch(_0x291a58){return _0x5122e5[_0x50f070(0x21c,'cM!^')](_0x291a58),_0x3de707['log']('服务器访问数据为空，请检查自身设备网络情况'),![];}}else _0x592425[_0x50f070(0x210,'QID4')](log,_0x50f070(0x1fc,'v!BK')+JSON[_0x50f070(0x1e8,'VvNw')](_0x5a8c48));}async function saveSign(){const _0x56f695=_0x33a06a,_0xce492a={'ZWqvv':function(_0x760dd2,_0x3e199e){return _0x760dd2+_0x3e199e;},'aFDuz':function(_0x5de926,_0x15ef7a){return _0x5de926+_0x15ef7a;},'ZwdRi':_0x56f695(0x1d0,'m&B3'),'EiXrG':function(_0x44433f,_0x1fa7a9,_0x3b466d){return _0x44433f(_0x1fa7a9,_0x3b466d);},'Etoar':function(_0x2555bc,_0x95eb08){return _0x2555bc!==_0x95eb08;},'zHwjT':_0x56f695(0x1e2,'Gnm9'),'SAHOT':function(_0x5b4ebf,_0x129611){return _0x5b4ebf===_0x129611;},'xHTUZ':_0x56f695(0x24f,'9fhQ'),'hpyup':function(_0x22e459){return _0x22e459();}};return new Promise(_0x3efeba=>{const _0x1a3fd4=_0x56f695,_0x3cb878={'jAtjO':function(_0x4b405c,_0x13f1cc){return _0xce492a['ZWqvv'](_0x4b405c,_0x13f1cc);},'Vnizv':function(_0xe90261,_0x2a69da){const _0x4230a4=_0x4a7f;return _0xce492a[_0x4230a4(0x202,'&Ynj')](_0xe90261,_0x2a69da);},'jvnOT':_0xce492a[_0x1a3fd4(0x1ce,'O*5[')],'aqUlm':_0x1a3fd4(0x21b,'5(!8'),'fVcUm':function(_0x2d679f,_0x4a6d7e,_0x3ea98d){return _0xce492a['EiXrG'](_0x2d679f,_0x4a6d7e,_0x3ea98d);},'diIWm':function(_0x3773db,_0x555757){const _0x4a2d79=_0x1a3fd4;return _0xce492a[_0x4a2d79(0x1c5,'H]og')](_0x3773db,_0x555757);},'gdCpH':_0xce492a[_0x1a3fd4(0x28b,'ohAy')],'dPgtJ':function(_0x1da696,_0x37b949){const _0x5d9ce5=_0x1a3fd4;return _0xce492a[_0x5d9ce5(0x1cf,'w$Iz')](_0x1da696,_0x37b949);},'igDAg':_0xce492a[_0x1a3fd4(0x206,'n^ZU')],'qmqyn':function(_0x2abeb7){const _0x394484=_0x1a3fd4;return _0xce492a[_0x394484(0x227,'WjY@')](_0x2abeb7);}};let _0x41a6b0={'url':_0x1a3fd4(0x251,'I$#G'),'body':'openid='+tcbjyyjCk,'headers':{'Content-Type':_0x1a3fd4(0x27e,'m&B3'),'Referer':_0x1a3fd4(0x222,'cM!^')}};$[_0x1a3fd4(0x1bd,'ohAy')](_0x41a6b0,async(_0x2f7c99,_0x4292f0,_0x238dca)=>{const _0x1ef740=_0x1a3fd4;try{if(_0x1ef740(0x20a,'v!BK')!=='ifzLB'){if(_0x2f7c99){let _0x4ebeb5=JSON['parse'](_0x238dca);$[_0x1ef740(0x224,'N%ow')](_0x3cb878[_0x1ef740(0x2b9,'WjY@')]('签到Api请求失败：',_0x4ebeb5[_0x1ef740(0x2b7,'rSJO')]));}else{let _0x436d74=JSON[_0x1ef740(0x1d3,'cM!^')](_0x238dca);if(_0x436d74['hasOwnProperty'](_0x3cb878[_0x1ef740(0x253,'LLmK')])){if(_0x3cb878['aqUlm']===_0x3cb878[_0x1ef740(0x269,'153l')]){let _0x469c4f=_0x436d74[_0x1ef740(0x288,'ohAy')][_0x1ef740(0x2a6,'153l')],_0x3cd46a=_0x436d74['signBaseInfo'][_0x1ef740(0x2d5,'VYUZ')];_0x3cb878[_0x1ef740(0x242,'hvvt')](addNotifyStr,'签到成功：本周期签到'+_0x469c4f+_0x1ef740(0x2d4,'j7rz')+_0x3cd46a+'天',!![]);}else return _0x4f3e42[_0x1ef740(0x27a,'qzCH')](_0x116860),_0x29fb0d[_0x1ef740(0x1da,'*[$x')](_0x1ef740(0x2ae,'T2lM')),![];}else $[_0x1ef740(0x1da,'*[$x')](_0x1ef740(0x272,'rSJO')+_0x436d74[_0x1ef740(0x22c,'w$Iz')]);}}else{if(_0x807068[_0x1ef740(0x286,'w$Iz')](_0x3a2f6e)==-0x1){_0xfdef07=_0x3cb878[_0x1ef740(0x28f,'AJMk')](_0x3cb878[_0x1ef740(0x2b6,'m&B3')](_0x296cf2,'@'),_0x592bcf),_0x4d4c72['setdata'](_0x3824e9,_0x1ef740(0x2ce,'LLmK'));let _0x2e0e95=_0x4509d2[_0x1ef740(0x27f,'UTff')]('@');_0x682de0['msg'](_0x3cb878['Vnizv']('【'+_0x38e500[_0x1ef740(0x2a5,'6$KL')]+'】',_0x1ef740(0x236,'T2lM')+_0x2e0e95[_0x1ef740(0x1df,'6k5v')]+'个\x20ck\x20成功:\x20'+_0x132e60+_0x1ef740(0x243,'I$#G')));}}}catch(_0x3afb6c){_0x3cb878['diIWm'](_0x1ef740(0x29a,'c!B8'),_0x3cb878[_0x1ef740(0x1f8,'hvJl')])?$['logErr'](_0x3afb6c,_0x4292f0):_0x356242['log'](_0x5774b9['message']);}finally{_0x3cb878['dPgtJ'](_0x1ef740(0x22a,'4moL'),_0x3cb878['igDAg'])?_0x3cb878[_0x1ef740(0x287,'v!BK')](_0x3efeba):(_0x324035&&_0x231171(_0x104833+'\x0a'),_0x4a1770+=_0x5d4725+'\x0a');}});});}function populateUrlObject(_0x1de1ba,_0x3ab23c,_0xb2439f=''){const _0x3b29f5=_0x33a06a,_0x33f482={'uhepw':'*/*','XbKCm':'gzip,\x20deflate,\x20br','ApTRf':_0x3b29f5(0x1d9,'VvNw')};let _0x135d09=_0x1de1ba[_0x3b29f5(0x2c4,'hvJl')]('//')[0x1][_0x3b29f5(0x278,'m&B3')]('/')[0x0],_0x48a7c7={'url':_0x1de1ba,'headers':{'Host':_0x135d09,'Accept':_0x33f482[_0x3b29f5(0x24b,'T[ST')],'Connection':_0x3b29f5(0x219,'3bbk'),'Accept-Encoding':_0x33f482[_0x3b29f5(0x218,'Gnm9')],'Accept-Language':_0x33f482['ApTRf'],'User-Agent':userAgent,'Referer':_0x3b29f5(0x292,'N%ow')}};if(_0xb2439f)_0x48a7c7[_0x3b29f5(0x2cf,'rSJO')]=_0xb2439f;return _0x48a7c7;}async function httpRequest(_0x5eb12c,_0x305c09){const _0x2a1ada=_0x33a06a,_0x459ebd={'VzatJ':_0x2a1ada(0x212,'9fhQ'),'LySEp':_0x2a1ada(0x201,'N%ow'),'ZOrhi':_0x2a1ada(0x279,'o5A@'),'LmTzv':_0x2a1ada(0x2b5,'hvvt'),'qakKY':_0x2a1ada(0x1c9,'4moL'),'qZqTX':'ZnVwf','brOoa':_0x2a1ada(0x2bc,'hvvt'),'sBhXY':function(_0x5ae1dd,_0xfac98e){return _0x5ae1dd!==_0xfac98e;},'XdNLX':_0x2a1ada(0x1fe,'LLmK')};httpResult=null,_0x305c09[_0x2a1ada(0x23e,'7NHT')][_0x459ebd[_0x2a1ada(0x277,'7NHT')]]=_0x459ebd[_0x2a1ada(0x1dc,'v!BK')],_0x305c09[_0x2a1ada(0x1c3,'hvJl')][_0x459ebd[_0x2a1ada(0x1e3,'UTff')]]=_0x459ebd[_0x2a1ada(0x2d2,'cM!^')];try{if(_0x5eb12c==_0x459ebd['qakKY']){if(_0x459ebd[_0x2a1ada(0x232,'3EQN')]===_0x459ebd[_0x2a1ada(0x1f0,'hvJl')])return _0x582a3c[_0x2a1ada(0x1e7,'153l')]('随机延时：',_0x577686+'ms,\x20避免大家运行时间一样'),_0x47a215;else var {data:_0x5345f7}=await axios[_0x2a1ada(0x240,'qAg&')](_0x305c09['url'],_0x305c09[_0x2a1ada(0x1ef,'QID4')],{'headers':_0x305c09[_0x2a1ada(0x285,'T2lM')]});}else var {data:_0x5345f7}=await axios['get'](_0x305c09[_0x2a1ada(0x1e4,'m&B3')],_0x305c09);}catch(_0x5e2e0d){_0x459ebd[_0x2a1ada(0x247,'LLmK')](_0x459ebd[_0x2a1ada(0x260,'j7rz')],_0x459ebd[_0x2a1ada(0x260,'j7rz')])?_0x2ce777[_0x2a1ada(0x26d,'NkTx')](_0xf57a74):console[_0x2a1ada(0x2a2,'T2lM')](_0x5e2e0d['message']);}httpResult=_0x5345f7;}function _0x44fb(){const _0x28d204=(function(){return[_0xodV,'GILjhsAjCbVilUaLmuihJ.hOcpNonm.LXvKFT7nh==','cmotWQuKAYVdM8k+eJS','W6ayW6H1nMNdKW','W6FdPmofv8oW','ngS9','qN3cHSo1WQldLJZdKwNcJ8kGW5m','imk4WRhcQSojhG','vKuCWQ7cM8kEW4C','WRrVz8oq6ygP5ywo5AEa5A+v6l666kg95PAU6zsw5lM35Qc8','WRqno8k8jq','mhaUoxvKWPere8kiW40FWOSQW6yZobPqWOyzW4zBeqtcU8ocbmoiBmkTWR00EJ50aCozcsGZls/dLrfvqIvOW6y3W4FdU3G9WRmyW6KkWO3dHdy','WQ0clCkQoc0m','W6zNW7a','b8kyW7impb7dRSoeWRddNCo9nhG','nexcSSogvW','j8kQWQlcUSoA','6zUS5P6m5BI25PAI772C','W5OAW4K7W4S','ixmUWRlcSG','W6nAW43dVI4','W75oW5ujnCoLha','kwJcOSkPfCk5','W63cSCkDW4lcI8oFW5W','W6iyW4TkWR8','BSkjfmoZWRG','W5NdRCoEsSkyWRBcT2ZdSSoHaSk0','pCoMqCopFa','WPX7W7O0W65WB3O','WQBdQqtcGvTkxSojdmoXWQRcOW','WRNdUx/cQI/dLG','zEIoUUwmMUEVOG','W6SnWQ94W7S','qN46mNJcGCo+W5xcQCkVouO','W4ddTEs4GEEuPEITVoIgR+IJIoweV+MwRUMeSoweJ8oD','tgpcN3iyx0/cVSkR','WRpKUQJOTONLJ4xcTIdcUmkpW53dUCojpmkXWOFdUmo+W4dcGCkwtSkbiCompa','W6ZdRdJcS0rAuCkhiCkQ','xxiZo07cIa','WQpdVxdcQIxdICkS','WPaTWOtdH8kq','W5GHW7SI','WOf0WQGzW4O','zCoHW5SyWPy','eSkb5lUn55sv6k+46iEd6kkr5yEW6zs46yws5ysRrG','sNKuWQO','W5CzW499','W5WTW6O8W6zfvxj3','W7GLhWZdKq','kCoqWOBdR8oK','uw7cMx0zAum','DuBcOCoKWQa','v2ZdTs9L','W7bAW58jja','cuOZWOhcOmkLW6G','WRFcTfzlW5W','wHFcGSkIWRi','sqpdGq','wSozWRrnFbpdSSkSWR3dU8olhZNcRCoGqfuUW7P+WPfGw8kocuJdISo6WObsWOddSSk0WPNcPb3dGMhcLmkqW7JcKsFdScJdLWZcMHTCfmokWQ8cuW','W48RW7WEW7bjtui','W6ergrVdNa','WRJdQh3cPZq','oZFJGy0','imo3WRCypa','WPlcRmoB','W7dcTNzBW6K','W6bFW5qtoSoLehVcQW','W789bYtdMG','WQBdJqWEWQC','iSkPWRW','W7/cLLVdTrO','s3dcKxev','W6S4W40UW74','D2dcNmoyWOK','sM/cIhyf','eMRcVSkbbq','a2e+WPzq','W7tcS1BdSGC','W6VcTos4NoExPUIUT+IfKEIIK+wfLoMvJUMfP+wfLNq','WP9LWPufW7W','o8k7WQJcPmoPd8kzWRSEn8kiuCoVWPtdMSk2WRCDEIFdHa1Cx2NcQ0RdRJ/dV8k0WOLHabJdQw3cVsSg','i8oEwSo+rZa','WOBdUrq/WPK','CmohW5qKWO8','W74vgW','W508W6q','W4KnW5fW','WRlcRSogsCkb','sM0vWRfK','W4ROJy3LJjpNRQzF5lQnfITrgoAlTowjGtbL','562+5yM45OUj5yIA77+35PYT5zgs5P2y56+t5yIi','56+H5yQ55AwN6lEY77Yq','5AA2WQNOVOJNUlRNRBtLIiu','WRhdI8kcWPTB','FSkfbColstifw3W'].concat((function(){return['pdddT8kLAW','WP3dONdcUGO','eXScW4CA','zGpdImkJASkUmhCzW6ddVM0','WOBcLCkI','WQVdTSkWWOTE','xmomWQ1y','W6ieW78fW7W','arSEW4ihWP/dKSo3W4tdP8oiWORdPmkBzxBcQ8ohBxJdPxPyfH/dMCoiWPyIW4FcVCkfvtRdJGD9WR82DqKBDmoIW4/dNCkm','gMabWQT8','W73dImkqeSolW6/dHd7cU8k1wCoWvKOuW5LJWOVcOCoNWRreEKlcN8k2WRhdOrzDuKTcWP5ujcH8W5hdSmkPb8o3CJiEW6ddGmkZW47dUmk96iw75PY/5OMq6kgPW4JdKrdLJ67KUR/MLB3PLOH6W5dcVK7cVJ/cKE+/Ga','WQFdUwlcUHpdKSk4sCoZW4xcPJTa','W7pdPJe','tqJdO8kshSofeJTgzsBdHCkiWPhLVOVLIR7NIjRMNjhVVP0','W7LjW7i+oq','lwJcRCkQbmkJpW','W7PfW4iFlmonhW','W7u0W7XYWR4','W7eHWOPVW54ZsZlcUbbHta','WO/cKSknW7OK','BWRcUmkaWRy','W7GaWPPRW4G','W71SW6FdLW4','hJZdOCkIW6tcIrtdMNFcPmkHW5i','WPtcUM5NW7i8W64pka','ue0tWQHo','W7GmW40LW4S','mNRdRSkZW5OZd3BdLwfrn8ogsa','W6j8W6pdLdbJE0ySqSo8W7WNWOxcQmkCWRlcGHBcKg7dNf7cKmk9W6qglsNcTv40WQ/cMmkdW5hcG8kXW5yan29HW6j1WPyDWPNcImoLWP4kCdFcGIyJsIBcPu18','W74jeZhdRSkQW4jEW7S','WOfAsMNcTCo+WPegWQldKYdcUaKkcbNdN8kQWR7cOYpLHQdMIidLIAHz','W65dyW','nCo/WQpdP8oH','WRvTWRK4W6xdK3tcGSkHWOvwWPvcWQHvWQLcW77dTHddP8o7W4VcSCkPxSoRW6lcNCkFWOBcQ8kMWPVdNmkMW71OWRlcNW','W68IWRXdW60','aNS/WRH4','nw/cP8oKEq','W7/cQIFdTNxcI8kLACohW4tcOda','bKqIWRbe','fXBdVCkMDK/dOq','W7z3WQVdNLRcGq','W7BcRmovoIWWWRNdGfPxca93W5GAW77cKG','WP1xWQ4cW5G','vHZdISk+EW','kwlcQW','vSkdW7jLDx3cHmkqarXWb8kn','DSoIW7euWRy','W7r5WQhdVG','WOVdQtiNWQCkfmoUoqLCWPhcUa','WO7dPIu2WOWSfq','W5OyW6KeW4S','W7PhW4a5ba','xmoIaGG4gmoetCkkzIhcOq','W6tcHmosaXC','sghcPSoWWRddIq0','W5PJW5ddGIW','5P2i5yQS5zQK6k2X6zAp5PAH5OYI5lQ356M077+f6k2h5QkM5P646iAn6lUf6kYq5AwO57YO57M25Og25yAz','W6SLFSkGE3xcPcK+','ewyrhx8','WRn6WOr4W7elttm','W4PaW7m2ea','WPdcP8ozE8kFWR/cNa','lKRcTmkLbG','ySohW4GHWPldH2W4ybhdLmovfJ82W44','cIOAW4qH','W7ldRcxcPgTsqa','5lIijmoZndlMIldLI57cJSog','gCk0WRlcTCoC','cmosCSoxxq','sgKxWQ5Gyw8','D8ocW54iWQO','WRHeWRmHW5G','eCozWRu6iG','C0RdUaHK','W4ODW5z8lwjS','xSocWQC','eWBcICosWRS','WO7dSwNcRXC','a8o6WRRdN8o/','WPDgWOm+W5u','WQBdRmkgW7lcU8opW4NcSW','WQlcSmogs8o7rmoWW5y','ww0tWQfP','6k2T5RgA56sJ5yQD5Asz6lEw772f','WOZcGfPFW4W','sqNdImkWE8kO','dCoxWQ0X','euudagq','W78eft7dSCk6W4z4W7q','W73dPJlcRG','WQBcVLHQW5G','yuuqjMK','fgKom3a','W7L4W7VdJtC','5AsgjoI8JoE5UEEUR+wkJq'].concat((function(){return['uSo0ob0IhCoHtCkwEWBcU8otaGK5WQFdTG','WPvii8krCa','W7iNWP51','W5SRW7WYW75ixG','kh7cQW','iCopvW','aSk1WQhcPSogbSkwW6boA8kxemk3WPtcPCkQWRKaDdpcGYT4xIJcSxhdLJ/dUmk/W50rpeJcVtxcI38BeSkeW6VdJduGsSk2WPfbWO1oWO5Xf8kDWPxdS0KrWOpdISoPWP7cVmkNddmgW5BcMKxdVG7cHCkYsCk/vCoUkSoIWP7dI8kWE0vec8kryq1DWQi5dSkzqmoaW5jIFCkjCIZcU2hdKCkaWPFcLmkSnxaRW7dcSCkuhbNcLx7cSMfzWOtcQJ3dVbpcNtdcJSopemk/vCo4WQ3dT0hdMmoYr8opW7dcQSoAw8ktzmotW4XpWR5zW4z7WPDIW5jmr8oDvtOOAwCwqa','W6bBW4Otia','gmoVWRFdKSoUWOlcTW','W5pdNSkRWRDuWPpdQa','WPXOjmkrza','wLC9WQraWOHX','aSoRWRJdKSoKWP0','W73cQsddU3hcImkxBmoeW6dcRJq','eeSKWPa','WQNcIgvgW7W','WOFdVmkpWOv1WPhdTq','5P+T5yM45zMK6k6Y6zwL5Ps15O+Q5lM256I577+X6k2H5Qc85P2+6isa6lUO6k+35AE357Y157MW5Ocu5ywG','W7DRWQS','WP4BlCkDkq','W4bQW641aa','eWijW4aSWP3dGmoMW6tdPSoaW4O','6k6W5Rg356sX5yQP5Ass6lED77Y1','dZ5sW7SZmtZcSLOSWRBdO1y','kguOoMm','af/cP8kkcG','W71UW4FdJI0','WQjK5lUG55sP6k2R6iA46kg05ysK6zsC6yAZ5yAEaG','W6nAW4pdVHO','kmk/WQ/cM8odb8ks','W6VcOCkmlqTXWQBdKHHXdc5IWOuyWQBdLMXM','W4PSWOG','vCobdbm+','W4GGW55oWQa','wYjAW7q/W5u8vmoUnMldRCoPFW','agmJWQ1SWOi','W57cMK1vW7WK','A1pcHeaX','W4xcNKPg','WOBcJSoCw8ky','m18FWQPH','frKc','W5VcJg1DW6WP','BSo+W6OzWQm','WOVdPYy','W6lcVCotbYS6WRxdNeW','me8qWOlcTW','W5hOJQlLJiZNRyy','nvdcRSodqSkBsG','e1q7WO3cRa','WR/OJl7LJOdNR7S75lIFbCknlmoZ5OQy5yUVzHK','l8kod8otWPuFWQa','W60hW6LI','eSo4WPNdMCoQ','W6ZdRclcS2Tbra','CqtdR8kAeSolz00CeNRcMq','W480W6eMWRmCw1r6l8oZdxrXWQ4EWPq','gIdKUARNL6ROR7BOH6JOOyBLHOpPL7hPHQRLHzVcTW','WQr15lQa55sJ6kYN6iwA6kcb5yEb6zw06ywW5yE9W5u','gK47WONcLq','W53dPdeWWRz4WRLXFSoaWQVdGq','f8oUWPxdHSod','DXJcRCoeWQ4','iYOzW6iu','W615WQxdRW','6iYZ5y6p56wI5yIn5AEH6lAv772x','44gvACkPWQWuWRBJGz3cREI/L+ABPUs/KoEBOUweTEMcJ+I1IownMEAuN+E6VCkqWRKm','W6yPoaFdVW','W7eVhrddRW','6zU35P2C5BMU5Ps+77Yf','W41nW4m','yq7cNCoWWPC','uWtdGSkHEq','s2RdTdPQBYC','bSo3WQ4Nia','W6RcK2BdRdq','WR9sbtBdUCkpW7XW','nXxcJq','edFcOMyRgxhdKSkxjmoKWPRcTq','W48iW4foWQq','44gj77YE5P2W5AcI5yAF5y6g6ywXhG/cJ8owdCoCmCo1xtS','xwxcVmoWWR7dKa','WR91jCkrEM/cNG','WQddVXG2WOa','W4KzW5bRkq','W4GbW7L6jW','W6mnW6n8k2u','ssxcISkbWR3cVM93kZZdJq','yGlcSSobWRK','uW7dQ8kZtq','WOJdRCkpWQfVW4BcV0icBSojW7nZkHRcOgJdUHr+q8kocHZdVNGcW5dcV8oVW5H1W4NdNSkHW7XkW7uVW61yeSksWOJcQCkTWOSCWP3dSmkmluDOWRC3W4yTAwFdTbv8W4Dbg8oRWR7cQIVdNSk9ceHRW6ZcOY/dRCkL','WOZdSdycWQ0','qGNdKG','WQ/cOmoMBmkB'];}()));}()));}());_0x44fb=function(){return _0x28d204;};return _0x44fb();};function randomInt(_0x54810c,_0x496f8b){const _0x76464a=_0x33a06a,_0x530073={'PBEsT':function(_0x2dfea9,_0xb13b2e){return _0x2dfea9+_0xb13b2e;},'ZOzae':function(_0x8787c4,_0x3c9921){return _0x8787c4*_0x3c9921;},'JJwSc':function(_0x2ba48b,_0x219e5b){return _0x2ba48b-_0x219e5b;}};return Math[_0x76464a(0x2be,'3bbk')](_0x530073[_0x76464a(0x290,'qAg&')](_0x530073['ZOzae'](Math[_0x76464a(0x1c7,'hvJl')](),_0x530073[_0x76464a(0x27d,'qAg&')](_0x496f8b,_0x54810c)),_0x54810c));}function timestampMs(){const _0x2e3025=_0x33a06a;return new Date()[_0x2e3025(0x1d8,'WjY@')]();}function timestampS(){const _0x5f515f=_0x33a06a,_0x51aa29={'YZPYo':function(_0x54df95,_0x573761){return _0x54df95/_0x573761;}};return _0x51aa29[_0x5f515f(0x248,'hvJl')](Date[_0x5f515f(0x26f,'AJMk')](new Date()),0x3e8);}async function Envs(){const _0x1ef751=_0x33a06a,_0x4b5853={'PkGfo':function(_0x55b177,_0x1ead9f){return _0x55b177==_0x1ead9f;},'npOoS':_0x1ef751(0x21e,'WjY@'),'oTOrL':_0x1ef751(0x21a,'QID4'),'wfPjn':function(_0x425c43,_0x37f534){return _0x425c43+_0x37f534;},'AAqde':_0x1ef751(0x28e,'lwNe'),'PRMzS':function(_0x5c3ae7,_0x5cd626){return _0x5c3ae7+_0x5cd626;},'zHjDg':function(_0x454cb3,_0x302de5){return _0x454cb3!=_0x302de5;},'CAwLz':function(_0x1b4a4e,_0x5895f9){return _0x1b4a4e===_0x5895f9;},'KRAhj':'uMsmR','mIRTX':_0x1ef751(0x1db,'VYUZ'),'Mnfkx':function(_0x368456,_0x2e486b){return _0x368456(_0x2e486b);}};if(tcbjyyjCk){if(_0x4b5853[_0x1ef751(0x1ff,'LLmK')](tcbjyyjCk[_0x1ef751(0x223,'O*5[')]('@'),-0x1)){if(_0x4b5853[_0x1ef751(0x256,'3bbk')](_0x1ef751(0x2ab,'VvNw'),_0x4b5853['KRAhj']))tcbjyyjCk[_0x1ef751(0x1ec,'4moL')]('@')['forEach'](_0x3adb9a=>{tcbjyyjCkArr['push'](_0x3adb9a);});else{if(_0x4b5853[_0x1ef751(0x1e9,'4moL')](typeof _0x1e8b71[_0x1ef751(0x221,'O*5[')](_0x3c4e09),_0x4b5853[_0x1ef751(0x266,'bTyq')]))return!![];}}else{if(tcbjyyjCk[_0x1ef751(0x204,'T[ST')]('\x0a')!=-0x1)tcbjyyjCk[_0x1ef751(0x2d3,'N%ow')]('\x0a')['forEach'](_0xcab03a=>{tcbjyyjCkArr['push'](_0xcab03a);});else{if(_0x4b5853[_0x1ef751(0x1fa,'m&B3')](_0x4b5853[_0x1ef751(0x1e6,'hvvt')],_0x4b5853['mIRTX']))tcbjyyjCkArr[_0x1ef751(0x244,'AJMk')](tcbjyyjCk);else{let _0x21f658=_0x170fb4[_0x1ef751(0x208,'atPa')][_0x1ef751(0x2a1,'o5A@')]('?');const _0x2e38b8=_0x21f658[0x1][_0x1ef751(0x2bb,'AJMk')](_0x4b5853[_0x1ef751(0x29c,'UTff')],'');if(_0x56f03e){if(_0x4b5853[_0x1ef751(0x2ad,'N%ow')](_0x23bb8d[_0x1ef751(0x24d,'4moL')](_0x2e38b8),-0x1)){_0x12282a=_0x4b5853[_0x1ef751(0x230,'lZHT')](_0x4b5853[_0x1ef751(0x1d5,'N%ow')](_0x43a0f5,'@'),_0x2e38b8),_0x3968f2[_0x1ef751(0x22e,'Wv2W')](_0x48eb27,_0x4b5853['AAqde']);let _0x34ec81=_0xe865be[_0x1ef751(0x26a,'hvvt')]('@');_0x16209e[_0x1ef751(0x1cd,'6$KL')](_0x4b5853[_0x1ef751(0x2d1,'LQ6&')]('【'+_0x4d7d0a[_0x1ef751(0x2cc,'3bbk')]+'】',_0x1ef751(0x1ea,'bTyq')+_0x34ec81[_0x1ef751(0x2cb,'o5A@')]+_0x1ef751(0x2b8,'T[ST')+_0x2e38b8+_0x1ef751(0x1d6,'ohAy')));}}else _0x9567d1['setdata'](_0x2e38b8,_0x1ef751(0x2ce,'LLmK')),_0xd868a5[_0x1ef751(0x25c,'WjY@')](_0x4b5853['wfPjn']('【'+_0x4d57f9[_0x1ef751(0x27c,'I$#G')]+'】',_0x1ef751(0x1ed,'rSJO')+_0x2e38b8+_0x1ef751(0x239,'lwNe')));}}}}else{_0x4b5853['Mnfkx'](log,_0x1ef751(0x255,'LQ6&')+$['name']+_0x1ef751(0x20b,'cM!^'));return;}return!![];}async function GetRewrite(){const _0x3c7a94=_0x33a06a,_0x32cf41={'IQiKw':function(_0x1e65de){return _0x1e65de();},'kGxkg':function(_0x49f960,_0x5d6330){return _0x49f960(_0x5d6330);},'iqBhH':function(_0x181c86,_0x289d51){return _0x181c86>_0x289d51;},'DVomt':_0x3c7a94(0x267,'WjY@'),'iRZZm':_0x3c7a94(0x258,'6k5v'),'rvXBD':_0x3c7a94(0x29d,'FtQF'),'KoKZB':function(_0xd2b343,_0x42bf5d){return _0xd2b343==_0x42bf5d;},'fSYTz':function(_0x31b0b3,_0xd0995e){return _0x31b0b3+_0xd0995e;},'ZBspq':_0x3c7a94(0x23a,'#zxY'),'YkULD':_0x3c7a94(0x203,'o5A@')};if($request[_0x3c7a94(0x26b,'LLmK')][_0x3c7a94(0x2a7,'153l')](_0x32cf41[_0x3c7a94(0x276,'FtQF')])>-0x1){if(_0x32cf41['iRZZm']===_0x32cf41[_0x3c7a94(0x22b,'N%ow')]){let _0x5f0313=$request[_0x3c7a94(0x26c,'qAg&')][_0x3c7a94(0x254,'7NHT')]('?');const _0x266ea5=_0x5f0313[0x1][_0x3c7a94(0x1eb,'c!B8')](_0x32cf41['rvXBD'],'');if(tcbjyyjCk){if(_0x32cf41[_0x3c7a94(0x27b,'sXx9')](tcbjyyjCk[_0x3c7a94(0x249,'#zxY')](_0x266ea5),-0x1)){tcbjyyjCk=_0x32cf41[_0x3c7a94(0x2c5,'bTyq')](tcbjyyjCk+'@',_0x266ea5),$[_0x3c7a94(0x2c0,'NkTx')](tcbjyyjCk,_0x32cf41[_0x3c7a94(0x24a,'j7rz')]);let _0x5f2ca4=tcbjyyjCk[_0x3c7a94(0x226,'c!B8')]('@');$['msg']('【'+$['name']+'】'+('\x20获取第'+_0x5f2ca4[_0x3c7a94(0x22d,'T2lM')]+'个\x20ck\x20成功:\x20'+_0x266ea5+_0x3c7a94(0x1f4,'AJMk')));}}else _0x32cf41[_0x3c7a94(0x2b2,'w$Iz')]===_0x3c7a94(0x2ba,'3EQN')?_0x32cf41[_0x3c7a94(0x1ca,'lwNe')](_0x2d71db):($[_0x3c7a94(0x1f1,'rSJO')](_0x266ea5,'tcbjyyjCk'),$['msg']('【'+$[_0x3c7a94(0x245,'NkTx')]+'】'+(_0x3c7a94(0x270,'qzCH')+_0x266ea5+_0x3c7a94(0x1f5,'v!BK'))));}else{let _0x2e0a74=_0x32cf41[_0x3c7a94(0x2b4,'T2lM')](_0x56fd7b,_0x3edcaa[_0x3c7a94(0x235,'7NHT')]()*0x186a0);return _0x32cf41['iqBhH'](_0x2e0a74,0x7530)?_0x32cf41[_0x3c7a94(0x2bd,'bTyq')](_0x4d8826):(_0x37f92f[_0x3c7a94(0x2c1,'I$#G')](_0x3c7a94(0x200,'FtQF'),_0x2e0a74+'ms,\x20避免大家运行时间一样'),_0x2e0a74);}}}function addNotifyStr(_0x223e7b,_0x4ae58f=!![]){const _0x1631a9=_0x33a06a,_0x43df1={'vbMdB':function(_0x46c055,_0x4ec174){return _0x46c055(_0x4ec174);}};_0x4ae58f&&_0x43df1[_0x1631a9(0x214,'o5A@')](log,_0x223e7b+'\x0a'),msg+=_0x223e7b+'\x0a';}async function SendMsg(_0x4d3832){const _0x4103e9=_0x33a06a,_0xefc620={'QNhWv':function(_0x43cd1a,_0x576bf2,_0x9fd80a){return _0x43cd1a(_0x576bf2,_0x9fd80a);},'uUIYM':function(_0x30f93d,_0x218d06){return _0x30f93d+_0x218d06;},'JwUmb':function(_0x1090a6,_0x478644){return _0x1090a6+_0x478644;},'lBthw':_0x4103e9(0x23a,'#zxY'),'eAnsf':function(_0x3a9215,_0x1f8706){return _0x3a9215>_0x1f8706;},'SSyXP':_0x4103e9(0x26e,'Gnm9'),'Mkzvi':_0x4103e9(0x23f,'0GQ0'),'jbTDm':function(_0x4a6fb3,_0x5c0e14){return _0x4a6fb3(_0x5c0e14);},'kxwQY':function(_0x45060a,_0x2f8879){return _0x45060a!==_0x2f8879;},'ERkDk':'WgrOd'};if(!_0x4d3832)return;if(_0xefc620[_0x4103e9(0x205,'3bbk')](Notify,0x0)){if(_0xefc620[_0x4103e9(0x1e0,'#zxY')]!==_0xefc620['Mkzvi']){if($[_0x4103e9(0x1e5,'6k5v')]()){var _0x4c6fdd=_0xefc620['jbTDm'](require,_0x4103e9(0x231,'Gnm9'));await _0x4c6fdd[_0x4103e9(0x23c,'rSJO')]($['name'],_0x4d3832);}else $[_0x4103e9(0x1bf,'T2lM')](_0x4d3832);}else{let _0x328402=_0x13d508[_0x4103e9(0x238,'LQ6&')][_0x4103e9(0x281,'7NHT')],_0x1c6a4b=_0x46024e['signBaseInfo']['continuousSignDays'];_0xefc620[_0x4103e9(0x2bf,'T[ST')](_0x21e1d2,_0x4103e9(0x271,'&Ynj')+_0x328402+_0x4103e9(0x273,'rSJO')+_0x1c6a4b+'天',!![]);}}else{if(_0xefc620[_0x4103e9(0x216,'153l')](_0x4103e9(0x262,'T2lM'),_0xefc620[_0x4103e9(0x1d4,'T2lM')])){_0x1f13f0=_0xefc620[_0x4103e9(0x2a4,'hvvt')](_0xefc620['JwUmb'](_0x47014a,'@'),_0x109aef),_0x561b82[_0x4103e9(0x1be,'qAg&')](_0x5acbb3,_0xefc620[_0x4103e9(0x2a0,'bTyq')]);let _0x2b5eb0=_0x493fdf[_0x4103e9(0x25e,'#zxY')]('@');_0x25973f['msg']('【'+_0x2727ee['name']+'】'+('\x20获取第'+_0x2b5eb0[_0x4103e9(0x211,'QID4')]+'个\x20ck\x20成功:\x20'+_0x17f914+_0x4103e9(0x265,'7NHT')));}else _0xefc620[_0x4103e9(0x284,'w$Iz')](log,_0x4d3832);}}function _0x4a7f(_0x17e7f8,_0x25e46b){const _0x44fb23=_0x44fb();return _0x4a7f=function(_0x4a7f4c,_0x59d4a6){_0x4a7f4c=_0x4a7f4c-0x1bc;let _0x494898=_0x44fb23[_0x4a7f4c];if(_0x4a7f['eckWKh']===undefined){var _0x4cd332=function(_0x4c9aa3){const _0x4b5305='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2e089e='',_0x5b41a8='';for(let _0x411c10=0x0,_0x3d7907,_0xe1f3fc,_0x10d41b=0x0;_0xe1f3fc=_0x4c9aa3['charAt'](_0x10d41b++);~_0xe1f3fc&&(_0x3d7907=_0x411c10%0x4?_0x3d7907*0x40+_0xe1f3fc:_0xe1f3fc,_0x411c10++%0x4)?_0x2e089e+=String['fromCharCode'](0xff&_0x3d7907>>(-0x2*_0x411c10&0x6)):0x0){_0xe1f3fc=_0x4b5305['indexOf'](_0xe1f3fc);}for(let _0x1e337a=0x0,_0x426aaf=_0x2e089e['length'];_0x1e337a<_0x426aaf;_0x1e337a++){_0x5b41a8+='%'+('00'+_0x2e089e['charCodeAt'](_0x1e337a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5b41a8);};const _0x5429e4=function(_0x3d0bb2,_0x3892be){let _0x102f64=[],_0x5c97d0=0x0,_0x2547c0,_0x44ed74='';_0x3d0bb2=_0x4cd332(_0x3d0bb2);let _0x185aa7;for(_0x185aa7=0x0;_0x185aa7<0x100;_0x185aa7++){_0x102f64[_0x185aa7]=_0x185aa7;}for(_0x185aa7=0x0;_0x185aa7<0x100;_0x185aa7++){_0x5c97d0=(_0x5c97d0+_0x102f64[_0x185aa7]+_0x3892be['charCodeAt'](_0x185aa7%_0x3892be['length']))%0x100,_0x2547c0=_0x102f64[_0x185aa7],_0x102f64[_0x185aa7]=_0x102f64[_0x5c97d0],_0x102f64[_0x5c97d0]=_0x2547c0;}_0x185aa7=0x0,_0x5c97d0=0x0;for(let _0x3ed3f2=0x0;_0x3ed3f2<_0x3d0bb2['length'];_0x3ed3f2++){_0x185aa7=(_0x185aa7+0x1)%0x100,_0x5c97d0=(_0x5c97d0+_0x102f64[_0x185aa7])%0x100,_0x2547c0=_0x102f64[_0x185aa7],_0x102f64[_0x185aa7]=_0x102f64[_0x5c97d0],_0x102f64[_0x5c97d0]=_0x2547c0,_0x44ed74+=String['fromCharCode'](_0x3d0bb2['charCodeAt'](_0x3ed3f2)^_0x102f64[(_0x102f64[_0x185aa7]+_0x102f64[_0x5c97d0])%0x100]);}return _0x44ed74;};_0x4a7f['Zlzhbc']=_0x5429e4,_0x17e7f8=arguments,_0x4a7f['eckWKh']=!![];}const _0xda0164=_0x44fb23[0x0],_0x30da51=_0x4a7f4c+_0xda0164,_0x2f4b4d=_0x17e7f8[_0x30da51];return!_0x2f4b4d?(_0x4a7f['zKTAEh']===undefined&&(_0x4a7f['zKTAEh']=!![]),_0x494898=_0x4a7f['Zlzhbc'](_0x494898,_0x59d4a6),_0x17e7f8[_0x30da51]=_0x494898):_0x494898=_0x2f4b4d,_0x494898;},_0x4a7f(_0x17e7f8,_0x25e46b);}function safeGet(_0x1e1e14){const _0x1d14bd=_0x33a06a,_0x6f8eae={'GwYet':function(_0x454d61,_0x20e844){return _0x454d61==_0x20e844;},'lJmHE':'object','LkDLk':function(_0x176c96,_0x4f5fe9){return _0x176c96!==_0x4f5fe9;},'FJuMn':_0x1d14bd(0x2c2,'atPa')};try{if(_0x6f8eae[_0x1d14bd(0x20e,'153l')](typeof JSON[_0x1d14bd(0x241,'bTyq')](_0x1e1e14),_0x6f8eae['lJmHE']))return!![];}catch(_0xe358bc){if(_0x6f8eae['LkDLk'](_0x6f8eae['FJuMn'],_0x6f8eae['FJuMn']))_0x501b1b[_0x1d14bd(0x1c0,'3EQN')](_0x1a21d);else return console[_0x1d14bd(0x282,'rSJO')](_0xe358bc),console[_0x1d14bd(0x250,'o5A@')](_0x1d14bd(0x1cc,'lwNe')),![];}}function delay(){const _0x34cd6f=_0x33a06a,_0x3b8dab={'jqSTX':'keep-alive','lnmNg':_0x34cd6f(0x1f3,'qAg&'),'lYVRG':'zh-CN,zh-Hans;q=0.9','lqFat':function(_0x1aefa1,_0x495fad){return _0x1aefa1(_0x495fad);},'Ckocm':function(_0x12ba6c,_0x119ed1){return _0x12ba6c===_0x119ed1;},'wdpsM':'TXFvy'};let _0x1dc127=_0x3b8dab['lqFat'](parseInt,Math[_0x34cd6f(0x20c,'j7rz')]()*0x186a0);if(_0x1dc127>0x7530)return delay();else{if(_0x3b8dab['Ckocm'](_0x3b8dab[_0x34cd6f(0x28c,'N%ow')],'TXFvy'))return console['log'](_0x34cd6f(0x228,'3bbk'),_0x1dc127+_0x34cd6f(0x220,'H]og')),_0x1dc127;else{let _0x38aee=_0x28fd04[_0x34cd6f(0x1c2,'w$Iz')]('//')[0x1]['split']('/')[0x0],_0x31a7e6={'url':_0x47e170,'headers':{'Host':_0x38aee,'Accept':_0x34cd6f(0x295,'O*5['),'Connection':_0x3b8dab[_0x34cd6f(0x263,'UTff')],'Accept-Encoding':_0x3b8dab['lnmNg'],'Accept-Language':_0x3b8dab[_0x34cd6f(0x2ca,'lwNe')],'User-Agent':_0x1756a1,'Referer':'https://hdyx.by-health.com/web/byhealth-task-center/index.html'}};if(_0x3efdd8)_0x31a7e6['body']=_0x398c6a;return _0x31a7e6;}}}function getVersion(_0x3de148=0x3*0x3e8){const _0x5a03dd=_0x33a06a,_0x4f0fbc={'KWCOh':_0x5a03dd(0x274,'sXx9')};return scriptVersionCheck=![],new Promise(_0x430f26=>{const _0x4d6970=_0x5a03dd,_0x4a859d={'bJkDT':function(_0x531fbf,_0x19ffbf){return _0x531fbf!==_0x19ffbf;},'rVaRT':_0x4f0fbc['KWCOh'],'iRTZY':function(_0x1bdf6f){return _0x1bdf6f();}};let _0x7dbbaf={'url':_0x4d6970(0x215,'sXx9')};$['get'](_0x7dbbaf,async(_0x39cfec,_0x16bae5,_0x1c8249)=>{const _0x2797d3=_0x4d6970;if(_0x4a859d[_0x2797d3(0x213,'&Ynj')](_0x4a859d[_0x2797d3(0x2a8,'qAg&')],_0x2797d3(0x1bc,'H]og')))try{_0x1c8249['indexOf'](_0x2797d3(0x297,'v!BK'))!=-0x1&&(scriptVersionCheck=!![]);}catch(_0x4c1ba5){$[_0x2797d3(0x29e,'6$KL')](_0x4c1ba5,_0x16bae5);}finally{_0x4a859d[_0x2797d3(0x1d7,'N%ow')](_0x430f26);}else{_0x32bf0f(_0x2797d3(0x2c9,'6$KL')+_0x4c0a5b['stringify'](_0x4db214));return;}},_0x3de148);});}var version_ = 'jsjiami.com.v7';

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