# 尚观科技H5课程

## 本节课主要内容

1. 应用jQuery设置元素及内容
2. 应用jQuery操作元素属性
3. 应用jQuery操作元素样式
4. jQuery中css方法应用

**DOM基础操作**

```javascript
alert($("#box").html());//获得html内容，包括标签
$("#box").html('<em>hello</em>') //设置html内容，会覆盖掉原来的内容
alert($("#box").text()); //获取文本内容，不包含标签
$("span").text("<em>这是新的内容</em>");//更改文本内容
alert($("input").val());  //获得表单中文本内容
$("input").val('hehe');  //更改表单中的文本内容
$("input").val(['男','上学']);//默认选择表单的value
```

**DOM属性及属性值操作**

```javascript
alert($("div").attr('id'));  //获取属性值
$("div").attr('title', 'hehe');  //设置属性值
$("div").attr({"class": 'box',"title": 'hello'});//设置多个属性，不建议设置class和id
$("div").attr("title",function(index,value){
	  return '这是title'+index+value;
});//index代表是哪个div,value代表是之前的属性title的值
$("div").removeAttr("title");//删除属性
```

**CSS样式及操作**

```javascript
alert($("#box").css("color"));//获取元素的css样式的值
$("#box").css("color","blue") //设置元素的CSS样式的值，优先级比较高获取元素的多个CSS样式的值
var box = $("#box").css(['width','height','color']);
for (var i  in box) {//js方式遍历
    alert(i+':'+box[i]);
}
$.each(box,function(attr,value){  //jQuery方式遍历
    alert(attr+':'+value);
})
			$("#box").css("color","red").css("height","100");//给一个元素设置多个CSS样式
			$("#box").css({"color":"blue","width":"100px","height":"100px;"})//设置多个css样式，第二种方式
$("div").css('width',function(index,value){//在原来的属性值上加值
    if (index==0) {
    return parseInt(value)+200+'px';
    }
});


// CSS样式操作2
$("div").addClass("box box1");  //给div添加一个类，样式写在css样式里面
$("div").removeClass("box");//删除一个类
$("div").toggleClass('box');//样式切换,用点击事件可以测试
$("div:nth-child(2)").click(function() {
	$("div:nth-child(2)").toggleClass('pox');
});


//获取css宽度
alert($("div:first").css("width"));
alert($("div:first").width());
$("div:first").width(function(index,value){//index代表div索引,value代表原来的值
	return value+300;
})
alert($("div").innerWidth());//加上内边距的宽
alert($("div").outerWidth(true));//加上内外边距的宽


//div当前位置 距离原点
alert($("div").offset().left);
alert($("div").offset().top);
// 相对于父元素的坐标  要给父元素进行定位
alert($("span").position().left);
alert($("span").position().top
alert($(window).scrollTop());//滚动到距顶部的距离
$(window).scrollTop(0);//移动到顶端
```

**DOM节点操作**

1. 应用jQuery创建节点
2. 应用jQuery插入节点
3. 应用jQuery包裹节点

```javascript
//创建节点，插入节点
var fox = $("<div id='fox'></div>");//创建一个节点
$('body').append(fox);//插入到body标签的后面
$('p').append(function(index,html){ //index代表p标签索引，html代表之前的内容
	return "<strong>拼接内容</strong>"+html;
});
$("span").appendTo("p");  //把span标签拼接到p标签的后面

$("body").prepend("<p>新加的段落</p>");//添加到标签的后面，用法同上

$("p").after('<span>兄弟节点</span>');//在后面新增加一个兄弟节点
$("p").after(function(index,html){
	return '<span>兄弟节点</span>';
})
$("p").before("<span>兄弟节点</span>");//在前面新增加一个兄弟节点，用法同上

$("span").insertAfter("p");//把span标签放到p标签的后面
$("span").insertBefore("p");//把span标签放到p标签的前面


$("p").wrap("<div></div>");//在p标签的外面加一个包裹一个div标签
$("p").wrap("<div>");//如果没有内容的话，效果同上
$("p").wrap("<div>abc</div>");//在p标签的外面加一个包裹一个div标签,abc在div后面
$("p").wrap("<div><em>abc</em></div>");
$("p").unwrap();   //移除包裹，每次移除一层，紧挨着的一层
$("p").wrapAll('<strong></strong>');//把所有的p标签包裹在一块
$("p").wrapInner('<strong></strong>');//内部包裹一个标签
$("p").clone().appendTo('body');//克隆一个p标签，拼接到body的后面
$("p").clone(true).appendTo('body');//true代表拷贝事件，比如点击事件
$("p").remove();//移除所有的p节点
$("p").remove().appendTo("body");//移除之后再添加，不会把之前的操作事件也给添加上
$("p").detach().appendTo("body");//删除之后再添加，事件依然存在
$("p").empty();//清除p标签元素的内容
$("p").replaceWith('<div></div>');//把p标签替换成div标签,整体替换
```

## 表单选择器

1. 常规选择器
2. 表单选择器
3. 表单过滤器

```javascript
alert($("input").val());//默认选择第一个文本框
alert($("input[type=password]").val());//通过属性值来取
alert($("input[name=pass]").val());//通过属性值来取
alert($(":input[type=text]").val());// (input,textarea,select,button)元素
:text 单行文本框
:password  密码框
:radio  单选框
:checkbox  复选框  
:submit提交按钮
:reset重置按钮
:image 图片按钮
:button 普通按钮
:file 文件按钮
alert($(":radio").eq(0).val());  //获得单选按钮的第一个值
alert($("form :enabled").length);//可用的表单控件，中间加空格
alert($("form :disabled").length);//不可用的表单控件，中间加空格
alert($("form :checked").length);//选中的表单控件，中间加空格
alert($("form :selected").length);//选中的表单控件，中间加空格
```

## 基础事件

```javascript
$("button").bind('click',function(){
	alert(111);
});// bind()是jQuery专门用来事件绑定的，第一个参数代表事件名称，第二个参数代表事件
$("button").bind('mouseover mouseout',function(){
	alert('移动');
});

$("button").bind({  //添加不同的事件
	mouseover:function(){
		alert("mouseover");
	},
	mouseout:function() {
		lert("mouseout");
	}			
});

// 解绑
$("button").unbind();//移除所有的绑定事件
$("button").unbind("mouseout");//移除指定绑定事件

$(window).resize(function(){  //当窗口大小变化的时候触发事件
	alert(11);
})
$(window).scroll(function(){  //当窗口滚动的时候触发事件
	alert(11);
})

$("input").select(function(){  //选中输入框里面的内容时
	alert();
})
$("input").change(function(){  //更改输入框里面的内容，回车触发
	alert();
})
$("form").submit(function(){//点击表单的提交按钮触发的事件
	alert("点击提交");
})


$("#box").mouseover(function(){
	$(this).css('background', 'green');
}).mouseout(function() {
	$(this).css('background','blue');
});

$("#box").mouseenter(function() {//区别mouseover
	$("span").html(function(index,value){
		return value+1;
	})
})

$("input").keydown(function() {
	alert("按下");
});

$("input").keypress(function() {
	alert("按下");
});

$("input").focus(function() {
	alert("获得焦点");
});

$("input").blur(function() {
	alert("失去焦点");
});
$("div").focusin(function() {//父元素为div
	alert("获得焦点");
});
$("div").focusout(function() {//父元素为div
	alert("失去焦点");
});
```

## 事件对象

```javascript
$("button").bind('click', function(event) {
	// alert(event.type);//获得绑定事件类型的字符串名称
	// alert(event.target);  //获得触发元素的DOM对象
	// alert(event.currentTarget);// 获取监听元素的DOM对象，等同于this
});


$("div").bind('click',function(event){
	alert(event.target);  //currentTarget区别
	alert(event.currentTarget);
})

$("div").bind('mouseover',function(event){
	alert(event.relatedTarget);  // 事件之前的上一个DOM对象
})

$("div").bind('mouseout',function(event){
	alert(event.relatedTarget);  // 事件下一个DOM对象
})
		
$("button").bind('click',111,function(event){
	// alert(event.data);   //获得参数的内容，可以传任何数值
	// alert(event.timeStamp);   //事件触发的时间戳
});


$(document).bind('click',function(event){
	alert(event.pageX);  //获取相对于页面原点的坐标
	alert(event.screenX);  //获取相对于显示器原点的坐标(非jQuery封装)
	alert(event.clientX);  //获取相对于视口的坐标
	alert(event.which);//鼠标左右键和滚轮(132)
	alert(event.shiftKey);//  是否按下shift点击
	alert(event.altKey);
	alert(event.ctrlKey);
	alert(event.metaKey);    command
})


// 事件对象2
// 事件冒泡，子元素与父元素绑定相同的事件，激发子元素的事件，会连带父元素相同的事件也被激发，
$("div").bind("click",function(event){
	event.stopPropagation();  //阻止事件传递 
	alert("div");
})
$("span").bind("click",function(event){
	event.stopPropagation();
	alert("span");
})
$(document).bind("click",function(){
	alert("document");
})

$("a").bind("click",function(event){
event.preventDefault();//阻止默认行为
	alert("baidu");
	alert(event.isDefaultPrevented());//是否调用了阻止默认行为的方法
	alert(event.isPropagationStopped());//是否调用了阻止事件传递的方法
	return false;   //阻止默认行为和事件传递
})


$("input").click(function(){
	alert('click button');
})
$("input").trigger("click");//浏览器模拟点击事件
也可以简写模拟事件

$("input").click(function(event,v1,v2){
	alert(v1+":"+v2);
}).trigger("click",["123",444]);//中括号不代表数组，仅仅代表多个参数

$(".button").bind("click",function(){
	alert("hehehe");
})
$(".box").bind("click",function(){
	alert("hehehe");
})

		// 找到父元素下的特定子元素
$(".box").on("click",".button",function(){
	alert("hehe");
})

		// 只执行一次
$(".box").one("click",".button",function(){
	alert("hehe");
})

```

