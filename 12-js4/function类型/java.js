

// function box(num1, num2) {//普通函数的声明方式
// 	return num1 + num2;
// }
// alert(box(1,2));



// var box = function(num1, num2){//使用变量的方式初始化函数
// 	return num1 + num2;
// }
// alert(box(1,3));



// var box = new Function('num1','num2','return num1+num2');//使用new的构造函数来声明函数
// alert(box(3,3));
// alert(typeof box);


//函数可以传递函数
// function box(num, sum){
// 	return num + sum;
// }
// function sum(num) {
// 	return num + 10;
// }
// var reslut = box(sum(10), 10);//sum(10)这里传递的是函数的返回值，和普通的变量一样，没有区别
// alert(reslut);



//把函数本身作为参数传递，而不是函数的结果
// function box(sum, num) {
// 	return sum(num);
// }
// function sum(num) {
// 	return num + 10;
// }
// var result = box(sum, 10);//这里sum是一个函数，当做参数传递到另外一个函数里，而不是函数的返回值
// alert(result);



// function box(num) {//阶乘，递归
// 		return 1;
// 	} else {
// 		return num *box(num - 1);
// 	}
// }
// alert(box(4));


// function box(num) {
// 	if (num <=1) {
// 		return 1;	
// 	} else {
// 		return num * arguments.callee(num - 1);//arguments.callee调用自身，实现递归
// 	}
// }
// alert(box(3));


// window是一个对象，而且是JS里面最大的对象，是最外围的对象，window表示全局
// alert(this);//和alert(window)结果一样，因为this目前表示的是window，所以this就是window


// var color = '红色的';
// alert(window.color);
// alert(this.color);

// window.color = '红色的';//相当于 var color = '红色的'；


// var box = {
// 	color:'黑色的',//这里的color是box下的属性，也就是局部变量
// 	sayColor:function(){
// 		alert(this.color);//这里的this代表的是box对象
// 	}
// }

// alert(this.color);
// box.sayColor();




// window.color='黑色的';
// function sayColor(){
// 	alert(this.color);
// }
// sayColor();
// var box = {
// 	color:'蓝色的'
// };
// box.sayColor = sayColor;
// box.sayColor();




// function box(name,age) {
// 	return name+age;
// }
// alert(box.length);//函数的属性，代表参数的个数


// function box(num1, num2) {
// 	return num1 + num2;
// }
// function sum(a,b) { 	// apply和call可以冒充另外一个函数
// 	return box.apply(this,[a,b]);//this 表示window作用域，[]表示传递的参数
// }

// function sum2(a,b) {
// 	return box.apply(this,arguments);//arguments可以当做数组传递
// }
// alert(sum2(3,3));






//apply和call的区别就是，apply传递的是数组，call传递的是参数
// function box(num1, num2) {
// 	return num1 + num2;
// }
// function sum(a,b) { 	// apply和call可以冒充另外一个函数
// 	return box.call(this,a,b);//this 表示window作用域，[]表示传递的参数
// }

// alert(sum(4,4));





var color='黑色的';
var box = {
	color:'红色的'
}
function sayColor(){
	alert(this.color)
}

//用call是实现对象冒充，冒充box或者window
// sayColor();
// sayColor.call(window);//冒充window
// sayColor.call(this);//this就是window
// sayColor.call(box);//冒充box,作用域就在box对象里面，所以color就是红色的
























































































































