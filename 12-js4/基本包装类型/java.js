


// var box = 'hello uplooking';//基本类型
// alert(box);
// alert(box.substring(2));//对象.方法(参数),这种写法明显是引用类型的写法
// 						//索引从0开始，从第二个位置开始，截取到末尾的字符串输出
// 						//是基本类型，但又是特殊的引用类型，因为它可以调用系统内置的方法	
// alert('hello uplooking'.substring(2))//跟上面结果一样




// var box = 'hello uplooking';
// box.name = 'uplooking';
// box.age = function(){
// 	return 100;
// };
// alert(box);
// alert(typeof box);
// alert(box.substring(2));//有效
// alert(box.name);//undefined，打印不出来
// alert(box.age());//出错
// 					//基本类型是无法给自己创建属性和方法的，但是可以调用系统内置的方法






// var box = new String('hello uplooking');  	//string的引用类型
// box.name = 'uplooking';
// box.age = function(){
// 	return 100;
// };
// alert(box);
// alert(typeof box); 			// object
// alert(box.substring(2));//有效
// alert(box.name);//自定义属性有效
// alert(box.age());//自定义方法有效




// var box = 100;
// alert(box.MAX_VALUE);//这种方法叫做属性
// alert(Number.MAX_VALUE);//这种写法(类型.属性),叫做静态属性



//Number
// var box = 1000.3456123;
// alert(typeof box.toString());//将数值转换为字符串
// alert(box.toLocaleString());//本地化
// alert(box.toFixed(3));//将小数点保留三位，转换成字符串，四舍五入
// alert(box.toExponential());//以指数形式，转换字符串
// alert(box.toPrecision(3));//根据传参来决定指数或者小数



// var box = 'hello';
// alert(box.length);//字符串的长度属性
// alert(box.constructor);//字符串的函数



// var box = 'hellohellohello';
// alert(box.charAt(1));//第二个字母
// alert(box.charCodeAt(1));//第二个字母的acssii码
// alert(box[1]);//通过数组方式截取，不过这种方式在IE浏览器会显示undefined
//字符串操作方法
// alert(box.concat(' hehe ',' haha ',' ! '));//参数字符串连接
// alert(box.slice(4, 6));//截取字符串中4-6的字符串
// alert(box.substring(4,6))//同上
// alert(box.substr(4,6));//从第四个开始，选六个

//从第四个开始选择全部，以下三个表示内容一样
// alert(box.substring(4));
// alert(box.substr(4));
// alert(box.slice(4));


// alert(box.slice(-4));//求出总的字符串的长度减去4
// alert(box.substr(-4));//同上   IE浏览器遇到负值会全部返回
// alert(box.substring(-4));//只要是负数，就会选择全部

// alert(box.slice(1,-2));//1，长度-2
// alert(box.slice(-1,2));//长度-1，2
// alert(box.substring(2,-1));//参数如果是负值，直接0（2，0），如果第二个参数比第一个小，则交换位置（0，2）
// alert(box.substr(2,-1));//第二个参数为负，直接0（2，0）






// var box = 'hello hello hello';

// alert(box.indexOf('lo'));//返回从初始位搜索lo第一次出现的位置
// alert(box.lastIndexOf('lo'));//返回从结束位置搜索lo第一次出现的的位置
// alert(box.indexOf('lo'，5));//从第五个位置开始搜索lo第一次出现的位置
// alert(box.lastIndexOf('lo',5))//从第五个位置向前搜索lo第一次出现的位置

// var boxArr = [];
// var pos = box.indexOf('l');
// while(pos>-1){
// 	boxArr.push(pos);
// 	pos = box.indexOf('l', pos+1);
// }
// alert(boxArr);







// var box = 'HeLLo';
// alert(box.toLowerCase());//全部转换成小写
// alert(box.toUpperCase());//全部转换成大写
// alert(box.toLocaleLowerCase());//本地化小写
// alert(box.toLocaleUpperCase());//本地化大写，一般来说是否本地化是一样的，只有少数几种语言有区别




// var box = 'hello';
// alert(box.match('o'));//找到o就返回o，找不到就返回null
// alert(box.search('l'));//找到o的位置
// alert(box.replace('l', 'Q'));//替换
// alert(box.split('e'));//分割成数组
// alert(box.replace(/l/g,'Q'));//利用正则表达式替换全部



//其他方法，不太重要，了解即可

// alert(String.fromCharCode(76));//静态方法，通过acssii来寻找字符
// var box = 'hello';
// alert(box.localeCompare('haha'));//box跟后面的字符串比较，如果box大返回1，相等返回0，否则返回-1



//通过js生成Html标签

var box = 'baidu';
alert(box.link('http://www.baidu.com'));
alert(box.bold());


还有很多。。。。。。。











































