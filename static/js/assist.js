// JavaScript Document

window.SITEINI={
	"sid":{"aversion":"","mversion":"","bhelp":"","ohelp":"","wurl":""}
	
	};

function addListenerwza(target, evt, func) {
		  if(window.attachEvent) target.attachEvent('on' + evt, func);
		  else if(window.addEventListener) target.addEventListener(evt, func, false);  	
}
function openWza(node,iskey,isblind,ispack){

	
	if(!iskey&&node){
		var pn=node;var hasAccLink=false;
		var i=0;
		while(pn&&pn.tagName!="BODY"){
			i++;
			if(i>3) break;
			if(pn.id&&pn.id=="cniil_wza") {hasAccLink=true;break;}
			pn=pn.parentNode;
		}
		if(!hasAccLink) return false;
	}
	if(iskey&&!node) node=document.body;
	var d=node.ownerDocument==document?document:top.document;
	var scriptNode=d.getElementById("cniil_assist");
	if(scriptNode) {
		if(window.openWzaSetting&&typeof(window.openWzaSetting)=="function") window.openWzaSetting();
		return true;
	}
	scriptNode=d.createElement("script");
	scriptNode.type="text/javascript";
	scriptNode.id="cniil_assist";
	scriptNode.defer=true;
	scriptNode.async=true;
	var isRead=getAccCookie("read");
	var bindPara=(isblind?"blind=2":"blind=1")+(isRead===undefined&!isblind?"&snd=1":"");
	var splitor=window.setupWzaPath.indexOf("?")==-1?"?":"&";
	var keyParam=iskey?"&key=1":"";
	var packParam=ispack?"&pck=1":"";
	window.setupWzaPath=window.setupWzaPath.replace(/blind=\d{1,}/ig,"");
	window.setupWzaPath+=splitor+bindPara+keyParam+packParam;
	scriptNode.src=window.setupWzaPath;
	d.body.appendChild(scriptNode);
	console.log(window.wzasid+"rrr");
	
}
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
function getAccVal(key,reg){
	var match=reg.exec(window.setupWzaPath);
	if(!match) match=reg.exec(location.href);
	if(match) 
	{
		return match[1];
	}
}
function getAccCookie(key) {
		key="acc"+key;
		var result = key ? undefined : {};
		var cookies = document.cookie ? document.cookie.split('; ') : [];
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decodeURIComponent(parts.shift());
			var cookie = parts.join('=');
			if (key && key === name) {
				result = cookie;
				break;
			}
		}
		result=result&&!/[^\d]/.test(result)?parseInt(result):result;//������ת������ֵ��
		return result;
}


function loadAria(appid){
	var AriaNode = document.createElement("script");
    AriaNode.setAttribute("type", "text/javascript");
	AriaNode.setAttribute("charshset", "utf-8");
	AriaNode.src="//wza.beijing.gov.cn/dist/aria.js?appid="+appid;
	document.body.appendChild(AriaNode);
}

function cniil_setup(){
	var ismob=function(){
			 var arrs=['iphone','android'];
			 var info=navigator.userAgent.toLowerCase();
			 for(var i=0; i<arrs.length; i++){
				 var result=info.indexOf(arrs[i]);
				 if(result > -1)return true;
			 }
			 return false;
	};
	if(/cniil/i.test(navigator.userAgent)) return;//
	var path="";
	for(var i=0;i<document.scripts.length;i++){if(document.scripts[i].src&&/assist\.js/i.test(document.scripts[i].src)) {path=document.scripts[i].src;break;}}
	if(path.indexOf("://")==-1){var n=document.createElement("a");n.href=src;path=n.href;n=null;}
	var mobFlag=ismob()?"m":"a";
	//if(!/mob=1/.test(path)&&mobFlag=="m") return;
	if(!path) return;
	mobFlag=mobFlag+(/lang=en/.test(path)?"e":(/lang=big5/.test(path)?"b":""));
	
	var siteMatch=/[\?&]sid\s*=\s*(\d{1,})/i.exec(path);
	if(!siteMatch)siteMatch=/[\?&]sid\s*=\s*(\d{1,})/i.exec(top.location.href);
	var siteId=siteMatch?siteMatch[1]:"";
	var jsVersion=siteId&&window.SITEINI[siteId]&&window.SITEINI[siteId][mobFlag+"version"]?window.SITEINI[siteId][mobFlag+"version"]:"";
	var period=mobFlag=='m'?1:100000000;
	var wurl=siteId&&window.SITEINI[siteId]&&window.SITEINI[siteId]["wurl"]?window.SITEINI[siteId]["wurl"]:"";
	if(wurl) path=wurl;
	
	path=path.replace(/assist\.js/i,"assist"+mobFlag+jsVersion+".js");
	path=path+(path.indexOf("?")==-1?"?v=":"&v=")+Math.round((new Date()).getTime()/period);
	window.setupWzaPath=path;
	window.wzasid=siteId;
	if(document.body){
		//����sid�����°汾
		switch (window.wzasid) {
		case "1352":
			if(window.location.host=="banshi.beijing.gov.cn"){loadAria("57e8b90db54af0fbcef031a9529244a8");}else{loadAria("364831ca4967b33c2dc7bae52178a683");}
			break;
		case "1670":
				if(window.location.host=="fgw.beijing.gov.cn"){loadAria("3a71f32317a2aba855f343b87d7d9610");}
				else{loadAria("d0bcea369740e77c3cd01f712f73dcba");}
				
			break; 
		case "9770":
				loadAria("58603b06382c65e5801cbef7823087eb");
			break;
		case "82699":
				loadAria("2eca49e3f5bb3cf0668dc54ae2b85006");
			break;
		case "1401":
			if(window.location.host=="zscqj.beijing.gov.cn"){loadAria("1ab8c6e0e83168583e2b387f5df1adb9");}
				else if(window.location.host=="nyncj.beijing.gov.cn"){loadAria("cae96565e32bcfd890a32356000704a3");}
				else if(window.location.host=="sfj.beijing.gov.cn"){loadAria("a3ca8c858edb915f932f27b5854faa3f");}
			break;
		case "1760":
				loadAria("cea78fac1f4efb3393b3a0bb98d42f2a");
			break;
		case "1411":
				loadAria("8756c3e1351d8ceef52224e9e8698ed6");
			break;
		case "54530":
				loadAria("0a271e0d4802dca015eac279c5e6eb80");
			break;
		case "82452":
				loadAria("e1dbe78721e6e218492035f6e6085e26");
			break;
		case "82449":
				loadAria("da322e58f5160c8caf0bb363439ff7d9");
			break;
		case "82448":
				loadAria("8b7925ff4341969afff7c40b50c9ad60");
			break;
		case "82444":
				loadAria("80125062a7e3bf45e4f0bc3926a7ad83");
			break;
		case "82704":
				loadAria("bfd30231454f33bfe0357e22e0e2b93e");
			break;
		case "51591":
				loadAria("c05b3e7204d7258017accdf729e611ab");
			break;
		case "82440":
				loadAria("a5d5654c47f06bf76fb837d0d3817faa");
			break;
		case "82441":
				loadAria("fdf1da8bdda24b0473729929d637c63d");
			break;

		case "48326":
				loadAria("3a090a30aca67e4561c5567a4367b7f1");
			break;

		case "82451":
				loadAria("3a090a30aca67e4561c5567a4367b7f1");
			break;

		case "82443":
				loadAria("cd333d23e6992000126e146192c5fedb");
			break;

		case "15681":
				loadAria("09bcbd665dd4d31eb79b909e4a5641b3");
			break;

		case "82458":
				loadAria("c86c39f625da265fd0892d0aae240c95");
			break;

		case "82459":
				loadAria("48399cf81d5c2f984483001893254e07");
			break;

		case "48007":
				loadAria("56f64c1f08cc6aae5d20de39ebb5fa15");
			break;

		case "68127":
			if(window.location.host=="tamgw.beijing.gov.cn"){loadAria("60ffaaff84f75f79d7d78e403e460157");}else{loadAria("6bee6469c3df848ee88bb9907c95fe28");}
			break;

		case "62311":
				loadAria("04ec53cf5cade4156972fd532b200d8d");
			break;

		case "1737":
				loadAria("59edaa5022cec602b87355b17927a817");
			break;

		case "1926":
				loadAria("ca526527cb0fda6b6a35634c5016a0b8");
			break;
		case "1787":
				loadAria("d22dd1b52f1e91545615822831c2309b");
			break;
		case "59910":
				loadAria("dec1603a5744574824e93187f6f8fcc7");
			break;
		case "1763":
				loadAria("a986ac832c7af75fb0b4bad87f877e53");
			break;
		case "1746":
				loadAria("44f8f86bd845111f83da1782c63110f6");
			break;
		case "1902":
				loadAria("0fb66653b7b121ef25e21157c020dbd5");
			break;
		case "1793":
				loadAria("33cbbdee891470c277d789f84272b075");
			break;
		case "1729":
				loadAria("acb0e7dee119f67140b79290a3eb6d70");
			break;
		case "1743":
				loadAria("e0175326a68f81a599be62ec50aebcae");
			break;
		case "1387":
				loadAria("084792b7cdfb899753d2e679f64c5c81");
			break;
		case "50914":
				loadAria("426f959035166e637cfe41448dad7171");
			break;
		case "1724":
				loadAria("ab0bffcab72314f8ed1b4ccc7f067fe8");
			break;
		case "59488":
				loadAria("807ca861693173701568e979ec416311");
			break;
		case "1562":
				loadAria("c8d66e414fe3a623b15ece73bd477f98");
			break;
		case "1505":
				loadAria("743baa1430b6ac5f4bd35303f17ea8c5");
			break;
		case "1890":
				loadAria("7f917975b6f5c6f494df182f94304d80");
			break;
		case "1473":
				loadAria("5ffd33679d8d3a4774b5e63bf62958a5");
			break;
		case "68127":
				loadAria("6bee6469c3df848ee88bb9907c95fe28");
			break;
		case "1411":
				loadAria("222fa689e052541fc9e40aea5c920c8b");
			break;
		case "14448":
				loadAria("9e3770cc0e931b694a8c9a96da598e9d");
			break;
		case "59487":
				loadAria("182996ff6189896c2875b57225c94a04");
			break;
		case "1369":
				loadAria("43dc6661dd1f2c3c1f4f2b3f5f31c386");
			break;
		case "1364":
				loadAria("934034432a5a90290cd889c9086e0764");
			break;
                                case "9757":
				loadAria("7d1cee34b154fdbdf421a48bf8d088a5");
			break;
		case "1766":
				loadAria("37dba24c8a2c3562d82070357d5899a3");
		break;
 		case "51574":
				loadAria("c9f6af032ea83b76db65aca2a16d2456");
		break;
		case "1971":
				loadAria("42cffaf54ef75146ff7459b80a32ea01");
		break;
		case "59497":
				loadAria("f3277c0fffe1981728427d8bbed26bbe");
		break;
		case "82453":
				loadAria("36c6414bb3a13b27f422f4d438291c22");
		break;
		default: 
		//
		addListenerwza(document,"click",function(e){
				var node = e.target||e.srcElement;
				openWza(node);
		});
		addListenerwza(document,"keyup",function(e){
				if(window.assist&&window.assist.module&&window.assist.module.face) return true;							  
				e = e ||window.event; 
				var key=e.which||e.keyCode;
				var node=(e.target||e.srcElement);
				if(node&&(node.tagName=="TEXTAREA"||(node.tagName=="INPUT"&&(node.getAttribute("type")=="text"||node.getAttribute("type")=="password"||node.getAttribute("type")=="")))) return true;
				if(!e.altKey&&e.shiftKey&&!e.ctrlKey&&(key==50||key==98))openWza(node,true,true);
				if(!e.altKey&&e.shiftKey&&!e.ctrlKey&&(key==49||key==97))openWza(node,true,false);
				//if(!e.altKey&&!e.shiftKey&&!e.ctrlKey&&key==9&&!window.accTabed) {window.accTabed=true;openWza(node,true,true,true);return true;}
		});
		addListenerwza(document,"keydown",function(e){
				if(window.assist&&window.assist.module&&window.assist.module.face) return true;							  
				e = e ||window.event; 
				var key=e.which||e.keyCode;
				var node=(e.target||e.srcElement);
				if(!e.altKey&&!e.shiftKey&&!e.ctrlKey&&key==13) openWza(node,false,true);
		});
		var accRole=getAccCookie("blind")||getAccVal("blind",(/[\?&]blind\s*=\s*(0|1|2|3)/i));
		if(accRole==1){
			openWza(document.body,true,false);
		}else if(accRole==2){
			openWza(document.body,true,true);
		}
	 //
		}
	}
}

cniil_setup();