




//普通函数
// function box(){
// 	return 'lee';
// }
// alert(box())


//匿名函数
// function(){//单独的匿名函数是不能运行的，就算能运行也无法调用，因为没有名称
// 	return 'hehe';
// }


//把匿名函数赋值给变量
// var box = function(){
// 	return 'hehe';
// }
// alert(box());




//通过自我执行来执行匿名函数
// (function(){				//(匿名函数)();第一圆括号放匿名函数，第二圆括号执行
// 	alert(111);
// })();



//把匿名函数自我执行的返回值赋值给变量
// var box = (function(){
// 	return 'hehe';
// })();
// alert(box);



//自我执行的匿名函数的传参
// (function(age){
// 	alert(age);
// })(100);



//函数里面放一个匿名函数
// function box(){
// 	return function(){//闭包
// 		return 'hhe';
// 	}
// }
// alert(box()());


//闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包常见的方式，就是在一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量



//通过闭包返回局部变量
// function box(){
// 	var age = 100;
//    return function (){
// 		return age;
// 	}
// }
// alert(box()());



//使用全局变量累加
// var age = 100;
// function box(){
// 	age++;
// }
// alert(age);
// box();
// alert(age);
// box();
// alert(age);




//使用局部变量
// function box(){
// 	var age = 100;
// 	age++;
// 	return age;
// }
// alert(box());
// alert(box());
// alert(box());





//使用匿名函数实现局部变量驻留内存中从而实现累加
// function box(){
// 	var age = 100;
// 	return function(){
// 		age++;
// 		return age;
// 	}
// }
// var b = box();
// alert(b());
// alert(b());
// alert(b());
// alert(b());
// b = null;//解除引用，等待垃圾回收




//循环里的匿名函数的取值问题
// function box(){
// 	var arr = [];
// 	for (var i = 0; i < 5; i++) {
// 		arr[i] = function(){
// 			return i;
// 		}

// 		//循环已经执行完毕了，i最终是4++=5，所以最终i的值是5
// 	}
// 			return arr;
// }
// 	var b = box();
// 	for (var i = 0; i < 5; i++) {
// 		alert(b[i]);
// 	}



//改0  按顺序打印数组里面的数字
// function box(){
// 	var arr = [];
// 	for (var i = 0; i < 5; i++) {
// 		arr[i] = i;
// 	}
// 	return arr;
// }

// for (var i = 0; i < 5; i++) {
// 	alert(box()[i]);
// }



//改1
// function box(){
// 	var arr = [];
// 	for (var i = 0; i < 5; i++) {
// 		arr[i] = (function(num){//通过自我及时执行匿名函数
// 			return num;
// 		})(i);
// 	}
// 	return arr;
// }
// var b = box();
// for (var i = 0; i < 5; i++) {
// 	alert(b[i]);
// }




//改2
// function box(){
// 	var arr = [];
// 	for (var i = 0; i < 5; i++) {
// 		arr[i] = (function(num){//自我执行赋给变量，函数外面的括号可以省略
// 			return function(){
// 				return num;
// 			}
// 		})(i);
// 	}
// 	return arr;
// }

// var b = box();
// for (var i = 0; i < 5; i++) {
// 	alert(b[i]());
// }




// var user = 'hehe';
// var box = {
// 	user:'haha',
// 	getUser:function(){
// 		return function(){
// 			return this.user;
// 		}
// 	}
// }
// alert(box.user);
// alert(box.getUser()());
// alert(box.getUser().call(box));//对象冒充





// var user = 'hehe';
// var box = {
// 	user:'haha',
// 	getUser:function(){
// 		var that = this;
// 			//这里的作用域this是Box
// 		return function(){
// 			//这里的作用域this是window
// 			return that.user;
// 		}
// 	}
// }
// alert(box.getUser()());



// function box(){
// 	var oDiv = document.getElementById('oDiv');
// 	var text = oDiv.innerHTML;
// 	oDiv.onclick = function(){
// 		alert(text);
// 	}
// 	oDiv = null;
// }
// box();//一旦执行，oDiv就为空，点击事件就获取不到oDiv.innerHTML





//块级作用域（私有作用域）
// function box(){//块级作用域（JS没有这个东西）
// 	for (var i = 0; i < 5; i++) {

// 	}
// 	var i ;//就算重新声明，也不会影响之前声明初始化的数据
// 	alert(i);
// }
// box();




//使用块级作用域
// function box(){
// 	(function(){//包含自我执行的匿名函数，就可以实现私有作用域
// 		for (var i = 0; i < 5; i++) {
// 			alert(i);
// 		}
// 	})();//出了这个私有作用域，变量立即被销毁
// 	alert(i);//这里i就失去了效果
// }
// box();



//私有作用域来表示
// (function(){//怎么样取到里面的值呢？？？？？？？？？？？？？？？？？？？？？？？？
// 	var age = 100;
// 	alert(age);//全局的私有作用域

// })();




// function Box(){
// 	this.age = 100;//共有变量
// 	this.name = 'hehe';
// 	this.run = function(){//共有方法
// 		return 'hahaahha';
// 	}
// }
// var box = new Box();
// alert(box.run());



// function Box(){
// 	var age = 100;//私有变量
// 	function fun(){//私有方法
// 		return 'hehe';
// 	}
// 	this.publicWay = function(){//对外可见的公共接口，特权方法
// 		return age + fun();
// 	}
// }
// var box = new Box();
// alert(box.publicWay());





//通过构造函数传参
// function Box(value){
// 	var user = value;//私有变量
// 	this.getValue = function(){
// 		return user;
// 	};
// 	this.setValue = function(value){
// 		user = value;
// 	}
// }
// var box = new Box('jhhhhhhhhhh');
// alert(box.getValue());
// box.setValue('kkkkkkkk');
// alert(box.getValue());






// (function(){
// 	var user = '';//私有变量
// 	Box = function(value){
// 		user = value;
// 		this.getUser = function(){
// 			return user;
// 		}//全局构造函数
// 	}
// })();

// var box = new Box('hehe');
// alert(box.getUser());
// var box2 = new Box('haha');
// alert(box.getUser());



// (function(){
// 	var user = '';//私有变量
// 	Box = function(value){
// 		user = value;
// 	}
// 	Box.prototype.getUser = function(){
// 		return user;
// 	}
// })();

// var box = new Box('hehe');//第一次实例化
// alert(box.getUser());
// var box2 = new Box('haha');//第二次实例化
// alert(box.getUser());




//单例：永远只实例化一次，其实就是字面量对象声明方式
// var box = {//第一次实例化，无法进行第二次实例化，那么就是单例
// 	user:'user',
// 	run:function(){
// 		return 'hehe';
// 	}
// }





// var box = function(){
// 	var user = 'user';//私有变量
// 	run =  function(){//私有函数
// 		return 'hehe';
// 	}
// 	return {//直接返回对象
// 		publicGo:function(){  //对外公共接口的特权方法
// 			return user + run();
// 		}
// 	};
// }();
// alert(box.publicGo());





// var box = function(){
// 	var user = 'user';//私有变量
// 	run =  function(){//私有函数
// 		return 'hehe';
// 	}
// 	var obj =  {//直接返回对象
// 		publicGo:function(){  //对外公共接口的特权方法
// 			return user + run();
// 		}
// 	};
// 	return obj;
// }();
// alert(box.publicGo());





function Desk(){};
var box = function(){
	var user = 'user';//私有变量
	run =  function(){//私有函数
		return 'hehe';
	}
	var desk = new Desk();
	desk.publicGo=function(){
		return user+run();
	}
	return desk;
}();
alert(box.publicGo());








