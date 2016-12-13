# 尚观科技H5课程

[TOC]

 ## 动画

### 显示，隐藏动画效果

hide([slow\normal\fast\number],fun); Number代表毫秒数
show([slow\normal\fast\number],fun);
toggle([slow\normal\fast\number],fun);

**html代码**

```html
<input type="button" class="hide" value="hide">
<input type="button" class="show" value="show">
<input type="button" class="toggle" value="toggle">
<div class="box" style="height: 200px;width: 200px;background: red;"></div>
```

**js代码**

```javascript
	$(function(){
		$(".hide").click(function(){
			$(".box").hide("slow");
		})
		$(".show").click(function(){
			$(".box").show("fast");
		})
		$(".toggle").click(function(){
			$(".box").toggle(2000,function(){//回调函数
				alert("动画完成");
			});		
		})
	})
```

```java
//让三个盒子依次显示 方法一
$(".show").click(function(){
	$(".box").eq(0).show("fast",function(){
			$(".box").eq(1).show("fast",function(){
				$(".box").eq(2).show("fast",function(){
			});
		});
	});
})
  
//让三个盒子依次显示 方法二
 $(".show").click(function(){  //运用递归
	 $(".box").first().show("fast",function test(){
		 $(this).next().show("fast",test)
	 })
 })
```

**系统自带动画效果**

```javascript
$(".hide").click(function(){  
	$(".box").slideUp();//向上隐藏
})
$(".show").click(function(){  
	$(".box").slideDown();//向下显示
})
$(".toggle").click(function(){  
	$(".box").slideToggle();//交替显示，用法同上
})

//淡入淡出
$(".box").fadeIn("slow",function(){});
$(".box").fadeOut("slow",function(){});
$(".box").fadeToggle("slow",function(){});
```

自定义动画效果

animate({key:value,key:value,….},number,function);

```javascript
$(".button").click(function(){
	$(".box").animate({
		width:"300px",
		height:"300px",
		opacity:0.5
	});
})

$(".button").click(function(){
	$(".box").animate({
		// 每次点击都会向右移动100px
		left:"+=100px"   
	});
})

// 动画叠加 第一种方法
$(".button").click(function(){
	$(".box").animate({width:"300px"},function(){
		$(".box").animate({height:"300px"},function(){
			$(".box").animate({fontSize:"30px"},function(){
				$(".box").animate({opacity:0.5},function(){
							
				})
			})
		})
	})
})

// 连缀
$(".button").click(function(){
	$(".box").animate({width:"300px"})
	.animate({height:"300px"})
	.animate({fontSize:"30px"})
	.animate({opacity:0.5});
})

// 连缀可能出现的问题
// 如果用queue的话，后面就不会再执行，想再执行的话，就要加next
$(".button").click(function(){
			$(".box").slideUp("slow").slideDown("slow").queue(function(next){  
		$(this).css('background', 'yellow');
		next();
	}).hide("slow");			
})
```



## ajax

ajax主要应用在数据异步请求，局部更新数据，提升用户体验

不用ajax技术，如果要提交数据与服务器之间数据通信，会导致整张页面提交，用户体验差。

1.load(url,data,callback)方法

2.get请求

3.post请求