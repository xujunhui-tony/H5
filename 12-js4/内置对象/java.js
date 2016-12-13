





// var box = '//url里';
// var a = (encodeURI(box));//只编码了汉字
// var b = (encodeURIComponent(box));//特殊字符和汉字都被编码了

// alert(a);
// alert(b);
// alert(decodeURI(a));//解码
// alert(decodeURIComponent(b));//解码





// eval('var box = 100');//eval充当字符串解析器的功能，只接受一个参数，而这个参数就是要执行JS的字符串
// alert(box);


// eval('function box(){return 124}');
// alert(box());



// alert(Math.E);
// var number = Math.PI;//圆周率
// alert(number.toFixed(100));


// alert(Math.min(2,3,4,5,6,6,1,2,0));//求最小值
// alert(Math.max(3,4,5,6,111,2,8,2,3,9));//求最大值



// alert(Math.ceil(22.2));//向上舍入
// alert(Math.floor(22.7));//向下舍入
// alert(Math.round(22.5));//四舍五入


// for (var i = 0; i < 100; i++) {
// 	document.write(Math.random());//0-1随机数
// 	document.write('<br/>');
// }





// for (var i = 0; i < 100; i++) {
// 	document.write(Math.floor(Math.random()*10 + 5));//5-14随机数
// 	document.write('<br/>');
// }



// for (var i = 0; i < 100; i++) {
// 	document.write(Math.floor(Math.random()*10 + 5));//5-14随机数
// 	document.write('<br/>');
// }



function sum(start, end){
	var num = end - start + 1;
	return Math.floor(Math.random() * num + start);
}
alert(sum(3,9));

































































































