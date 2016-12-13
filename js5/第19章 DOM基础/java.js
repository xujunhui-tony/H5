



// BOM 浏览器对象模型
//  DOM 文档对象模型


//节点分为三种
//元素节点   其实就是标签,<div></div>
//文本节点	其实就是标签内的纯文本,测试DIV
//属性节点	其实就是标签内的属性，id='box'

//查找元素  getElementById();参数传递一个元素的id值，这样就可以获取到该元素节点
//DOM操作必须要等HTML文档加载完毕，才可以获取
//HTMLDivElement 表示DIV的节点对象。


// var box = document.getElementById('box');
// alert(box);


// window.onload = function(){
// 	//这里存放当网页所有内容都加载完毕后，再执行的代码
// }




// window.onload = function(){
// 	var box = document.getElementById('box');
	// alert(box.tagName);//获取这个元素节点的标签名
	// alert(box.innerHTML);//获取这个元素标签里面的文本内容(包含HTML标签)
	// alert(box.id);//获取这个元素节点id属性的值，不是属性节点
	// alert(box.title);//获取title属性的值
	// alert(box.style);//获取style属性对象
	// alert(box.style.color);//获取style属性对象中color的值
	// alert(box.className);//获取class属性的值
	//以上是HTML属性的直接调用，后面还会有几种方式调用

	// alert(box.bbb);//自定义属性，直接获取，只有IE浏览器支持，如果有浏览器不支持，那么就要做兼容操作，或者尽可能不去使用

// 	box.innerHTML = '这个可以<strong>更改</strong>内容';//赋值，可以解析HTML，不是单纯的文本，包含了HTML
// }



// window.onload = function(){
// 	var li = document.getElementsByTagName('li');//参数传递一个标签名即可
	// alert(li);				//返回的是数组集合  HTMLCollection
	// alert(li.length);//返回数组的个数
	// alert(li[0]);		//li的节点对象 HTMLLIElement
	// alert(li.item(0))//结果同上
// 	alert(li[0].tagName);//
// 	alert(li[0].innerHTML);//
// }


//获取body
// window.onload = function(){
// 	var body = document.getElementsByTagName('body')[0];
// 	alert(body);
// }


// window.onload = function(){
// 	var all = document.getElementsByTagName('*');
// 	alert(all.length);//IE 浏览器会多一个节点，是把前面的文档声明也加进去了
// }



//getElementByName
// window.onload = function(){
// 	var box = document.getElementsByName('test')[0];
// 	alert(box);
// 	//IE浏览器在获取不合法的HTML的name时，会获取不到，也就是说name属性本身不是div里面的属性，所以IE就忽略掉了，表单元素用name较多
// }



// window.onload = function(){
// 	var box = document.getElementById('box');
// 	alert(box.bbb);//自定义，W3C不合法，非IE不支持，IE支持
// }




//getAttribute一般不用
// window.onload = function(){
// 	var box = document.getElementById('box');
// 	alert(box.getAttribute('style'));//非IE浏览器返回的是style字符串，IE返回的是对象，所以不兼容，用这种方法可以兼容自定义
// alert(box.getAttribute('class'));//IE无法获取//
// alert(box.getAttribute('className'));//只有IE可以获取
	// alert(box.getAttribute('onclick'));//IE7及以下会返回函数式，其他的会返回字符串
// }





// window.onload = function(){
// 	var box = document.getElementById('box2');
// 	// box.setAttribute('title','标题');  //创建一个属性和属性值
// 	box.setAttribute('align','center');
// 	box.setAttribute('style','color:red');//IE7及以下是没有效果的
// 	box.removeAttribute('style');//移除属性
// }




// window.onload = function(){
// 	var box = document.getElementById('box');
	// alert(box);
	// alert(box.nodeName);//获取元素节点的标签名，和tagName等价
	// alert(box.nodeType);//获取元素节点的类型值  1
	// alert(box.nodeValue);//元素节点本身没有内容，null
	//nodeValue本身把节点指针放在元素<div></div>上，也就是说本身没有value
	//如果要输出<div>xxx</div>中的xxx，那么就要用innerHTML
	// alert(box.innerHTML);
	// alert(box.childNodes);//NodeList集合，返回当前元素节点所有的子节点列表
	// alert(box.childNodes.length);//
	// 三个子节点为   测试DIV<em>倾斜</em>结尾
	//第一个子节点为 测试DIV  这个节点称作为 文本节点
	//第二个子节点为 <em>倾斜</em>  这个节点称作为 元素节点
	//第一个子节点为  结尾 这个节点称作为 文本节点

	// alert(box.childNodes[0]);//object Text表示一个文本节点对象
	// alert(box.childNodes[0].nodeType);//3，表示文本节点
	// alert(box.childNodes[0].nodeValue);//文本节点的文本内容
	// alert(box.childNodes[0].nodeName);//#text  文本节点没有标签名
// }




//通过判断节点的类型
// window.onload = function(){
// 	var box = document.getElementById('box');
// 	for (var i = 0; i < box.childNodes.length; i++) {
// 		if (box.childNodes[i].nodeType ===1) {
// 			alert('元素节点:'+box.childNodes[i].nodeName);
// 		} else if(box.childNodes[i].nodeType === 3){
// 			alert('文本节点:'+box.childNodes[i].nodeValue);
// 		}
// 	}
// }


// window.onload = function(){
// 	var box = document.getElementById('box2');
// 	// box.innerHTML = 'he<strong>加粗</strong>he';
// 	// box.nodeValue="第二种方法测试";//没出错，不会赋值
// 	box.childNodes[0].nodeValue = "这种方<strong>加粗</strong>法才对";
// }



// window.onload = function(){
// 	var box = document.getElementById('box');
	// alert(box.childNodes[0].nodeValue);//获取第一个子节点
	// alert(box.childNodes[box.childNodes.length - 1].nodeValue);//获取最后一个子节点

	// alert(box.firstChild.nodeValue);//获取第一个子节点
	// alert(box.lastChild.nodeValue);//获取最后一个子节点

	// alert(box.ownerDocument);//HTMLDocument和下面这个一样，返回根节点
	// alert(document);
	// 	alert(box.ownerDocument.nodeName);//#document
	// 	alert(box.ownerDocument.nodeType);// 9


	// alert(box.parentNode);//HTMLBodyElement
	// alert(box.firstChild.nextSibling.nodeName);//下一个同级节点的标签名

	// alert(box.lastChild.previousSibling.nodeName);//上一个同级节点的标签名

	// alert(box.attributes);//名称的属性节点地图，集合数组，保存着这个元素节点的属性列表
	// alert(box.attributes[0]);//Attr,属性节点
	// alert(box.attributes[0].nodeType);//2  属性节点的类型值
	// alert(box.attributes[0].nodeValue);//abc()  第一个属性的属性值
	// alert(box.attributes[0].nodeName);//第一个属性的属性名
	//遍历的时候从后往前



	// alert(box.childNodes.length);


	// alert(filterWriteNode(box.childNodes).length);
	// alert(removeWriteNode(box.childNodes).length);
	// alert(removeWriteBox(box).firstChild.nodeName);


// }

//忽略空白字符
// function filterWriteNode(node){
// 	var ret = [];
// 	for (var i = 0; i < node.length; i++) {
// 		if (node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)) {
// 			continue;
// 		}else {
// 			ret.push(node[i]);
// 		}
// 	}
// 	return ret;
// }

//移除空白字符
// function removeWriteNode(node){
// 	for (var i = 0; i < node.length; i++) {
// 		if (node[i].nodeType === 3 && /^\s+$/.test(node[i].nodeValue)) {
// 			node[i].parentNode.removeChild(node[i]);
// 		}
// 	}
// 	return node;
// }



//移除空白节点
function removeWriteBox(box){
	for (var i = 0; i < box.childNodes.length; i++) {
		if (box.childNodes[i].nodeType === 3 && /^\s+$/.test(box.childNodes[i].nodeValue)) {
			box.childNodes[i].parentNode.removeChild(box.childNodes[i]);
		}
	}
	return box;
}







// window.onload = function(){
	// var box = document.getElementById('box');//
	// var p = document.createElement('p');//只是创建了一个元素节点p，还没有添加到文档中去，只是驻留在内存中
	// box.appendChild(p);			//将新节点p添加到id=box的div子节点列表的末尾上


	// var text = document.createTextNode('测试DIV4');
	// p.appendChild(text);//把文本加到p里面
	// box.appendChild(text);
	// document.getElementsByTagName('body')[0].appendChild(text);


	// var box = document.getElementById('box');
	// var p = document.createElement('p');
	// // box.parentNode.insertBefore(p,box);//box.parentNode 其实指的就是body，在box的父节点加一个p，就是在box前面加一个元素节点
	// // box.parentNode.appendChild(p);//在box节点后面添加元素节点


	// insertAfter(p,box);

// }



// function insertAfter(newElement,targetElement){
// 	//得到父节点，就是body,但是不能直接使用body，如果层次较多，父节点不一定是body
// 	var parent = targetElement.parentNode;

// 	if (parent.lastChild===targetElement) {//如果添加的是box节点的最后一个节点
// 		parent.appendChild(newElement,targetElement);
// 	} else {
// 	//span节点的前面添加，就可以用insertBefore,用nextSibling获取span
// 	parent.insertBefore(newElement,targetElement.nextSibling);
// 	}

// }






// window.onload = function(){
// 	// var span = document.getElementsByTagName('span')[0];
// 	// var em = document.createElement('em');
// 	// span.parentNode.replaceChild(em,span);//替换节点


// 	//克隆
// 	// var box = document.getElementById('box');
// 	// var clone =  removeWriteBox(box).firstChild.cloneNode(true);//移除空白节点
// 	// //克隆一个节点，如果是true就是把标签内的文本也克隆，如果是false只克隆标签
// 	// box.appendChild(clone);



// 	var box = document.getElementById('box');
// 	// removeWriteBox(box).removeChild(box.firstChild);//删除第一个子节点
// 	box.parentNode.removeChild(box);//删除整个box
// }








































































