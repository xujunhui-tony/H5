// function box() {
// 	alert('点击被调用');//函数本省没有运行功能，必须要调用才可以执行；
// }

// box();


// function box(name,age) {
// 	alert('你的名字是'+name+'你的年龄是'+age);
// }

// box('张三',25);


// function box(){
// 	return 'hello uplooking';//return表示把这句话字符串返回回来
// }

// //打印出函数调用返回过来的结果
// alert (box());//调用，相当于box()='hello uplooking'


// function box() {
// 	return 10;
// 	return 100;
// }
// alert(box());



// function box (num) {
// 	if (num < 5) {
// 		break;
// 	}

// 	return 100;
// }

// alert(box(3));


// function box() {
// 	return arguments[0]+arguments[1]+arguments[2];
// }

// alert(box('呵呵',12, 计算机));


function box() {
	var number = arguments.length;
	var num = 0;
	for (var i = 0; i < number; i++) {
		num = num + arguments[i];
	}
	return num;
}


alert(box(2,4,6,8,10));




























