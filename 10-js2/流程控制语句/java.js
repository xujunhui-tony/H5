

// var box = 100;//单行语句

// var age = 20;//另一条单行语句

// { 	// 用大括号包含的语句集合，就叫复合语句，单位一个
// 	//一对花括号，表示一个复合语句，处理的时候，可以当做一条单行语句来对待
// 	//复合语句，我们一般称之为代码块
// 	var height = 200;
// 	var width = 300;
// }


// var box = 100;
// if (box > 50) {
// 	alert(box);
// }


// var box = 10;
// do {    //先运行，再判断循环体
// 	alert(box);
// 	box++;
// }while(box <= 5);


var box = {
	'name':"呵呵",
	'age':28,
	'height':178
}

//with语句
with(box) {//with(box)可以将box.给省略掉
	var n = name;//这里的name相当于box.name
	var a = age;
	var h = height;
}


for(var p in box) {
	alert(p);
}





















