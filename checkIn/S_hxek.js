/**
 作者：shawn
 日期：2023-11-29 重构
 项目：鸿星尔克
 功能：完成自动签到 查询积分功能
 抓包：开着抓包软件 手动签到 获取签到请求全部 body 关键字gic-wx-app/member_sign.json
 必填变量格式：export S_hxekCk='body' 多个抢兑用 @ 或者 换行 分割
 选填变量格式：export S_hxekUa='user-agent' 多个账号用 @ 或者 换行
 定时：一天1次
 cron:38 8 * * *
 [task_local]
 #鸿星尔克
 [rewrite_local]
 https://hope.demogic.com/gic-wx-app/member_sign.json url script-request-headers https://github.com/Shawn220528/scripts/blob/main/hxek.js
 [MITM]
 hostname = hope.demogic.com
 */
const $ = new Env('鸿星尔克');
var _0xodg='jsjiami.com.v7';const _0x270b84=_0x3a21;(function(_0x100929,_0x19bfad,_0x21a160,_0x45efaa,_0x36f2e6,_0x1b2819,_0x5cf6c5){return _0x100929=_0x100929>>0x6,_0x1b2819='hs',_0x5cf6c5='hs',function(_0x236e7d,_0x59ea94,_0xd682e7,_0x6cfb40,_0x57b6b9){const _0x459991=_0x3a21;_0x6cfb40='tfi',_0x1b2819=_0x6cfb40+_0x1b2819,_0x57b6b9='up',_0x5cf6c5+=_0x57b6b9,_0x1b2819=_0xd682e7(_0x1b2819),_0x5cf6c5=_0xd682e7(_0x5cf6c5),_0xd682e7=0x0;const _0x4a6fcf=_0x236e7d();while(!![]&&--_0x45efaa+_0x59ea94){try{_0x6cfb40=-parseInt(_0x459991(0x2e5,'Aukz'))/0x1*(parseInt(_0x459991(0x2f6,'A%pt'))/0x2)+parseInt(_0x459991(0x35a,'zN4x'))/0x3+parseInt(_0x459991(0x257,'y*oS'))/0x4+parseInt(_0x459991(0x36a,'64tv'))/0x5*(-parseInt(_0x459991(0x31d,'HMZU'))/0x6)+parseInt(_0x459991(0x215,'A%pt'))/0x7+-parseInt(_0x459991(0x216,'0kh@'))/0x8*(parseInt(_0x459991(0x252,'OPCK'))/0x9)+parseInt(_0x459991(0x2f9,'t&@T'))/0xa*(parseInt(_0x459991(0x1b3,'qIDW'))/0xb);}catch(_0x1241af){_0x6cfb40=_0xd682e7;}finally{_0x57b6b9=_0x4a6fcf[_0x1b2819]();if(_0x100929<=_0x45efaa)_0xd682e7?_0x36f2e6?_0x6cfb40=_0x57b6b9:_0x36f2e6=_0x57b6b9:_0xd682e7=_0x57b6b9;else{if(_0xd682e7==_0x36f2e6['replace'](/[gqANpdTexBOEYnFuG=]/g,'')){if(_0x6cfb40===_0x59ea94){_0x4a6fcf['un'+_0x1b2819](_0x57b6b9);break;}_0x4a6fcf[_0x5cf6c5](_0x57b6b9);}}}}}(_0x21a160,_0x19bfad,function(_0x1af241,_0x36a0d1,_0x27308a,_0x20993f,_0x209fc2,_0x896df7,_0x319d98){return _0x36a0d1='\x73\x70\x6c\x69\x74',_0x1af241=arguments[0x0],_0x1af241=_0x1af241[_0x36a0d1](''),_0x27308a='\x72\x65\x76\x65\x72\x73\x65',_0x1af241=_0x1af241[_0x27308a]('\x76'),_0x20993f='\x6a\x6f\x69\x6e',(0x1496d0,_0x1af241[_0x20993f](''));});}(0x3100,0xb5ee4,_0x4a98,0xc6),_0x4a98)&&(_0xodg=_0x270b84(0x1b4,'*927'));const axios=require('axios'),{log}=console,Notify=0x1,specialNotify=0x0,debug=0x0;let scriptVersion='V2.0.0',scriptVersionLatest=_0x270b84(0x327,'CDk!'),scriptDhName=_0x270b84(0x1fd,'Aukz'),scriptVarName=_0x270b84(0x2b6,'emaf'),scriptUaName=_0x270b84(0x25a,'WHgc'),currVarName=process[_0x270b84(0x271,'$$AQ')][_0x270b84(0x2b8,'1mAb')](scriptVarName)?process[_0x270b84(0x296,'$niL')][scriptVarName]:'',currDhName=process['env'][_0x270b84(0x1ea,'$$AQ')](scriptDhName)?process[_0x270b84(0x29b,'([Ct')][scriptDhName]:'',currUaName=process[_0x270b84(0x34e,'&Gvb')][_0x270b84(0x29e,'O32N')](scriptUaName)?process[_0x270b84(0x244,'m8op')][scriptUaName]:_0x270b84(0x33d,'[TX*'),scriptCk=($[_0x270b84(0x1e4,'Aukz')]()?currVarName:$[_0x270b84(0x2b1,'m8op')](scriptVarName))||'',scriptDhCk=($[_0x270b84(0x1bd,'qIDW')]()?currDhName:$[_0x270b84(0x2cd,'j8bi')](scriptDhName))||'',scriptUa=($[_0x270b84(0x205,'y*oS')]()?currUaName:$[_0x270b84(0x276,'$niL')](scriptUaName))||'',scriptCkArr=[],scriptUaArr=[_0x270b84(0x32a,']9U7')],scriptAppId=_0x270b84(0x376,'8YRf'),scriptAppVersion='9',scriptMsg='',scriptSpecialMsg='',userList=[];class userInfo{constructor(_0x25af01){const _0x4fd37f=_0x270b84,_0x30ed0f={'fVqwP':'1|5|3|7|8|6|2|9|0|4','RGKIc':_0x4fd37f(0x2e9,'TVg6'),'iISwa':'keep-alive','AsqWL':_0x4fd37f(0x1d7,'0kh@')},_0x3f4d8c=_0x30ed0f[_0x4fd37f(0x1e1,'7H!&')]['split']('|');let _0x1cbb36=0x0;while(!![]){switch(_0x3f4d8c[_0x1cbb36++]){case'0':this[_0x4fd37f(0x331,'O32N')]={'Content-Type':_0x4fd37f(0x355,'8YRf'),'Origin':_0x4fd37f(0x262,'duH8')+this[_0x4fd37f(0x2cb,'s%Ov')],'User-Agent':this[_0x4fd37f(0x1a1,'Aukz')]['ua']};continue;case'1':this[_0x4fd37f(0x19e,'$$AQ')]=new Object();continue;case'2':this[_0x4fd37f(0x364,'bf%r')]=_0x4fd37f(0x1b2,'emaf');continue;case'3':this[_0x4fd37f(0x286,'qIDW')]['ua']=_0x25af01['ua'];continue;case'4':this[_0x4fd37f(0x201,'1mAb')]={'content-type':_0x30ed0f['RGKIc'],'Connection':_0x30ed0f[_0x4fd37f(0x2f3,'Aukz')],'User-Agent':this['userObject']['ua'],'Referer':'https://servicewechat.com/'+scriptAppId+_0x4fd37f(0x1f0,'1mAb'),'Accept-Encoding':_0x30ed0f[_0x4fd37f(0x301,'l&kT')],'sign':''};continue;case'5':this['userObject'][_0x4fd37f(0x287,'WHgc')]=_0x25af01[_0x4fd37f(0x229,'bf%r')];continue;case'6':this[_0x4fd37f(0x1a3,'duH8')][_0x4fd37f(0x2f4,'zN4x')]=0x0;continue;case'7':this[_0x4fd37f(0x340,'t&@T')][_0x4fd37f(0x234,'0XGL')]=_0x25af01['ck'];continue;case'8':this[_0x4fd37f(0x1f7,'$J1G')][_0x4fd37f(0x2de,'HMZU')]=_0x25af01['dhCk'];continue;case'9':this['tips']='['+_0x25af01[_0x4fd37f(0x229,'bf%r')]+']账号';continue;}break;}}async[_0x270b84(0x1c0,'*927')](){const _0x1bab73=_0x270b84,_0x3a337d={'UwBVl':function(_0x404c19,_0x2232c9){return _0x404c19===_0x2232c9;},'CudSg':function(_0x41eeac,_0x3c59ea){return _0x41eeac(_0x3c59ea);},'izsJx':function(_0x4648a7,_0x30cd52){return _0x4648a7-_0x30cd52;},'xFTjk':function(_0x16d201,_0x41045d){return _0x16d201(_0x41045d);},'WqIef':function(_0x324a06,_0x13b5f1){return _0x324a06===_0x13b5f1;},'vtEnW':_0x1bab73(0x18f,'y*oS'),'pyOXs':'modules','yxGhm':function(_0x275fc1,_0x45be2a){return _0x275fc1===_0x45be2a;},'uzyWg':'vgKzH','ppDgB':function(_0x59caf9,_0x94a47e){return _0x59caf9==_0x94a47e;},'cSUgF':'integral','oAFIC':'value','OWwnQ':function(_0xaf42db,_0xafe2cd){return _0xaf42db==_0xafe2cd;},'VpwMc':_0x1bab73(0x34d,'7H!&'),'rAheG':function(_0x10d8ae,_0x17a967){return _0x10d8ae(_0x17a967);},'HcLWw':function(_0x18b49b,_0x138a18){return _0x18b49b!==_0x138a18;},'nKELl':_0x1bab73(0x335,'utWH'),'VwKsh':'MijBO','QckIp':_0x1bab73(0x22c,'t&@T'),'NbNsV':function(_0x1bcd24,_0x25350a){return _0x1bcd24(_0x25350a);},'ORNMo':function(_0x43e728,_0x2f5128,_0x15522f){return _0x43e728(_0x2f5128,_0x15522f);},'BoFCq':function(_0xb28c04,_0x373d0f){return _0xb28c04(_0x373d0f);},'qBYyF':_0x1bab73(0x279,'y*oS'),'RpEvb':_0x1bab73(0x373,'R&si'),'MOlrw':_0x1bab73(0x339,'0XGL'),'BSuNQ':_0x1bab73(0x203,'HMZU'),'FdVLi':_0x1bab73(0x2ff,'oUQu'),'RTQAp':'useClique','ddjik':_0x1bab73(0x1ed,'([Ct'),'nCSup':_0x1bab73(0x31c,'*927'),'EGWYa':_0x1bab73(0x365,'y*oS'),'PAQfz':_0x1bab73(0x25b,'(I7o'),'MaYkO':'transId','HYlpm':'sign','wJHkE':_0x1bab73(0x352,'7H!&'),'hzXKX':'gicWxaVersion','lmCcz':_0x1bab73(0x1a8,'1mAb')};let _0x2b9ac4=new Object(),_0xafbe89=_0x3a337d[_0x1bab73(0x37e,'oUQu')](formDataToObject,this['userObject'][_0x1bab73(0x1d8,'s%Ov')]),_0x29e032=_0x3a337d['ORNMo'](randomInt,0x40ae4a,0x954b1d),_0x4d13f4=_0x3a337d[_0x1bab73(0x241,'dA3e')](time,_0x3a337d['qBYyF']),_0x5d4703=''+_0xafbe89[_0x3a337d['RpEvb']]+_0x4d13f4;_0x2b9ac4[_0x1bab73(0x356,'duH8')]=''+scriptAppVersion,_0x2b9ac4[_0x3a337d[_0x1bab73(0x2bb,'wUxL')]]='2',_0x2b9ac4[_0x3a337d[_0x1bab73(0x1f8,'dA3e')]]=''+_0xafbe89[_0x1bab73(0x1bb,'&Gvb')],_0x2b9ac4[_0x1bab73(0x2c3,'0kh@')]=''+_0xafbe89[_0x1bab73(0x270,'qIDW')],_0x2b9ac4[_0x3a337d[_0x1bab73(0x33c,'dA3e')]]=''+_0xafbe89[_0x3a337d[_0x1bab73(0x1de,'xEre')]],_0x2b9ac4[_0x3a337d['RTQAp']]=''+_0xafbe89[_0x1bab73(0x309,'TVg6')],_0x2b9ac4[_0x3a337d['ddjik']]=''+_0xafbe89[_0x3a337d[_0x1bab73(0x1cd,'0XGL')]],_0x2b9ac4[_0x3a337d[_0x1bab73(0x369,'l&kT')]]=''+_0xafbe89[_0x3a337d[_0x1bab73(0x32f,'VGtt')]],_0x2b9ac4[_0x3a337d[_0x1bab73(0x26d,'8YRf')]]=''+_0xafbe89[_0x1bab73(0x2a6,'$niL')],_0x2b9ac4[_0x3a337d[_0x1bab73(0x366,'DpXQ')]]=''+_0x29e032,_0x2b9ac4[_0x3a337d[_0x1bab73(0x30c,'*927')]]=''+_0xafbe89[_0x3a337d['RpEvb']],_0x2b9ac4[_0x3a337d['MaYkO']]=''+_0x5d4703,_0x2b9ac4[_0x3a337d[_0x1bab73(0x227,'[TX*')]]=_0x3a337d['CudSg'](md5,'timestamp='+_0x4d13f4+_0x1bab73(0x228,'*927')+_0x5d4703+_0x1bab73(0x1bf,'utWH')+_0x29e032+_0x1bab73(0x290,'t&@T')+_0xafbe89[_0x3a337d[_0x1bab73(0x29d,']9U7')]]),_0x2b9ac4[_0x3a337d['wJHkE']]=''+_0x4d13f4,_0x2b9ac4[_0x3a337d[_0x1bab73(0x1e0,'7H!&')]]=''+_0xafbe89[_0x3a337d[_0x1bab73(0x378,'WHgc')]],_0x2b9ac4[_0x3a337d[_0x1bab73(0x2e2,'Aukz')]]=''+_0xafbe89[_0x3a337d[_0x1bab73(0x336,'([Ct')]];let _0x3207ff=0x0,_0x490c4a=this[_0x1bab73(0x18e,'HMZU')][_0x1bab73(0x297,'dA3e')],_0x2ef6d3=this['headersPost'];_0x2ef6d3['sign']=_0x2b9ac4[_0x3a337d[_0x1bab73(0x18d,'l6ki')]];let _0x13efb7=this[_0x1bab73(0x246,'CDk!')];return new Promise(_0x4e4a61=>{const _0x3de983=_0x1bab73,_0x2cac00={'Phqvo':function(_0xc9e9ec,_0x332795){return _0x3a337d['izsJx'](_0xc9e9ec,_0x332795);},'hAXBL':function(_0x25df3f,_0x2c72b3){return _0x25df3f*_0x2c72b3;},'kvKIQ':'errcode','mbWcK':function(_0x20c5d1,_0x1c9d06){return _0x3a337d['xFTjk'](_0x20c5d1,_0x1c9d06);},'vNBqM':function(_0x5c6a72,_0x3f0400){return _0x3a337d['WqIef'](_0x5c6a72,_0x3f0400);},'JVMKi':'vdVoK','RyGjp':_0x3de983(0x316,'7H!&'),'tokzm':_0x3a337d[_0x3de983(0x2d4,'xEre')],'EQMJq':_0x3a337d[_0x3de983(0x1d1,'TNgY')],'xkDzw':function(_0x3b51c9,_0x5f09d3){const _0x4bfe37=_0x3de983;return _0x3a337d[_0x4bfe37(0x30e,'gq!]')](_0x3b51c9,_0x5f09d3);},'CpVSy':_0x3a337d[_0x3de983(0x23e,'HMZU')],'Osgtb':function(_0x42a5d4,_0x3b7861){return _0x3a337d['ppDgB'](_0x42a5d4,_0x3b7861);},'TNSai':_0x3a337d[_0x3de983(0x311,'[TX*')],'fGfIZ':_0x3a337d[_0x3de983(0x242,'bf%r')],'aoBVs':function(_0x436ed1,_0x27668e){return _0x3a337d['OWwnQ'](_0x436ed1,_0x27668e);},'qiTNm':'hXlAH','NjiDm':_0x3a337d[_0x3de983(0x1a2,'7H!&')],'OqZPM':function(_0xf7d2b1,_0x18b61c){return _0xf7d2b1(_0x18b61c);},'Ejius':function(_0x2e7b41,_0x39e269){return _0x3a337d['rAheG'](_0x2e7b41,_0x39e269);},'dttSm':function(_0x309044,_0x46d012,_0x4de8b6,_0x564356){return _0x309044(_0x46d012,_0x4de8b6,_0x564356);},'OCEez':function(_0x40f91a,_0x53ab78){const _0x557290=_0x3de983;return _0x3a337d[_0x557290(0x2b7,'1mAb')](_0x40f91a,_0x53ab78);},'RPBZB':_0x3a337d[_0x3de983(0x280,'j8bi')]};if(_0x3a337d[_0x3de983(0x32b,'OPCK')](_0x3a337d['VwKsh'],'nNDEZ'))_0x28bfe9[_0x3de983(0x2f0,'([Ct')](_0x4b9119);else{let _0x14dad4={'method':_0x3a337d['QckIp'],'url':'https://'+this[_0x3de983(0x259,'&Gvb')]+_0x3de983(0x212,'l6ki'),'headers':_0x2ef6d3,'data':''+_0x3a337d[_0x3de983(0x273,'oUQu')](objectToFormData,_0x2b9ac4)};axios[_0x3de983(0x1d6,'wUxL')](_0x14dad4)[_0x3de983(0x198,'y*oS')](async function(_0x40201c){const _0x5adc8b=_0x3de983,_0x1b924d={'AnuXp':function(_0xaed564,_0x3c8ad9){const _0x2e152d=_0x3a21;return _0x2cac00[_0x2e152d(0x289,'A%pt')](_0xaed564,_0x3c8ad9);}};try{let _0x5e4984=_0x40201c[_0x5adc8b(0x23f,'s%Ov')];if(_0x5e4984[_0x5adc8b(0x2da,'WHgc')](_0x2cac00[_0x5adc8b(0x1c3,'oUQu')])&&_0x2cac00[_0x5adc8b(0x34f,'m8op')](parseInt,_0x5e4984[_0x5adc8b(0x20a,'m8op')])==0x0){if(_0x2cac00[_0x5adc8b(0x2a5,']9U7')](_0x2cac00['JVMKi'],_0x2cac00[_0x5adc8b(0x32d,'WHgc')]))return _0x44d07c[_0x5adc8b(0x2d5,'$niL')](_0x311d04['random']()*_0x2cac00['Phqvo'](_0x16dd65,_0x1febbb)+_0x59a680);else{_0x2cac00['mbWcK'](log,_0x13efb7+_0x5adc8b(0x1c8,'0XGL'));if(_0x5e4984[_0x5adc8b(0x2ce,']9U7')]('response')&&_0x5e4984['response'][_0x5adc8b(0x22d,'l6ki')](_0x2cac00[_0x5adc8b(0x282,'DpXQ')])&&_0x5e4984[_0x5adc8b(0x1c4,'O32N')]['data'][_0x5adc8b(0x189,'v7xo')](_0x2cac00[_0x5adc8b(0x240,'duH8')])){if(_0x2cac00[_0x5adc8b(0x348,'R&si')](_0x2cac00[_0x5adc8b(0x1d4,'m8op')],_0x2cac00['CpVSy']))for(var _0x49de67 in _0x5e4984[_0x5adc8b(0x2b5,'y*oS')][_0x5adc8b(0x2e3,'l6ki')][_0x5adc8b(0x294,'VGtt')]){let _0x3dd758=_0x5e4984['response'][_0x5adc8b(0x194,')DYj')]['modules'][_0x49de67]['key'];if(_0x3dd758=='B1'||_0x2cac00[_0x5adc8b(0x28f,'gq!]')](_0x3dd758,'B3')){_0x3207ff=_0x5e4984['response'][_0x5adc8b(0x194,')DYj')]['modules'][_0x49de67][_0x2cac00['TNSai']][_0x2cac00[_0x5adc8b(0x20c,'64tv')]];if(_0x2cac00['aoBVs'](_0x490c4a,0x0))_0x2cac00['qiTNm']===_0x2cac00[_0x5adc8b(0x1d9,'utWH')]?log(''+_0x13efb7+_0x5e4984[_0x5adc8b(0x30f,'j8bi')][_0x5adc8b(0x34c,'7H!&')][_0x5adc8b(0x1fe,'(I7o')][_0x49de67][_0x2cac00['TNSai']][_0x2cac00['NjiDm']]+':'+_0x3207ff):_0xf172c4['push'](_0x30abb7);else{let _0x55e454=_0x2cac00[_0x5adc8b(0x268,'xEre')](parseInt,_0x3207ff)-_0x2cac00[_0x5adc8b(0x1c7,'DpXQ')](parseInt,_0x490c4a);_0x2cac00['dttSm'](addNotifyStr,''+_0x13efb7+_0x5e4984[_0x5adc8b(0x226,'*927')][_0x5adc8b(0x24b,'([Ct')][_0x5adc8b(0x295,'qIDW')][_0x49de67]['integral'][_0x2cac00['NjiDm']]+':'+_0x3207ff+_0x5adc8b(0x315,'TVg6')+_0x55e454,![],!![]);}}}else _0x385135['msg'](_0x43f7a7);}}}else _0x2cac00[_0x5adc8b(0x2c4,'A%pt')]('OvhLk',_0x2cac00['RPBZB'])?(_0x3465f2=_0x2a7705['floor'](_0x1b924d['AnuXp'](_0x29847d[_0x5adc8b(0x255,'7H!&')](),_0x2f0433--)),_0x5017ea=_0x450f0d[_0x5dcc0a],_0x679d65[_0x55f130]=_0x1986b4[_0x40d80c],_0x5b7936[_0x2a4839]=_0x28091f):_0x2cac00[_0x5adc8b(0x251,'7H!&')](log,_0x13efb7+_0x5adc8b(0x2d1,'$$AQ')+_0x5e4984[_0x5adc8b(0x218,'Aukz')]);}catch(_0x5edd76){_0x2cac00[_0x5adc8b(0x308,'j8bi')](log,_0x13efb7+_0x5adc8b(0x1df,'([Ct')+_0x5edd76['message']+'：'+JSON['stringify'](_0x40201c[_0x5adc8b(0x1b7,'OPCK')])+_0x5adc8b(0x210,'zN4x')+JSON['stringify'](_0x14dad4));}})[_0x3de983(0x333,'O32N')](function(_0x3fc868){const _0x1dd99a=_0x3de983;_0x3a337d[_0x1dd99a(0x34a,'A%pt')](_0x1dd99a(0x230,'duH8'),_0x1dd99a(0x2fe,'*927'))?console['error'](_0x3fc868):_0x782c26['push'](_0x279aed);})[_0x3de983(0x19a,'$J1G')](_0x4984f3=>{const _0x443491=_0x3de983;_0x3a337d[_0x443491(0x307,']9U7')](_0x4e4a61,_0x3207ff);});}});}async[_0x270b84(0x224,'HMZU')](){const _0x4a2f92=_0x270b84,_0x4eb936={'xUrHM':function(_0x117090,_0x3bee60){return _0x117090!==_0x3bee60;},'bntEK':_0x4a2f92(0x367,'HMZU'),'CohIO':function(_0x477231,_0x287996){return _0x477231(_0x287996);},'CQhXb':_0x4a2f92(0x2d7,'(I7o'),'jNhIE':'gEKEq','dPuHV':_0x4a2f92(0x266,'1mAb'),'SjoZQ':function(_0x4d49de,_0x2aee13,_0x460be4){return _0x4d49de(_0x2aee13,_0x460be4);},'ZqMKB':_0x4a2f92(0x33f,'OPCK'),'eSkFb':'timestamp','dyRbK':_0x4a2f92(0x1ae,'$niL'),'bUowO':_0x4a2f92(0x35d,'WHgc'),'lYFyl':_0x4a2f92(0x320,'7H!&')},_0x174705=formDataToObject(this[_0x4a2f92(0x1f2,'0kh@')][_0x4a2f92(0x37d,'emaf')]),_0x544eba=''+_0x174705[_0x4a2f92(0x2fa,'qIDW')],_0x20d73e=_0x4eb936[_0x4a2f92(0x2ec,'xEre')](randomInt,0x40ae4a,0x954b1d),_0x901636=_0x4eb936[_0x4a2f92(0x30b,'c!63')](time,_0x4a2f92(0x24c,'$J1G'));_0x174705[_0x4eb936[_0x4a2f92(0x28d,'y*oS')]]=''+_0x20d73e,_0x174705[_0x4eb936['eSkFb']]=_0x901636,_0x174705[_0x4eb936[_0x4a2f92(0x2c8,'CDk!')]]=''+_0x174705[_0x4eb936['bUowO']]+_0x174705[_0x4eb936[_0x4a2f92(0x2af,'VGtt')]],_0x174705['sign']=md5(_0x4a2f92(0x1b6,'64tv')+_0x174705[_0x4a2f92(0x23c,'HMZU')]+_0x4a2f92(0x24a,'$$AQ')+_0x174705[_0x4eb936[_0x4a2f92(0x35c,'1mAb')]]+_0x4a2f92(0x220,'R&si')+_0x174705[_0x4eb936[_0x4a2f92(0x2cf,'m8op')]]+_0x4a2f92(0x188,'([Ct')+_0x174705[_0x4eb936[_0x4a2f92(0x2db,'j8bi')]]);let _0x451bef=![],_0x1a1562=this[_0x4a2f92(0x379,')DYj')];_0x1a1562['sign']=_0x174705[_0x4a2f92(0x1f5,'bf%r')];let _0x45b5c3=this[_0x4a2f92(0x2d3,'A%pt')];return new Promise(_0x194bb9=>{const _0x1e9bec=_0x4a2f92,_0x93ac02={'YZbDa':function(_0x5113af,_0x4059f7){const _0x131f84=_0x3a21;return _0x4eb936[_0x131f84(0x31a,'gq!]')](_0x5113af,_0x4059f7);},'tFREg':_0x1e9bec(0x28c,'$$AQ'),'HSfmQ':_0x4eb936['bntEK'],'aHzJa':function(_0x9a21c1,_0x44a665){return _0x4eb936['CohIO'](_0x9a21c1,_0x44a665);},'YheBU':_0x4eb936[_0x1e9bec(0x303,'utWH')],'jHQnM':function(_0x51ed06,_0x43f14c,_0x1d6b12,_0x412bb3){return _0x51ed06(_0x43f14c,_0x1d6b12,_0x412bb3);},'ZLzFv':_0x4eb936[_0x1e9bec(0x36b,'duH8')],'ugUmq':_0x4eb936[_0x1e9bec(0x291,'Aukz')],'jlIGG':function(_0x31a553,_0x2efc97){return _0x31a553(_0x2efc97);}};let _0x30ca75={'method':'POST','url':'https://'+this[_0x1e9bec(0x211,']9U7')]+_0x1e9bec(0x1ee,'xEre'),'headers':_0x1a1562,'data':''+_0x4eb936[_0x1e9bec(0x1ba,'emaf')](objectToFormData,_0x174705)};axios[_0x1e9bec(0x1bc,'HMZU')](_0x30ca75)[_0x1e9bec(0x2d6,'8YRf')](async function(_0x4ce5df){const _0x321ab1=_0x1e9bec;if(_0x93ac02[_0x321ab1(0x26a,'7H!&')]('NKQpO',_0x93ac02['tFREg']))_0x17aa5c[_0x321ab1(0x370,'TVg6')]('\x0a')['forEach'](_0x477651=>{const _0x36370e=_0x321ab1;_0x75cd39[_0x36370e(0x371,'duH8')](_0x477651);});else try{let _0x465858=_0x4ce5df[_0x321ab1(0x1ac,'8YRf')];if(_0x465858[_0x321ab1(0x377,'&Gvb')](_0x93ac02[_0x321ab1(0x258,'A%pt')])&&_0x93ac02[_0x321ab1(0x314,'O32N')](parseInt,_0x465858[_0x321ab1(0x264,'s%Ov')])==0x0){if(_0x465858[_0x321ab1(0x2ce,']9U7')](_0x93ac02[_0x321ab1(0x1dc,'CDk!')])&&_0x465858[_0x321ab1(0x2e7,'0kh@')][_0x321ab1(0x29f,'TNgY')](_0x321ab1(0x1ab,'HMZU'))){_0x451bef=!![];let _0x27a2f4=_0x465858['response'][_0x321ab1(0x1f6,'VGtt')][_0x321ab1(0x21d,'TNgY')],_0x20ade2=_0x465858[_0x321ab1(0x204,'DpXQ')][_0x321ab1(0x1ec,'$$AQ')]['integralCount'];log(''+_0x45b5c3+_0x465858[_0x321ab1(0x24e,'y*oS')]+_0x321ab1(0x30d,'bf%r')+_0x27a2f4+_0x321ab1(0x21a,'bf%r')+_0x20ade2),_0x93ac02['jHQnM'](addNotifyStr,_0x45b5c3+_0x321ab1(0x2f7,'qIDW')+_0x20ade2,![],![]);}else _0x93ac02[_0x321ab1(0x22a,'$niL')]!==_0x93ac02['ugUmq']?_0x93ac02[_0x321ab1(0x2fd,'$niL')](log,''+_0x45b5c3+_0x465858[_0x321ab1(0x34b,')DYj')]):_0x373eb6['push'](_0x513a3a);}else _0x93ac02[_0x321ab1(0x2c6,'A%pt')](log,_0x45b5c3+'签到失败❌'+_0x465858[_0x321ab1(0x1c2,'*NS@')]);}catch(_0xbfdfad){log(_0x45b5c3+_0x321ab1(0x225,'&Gvb')+_0xbfdfad[_0x321ab1(0x1a7,'7H!&')]+'：'+JSON[_0x321ab1(0x1c6,'&Gvb')](_0x4ce5df['data'])+_0x321ab1(0x18c,'0kh@')+JSON[_0x321ab1(0x20f,'l6ki')](_0x30ca75));}})[_0x1e9bec(0x33e,'oUQu')](function(_0x3cf08b){const _0x5e3455=_0x1e9bec;console[_0x5e3455(0x1da,']9U7')](_0x3cf08b);})['then'](_0x5e0b2e=>{const _0x2cb5b2=_0x1e9bec;_0x93ac02[_0x2cb5b2(0x23d,'l&kT')](_0x194bb9,_0x451bef);});});}}!(async()=>{const _0x11144e=_0x270b84,_0x219f78={'DVaTy':function(_0x1b8ec4,_0x30f842){return _0x1b8ec4===_0x30f842;},'esaHA':function(_0x2c33ae,_0xa3cd3b){return _0x2c33ae(_0xa3cd3b);},'CbPwN':function(_0x86c220,_0x1256d4){return _0x86c220+_0x1256d4;},'uZUfl':function(_0xeb5a5a,_0x426183){return _0xeb5a5a+_0x426183;},'DlHzr':_0x11144e(0x195,'$J1G'),'hJGXn':_0x11144e(0x27d,'O32N'),'rjuzo':function(_0x76d16a,_0x1777ef){return _0x76d16a!==_0x1777ef;},'eZyQC':_0x11144e(0x1a6,'8YRf'),'xhCCu':'TcdlL','pzVos':_0x11144e(0x253,'utWH'),'yITCr':function(_0x5ab0de){return _0x5ab0de();},'oLEln':_0x11144e(0x1d0,'m8op'),'iDFhV':function(_0x2c0898,_0x41e6aa,_0x528761){return _0x2c0898(_0x41e6aa,_0x528761);},'AbYbp':function(_0x3eff4a,_0x505257){return _0x3eff4a(_0x505257);}};if(_0x219f78[_0x11144e(0x353,'utWH')](typeof $request,_0x219f78[_0x11144e(0x19b,'(I7o')])){if(_0x219f78[_0x11144e(0x1e7,'bf%r')]===_0x219f78[_0x11144e(0x30a,']9U7')])return _0x50492d[_0x11144e(0x2a8,'0XGL')](_0x219f78[_0x11144e(0x2ae,'m8op')](_0x219f78['uZUfl']('{\x22',_0x253ef3[_0x11144e(0x2fc,']9U7')](/&/g,_0x219f78['DlHzr'])[_0x11144e(0x36d,'utWH')](/=/g,_0x219f78[_0x11144e(0x2bc,'OPCK')])),'\x22}'),function(_0x374ce9,_0x393a73){return _0x219f78['DVaTy'](_0x374ce9,'')?_0x393a73:_0x219f78['esaHA'](_0x4646b2,_0x393a73);});else await _0x219f78[_0x11144e(0x2ed,'(I7o')](getRewrite);}else{if(!await getEnvs())return;else{if(_0x219f78[_0x11144e(0x232,'l&kT')](_0x219f78['oLEln'],_0x219f78[_0x11144e(0x22f,'$niL')])){await _0x219f78[_0x11144e(0x1b1,'*927')](showTips),console[_0x11144e(0x300,'8YRf')](_0x11144e(0x26e,'$$AQ')+randomInt(0x3e8,0x1388)+_0x11144e(0x277,'64tv'));for(let _0x1fe399 in userList){userList[_0x1fe399]['userObject']['credits']=await userList[_0x1fe399][_0x11144e(0x200,'VGtt')]();}console['log'](_0x11144e(0x2ba,'*927')+_0x219f78[_0x11144e(0x1d3,'Aukz')](randomInt,0x3e8,0x1388)+'ms====');for(let _0x2fdeba of userList){await _0x2fdeba[_0x11144e(0x310,'1mAb')]();}console[_0x11144e(0x2c1,'duH8')]('====签到后积分查询\x20随机延迟'+_0x219f78[_0x11144e(0x344,'j8bi')](randomInt,0x3e8,0x1388)+'ms====');for(let _0x355ed3 of userList){await _0x355ed3[_0x11144e(0x1a5,'v7xo')]();}await _0x219f78[_0x11144e(0x28a,'t&@T')](SendMsg,scriptMsg),await _0x219f78[_0x11144e(0x274,'s%Ov')](SendSpecialMsg,scriptSpecialMsg);}else _0x219f78[_0x11144e(0x1e3,'l6ki')](_0x4388f7,_0x44548f+_0x11144e(0x2eb,'Aukz')+_0x1914c1[_0x11144e(0x25e,'R&si')]+'：'+_0x427c10[_0x11144e(0x26f,'VGtt')](_0x1109e2[_0x11144e(0x1ac,'8YRf')])+_0x11144e(0x284,'OPCK')+_0x43b160[_0x11144e(0x360,'utWH')](_0xd4a195));}}})()['catch'](_0x14e3b5=>log(_0x14e3b5))[_0x270b84(0x221,'v7xo')](()=>$[_0x270b84(0x334,'Aukz')]());function fetchData(_0x4a8c2f){const _0x25528d={'xqnUd':function(_0x301b08,_0x5e6fe3){return _0x301b08(_0x5e6fe3);}};_0x25528d['xqnUd'](log,_0x4a8c2f);}async function showTips(){const _0x4f55f2=_0x270b84,_0x574fe8={'qcUuf':function(_0x33864e,_0x4ddc7a){return _0x33864e(_0x4ddc7a);},'Gzulb':function(_0x9e9436,_0x46afff){return _0x9e9436(_0x46afff);},'PPqwF':function(_0x55fa4c,_0x1345f4){return _0x55fa4c(_0x1345f4);},'twtls':function(_0xc8426,_0x2825f0){return _0xc8426(_0x2825f0);},'EQyPs':function(_0x345794,_0x14caac){return _0x345794(_0x14caac);},'DCmwQ':function(_0x4e16f0,_0x15cc30){return _0x4e16f0(_0x15cc30);},'QAIkj':function(_0x23cda8,_0x50860f){return _0x23cda8(_0x50860f);},'QtRQi':function(_0xb8f408,_0x2c17fb){return _0xb8f408(_0x2c17fb);}};return log('📢\x20请认真阅读以下声明'),_0x574fe8[_0x4f55f2(0x1f3,'CDk!')](log,'【免责声明】'),_0x574fe8[_0x4f55f2(0x2a7,'Aukz')](log,_0x4f55f2(0x1cc,'HMZU')),log(_0x4f55f2(0x1e5,'64tv')),_0x574fe8[_0x4f55f2(0x208,'HMZU')](log,'✨\x20禁止任何公众号、自媒体进行任何形式的转载、发布'),_0x574fe8[_0x4f55f2(0x196,'duH8')](log,_0x4f55f2(0x27a,'tWc(')),log(_0x4f55f2(0x1f1,'c!63')),_0x574fe8[_0x4f55f2(0x1ca,'R&si')](log,_0x4f55f2(0x269,'HMZU')),_0x574fe8[_0x4f55f2(0x18a,'s%Ov')](log,_0x4f55f2(0x2dd,'t&@T')),_0x574fe8[_0x4f55f2(0x363,'R&si')](log,_0x4f55f2(0x317,'y*oS')),log(_0x4f55f2(0x25c,'gq!]')),_0x574fe8[_0x4f55f2(0x349,'A%pt')](log,_0x4f55f2(0x2ad,'TNgY')+scriptVersion+_0x4f55f2(0x32c,'$J1G')+scriptVersionLatest),_0x574fe8['DCmwQ'](log,'🔔\x20此脚本采用免费模式。🔓'),_0x574fe8['QAIkj'](log,_0x4f55f2(0x1fc,'CDk!')+scriptCkArr[_0x4f55f2(0x328,'0kh@')]+_0x4f55f2(0x347,'R&si')),debug&&_0x574fe8['QtRQi'](log,_0x4f55f2(0x312,'gq!]')+JSON[_0x4f55f2(0x2a2,'A%pt')](scriptCkArr)),!![];}async function getRewrite(){const _0x1f4efb=_0x270b84,_0x42adae={'hTdEZ':function(_0x31c14d,_0x572798){return _0x31c14d(_0x572798);},'HDZiC':function(_0x330b66,_0x44761d){return _0x330b66+_0x44761d;},'gLaeM':function(_0x1df9d3,_0x12f1b1){return _0x1df9d3*_0x12f1b1;},'vfTmM':function(_0x7591b,_0x323e45){return _0x7591b*_0x323e45;},'fqmWT':function(_0x2cba6c,_0x5e9393){return _0x2cba6c>_0x5e9393;},'uhVJv':'gic-wx-app/member_sign.json','DHkGy':function(_0x8131b3,_0x2aba3c){return _0x8131b3!==_0x2aba3c;},'CTKga':_0x1f4efb(0x330,'oUQu'),'MaTFW':_0x1f4efb(0x1d5,'emaf'),'IyGQy':function(_0xb9e7a6,_0x19b81b){return _0xb9e7a6==_0x19b81b;},'PPUCi':function(_0x25cbe8,_0x21fa41){return _0x25cbe8+_0x21fa41;},'Owilq':_0x1f4efb(0x299,'t&@T')};_0x42adae[_0x1f4efb(0x1ce,'WHgc')](log,_0x1f4efb(0x326,'WHgc')+new Date(_0x42adae['HDZiC'](new Date()[_0x1f4efb(0x248,'wUxL')](),_0x42adae[_0x1f4efb(0x2b3,'[TX*')](new Date()[_0x1f4efb(0x359,'VGtt')](),0x3c)*0x3e8)+_0x42adae['gLaeM'](_0x42adae['gLaeM'](_0x42adae[_0x1f4efb(0x1fb,'OPCK')](0x8,0x3c),0x3c),0x3e8))[_0x1f4efb(0x26c,'duH8')]());if(_0x42adae['fqmWT']($request['url'][_0x1f4efb(0x1f4,'tWc(')](_0x42adae[_0x1f4efb(0x285,'m8op')]),-0x1)){if(_0x42adae[_0x1f4efb(0x19d,'([Ct')](_0x1f4efb(0x23b,'utWH'),_0x42adae['CTKga']))_0x42adae[_0x1f4efb(0x321,'bf%r')](_0x12c0c1,_0x1f4efb(0x318,'s%Ov')+_0x2a44d1[_0x1f4efb(0x2dc,'O32N')](_0x2e9e73));else{const _0x571d61=$request['body'];if(scriptCk){if(_0x42adae[_0x1f4efb(0x37c,'DpXQ')]==='XkeWH'){if(_0x42adae[_0x1f4efb(0x254,'l6ki')](scriptCk[_0x1f4efb(0x313,'HMZU')](_0x571d61),-0x1)){scriptCk=_0x42adae[_0x1f4efb(0x197,')DYj')](_0x42adae['PPUCi'](scriptCk,'@'),_0x571d61),$['setdata'](scriptCk,scriptVarName);let _0x4c5ce6=scriptCk[_0x1f4efb(0x2e0,'0XGL')]('@');$[_0x1f4efb(0x2cc,'m8op')]('【'+$['name']+'】'+(_0x1f4efb(0x358,'m8op')+_0x4c5ce6[_0x1f4efb(0x222,'utWH')]+_0x1f4efb(0x37f,'&Gvb')+_0x571d61+'\x20,不用请自行关闭重写!'));}}else _0x3fb0af[_0x1f4efb(0x1a0,'VGtt')](_0x101f10);}else _0x42adae[_0x1f4efb(0x19c,'tWc(')](_0x1f4efb(0x2b2,'l6ki'),_0x42adae[_0x1f4efb(0x21f,'([Ct')])?($[_0x1f4efb(0x20b,'dA3e')](_0x571d61,scriptVarName),$[_0x1f4efb(0x1c9,'DpXQ')]('【'+$['name']+'】'+('\x20获取第1个\x20ck\x20成功:\x20'+_0x571d61+_0x1f4efb(0x32e,'[TX*')))):_0x18622e(_0x447822+'\x0a');}}}function formDataToObject(_0x23f8dc){const _0xedf404=_0x270b84,_0x7dfef4={'iwOio':function(_0x1b4676,_0x3ae7b1){return _0x1b4676+_0x3ae7b1;}};return JSON['parse'](_0x7dfef4[_0xedf404(0x2c7,'gq!]')](_0x7dfef4[_0xedf404(0x199,'j8bi')]('{\x22',_0x23f8dc['replace'](/&/g,'\x22,\x22')[_0xedf404(0x281,')DYj')](/=/g,_0xedf404(0x2e1,'TVg6'))),'\x22}'),function(_0x15866e,_0x33bf5c){return _0x15866e===''?_0x33bf5c:decodeURIComponent(_0x33bf5c);});}function _0x3a21(_0x55d6a2,_0x49ba2f){const _0x4a9839=_0x4a98();return _0x3a21=function(_0x3a21cb,_0x1e7f91){_0x3a21cb=_0x3a21cb-0x188;let _0x2a1718=_0x4a9839[_0x3a21cb];if(_0x3a21['vBUzMS']===undefined){var _0x379ef4=function(_0x453161){const _0x45c075='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0xfb2ccd='',_0x232318='';for(let _0x1364fc=0x0,_0x4199de,_0x33d2f4,_0x37ec34=0x0;_0x33d2f4=_0x453161['charAt'](_0x37ec34++);~_0x33d2f4&&(_0x4199de=_0x1364fc%0x4?_0x4199de*0x40+_0x33d2f4:_0x33d2f4,_0x1364fc++%0x4)?_0xfb2ccd+=String['fromCharCode'](0xff&_0x4199de>>(-0x2*_0x1364fc&0x6)):0x0){_0x33d2f4=_0x45c075['indexOf'](_0x33d2f4);}for(let _0x2d302f=0x0,_0x5ceeae=_0xfb2ccd['length'];_0x2d302f<_0x5ceeae;_0x2d302f++){_0x232318+='%'+('00'+_0xfb2ccd['charCodeAt'](_0x2d302f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x232318);};const _0x6605d6=function(_0x551394,_0x3519c2){let _0x5d21df=[],_0x4bf961=0x0,_0x2ddb66,_0x49b56f='';_0x551394=_0x379ef4(_0x551394);let _0x26173f;for(_0x26173f=0x0;_0x26173f<0x100;_0x26173f++){_0x5d21df[_0x26173f]=_0x26173f;}for(_0x26173f=0x0;_0x26173f<0x100;_0x26173f++){_0x4bf961=(_0x4bf961+_0x5d21df[_0x26173f]+_0x3519c2['charCodeAt'](_0x26173f%_0x3519c2['length']))%0x100,_0x2ddb66=_0x5d21df[_0x26173f],_0x5d21df[_0x26173f]=_0x5d21df[_0x4bf961],_0x5d21df[_0x4bf961]=_0x2ddb66;}_0x26173f=0x0,_0x4bf961=0x0;for(let _0x1d47f9=0x0;_0x1d47f9<_0x551394['length'];_0x1d47f9++){_0x26173f=(_0x26173f+0x1)%0x100,_0x4bf961=(_0x4bf961+_0x5d21df[_0x26173f])%0x100,_0x2ddb66=_0x5d21df[_0x26173f],_0x5d21df[_0x26173f]=_0x5d21df[_0x4bf961],_0x5d21df[_0x4bf961]=_0x2ddb66,_0x49b56f+=String['fromCharCode'](_0x551394['charCodeAt'](_0x1d47f9)^_0x5d21df[(_0x5d21df[_0x26173f]+_0x5d21df[_0x4bf961])%0x100]);}return _0x49b56f;};_0x3a21['qSPlhP']=_0x6605d6,_0x55d6a2=arguments,_0x3a21['vBUzMS']=!![];}const _0x43d432=_0x4a9839[0x0],_0x1552cd=_0x3a21cb+_0x43d432,_0x2cf287=_0x55d6a2[_0x1552cd];return!_0x2cf287?(_0x3a21['IAjPaW']===undefined&&(_0x3a21['IAjPaW']=!![]),_0x2a1718=_0x3a21['qSPlhP'](_0x2a1718,_0x1e7f91),_0x55d6a2[_0x1552cd]=_0x2a1718):_0x2a1718=_0x2cf287,_0x2a1718;},_0x3a21(_0x55d6a2,_0x49ba2f);}function objectToFormData(_0x1304d7){const _0x447750=_0x270b84,_0x2382e3={'nHZrh':function(_0x63283c,_0x1c1f76){return _0x63283c+_0x1c1f76;},'CjAbX':function(_0x1331f9,_0xfce7a0){return _0x1331f9+_0xfce7a0;},'WBPfI':function(_0x4cb926,_0x2b1ca3){return _0x4cb926(_0x2b1ca3);},'KJOcL':function(_0x3c4e73,_0x35d521){return _0x3c4e73(_0x35d521);}};let _0x1212ba=[];for(let _0x41be8b in _0x1304d7)_0x1304d7[_0x447750(0x2da,'WHgc')](_0x41be8b)&&_0x1212ba[_0x447750(0x37b,'(I7o')](_0x2382e3[_0x447750(0x192,'*927')](_0x2382e3[_0x447750(0x2a3,'WHgc')](_0x2382e3[_0x447750(0x261,'[TX*')](encodeURIComponent,_0x41be8b),'='),_0x2382e3[_0x447750(0x1dd,')DYj')](encodeURIComponent,_0x1304d7[_0x41be8b])));return _0x1212ba[_0x447750(0x323,'CDk!')]('&');}function time(_0x300957,_0x29768b=null){const _0x51076d=_0x270b84,_0x378249={'Nbeia':function(_0x4466e2,_0x2ff6e5){return _0x4466e2+_0x2ff6e5;},'sVpAV':function(_0x3a6bd6,_0x2f03ad){return _0x3a6bd6/_0x2f03ad;},'XIwcQ':function(_0x1d5b1a,_0x58d981){return _0x1d5b1a-_0x58d981;},'noewa':function(_0x279ca4,_0x50df2c){return _0x279ca4==_0x50df2c;},'xprBH':function(_0x4650ee,_0x5e56eb){return _0x4650ee+_0x5e56eb;}},_0x22a6a9=_0x29768b?new Date(_0x29768b):new Date();let _0x529fd6={'M+':_0x378249['Nbeia'](_0x22a6a9[_0x51076d(0x1e9,'7H!&')](),0x1),'d+':_0x22a6a9['getDate'](),'H+':_0x22a6a9[_0x51076d(0x1e2,'c!63')](),'m+':_0x22a6a9['getMinutes'](),'s+':_0x22a6a9[_0x51076d(0x2e6,'y*oS')](),'q+':Math[_0x51076d(0x302,'HMZU')](_0x378249[_0x51076d(0x214,'gq!]')](_0x22a6a9[_0x51076d(0x2fb,'8YRf')]()+0x3,0x3)),'S':_0x22a6a9[_0x51076d(0x238,'dA3e')]()};if(/(y+)/[_0x51076d(0x2e4,'l6ki')](_0x300957))_0x300957=_0x300957[_0x51076d(0x2fc,']9U7')](RegExp['$1'],(_0x22a6a9[_0x51076d(0x325,'duH8')]()+'')['substr'](_0x378249['XIwcQ'](0x4,RegExp['$1'][_0x51076d(0x351,'$$AQ')])));for(let _0x5ed9bd in _0x529fd6)if(new RegExp(_0x378249['Nbeia'](_0x378249[_0x51076d(0x319,'y*oS')]('(',_0x5ed9bd),')'))[_0x51076d(0x35e,'WHgc')](_0x300957))_0x300957=_0x300957[_0x51076d(0x1db,'TNgY')](RegExp['$1'],_0x378249[_0x51076d(0x2a9,'emaf')](RegExp['$1']['length'],0x1)?_0x529fd6[_0x5ed9bd]:_0x378249[_0x51076d(0x28e,'v7xo')]('00',_0x529fd6[_0x5ed9bd])[_0x51076d(0x338,'OPCK')](_0x378249[_0x51076d(0x25f,'$J1G')]('',_0x529fd6[_0x5ed9bd])[_0x51076d(0x22b,')DYj')]));return _0x300957;}async function getEnvs(){const _0x22563c=_0x270b84,_0x4bc765={'Yxkmo':function(_0xbeb611,_0x475bd1){return _0xbeb611==_0x475bd1;},'gFupw':function(_0x9f79a1,_0x3f5cd4){return _0x9f79a1+_0x3f5cd4;},'FqHit':function(_0x132e4c,_0x2706f){return _0x132e4c+_0x2706f;},'HEuoA':function(_0x3564e4,_0x2106dd){return _0x3564e4===_0x2106dd;},'SoekA':_0x22563c(0x1e6,'A%pt'),'JQKpB':function(_0x117e0a,_0x1a6ad8){return _0x117e0a+_0x1a6ad8;},'IiTCp':function(_0x40600a,_0x3c546d){return _0x40600a(_0x3c546d);},'wIxDs':function(_0x3a05a2,_0x312611){return _0x3a05a2+_0x312611;},'xtUzN':function(_0x1f25ea,_0x2110eb){return _0x1f25ea*_0x2110eb;},'YXiyf':function(_0x2070f3,_0x40adbe){return _0x2070f3*_0x40adbe;},'cgBdj':function(_0x5fdb55,_0x6559b4){return _0x5fdb55*_0x6559b4;},'VLZpv':'dDjhr','cWBeB':function(_0x2d959f,_0x3884c8){return _0x2d959f!=_0x3884c8;},'ZyIuj':_0x22563c(0x236,'t&@T'),'MtweC':function(_0x29c3ee,_0x5938c7){return _0x29c3ee!=_0x5938c7;},'ZcAvf':function(_0x4e51f4,_0x5f0b55){return _0x4e51f4<_0x5f0b55;},'vEKAu':'dhCk','fjxnR':function(_0x41806b,_0xcf0858){return _0x41806b!==_0xcf0858;},'COppq':'RZvLB','gErNV':'FTkxd'};_0x4bc765[_0x22563c(0x2a4,'VGtt')](log,'🔔\x20当前环境：Node,当前时间：'+new Date(_0x4bc765[_0x22563c(0x2b4,'7H!&')](new Date()['getTime']()+_0x4bc765['xtUzN'](new Date()[_0x22563c(0x374,'*NS@')]()*0x3c,0x3e8),_0x4bc765['YXiyf'](_0x4bc765[_0x22563c(0x343,'DpXQ')](0x8,0x3c)*0x3c,0x3e8)))[_0x22563c(0x263,'Aukz')]());if(scriptUa){if('dDjhr'===_0x4bc765[_0x22563c(0x2ef,'Aukz')]){if(scriptUa[_0x22563c(0x1aa,'v7xo')]('@')!=-0x1)scriptUa[_0x22563c(0x206,'s%Ov')]('@')['forEach'](_0x54ef72=>{const _0x45aa4a=_0x22563c;scriptUaArr[_0x45aa4a(0x1d2,'R&si')](_0x54ef72);});else scriptUa['indexOf']('\x0a')!=-0x1?scriptUa[_0x22563c(0x27f,'duH8')]('\x0a')[_0x22563c(0x2bf,'WHgc')](_0x1a65b6=>{const _0x3c3967=_0x22563c;scriptUaArr[_0x3c3967(0x21c,'dA3e')](_0x1a65b6);}):scriptUaArr['push'](scriptUa);}else{if(_0x4bc765['Yxkmo'](_0x1b7479[_0x22563c(0x28b,'l6ki')](_0x47f948),-0x1)){_0x1197fb=_0x4bc765[_0x22563c(0x35b,'&Gvb')](_0x4bc765[_0x22563c(0x256,'*927')](_0x3fa569,'@'),_0x2814e0),_0x5c14bf[_0x22563c(0x235,'DpXQ')](_0x4a1a7a,_0x3cd0ab);let _0x2107d7=_0x40b209['split']('@');_0x255d5b[_0x22563c(0x2cc,'m8op')](_0x4bc765[_0x22563c(0x19f,'t&@T')]('【'+_0x48aae7['name']+'】',_0x22563c(0x36f,'0kh@')+_0x2107d7[_0x22563c(0x2df,'wUxL')]+_0x22563c(0x2e8,'(I7o')+_0x48f1c8+_0x22563c(0x37a,'$J1G')));}}}var _0x3fd179=[];if(scriptCk){if(_0x4bc765['cWBeB'](scriptCk[_0x22563c(0x35f,'emaf')]('@'),-0x1))scriptCk['split']('@')[_0x22563c(0x361,')DYj')](_0x281982=>{const _0x517d76=_0x22563c;if(_0x4bc765[_0x517d76(0x2d9,'duH8')](_0x4bc765[_0x517d76(0x2c5,'O32N')],'wfwzr')){_0x7ecb01=_0x1ca8c9+'@'+_0xdb6f1a,_0x2d0e16[_0x517d76(0x247,'s%Ov')](_0x131b6f,_0x2e0d14);let _0x42d63b=_0x21aafe[_0x517d76(0x193,'O32N')]('@');_0x4a18f5['msg']('【'+_0x33d5cb['name']+'】'+(_0x517d76(0x341,'t&@T')+_0x42d63b[_0x517d76(0x292,'(I7o')]+_0x517d76(0x1a9,'m8op')+_0x4dbfd0+_0x517d76(0x2ee,'wUxL')));}else _0x3fd179[_0x517d76(0x2c9,'8YRf')](_0x281982);});else _0x4bc765[_0x22563c(0x217,'t&@T')](scriptCk['indexOf']('\x0a'),-0x1)?scriptCk[_0x22563c(0x2f1,'TNgY')]('\x0a')[_0x22563c(0x1b0,'gq!]')](_0x432bc1=>{const _0x18a71c=_0x22563c;_0x3fd179[_0x18a71c(0x306,'WHgc')](_0x432bc1);}):_0x3fd179['push'](scriptCk);}else{if(_0x22563c(0x2b9,'8YRf')!==_0x4bc765[_0x22563c(0x20d,'y*oS')]){_0x4bc765[_0x22563c(0x2a4,'VGtt')](log,_0x22563c(0x2ab,'CDk!')+$[_0x22563c(0x1cb,'c!63')]+_0x22563c(0x1cf,'*927')+scriptVarName);return;}else _0x11fe2c[_0x22563c(0x2ac,'l&kT')]('@')['forEach'](_0x43306e=>{const _0xfeff66=_0x22563c;_0x48e012[_0xfeff66(0x350,'c!63')](_0x43306e);});}let _0xa3aa1c=[];if(scriptDhCk){if(_0x4bc765[_0x22563c(0x29c,'1mAb')](scriptDhCk['indexOf']('@'),-0x1))scriptDhCk[_0x22563c(0x31b,'l6ki')]('@')[_0x22563c(0x213,'O32N')](_0x46255c=>{const _0x57ca95=_0x22563c;_0xa3aa1c[_0x57ca95(0x337,'OPCK')](_0x46255c);});else _0x4bc765[_0x22563c(0x31e,'duH8')](scriptDhCk['indexOf']('\x0a'),-0x1)?scriptDhCk[_0x22563c(0x33a,'gq!]')]('\x0a')[_0x22563c(0x1fa,'s%Ov')](_0x5bf3db=>{const _0x3bf5c0=_0x22563c;_0xa3aa1c[_0x3bf5c0(0x2c9,'8YRf')](_0x5bf3db);}):_0xa3aa1c[_0x22563c(0x2f2,'gq!]')](scriptDhCk);}for(let _0x582ed5=0x0;_0x4bc765[_0x22563c(0x26b,'TNgY')](_0x582ed5,_0x3fd179[_0x22563c(0x231,'0XGL')]);_0x582ed5++){let _0x25969c=_0x4bc765[_0x22563c(0x27e,'*NS@')](_0x582ed5,0x1),_0x501ed3=scriptUaArr[_0x22563c(0x31f,'64tv')](_0x582ed5)?scriptUaArr[_0x582ed5]:scriptUa,_0x4456d4=new Object();_0x4456d4[_0x22563c(0x20e,'[TX*')]=_0x25969c,_0x4456d4[_0x4bc765['vEKAu']]=_0xa3aa1c[_0x22563c(0x1c5,'duH8')](_0x582ed5)?_0xa3aa1c[_0x582ed5]:_0xa3aa1c[0x0],_0x4456d4['ua']=_0x501ed3,_0x4456d4['ck']=_0x3fd179[_0x582ed5],scriptCkArr[_0x22563c(0x24f,'0XGL')](_0x4456d4);}scriptCkArr=shuffle(scriptCkArr);for(let _0x3ada90 of scriptCkArr){_0x4bc765[_0x22563c(0x202,'emaf')](_0x4bc765[_0x22563c(0x21b,'64tv')],_0x4bc765[_0x22563c(0x272,'oUQu')])?userList[_0x22563c(0x275,'VGtt')](new userInfo(_0x3ada90)):_0x13a043[_0x22563c(0x27b,'DpXQ')](_0x4bc765[_0x22563c(0x267,'j8bi')](_0x4bc765['JQKpB'](_0x4bc765['IiTCp'](_0x53f3f8,_0x1315c6),'='),_0x2228fc(_0x5cc738[_0x18a6d0])));}return console['log'](_0x22563c(0x1ad,'wUxL')+scriptCkArr['length']+'个账号'),!![];}function shuffle(_0x59b63c){const _0x1c8a91=_0x270b84,_0xadc4ff={'YMCmK':function(_0x4caf70,_0x233c9d){return _0x4caf70*_0x233c9d;}};var _0x44d3e5=_0x59b63c[_0x1c8a91(0x24d,'TVg6')],_0x2529b9,_0xba08b6;while(_0x44d3e5){_0x2529b9=Math[_0x1c8a91(0x233,'utWH')](_0xadc4ff[_0x1c8a91(0x36e,'y*oS')](Math[_0x1c8a91(0x1b8,'bf%r')](),_0x44d3e5--)),_0xba08b6=_0x59b63c[_0x2529b9],_0x59b63c[_0x2529b9]=_0x59b63c[_0x44d3e5],_0x59b63c[_0x44d3e5]=_0xba08b6;}return _0x59b63c;}function addNotifyStr(_0xb880f9,_0x4c9135=![],_0x5e6d69=!![]){const _0x312941=_0x270b84,_0x1aca6a={'ghOMx':function(_0x4d2863,_0x47a89a){return _0x4d2863(_0x47a89a);},'Giaaf':function(_0x4945ac,_0x530b95){return _0x4945ac!==_0x530b95;},'gPJgV':_0x312941(0x2f5,'l6ki')};_0x5e6d69&&log(_0xb880f9+'\x0a'),scriptMsg+=_0xb880f9+'\x0a',_0x4c9135&&(_0x1aca6a[_0x312941(0x329,'A%pt')](_0x312941(0x190,'OPCK'),_0x1aca6a[_0x312941(0x322,'A%pt')])?scriptSpecialMsg+=_0xb880f9+'\x0a':_0x1aca6a[_0x312941(0x249,'(I7o')](_0x43dc11,_0x46e0d4));}async function SendMsg(_0x575657){const _0x340052=_0x270b84,_0xb5ed02={'ojfyf':function(_0x809271,_0xf7e99a){return _0x809271(_0xf7e99a);},'WUNnT':function(_0x685c35,_0x5253ef,_0x440530,_0x437deb){return _0x685c35(_0x5253ef,_0x440530,_0x437deb);},'FcsSU':_0x340052(0x2ea,')DYj'),'zzIND':_0x340052(0x278,'dA3e'),'UOaPO':function(_0x27f380,_0x3e3359){return _0x27f380>_0x3e3359;},'eTmfm':function(_0x4f4314,_0x1a435c){return _0x4f4314===_0x1a435c;},'WRZJv':_0x340052(0x1ef,'Aukz'),'NbRvI':_0x340052(0x29a,'WHgc'),'YQugl':'HYJKS','XCElr':_0x340052(0x293,'emaf')};if(!_0x575657)return;if(_0xb5ed02[_0x340052(0x260,'$$AQ')](Notify,0x0)){if(_0xb5ed02[_0x340052(0x219,'l&kT')]('JGQio',_0xb5ed02['WRZJv'])){let _0x24f62d=_0xb5ed02[_0x340052(0x250,'oUQu')](_0xc34864,_0x3c078e)-_0xb5ed02['ojfyf'](_0x243816,_0x13bb7e);_0xb5ed02[_0x340052(0x2aa,')DYj')](_0x5a5236,''+_0x9c22e6+_0x5ca5f1['response'][_0x340052(0x1b9,'[TX*')][_0x340052(0x245,'HMZU')][_0x2ef9fc][_0xb5ed02[_0x340052(0x305,'O32N')]][_0xb5ed02[_0x340052(0x209,'TNgY')]]+':'+_0x4f8447+_0x340052(0x357,'A%pt')+_0x24f62d,![],!![]);}else{if($[_0x340052(0x1ff,'DpXQ')]()){var _0x403333=_0xb5ed02[_0x340052(0x2be,'c!63')](require,_0xb5ed02[_0x340052(0x18b,'zN4x')]);await _0x403333[_0x340052(0x1a4,'xEre')]($[_0x340052(0x2b0,'dA3e')],_0x575657);}else $[_0x340052(0x298,'qIDW')](_0x575657);}}else _0xb5ed02[_0x340052(0x354,'*NS@')]!==_0xb5ed02[_0x340052(0x1f9,'v7xo')]?_0xb5ed02[_0x340052(0x1c1,'$J1G')](log,_0x575657):_0x510f9f+=_0x3556e0+'\x0a';}async function SendSpecialMsg(_0x3aa6d2){const _0x779678=_0x270b84,_0x2b2875={'ueXWj':function(_0x4136c2,_0x33c0c9){return _0x4136c2+_0x33c0c9;},'dPeiq':function(_0x5912bd,_0x3980ef){return _0x5912bd/_0x3980ef;},'shTzf':function(_0x43fad3,_0x415f90){return _0x43fad3-_0x415f90;},'XEDMC':function(_0x47d641,_0x4a517c){return _0x47d641+_0x4a517c;},'qhMyK':function(_0x27f063,_0x3de35d){return _0x27f063==_0x3de35d;},'TlGCr':function(_0x5a1e8f,_0x28ef26){return _0x5a1e8f>_0x28ef26;},'ZlLUH':function(_0x1d2f6d,_0x27e660){return _0x1d2f6d!==_0x27e660;},'nxUkm':_0x779678(0x332,'HMZU'),'pBmBB':_0x779678(0x372,'DpXQ'),'DnXFz':function(_0x52f3ca,_0x11dab7){return _0x52f3ca(_0x11dab7);}};if(!_0x3aa6d2)return;if(_0x2b2875[_0x779678(0x2f8,'wUxL')](specialNotify,0x0)){if($[_0x779678(0x368,'duH8')]()){if(_0x2b2875[_0x779678(0x1b5,'j8bi')](_0x2b2875[_0x779678(0x191,'l&kT')],_0x779678(0x2bd,'(I7o'))){const _0x9aa773=_0x322972?new _0x386820(_0x2e71de):new _0x45a6d6();let _0x2fa6c6={'M+':_0x2b2875[_0x779678(0x1be,'t&@T')](_0x9aa773[_0x779678(0x237,'$$AQ')](),0x1),'d+':_0x9aa773['getDate'](),'H+':_0x9aa773['getHours'](),'m+':_0x9aa773[_0x779678(0x265,'bf%r')](),'s+':_0x9aa773[_0x779678(0x25d,'qIDW')](),'q+':_0x34c91d['floor'](_0x2b2875[_0x779678(0x345,'CDk!')](_0x9aa773[_0x779678(0x2ca,'64tv')]()+0x3,0x3)),'S':_0x9aa773[_0x779678(0x2d8,'duH8')]()};if(/(y+)/[_0x779678(0x342,'TVg6')](_0x5cc891))_0x1d88a4=_0x7f346e['replace'](_0x4f2f66['$1'],_0x2b2875[_0x779678(0x21e,')DYj')](_0x9aa773[_0x779678(0x375,'*927')](),'')[_0x779678(0x288,'y*oS')](_0x2b2875['shTzf'](0x4,_0x2ba27f['$1']['length'])));for(let _0x5089a5 in _0x2fa6c6)if(new _0x4b30bd(_0x2b2875[_0x779678(0x36c,'y*oS')]('(',_0x5089a5)+')')['test'](_0x23f337))_0x334cb0=_0x48e019['replace'](_0x4278a2['$1'],_0x2b2875[_0x779678(0x22e,'R&si')](_0x5c6305['$1']['length'],0x1)?_0x2fa6c6[_0x5089a5]:_0x2b2875['XEDMC']('00',_0x2fa6c6[_0x5089a5])[_0x779678(0x362,'qIDW')]((''+_0x2fa6c6[_0x5089a5])[_0x779678(0x2d2,'m8op')]));return _0x3ee2af;}else{var _0x288daa=require(_0x2b2875[_0x779678(0x2c0,'&Gvb')]);await _0x288daa['sendSpecialNotify']($[_0x779678(0x223,'duH8')],_0x3aa6d2);}}else $[_0x779678(0x2d0,'c!63')](_0x3aa6d2);}else _0x2b2875[_0x779678(0x1eb,'duH8')](log,_0x3aa6d2);}function randomInt(_0x590252,_0xc136f2){const _0x30d4ca=_0x270b84,_0x3d5f98={'mbDWb':function(_0x447197,_0xca5ec8){return _0x447197+_0xca5ec8;},'Ralvw':function(_0x22a479,_0x36866c){return _0x22a479*_0x36866c;}};return Math[_0x30d4ca(0x23a,'dA3e')](_0x3d5f98[_0x30d4ca(0x2a1,'VGtt')](_0x3d5f98[_0x30d4ca(0x2c2,'VGtt')](Math['random'](),_0xc136f2-_0x590252),_0x590252));}function timestampMs(){const _0x51c598=_0x270b84;return new Date()[_0x51c598(0x1af,'zN4x')]();}function timestampS(){const _0x4408f3=_0x270b84,_0x59303f={'xjraa':function(_0x15f270,_0x4a5adf){return _0x15f270/_0x4a5adf;}};return _0x59303f[_0x4408f3(0x346,'l&kT')](Date[_0x4408f3(0x33b,'&Gvb')](new Date()),0x3e8);}function _0x4a98(){const _0x186bc9=(function(){return[_0xodg,'NTxjBsxEjgiYqaemqi.xcoAOdmnup.GFvu7eENqE==','mmo3i8oxyqRcTSknrCoGW5NdJmoBjXm','h8oxiSo1sq','W63cPZ0cW61+W7yKWRCmlbTzW6u','zcCeW7FcLG','mwJdVWtcRmooo0tcSW','4P+spUwKN+s6MoApV+wpOUATVUAEPUAUS+ISNoEQQUwoUUwjM+MAI+IfToAFSoAuKUs4Ha','tv3cN8ka','FCokn8kjWQP/','dxbxhv8','WRz5WRK','WPJdMqbsW6S','WORdHCkcza','WPRdGCkfCq','W4hcJxigWQxcQSkXymogxYr0','W7j4W4NdIYxcHx3cN8k0WRa','WPxcMCk6WRD3WP3dOba','5lQAqSozoSop5OIc5yQLW7FdOa','W7uZW6SXcLWPWOxcLCowbcPmyYxcISkzAmoaWPddSSktCCkdW7P6WRZcJY9yW6ekvW','W7nNW7z6W6iCW73dGq','566k5yQe5B2b5BIj4P+D','xNBdO3m2','W4KRW64sWP0','mCkd5lMu55Eg6kYP6iE96kkY5yEQ6zsq6yEw5yE5W6m','WQldUbLbW6C','k8owW6Om','CuWQgey','WObuW6xdOa','WP3dVrbgW7a','WO5xzIXbACoj','WRRdGmkXu8kx','W57cQHhcSMBcNgC','56YE5yM+5AwJ5yMd56wn5yQ8772n','rCodhSkTWQW','W4KRWQ7cPrLnxSkvW5JcHW','at5fWPVdHG','d8obW5u/CmkUWQGQ','W4VdImkXW6VcLCoDW5a','u2ZdSY3cTq','WPr/W44MW6i','a8oGWPf2WP9xW6WlWRTPoSo1WPBdPW','bmolW4y','WQhcHaldVKW','t1NcS8keW6y','cG3dKmkCzW','nwBdMK4PW7VcOG','bh/dVJ7cLW','W7xcSZ0L','W7RdMmkLW5tcKW','zrWvW63cSq','W6eWW74Ed1y5WOtcMq','W4NdL8kxW6JcHW','WQu0WQaYDa','WRjCW7KFW7u','4P21772J6l+O57QB566P5yIM772k','WOLzW5hdOmk+','EHSXW77cLComgsm','iComCZCOW5O','ctBdRfBcJq','44oGrCoZW6RcPSkh44g3W6/OVihMMzVKVPlNMlJLHzhPGl3OTk/LJk7MLilNUjxdOe0u','qfVcUmkoW6ZcR8kc','i1tdTYFcOW','WRJMNA/MRRRKUQBLI4lOJOJLV5/VV6S','w21OcMm','44kf57oM57MI6ykc556L44o3','44g9WQxdRCogyCoQ44gGWPtOVPZMM5FKVi3NMjFLHRFPGl/OT4RLJi7MLz7NUkvVb3a','W5T/W5JdSse','WOH0W6tdGmkE','WP3dLmkABmkR','WPvcW5ugW7K3za','gaBdQSozW7dcP8k1WQ8CW6K','gSoMimo/sW','WPNdOxWEWQJcK8ofW70rWO3dNmk4W4O5','r1TWoL5/cJ0','gdTsm8kn','WOVcKWRcG2G','b1tdH8kT','tZCnrrpcJmolW6WlDv8lra','mmo3i8oCFqRcTSk9u8oKW4G','8l6hKM7LVj7LI5FNJR/LOkxVVyZcIsrL5BY65yMG5PwQ6zAp7769','oWNcGmoZuCkj','WOVcMCkNWQbSWPS','WQVcQIhcHvG','W7tdGSk7W67cMmosW5tdSgBdM8ozWRzNW7bCW6FcMCo5urWJW780WOpdMeHxWPFcJ8kdWOVcSCk1ff03hmk0W7xdP8oYaI5Qwf/cJSk2uYNcH8kWW6KMf2nUW6ulWQ/cQGCXW648WP/dSSkcxqjLWPHrWRldUujommoZlbnIWPDvhHRcTgVdVmkOk8ogW4KdtCk9WR9zyMpdG8oiza3cQwOwW5NdMvRcVSoawSobW4BcV8o2WQlcMN/dP8krd8oxf8keWPGdfxytt8kKWRrOWOmFW6tdUvBcTH3dICk8uSkqW7VcPvfIW7ZcN8kJWRJdSreAW5pcG05LoSo7C0qeWQpdQglcGfy','DSoGW5BdQCkY','77YM5PYq5PwE54MY5P+b5y6aWOOp','W5FcVWKNW6O','sKNKURtNLjNORlZOHBFOOBRLH53PLA3PHjhLHRNdPq','W4xcVKubW7K','l8o9WRXWWOS','kNNdRaNcP8oBiwxcR0u','EhpcT8k4W74','ix3dUq7cQG','WPddMY1u','bIRdKmkiBG','n8ooW5Ohaq','F8oTW6ldQq','FmoTW7pdSSkRW5q','cMfzpuxdMCkyW6u','WOnrW7RdOCkN','WQpdGCkMuYy','zYRcU8oLW4S','jWRdG1JcP8oXv8kbWRxdSHddPcVcNSo3WRBcIbpcOmkLpf8KtmoKWQzbWPhdGXy4wsddJ8oEW5GDWQddGHNcPCkPi8oreCoKCsBcUSkMW4tdICoAWRRdKWVdUSkcBmoYzCk7s8ojeSoncxhcVmk/hNddT2DPa8kHW70jW7VcMwD/W5CoW5GfW6WUb8kYW6zWf8klW7pdVmkkDt7dV20qySk5p8o9emk4WQJcIhrnW5xdGSkQFv7cOmk8omkKW5VdKSk+W4hdTCorWQNdS03cKCowzqedW4LWWP8rkejVo8kakmkTWPxcTCkfW7vCWQpdTfddR8oJWRzKWP5aW688zmk+jmkNsrizCG','a8oTWOXKWOi','FCo5W7/dPCkWW4S','WO9TW7JdPXvxCmkIW67cNW','W5ROJQNLJyVNRRK','W6aMW6GP','W7TAESkeWRS','ytOeW6BcRa','cwVdI8kQdG','WPJcNqhdIge','5lQ36lAT5y20','W6xdOmohWQhdOa','WQNcKJNcTe0','WRNcTalcSLi','W797W7bYW7yj','tL9Poq','xLDPnf4','WRBdJSkI','W7lcNCo5kSk2','WPyUWRSt','W4GpbmkfEwu','xLDWpuH5iJtcRW','oZBdJCk+AG','fwLskSkt','cCouW5eEDSkJWR02sImkWQpcOHddQCoUDbSug8ktWQjlzYfSbcjnCG','iCo3jCoPyqNcTa','W4dMN6/MRAhKUj/LIP/OJB/LVOBVVi0','WR/OJyJLJBJNRAu','W4ZcMgiGW6dcOCo7WPtdMKSXsGdcPmohWPpdHW','W54CmN4Fk8knW7PwDSoIW75Y','WRtdPSkHudq','nSoCrJSQ','W6tcTJ4KW74','W7hcOZ05','W59hfSoPWOhdICk3','oIJdISkTA2VdPmkegG','W7XMW7bAW6qnW7q','eZTxWOhdLSoi','W6ZdQmowWQ7dSq','aWXeh8kNyHGQWPdcJW','W7PTW5JdTINcGG','W4H8ACkgWQS','teFcRSkiW7VcHmkb','pSoHgCo1Bam','WO7cTcddNha','W4dcTtzLW6/cTmoAW4auWRtdIW','pCoCp8ottq','W41yW7NdLqm','oZNdImkOzg/dQa','W4XqW77dTqS','W4FOJyVLJj/NR6S','W6CZW7C0fW','j8oNjmoY','WRyss8kfWR9WqJiGqseB','W7ZdU8oZWRldSW','k11tgCkwifJdUSkrBSoCW4yYW4pdVCkUiW','WODjW4GVW6iYBgL2W7RdVq','h8oCW4bdECoXWROJehTCWRNcQvFcSCoJEbW','WRVdGCkNBZqOCrpcTCkIismhuG','W63cVbygW4i','W7jSW6n7W6aCW6/dVw4WWOa','cJZKU6pNLjlORjROHP3OO7ZLHzZPL4hPH53LHBab','W4axW4K5','W5vCBmkMWOy','W5vghCoNWPddOW','gmokWQXTWOe'].concat((function(){return['5lU5WOdcT0TJ5OMw5yQ+w8o6','nSogW7qghSkGtu3dKq','W6bCCmosW4v3W4ZcM8oLp8kXW7PnWPe','gCk2W7ZdIgC','WQnhut5H','77+R6kYl5Rkl77+D','WQBdVCkADCkY','xeBcUCkzW5VcGSkoWOivW7i','W7f8W4NdUq','wSo+W5tdOmk0','WO7cJYBdGM0','WO5KW6yBW78','mwZdOqtcTG','W75OW7z+','cdZdJa','emoOiSo2AG','W5jnW5H2W4y','W6f1W5JdTG','yqKnW6FcLq','xNJcI1q','W5u4W4maWQW','WOymrCo6bW','h8oRW7iJaG','W5ezd8kqqM9VoqlcGG','WRXVW5xdVc4','W4BcJNe','WOhdHYzdW57dU8kzACoTzG','Fe5QfvG','iSoHmSoOrWtcSmkbvCoX','FNNdOK0PW6lcNSo5WRar','W69yD8oiW4f8W67cQSo4kSkWW6fnWPS','hCokW4uxECkPWRiNrW','r1TUk1PQjG','pSoeytCcW5ZdSqyicIRdICkI','5lQ1W5/dJsldNEAjHEwkI8k7WPm','W6ftz8o4W4PwW7O','rfdcSCkjW7hcKSk3WO4rW6G','dmofW5ut','5ywG5OUr5yMP','txldMWtcGCo/W4C','WOPaDXXbCmoF','WPzoW6tdJCkYWOmo','WPLLW6GQW6u','W55gaSoPW5FdOSk0W6hdQZercmkEW4isBq','whyfWRJdQmo+eYJdOa','WOPFW5yaW7yZAr5WW7tdONCEWOW','uHioW5VcSG','WOxdQwi0WQZcICo0W6ioW4a','A8o5W6xdOa','aG5yeSk4EW','dGtdJva','W7vggSofWRy','WR7dHCk5qIy0Aau','w1dcRCkEW7hcK8kq','ct17WP3dHSoF','WO97W4xdGJa','oJNdM8k2yhJcSmkgaNmLtfvaW4pdHJvWW4VcOxRdRCkTW5at','WODjW4G8W6q7CNnHW77dQZaCW4G','rxRcIepcIW','kuPvimkmkG','c8o6WRnoWRS','mhNdVH3cRCohiuC','p8oZjmovFWJcISkwwCo1W5/dKCoboG','WQddLmkMss0HsaFcOW','W51xuCkvWQi','56Ar5yIg5P+E6k6w5OI75yII4P+4','W7voxW','W43dM8oYWQZdKq','WOG6WQuE','4PYbfEIhHUAFH+wnNUwgLUs7IEA1RUwoVoEyGUs4K+s8MoIMMEwUP+wlLUADM+ERRow5LE+/Gos5Q+EwS+s6K+A1L+ITSEwtIEwTP+s4K+EJHoEOJa','gMrrhua','W63cKIOiW4a','44oX77Y25P6w5Acc5yso5y6g6yEpea','W6FcJmowbCkQ','CKujkue','W63dVSoWWRm','WP3dSavzW4C','W5ZcJ8o4gSke','W65cf8oBWRe','y8okkmkBWRTKWOO','WOdcHSkGWRC0WPddVbGKW5avtmooWOS3ve/dKJVdLNanAh8','dSkUW6FdJ33dQa','odxdRmkkAa','W5ZdN8kZW6JcHG','CfK2hvntvq','nfpdI8kbkG','W5fdW418W4K','s3JdMMuo','56A05yQL5P286k6g5B255BUQ4P2i','qKrfe2m','tgHSl2S','WOe+WRWZvg/dJ8oQ','WOVdL8kxtCkE','WP3dHW1EW7xdVa','4P+zWQdNPO7MRlpNL7FKUBpLL5pKUPxNLzBPG6NVVRxKU4FOGypKVP3ORz7LHl7LKRZMSB7MGPxVVQpLHjVNOOtMG67VV7BLROdMLlhMG67LKkhMNPFML5ZMG6JVVB/OR77MO6FMJBNMGiNLHl3OHBZOOOdLIi7ML4O','WRBcTaFcHLi','caD1nCkI','ACokW4GYi8kgCG','tvTPfvrJnZe','W4WlgCkTEMnvlG7cHSkoWOxdNCkE','e8o8d8oCCG','W4Kpb8kaAh9wnqBcMa','pSonW60bcCkIDKdcNWVdTCkP','iNVdPuPkW7RcKSk9WRCyW7VdGmkDBalcLCorW4dcImk0p2pcJCkpWO7cMKuL','WPldJHLiW6G','FCkriNyrW5xdMrnrbtFdHSk8W5BcUH3cVCksiq','4P+oE+IhKUADL+AwVos7RoITIUwESEs7M+I/G+IUKEEwUUwqTCorW47LSlRMLjFLHONOH7xOO6VLI7/PMyu','WPlcJ8kSWRvxWPhdUra3W5y','hfJdU8k2gq','WQSQsSoybJT9','aWzrga','W4BcMhSwW6ZcVSonWOFdKKS','x2pcI0JcOHxdMKPpza','yX3cMmoNW7m','W5b+rSoXW4a','c8kUW7RdOxxdRHK','ECo+W4xdRmks','8ks0M8ko5lUd5yso5y2O542c5lIO','WQFdQYTjW7tdSSkxzmonEq','W50nW54KWOn3sq','W7foDSkpWRvX','W4ZcMgiHW7RcQCoSWQ3dH0aWBblcSq','oSoaDt0eW4BdJsytede','W5bdcSoIWQS','rfdcSCkjW7hcKSkTWOm','W6Pys8kqWR56FZG','W7XUW7pdTYtcGW','hSkXW6tdJwa','W5JdJ0pdO0PZdNGd','wfBcICkEW7i','Eeypp3y','W7RcJCoCkSksmxe','uIVcMConW4muwa','WPFdH2KyWOu','W49KW7tdRsO','bbddLa','WP3dKmkeBmkXz2nsnW','77+H6k+s5Rgb772s','W4RdJSkZW67cHmokW73cScdcGq','W4hdG8kFzSoYD3izl3iJW4OIW6ddUK7dSu/dGSoNWRWFtMJdQ8kjjuCVhSkGWPxdLmk3WQW1W79gWRu','jhpdVYJcO8okoG','WOn3W6BdICkf','W53dThBdLqBdUsDMm0dcKSkiFW','W5/cHSkFWQbwWOxdMW','WPLjW5/dSbG','WPhdHJfCW6ldVG','WOxcOX7dJ20','5Awz772J562i5yMg5AAb5yQN56A/5yMd77+5','WRldJ38HWQ4','utVcNSob','yvmObvTErCkbW7FdKgFdQmkbWPzy','W69SW5PiW68','fmouW7aicG','W67dRSoGWQNdSSoZWP5OmCkcwaNcVCoYmKtdOSo4amkxW6ddK8kcwH4','W65uBCo8W551W6u','jtNdLSkJCwq','oCoZoSo/','wLZcU8kfW53cJG','566T5yQq5B+w5BIy4PYp','WPjjW48zW7GWC1u','iJZdLuhcPG','WPrEW50hW6qxza0','hHPB','y0ZdGcZcHa','W7zSW6X4W7eg','WQPrW47dGq','WOBdHCkfsSkOBLPgixi2WPCMW7G','W6ZdO8ooWQldNa','vKZdVWBcNa'].concat((function(){return['i8objCovFq','eMvve1/dLq','WQtcOrldVxK','lZddL8kRDW','hw9uh0ldMa','W6TytmkeWRbGBq','WRzZW4ZdUaW','W4mphSkVyMnXna','rIVcMCoKW4SmvvZcLCkoWQfmW4lcUCoc','WPRdJIbgW63cI8opWQBdN0O','uYhcMmohW4y','bI3dVmkZza','xvZcSCkoW6FcLmkfWOOg','WORcMZRdRKC','xe/cPCk8W7m','cCkGW7ZdHq','eSodgSoqEq','yYhcQ8oQW5m','hY5Wp8ku','W6BcMCoLf3D1yW3cKSkFkam','W7RcKCoy','rfRcUmkEW7JcHCkx','gvldNSkW','hSkKW7ZdGhxdUra','DSoklCk6WRD6WPS','W5CkW7uCWPC','W5ayc8kmFKrHyq','p8ocW60f','u2NcL0pdGdRdVqjiDmojAgysd27cICk5dW','W7GMW7u6f1C','W7bVW4/dTtpcGq','dNviha','d8oMWP5+WOW','r1Xko3a','pCkVWQpcTSoPWPdcJIlcLXJdICohwW','dsRdMSkWvq','WQFdNCkXvmkM','wf9ZpfrG','WODQW4KzW6a','WQySWOZcQNBdKYtcTSk2WRSfWRf6','WQtcKcBcIw8','WQddG8kMstmYAq7cQCkM','W5BcMsy1W797W7m3','W4idW5q1WOb/','8yosRCk25P6b5AAU55MK6AcF55IH77+u5Q2w6lY85OIP56Ig','bYTbWQhdH8ozoaZdKCoI','W7ddRSoWWQJdTSoGW4y','zhlcI1pcJa','W7eLc8kYqG','psFdQvFcGG','p8oMi8oQE1ZdTCol','WOddMW9EW7ldUmkFACoDzJPpW5rG','cmkZW7RdH3VdQrq','fWPco8k+EcuXWOBcIa','nSoCFqeO','BZG3W77cJq','qM3dLNKQ','4PYbfEIhHUAFH+AuK+s4LUwLPUAFRUs5U+AhIoIHG+EHUEIMMEAjT+s8VUAxSUExLUEJRUIKR+AkUos9TEAuPoIaMEAlM+AkGa','C2r/hfO','wf8hb1q','i8o9g8o1AWFcTSkbzCoXW4JdISoBja','lCoJW7yRFG','WPLxv8oF562Z5yI95yMi56AZ5yMN5PYt6kYjW5FPMkBMN53LUBBOVQi','W5JcIwqDW6FcQ8o3WOJdJa','aYjCWOpdL8oFhGy','W4eeha','b8ojWOPjWRW','lSoUWRz0WRW','lmkJW5hdHMq','W5VcIguC','xMxdJG7cK8ocW4i','WPZdSZjSW6ldGa','vsFcMCofW4C','W6XKW4tdOw3cQ1/dNmk0WQDYWPHIy8oDWQRdNmoKpG','4P+QzoACGUs4H+wUH+s6J+s9JUIgI+ADLoMwHUMJJoAMPos6QoI1UUI0Io+8SownLoAiLUs8SEs7J+MBU+s4KUEvGos4OUs+QoIhJ+AFMUMuH+IUOowUJUIeL+EzNUs6Vos8HoAnMUwMT+AjGEApV+wTKq','W6His8ki','W6lcLCoTfhmpBI7cSmkBnG','ycBcRW','k35spCki','jmoIo8oZFa','zJuhW4lcLG','W6HSW7jZW6qnW7K','W6Xsu8kAWRW','CsxcVfVdTCkFzxhcMwlcTcldQa','77Yd6k2V5Rot776B','W6RcL8o4a8kl','ft1qWOddRCoypqFdLSoL','W6VcSYm','W6zOW5/dQZtcLa','WOtcGHJcPNi','WP9TW7ZdNrS','WOFdISksymkNt2W','W6OHo8ksqG','W49SW7ddKWi','W7bnCCoFW7O','WR9sW7hdVmkX','WPD7W7ddTZ9hu8kJWRa','WPddPdz5W4C','W5WhW5q2WPT6','W7naemo2WO8','W4BcKNibW6xcQCoT','dsfrWOFdJSoFja','xg7dJa','qJZcImonW4SusG','dt1s','WRjeW5ddNsi','WQVdQt0OW7r0W6G5WQWvlXa','pSonW68','mCoYvJWJ','W7VdVSk0W4NcPq','kN3dVIlcTCohaLdcPuhcKZldK8o4','AL01pKvEymkCW63dK0hdTCkaWOe','W6hcL8oMf3vWfZJcRSk8ecqJ','W4BcN1iJW6S','WP/cTZlcJvdcR3HXbG','W4BcRa8VW4i','W6lcLei3W7K','W4/dO8kdW7BcUq','vNddNWtcM8os','WOxdLXzeW7C','dMfjb04','W5Hgf8o7WPG','W41CW4XXW5e','zXVJGR4','WPpcHX/dGhq','8j+0QgBLVklLIB/OHkRMNjZNIQBMNQ7LJzqEWQC','W5ZcNCo+pSkZ','W47cRN0YW6S','tY/cGmom','W7JcMSoAlCkCixu','WR/dK8k7Dmkf','dsNdMftcHG','xxDLheG','W6D4W47dQc/cIghcLa','W6v2gSo0WPZdRCksW6C','gSogwa4w','oSoezXywW5RdRGqteYddLCkLW4O','kSoOW7C3Ca','W50rWOfu56+P5yMUioMAV+ACQEw5REI9Ka','xmoGnCkCWQK','z8osW5BdMCkX','W6eKW5ecWOu','WOKXWQ4cxq','W6pcQtWiW7TZW44','WQpdOSk5yGe','o8o9ma','W7NcNhOcW74','WOtcKmkGWRzTWPBdMHe','WQpcGaxcGuq','expdQaBcGW','WO3cIZRcRL8','WPLwW5NdOCk8','culdVmkHna','gmorW5iA','WPBdPxSCWRdcK8oHW6C','bCkUW7VdKa','W7lcJmoj','BXS2W6RcM8owcW','W5hdJmkYW4JcG8oqW6xcRtZcHCkmW6q7W6a','W4xcJSoJaSk/','WOSOWQ8','56wl5yMS5P6p6kYa5As86lsO4P2j','W7pcMSoalSkjpq','WPJcQJdcLW','E2JdIuCW','s2/dJWtcLG','hmomW4qC','W4ihW4KHWOb8sCkO'];}()));}()));}());_0x4a98=function(){return _0x186bc9;};return _0x4a98();};var version_ = 'jsjiami.com.v7';
/**
 * 加密
 * @param inputString
 * @returns {*}
 */
function md5(inputString) {
    var hc = "0123456789abcdef";

    function rh(n) {
        var j, s = "";
        for (j = 0; j <= 3; j++) s += hc.charAt((n >> (j * 8 + 4)) & 0x0F) + hc.charAt((n >> (j * 8)) & 0x0F);
        return s;
    }

    function ad(x, y) {
        var l = (x & 0xFFFF) + (y & 0xFFFF);
        var m = (x >> 16) + (y >> 16) + (l >> 16);
        return (m << 16) | (l & 0xFFFF);
    }

    function rl(n, c) {
        return (n << c) | (n >>> (32 - c));
    }

    function cm(q, a, b, x, s, t) {
        return ad(rl(ad(ad(a, q), ad(x, t)), s), b);
    }

    function ff(a, b, c, d, x, s, t) {
        return cm((b & c) | ((~b) & d), a, b, x, s, t);
    }

    function gg(a, b, c, d, x, s, t) {
        return cm((b & d) | (c & (~d)), a, b, x, s, t);
    }

    function hh(a, b, c, d, x, s, t) {
        return cm(b ^ c ^ d, a, b, x, s, t);
    }

    function ii(a, b, c, d, x, s, t) {
        return cm(c ^ (b | (~d)), a, b, x, s, t);
    }

    function sb(x) {
        var i;
        var nblk = ((x.length + 8) >> 6) + 1;
        var blks = new Array(nblk * 16);
        for (i = 0; i < nblk * 16; i++) blks[i] = 0;
        for (i = 0; i < x.length; i++) blks[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
        blks[i >> 2] |= 0x80 << ((i % 4) * 8);
        blks[nblk * 16 - 2] = x.length * 8;
        return blks;
    }

    var i, x = sb(inputString), a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, olda, oldb, oldc, oldd;
    for (i = 0; i < x.length; i += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d;
        a = ff(a, b, c, d, x[i + 0], 7, -680876936);
        d = ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = ff(c, d, a, b, x[i + 10], 17, -42063);
        b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = gg(b, c, d, a, x[i + 0], 20, -373897302);
        a = gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = hh(a, b, c, d, x[i + 5], 4, -378558);
        d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = hh(d, a, b, c, x[i + 0], 11, -358537222);
        c = hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = ii(a, b, c, d, x[i + 0], 6, -198630844);
        d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = ad(a, olda);
        b = ad(b, oldb);
        c = ad(c, oldc);
        d = ad(d, oldd);
    }
    return rh(a) + rh(b) + rh(c) + rh(d);
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