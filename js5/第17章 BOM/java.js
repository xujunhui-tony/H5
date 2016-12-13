






/*

window对象是最顶层的对象
window对象有六大属性，这六大属性本身也是对象
window对象旗下的document属性，也是对象，并且document对象旗下有五大属性，并且这五大属性也是对象
都是对象

调用：
window的属性和方法的调用:window.属性   window.方法()
也可以直接   属性   方法
如果是某个浏览器独有的属性或者方法，那么在其他浏览器可能会不识别，当做普通变量或者普通函数

colosed='123';//如果有浏览器不认识就当做变量了

强制性的操作
window.colosed='123';


*/


//警告框  alert

//确定和取消     这里有确定和取消按钮，本身方法可以返回一个布尔值
// confirm();

// if (confirm('请选择')) {
// 	alert('选择了确定按钮');
// }else {
// 	alert('选择了取消按钮');
// }


//输入提示框
// prompt('请输入一个数字','9');//第一个参数是说明，第二个参数是默认值，返回值就是输入的值
// var num = prompt('请输入用户名','我');
// if (num!= null) {
// 	alert(num);
// }


// print();//调出打印机
// find();//调出查找


// defaultStatus('hehe');//初始状态栏
// status('haha');//设置状态栏


//新建窗口  参数
//1.第一个参数是你将要导航到的URL   2.第二个参数是窗口的名字或者窗口的目标，命名可以给新窗口设置一个名称，凡是以这个明后才能打开的窗口
// 目标：_blank  新建一个窗口，   _parent表示在本窗口内加载
// open('http://www.baidu.com','baidu');
// var box =  open('opener.html','baidu','width = 400, height=400,top = 100,left = 100,location = no,toolbar = no');
// alert(typeof box);
// box.alert('hahhahahhahha');//open本身会返回子窗口的window对象，表示子窗口弹出











//这两个属性狐火浏览器不识别，就会当做没有初始化的变量，我们就会强制在这两个属性加上window.
// alert(screenLeft);
// alert(screenTop);




// alert(window.screenLeft);
// alert(window.screenTop);



//这两个属性IE是不支持的
// alert(window.screenX);
// alert(window.screenY);




//兼容浏览器用法
// var leftX = typeof window.screenLeft == 'number' ? window.screenLeft : screenX;
// var topY = typeof window.screenTop == 'number' ? window.screenTop : screenY;




//窗口页面的大小
//这种方式IE浏览器不识别
// alert(window.innerWidth);
// alert(window.innerHeight);
 


//窗口页面加边框的大小
//这种方式IE浏览器不识别
// alert(window.outerWidth);
// alert(window.outerHeight);


//跨浏览器用法
//如果是火狐直接使用innerWidth和innerHeight,如果是IE就用document
// var width = window.innerWidth;
// var height= window.innerHeight;
// if (typeof width != 'number') {
// 	if (document.compatMode=='CSS1Compat') {
// 		width = document.documentElement.clientWidth;
// 		height = document.documentElement.clientHeight;
// 	}else {
// 		width = document.body.clientWidth;
// 		height = document.body.clientHeight;		
// 	}
// }
// alert(width);
// alert(height);



//超时调用
//第一个参数可以是字符串，而里面可以是代码块，因为它有解析功能，但是这种写法不推荐，容易出错，不容易扩展
// setTimeout("alert('hello')",2000);//两秒后执行第一个参数的代码块


// function box(){
// 	alert(1111);
// }
// setTimeout(box,2000);//第一个参数直接存一个函数


// setTimeout(function(){
// 	alert(111);
// },2000);//推荐使用，扩展性好，封装性好



// var box = setTimeout(function(){//返回值是超时调用的ID
// 	alert(111);
// },5000);

// alert(box);
// clearTimeout(box);//取消当前超时调用计划



//  setInterval(function(){
// 	alert(111);
// },2000);//间歇调用，可以重复调用
// // clearInterval(box);//取消当前间歇调用





//定时器
// var num = 0;
// var max = 5;
// setInterval(function(){
// 	num++;
// 	//这里可以做定时功能
// 	document.getElementById('a').innerHTML = num;
// 	if (num == max) {
// 		clearInterval(this);//this不能代表本身，所以这种方法解决不了问题
// 		alert('5秒到了');
// 	}
// },1000);




// var num = 0;
// var max = 5;
// var id = null;
// function box(){
// 	num++;
// 	document.getElementById('a').innerHTML = num;
// 	if (max == num) {
// 		alert('5秒到了');
// 		clearInterval(id);
// 	}
// }
// id = setInterval(box,1000);




//使用超时调用，模拟定时器
// var num = 0;
// var max = 5;
// function box(){
// 	num++;
// 	document.getElementById('a').innerHTML = num;
// 	if (max == num) {
// 		alert('5秒钟到了');
// 	}else {
// 		setTimeout(box,1000);
// 	}
// }
// setTimeout(box,1000);



//当前网页的地址
// alert(window.location);
// alert(document.location);



// location.assign('http://www.baidu.com');


// function a(){
// 	location.replace('http://www.baidu.com');
// }






// alert(history.length);//历史记录的总量


function pre(){
	history.forward();//历史记录上一个
}

function next(){
	history.back();//历史记录下一个
}
history.go(-1);//上一个
history.go(2);//下两个



























