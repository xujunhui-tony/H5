
// var person = {
// 	name:'zhangsan',
// 	age:18
// }

// alert(person.name);




// var array = [1,'hehe','张三'];









































var person = {
	name:'zhangsan',
	age:16,
	gender:'男',
	array:[1,3,5,7],
	student:{
		grade:1,
		number:33
	}
}
alert(person.student.grade);








// var box = new Date();//创建了一个日期对象，构造方法里面可以传参数，指定时间，如果不传，默认当前时间
// alert(box);


// alert(Date.parse('8/31/2016'));//返回的是毫秒数

// var date = new Date(Date.parse('8/31/2016'));//把毫秒数转成看得懂的时间
// alert(date);


// var box = new Date('8/31/2016');
// alert(box);


// alert(Date.parse());//没有传入起格式参数，会返回NaN

// alert(new Date('dsadfa124234sd'));//火狐返回无效的日期，其他浏览器各不相同


// var box = new Date('January 42,2016');
// alert(box);



// alert(Date.UTC());//必须传入年份和月份，如果不传就会出现各种错误


// alert(Date.UTC(2016,8));//返回的毫秒数


//UTC 世界协调时间
// var box = new Date(Date.UTC(1970,7));
// alert(box);



// var box = new Date('8/31/2016');
// // alert(box);
// alert(box.toString());
// alert(box.toLocaleString());//本地化
// alert(box.valueOf());//返回的毫秒数



// var box = new Date();
// alert(box.toDateString());



































