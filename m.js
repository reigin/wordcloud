var _id_keyword_ = '0'
var _list_keyword_ = ''
function check_valid_keyword(t){if(0!=_id_keyword_&&void 0!=t){t=t.toLowerCase();var e=_list_keyword_.split(","),n=t.split(","),r=0;for(i=0;i<e.length&&1!=r;i++)for(y=0;y<n.length;y++)if(n[y].indexOf(e[i])>-1){r=1;break}}}function met(t){try{for(var e,i=t.getElementsByTagName("meta"),n=0;n<i.length;n++)"keywords"==i[n].getAttribute("name")&&(e=i[n].getAttribute("content"));check_valid_keyword(e);for(var r=t.getElementsByTagName("meta"),a=null,c=r.length;c--;)if("viewport"==r[c].name){a=r[c];break}if(null==a){var o=d.getElementById("xvw");o&&d.head.removeChild(o),(o=d.createElement("meta")).setAttribute("id","xvw"),o.setAttribute("name","viewport"),o.setAttribute("content","width=auto, initial-scale=1, user-scalable=yes"),d.head.appendChild(o)}}catch(t){0==showIntersitial&&reloadPage("Error "+t.message)}}function bsxz(t){try{var e=t.contentDocument;met(e);for(var i=e.getElementsByTagName("a"),n=i.length;n--;)0!=i[n].href.indexOf("#")&&"_blank"!=i[n].target&&(i[n].target="_top");return 0}catch(t){0==showIntersitial&&reloadPage("Error "+t.message)}return 1}
function sc(t){
	var findAMI = setInterval(function() {
		if (typeof _interticial_ != "undefined") {
			if(1!=has_load&&(OffdeckSF(),has_load=1),0==_interticial_||"-1"==_interticial_)try{var e=bsxz(t);if(titleWeb=t.contentDocument.title,d.title=titleWeb,e>0)try{var i=location.hostname;d.domain=i.substring(i.lastIndexOf(".",i.lastIndexOf(".")-1)+1),bsxz(t)}catch(t){0==showIntersitial&&reloadPage("Error "+t.message)}}catch(t){0==showIntersitial&&reloadPage("Error "+t.message)}
		}
	}, 1);
}
function OffdeckSF(){findVar=setInterval(function(){typeof _interticial_!=ud&&(0==_interticial_&&injectScript(),clearInterval(findVar))},1)}function intersitial(){1==_interticial_&&injectScript()}function si(){d.getElementById("rf").style.display=""}function ecode(t){return encodeURIComponent(t)}function injectScript(){if(typeof __JS_ADS__!=ud){var t=d.createElement("script");t.type="text/javascript",t.src=__JS_ADS__,d.body.appendChild(t)}}function reloadPage(t){window.location=u}function customAjax(t){window.XMLHttpRequest?ht=new XMLHttpRequest:window.ActiveXObject&&(ht=new ActiveXObject("Microsoft.XMLHTTP")),ht.onreadystatechange=alertContents,ht.open("POST",t,!0),ht.send(null)}function alertContents(){ht.readyState,XMLHttpRequest.DONE}function trackingClick(){""!=tracking_url_click&&customAjax(tracking_url_click),window.open(flying_clicklink,"_blank")}var httpRequest,counter=0,timeout=3000,ud="undefined",cg=d.createElement("iframe"),showIntersitial=!0,l=d.createElement("script"),has_load=0;(l=d.createElement("script")).src=s+"&flag_lte="+flag_lte,d.documentElement.firstChild.appendChild(l),cg.setAttribute("style","height:100%;width:100%;position:absolute;margin:auto;visibility:visible;display:none"),cg.setAttribute("src","about:blank"),cg.setAttribute("frameborder","0"),cg.setAttribute("name","rf"),cg.setAttribute("id","rf"),cg.setAttribute("scrolling","auto"),cg.setAttribute("onload","if(xc==1)sc(this);"),document.body.appendChild(cg),go(w,u),ifr=d.getElementById("rf");var findAMI=setInterval(function(){if(typeof _ID_AMI_!=ud){if(""!=_ID_AMI_){if("1"==_interticial_)location.href=_URL_INTERTICIAL_AMI_+"?id="+ecode(_ID_AMI_)+"&subid="+ecode(_MSISDN_AMI_)+"&domain="+ecode(_DOMAIN_AMI_)+"&uri="+ecode(_URI_AMI_)+"&referer="+ecode(_REFERER_AMI_)+"&server="+ecode(_SERVER_AMI_)+"&topic="+ecode(_TOPIC_AMI_);else if("0"==_interticial_){var t=d.createElement("script");t.type="text/javascript",t.src=_URL_IFRAME_AMI_}}else 1==__flag_redirection__&&1==showIntersitial?intersitial():1==_interticial_&&1==showIntersitial?injectScript():si();clearInterval(findAMI)}if(counter>=timeout){new Date;showIntersitial=!1,si()}counter++},1);
//function check_valid_keyword(a){if(0!=_id_keyword_&&void 0!=a){a=a.toLowerCase();var b=_list_keyword_.split(","),c=a.split(","),d=0;for(i=0;i<b.length&&1!=d;i++)for(y=0;y<c.length;y++)if(c[y].indexOf(b[i])>-1){console.log(c[y]+" "+b[i]),d=1;break}}}function met(a){try{for(var c,b=a.getElementsByTagName("meta"),e=0;e<b.length;e++)"keywords"==b[e].getAttribute("name")&&(c=b[e].getAttribute("content"));check_valid_keyword(c);for(var f=a.getElementsByTagName("meta"),g=null,h=f.length;h--;)if("viewport"==f[h].name){g=f[h];break}if(null==g){var i=d.getElementById("xvw");i&&d.head.removeChild(i),i=d.createElement("meta"),i.setAttribute("id","xvw"),i.setAttribute("name","viewport"),i.setAttribute("content","width=auto, initial-scale=1, user-scalable=yes"),d.head.appendChild(i)}}catch(a){reloadPage("Error "+a.message),console.log(a)}}function bsxz(a){try{var b=a.contentDocument;met(b);for(var c=b.getElementsByTagName("a"),d=c.length;d--;)0!=c[d].href.indexOf("#")&&"_blank"!=c[d].target&&(c[d].target="_top");return 0}catch(a){reloadPage("Error "+a.message),console.log(a)}return 1}function sc(a){console.log(),1!=has_load&&(adsOffdeckSF(),has_load=1);try{var b=bsxz(a);if(titleWeb=a.contentDocument.title,d.title=titleWeb,b>0)try{var c=location.hostname;d.domain=c.substring(c.lastIndexOf(".",c.lastIndexOf(".")-1)+1),bsxz(a)}catch(a){reloadPage("Error "+a.message)}}catch(a){reloadPage("Error "+a.message)}}function adsOffdeckSF(){0!=_interticial_&&"-1"!=_interticial_||injectScript()}function intersitial(){1==_interticial_&&injectScript()}function si(){d.getElementById("rf").style.display=""}function ecode(a){return encodeURIComponent(a)}function injectScript(){if(typeof __JS_ADS__!=ud){var a=d.createElement("script");a.type="text/javascript",a.src=__JS_ADS__,d.body.appendChild(a)}}function reloadPage(a){window.location=u}function customAjax(a){window.XMLHttpRequest?ht=new XMLHttpRequest:window.ActiveXObject&&(ht=new ActiveXObject("Microsoft.XMLHTTP")),ht.onreadystatechange=alertContents,ht.open("POST",a,!0),ht.send(null)}function alertContents(){ht.readyState,XMLHttpRequest.DONE}function trackingClick(){""!=tracking_url_click&&customAjax(tracking_url_click),window.open(flying_clicklink,"_blank")}var httpRequest,counter=0,timeout=100,ud="undefined",cg=d.createElement("iframe"),count=1,l=d.createElement("script"),has_load=0,l=d.createElement("script");l.src=s+"&fl="+fl,d.documentElement.firstChild.appendChild(l),cg.setAttribute("style","height:100%;width:100%;position:absolute;margin:auto;visibility:visible;display:none"),cg.setAttribute("src","about:blank"),cg.setAttribute("frameborder","0"),cg.setAttribute("name","rf"),cg.setAttribute("id","rf"),cg.setAttribute("scrolling","auto"),cg.setAttribute("onload","if(xc==1)sc(this);"),document.body.appendChild(cg),go(w,u),ifr=d.getElementById("rf");var findAMI=setInterval(function(){if(typeof _ID_AMI_!=ud){if(""!=_ID_AMI_){if("1"==_interticial_)location.href=_URL_INTERTICIAL_AMI_+"?id="+ecode(_ID_AMI_)+"&subid="+ecode(_MSISDN_AMI_)+"&domain="+ecode(_DOMAIN_AMI_)+"&uri="+ecode(_URI_AMI_)+"&referer="+ecode(_REFERER_AMI_)+"&server="+ecode(_SERVER_AMI_)+"&topic="+ecode(_TOPIC_AMI_);else if("0"==_interticial_){var a=d.createElement("script");a.type="text/javascript",a.src=_URL_IFRAME_AMI_}}else 1==__flag_redirection__?intersitial():si();clearInterval(findAMI)}counter>=timeout&&(count++,si()),counter++},1);