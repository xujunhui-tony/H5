
/**
var box;
alert(typeof box);//box是Undefined类型，值是undefined，类型返回的字符串是undefined


var box = true;
alert(typeof box);//box是Boolean类型，值是true，类型返回的字符串是boolean


var box = 'hehe';
alert(typeof box);//box是String类型，值是'hehe'，类型返回的字符串是string


var box = 250;
alert(typeof box);//box是Number类型，值是250，类型返回的字符串是number



空的对象：表示这个对象创建了，里面没有东西
空对象：表示没有创建，就是null
var box = {};
alert(typeof box);//box是Object类型，值是[object Object]，类型返回的字符串是object


var box = null;
alert(box);//box是Null类型，值是null，类型返回的字符串是object



var box = new Object();
alert(box);//box是Object类型，值是[object Object]，类型返回的字符串是object

function box() {

}
alert(box);//box是function函数，值是function box(){}，类型返回的字符串是function




*/

// alert(typeof new Object());//可以直接使用字面量


// var box = undefined;//没必须这么写
// alert(typeof box);


// var box = null;//这个表示，你还没有创建对象，但先声明了对象引用而必须初始化的结果。
// 				//你还没有来得及创建对象，先声明一个对象的变量，默认初始化为null

// alert(box);


// alert(undefined == null);//他们都是空的，所以相等时理所当然的


// alert(undefined === null);//数据类型也必须相等才可以


// var box='hehe';
// alert(Boolean(box));


// var box = 250;//十进制整数
// alert(box);


// var box = 070;//八进制,按照十进制输出是56
// alert(box);



// var box = 079;//无效八进制
// alert(box);


// var box = 0xa;//十六进制,按照十进制输出是10
// alert(box);



// var box = 4.12e9;//科学计数法
// alert(box);

// alert(0.1 + 0.2);

// alert(Number.MIN_VALUE);//最小值
// alert(Number.MAX_VALUE);//最大值


// var box = 100e100000;
// alert(isFinite(box));//是否超过范围


// var box = 0 / 0;//在数学中第一个可以为0，第二个不可以为0.
// alert(box);//结果 NaN



// alert(isNaN(true));//判断是不是NaN





//如果对象的toString方法能够返回数值，那么就不是NaN了。
// var box = {
// 	toString:function() {
// 		return 123;
// 	}
// }
// alert(isNaN(box));





// alert(Number('s'));//数值转换

// parseInt();//只能转换字符串
// alert(parseInt('007'));



// var box = 10;
// alert(box.toString(2));//'1010'  转成二进制的字符串


var box = new Object(2);
var age = 2;
alert(typeof (box+age));

















