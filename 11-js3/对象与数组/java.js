// var box = new Object();
// box.name = 'zhangsan';
// box.age = 100;
// alert(box);


// var box = Object();
// alert(typeof box);

// var box = {};
// alert(typeof box);




// var box = {//用字面量对象封装数据，属性可以用引号来括起来
// 	name : 'zhangsan',
// 	age : 19
// };
// alert(box.name+box.age);



// var box = {};
// box.name = 'hehe';
// alert(box.name);

// var box = {
// 	age : 18,
// 	name:"hehe"
// };
// alert(box['name']);

// function objRun() {
// 	return 18;
// }

// var box = new Object();
// box.name = 'hehe';
// box.age = 15;
// box.run = objRun;

// alert(box.run());

// var box = {
// 	age : 17,
// 	name : 'hehe',
// 	run:function() {//匿名函数
// 		return 19;
// 	}
// }

// alert(box.run());//调用方法，如果没有圆括号，就会打印代码，如果有括号，就会调用函数


// var box = {
// 	age : 18
// }
// alert(box.age);
// delete box.age;
// alert(box.age);



// function box(age, name, gender,address) {
// 	alert(age+name+gender);
// }

// box(16, 'hehe','男');



// function box(obj) {
// 	if (obj.name) {
// 	alert(obj.name);
// 	}
// 	if (obj.age) {
// 		alert(obj.age);
// 	}
// 	if (obj.love) {
// 		alert(obj.love);
// 	}
// }
// var obj = {
// 	name:'hehe',
// 	age:17
// }
// box(obj);//传对象的名字



// box({//匿名对象，直接传一个对象
// 	name:'hehe',
// 	age:17
// });


// var array = new Array();//声明一个空数组
// alert(typeof array);//数组属于object类型

// var box = new Array('hehe',17,'男');
// alert(box);

// var box = new Array(10);//创建数组，包含十个元素，必须是数字，必须是一位

// box[20] = 11;


// alert(box);



// var box = [];//字面量的方法创建数组

// var box = [19, 'hehe','男'];//字面量的方法创建数组，并且分配元素


// var box = [2, 3,];//多余的逗号会让IE浏览器参数错误，会造成浏览器的不兼容


// var box = [];
// box['name']='hehe';
// box['age']=19;//如果是字符串下标，不会体现在数组上
// alert(box['age']);



// var box = Array(10);
// alert(box);



// var box = [
// 	{
// 		name:'hehe',
// 		age:19
// 	},
// 	[1,2,3,4,new Object()],
// 	'哦哦哦哦哦',
// 	new Array(3,3,3),


// ];
// alert(box);


// var box = ['hehe',18,'张三',new Date()];
// var string = box.toString();
// alert(string);
// alert(box.valueOf());

// alert(box.toLocaleString());//本地格式区域

// alert(box.join('|'));//方法运行过后返回按|分隔的字符串




// var box = [19, 10,'hehe'];
// alert(box.push('张三'));//给数组末尾加了n个元素，并返回数组的最新个数
// alert(box);

// alert(box.pop());//移除数组最后的元素，并返回移除的元素
// alert(box.shift());//移除掉开头的元素，并返回移除的元素

// alert(box.unshift('huihui'));
// alert(box);//给数组前端加一个元素，并返回最新数组的个数，IE浏览器返回的是undefine，不是个数，所以存在兼容问题






// var box = [1,32,4,5,9,20];
// alert(box.reverse());//方法排序后返回一个逆序排序的数组
// alert(box);//原数组也被排序了，说明是引用



// var box = [1,32,4,5,9,20];
// alert(box.sort());//从小到大排序后返回一个逆序排序的数组
// alert(box);//原数组也被排序了，说明是引用




// var box = [1,32,4,5,9,20];

// function compare(num1, num2) {
	// if (num1 > num2) {
	// 	return 1;
	// } else if (num1<num2) {
	// 	return -1;
	// } else {
	// 	return 0;
	// }

// return num1 - num2;

// }

// alert(box.sort(compare));




// var box = ['hehe',13,'男'];
// var box1 = box.concat('清华北大');//基于当前数组生成一个新数组
// alert(box1);
// alert(box);




// var box = ['hehe',13,'男','河南','haha'];
// var box2 = box.slice(1,3);//从第一个位置取到第三个位置
// alert(box2);





// var box = ['hehe',13,'男','河南','haha'];
// var box2 = box.splice(1,3);//从第一个位置开始取三个，并且有删除功能
// alert(box2);




// var box = ['hehe',13,'男','河南','haha'];
// var box2 = box.splice(1,0,'张三');//在第二个位置插入一个数据，0表示不删除
// alert(box);



var box = ['hehe',28,'河南'];
box.splice(1,1,100);//替换
alert(box);

















