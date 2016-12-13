

//通过用英文常亮来代替阿拉伯数字，使得判断更加的清晰
// if (typeof Node ==='undefined') {
// 	//创建一个全局的Node
// 	window.Node = {
// 		ELEMENT_NODE:1,
// 		TEXT_NODE:2
// 	}
// } 

// alert(Node);//IE不支持
window.onload = function(){
	// alert(Node.ELEMENT_NODE);//表示元素节点的类型值
	// alert(Node.TEXT_NODE);//文本节点的类型值
	// alert(document);		//HTMLDocument
	// alert(document.nodeType);// 	9
	// alert(document.nodeValue);//null
	// alert(document.nodeName);//#document
	// alert(document.childNodes[0]);//DocumentType  IE理解为注释
	// alert(document.childNodes[0].nodeType);//  10  IE理解为8
	// alert(document.childNodes[0].nodeName);//html  IE为#comment
	// alert(document.documentElement);//HTMLHtmlElement
	// alert(document.body);//获取body

	// alert(document.title);//获取和设置标题
	// alert(document.URL);
	// alert(document.domain);//获取域名
	// alert(document.referrer);//获取上一个url




	// var box = document.getElementById("box");
	// alert(box.childNodes.length);
	// var text1 = document.createTextNode("Mr.");
	// var text2 = document.createTextNode("xu");
	// box.appendChild(text1);
	// box.appendChild(text2);
	// box.normalize();//合并同一级别的文本节点

	// alert(box.childNodes.length);


}


window.onload = function(){
	// var box = document.getElementById("box");
	// box.childNodes[0].splitText(3);//把前三个字符分离成新节点
	// box.childNodes[0].deleteData(0,3);//删除从0位置的三个字符
	// box.childNodes[0].insertData(0,"hello");//从第0个位置插入字符
	// box.childNodes[0].replaceData(0,2,"hello");//从第0个替换前两个字符
	// alert(box.childNodes[0].substringData(0,2));//截取字符串，从第0开始，截取两个

	// alert(box.childNodes.length);
}



window.onload = function(){
	// var box1 = document.getElementById("box1");
	// alert(box1.firstChild);//Comment
	// alert(box1.firstChild.nodeType);//8
	// alert(box1.firstChild.nodeValue);//我是注释

	// var c = document.getElementsByName("!");//IE浏览器,IE支持，其他不支持
	// alert(c[1].nodeValue);
}


window.onload = function(){
	// alert(document.compatMode);
	// document.getElementById("box").scrollIntoView();//将指定的节点滚动到可视范围内
	// var box = document.getElementById("box3");
	// alert(box.childNodes.length);//  7  因为有空白节点
	// alert(box.children.length);//忽略空白节点
	// alert(box.children[0].nodeName);

}



// window.onload = function(){
// 	var box = document.getElementById("box");
// 	var p = box.firstChild;
// 	alert(box.contains(p));//判断box是不是p的父节点
// }



window.onload = function(){
	var box = document.getElementById("box4");
	// alert(box.innerText);			//获取文本并过滤掉HTML,直接删掉
	// box.innerText = "<b>尚观</b>";//赋值并转义HTML


}




















































