// var box = 100;
// ++box;
// box--;
// alert(box);


// var box = {
// 	valueOf:function(){
// 		return 123;
// 	}
// };
// box++;
// alert(box);


// var box = '100';
// +box;   //正数，负数   +box是正数  -box是负数
// alert(valueOf +box);// +有个自动转型的功能


// var box = 100 + '100';//这个时候的加号就是字符串连接符，而不是加法运算符


// var box = '您的年龄是:'+10+20;//字符串连接
// alert(box);

// var box = '您的年龄是:'+(10+20);//括号强制优先级


// var age = {};
// var box = 10 + age;
// alert(typeof box);//字符串类型   10+{}  10[object Object]类型是字符串


// var box = 10 + {
// 	toString:function() {//如果对象toString返回的是数值，那么久按照数值来
// 		return 20;
// 	}
// }

// alert(typeof box);



/*
关系运算符，大多返回的是布尔值
*/
// var box = '3' > 22;//如果只有一个是字符串，那么会将它转换成数值，再比较
// alert(box);


// var box = '3' > '22';//如果两个都是数值字符串，那么会比较进行第一个字符的比较  3 > 22
// alert(box);

// var box = 2 > {//如果两个操作数有一个是对象，则先调用valueOf()方法或toString()方法，再用结果进行比较
// 	toString:function(){
// 		return 1;
// 	}
// }
// alert(box);


// var box = 'a' < 'b';
// alert(box);

// alert(2==true);

// var box = null == 0;//null自动转换为0，但在比较运算上，null和undefined没有自动转换,字符串在比较的时候，会自动转换成数值
// alert(box);


// var box = (5 > 4) || age;
// alert(box);

// var box = 1, age = 2, name = 'zhangsan';
// alert(box+age+name)


var box = {
	1:2,
	3:4,
	5:6
}

alert(box[3]);















