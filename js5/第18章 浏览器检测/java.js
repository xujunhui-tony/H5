

//navigator对象是window下的对象
// alert(navigator.appName);//浏览器的名称，这个属性不能精确的取到浏览器的名称
// alert(navigator.userAgent);//浏览器用户代理字符串,表示浏览器信息的东西
// alert(navigator.platform);//浏览器的平台
// alert(navigator.appVersion);//浏览器版本



// alert(BrowserDetect.browser);//BrowserDetect相当于一个第三方的类,打印的是浏览器的名称
// alert(BrowserDetect.version);//浏览器的版本
// alert(BrowserDetect.OS);//浏览器的系统





//给IE7以下的浏览器做特殊处理
// if (BrowserDetect.browser =='Internet Explorer' && BrowserDetect.version < 7) {
// 	alert('此版本浏览器需要做特殊处理');
// }



//插件检测
// alert(navigator.plugins.length);
// for (var i = 0; i < navigator.plugins.length; i++) {
// 	document.write('插件名   '+navigator.plugins[i].name+'</br>');
// 		document.write('文件名   '+navigator.plugins[i].filename+'</br>');
// 		document.write('描  述   '+navigator.plugins[i].description+'</br>');
// 		document.write('</br>');

// }




//检测非IE浏览器插件是否存在   IE浏览器里面没有插件，只有控件
// function hasPlugin(name){
// 	var name = name.toLowerCase();
// 	for (var i = 0; i < navigator.plugins.length; i++) {
// 		if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
// 			return true;
// 		} 
// 	}
// 	return false;
// }
// alert(hasPlugin('Flash'));





//检测IE浏览器的控件
// function hasIEPlugin(){
// 	try{//这里叫做尝试着去执行一段代码，如果有误，就去执行catch
// 		new ActiveXObject(name)      //这里的name必须是控件的唯一标识符ID
// 		return true;//如果new 成功了，没有产生错误，就不去执行catch
// 	}catch(e){
// 		return false;//如果new失败了，就执行catch里面的语句
// 	}
// }
// hasIEPlugin('这里填flash的唯一标识符');



//跨浏览器检测flash
// function hasFlash(){
// 	var result = hasPlugin('Flash');//如果返回true，说明检测到了，并且不是IE浏览器
// 	if (!result) {//如果没有检测到，说明这个浏览器没有浏览器插件或者是IE浏览器
// 		result = hasIEPlugin('这里填flash的唯一标识符');
// 	}
// 	return result;
// }





//能力检测
// var width = window.innerWidth;
// if (typeof width != 'number') {
// 	width = document.documentElement.clientWidth;
// }
// alert(width);






//怪癖检测bug(缺陷)
// var box = {
// 	toString:function(){}//toString与系统方法重名，IE不兼容
// }

// for(var o in box){
// 	alert(o+'0');
// }






//用户代理检测
document.write(navigator.userAgent);
// Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:47.0) Gecko/20100101 Firefox/47.0 

//Gecko  引擎


var client = function(){//创建一个对象
	//引擎
	var engine = {
		ie:false,				//这个属性用于确定是否是IE引擎
		gecko:false,
		webkit:false,
		khtml:false,
		opera:false,

		ver:0//引擎的版本
	}

	//浏览器
	var brower = {
		ie:false,				//
		gecko:false,
		webkit:false,
		khtml:false,
		opera:false,

		ver:0//引擎的版本
	}



	//核心检测程序区
	var ua = navigator.userAgent;
	if (window.opera) {
		engine.opera = true;//表示是Opera引擎
		engine.ver = window.opera.verson();
	}else if (/AppleWebKit\/(\S+)/.test(ua)) {//S代表非空格字符
		engine.webkit = true;//表示确定webkit引擎
		engine.ver = RegExp['$1'];
	} else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {//表示确定gecko引擎
		engine.gecko = true;
		engine.ver = RegExp['$1'];

	}

	return {//返回一个对象，可以同时返回引擎，浏览器和系统的对象
		engine:engine,				//前一个是属性，后一个是对象值
		brower:brower
	}
}();//自我执行并赋值
// alert(client.engine.ie);




//window支持opera属性  只有opera浏览器能识别
// for(var o in window.opera){
// 	alert(document.write(o+'<br/>'));
// }
// alert(document.write(window.opera.verson()));//打印出opera浏览器的版本

if (client.engine.gecko) {
	alert(client.engine.ver);
}else {
	alert(111);
}
















































































































































