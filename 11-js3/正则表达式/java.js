
// var box =  new RegExp('box');//第一个参数是模式字符串
// alert(box);//两个反斜杠表示正则表达式的字面量表示法


// var box =  new RegExp('box','ig');//第二个参数可选，模式修饰符
// alert(box);//

//  i代表忽略大小写，g全局匹配，m多行匹配 

// var box = /box/ig;//使用字面量的正则，后面带的为修饰符



// var pattern = new RegExp('box');
// var box = 'Box';
// alert(pattern.test(box));



// var pattern = /Box/i;//不区分大小写匹配
// var box = 'this is a box!';//一句英文
// alert(pattern.test(box));//字符串中是否包含模式中的正则

// var pattern = /Box/i;
// var box = 'box';
// alert(typeof pattern.exec(box));//返回数组



// var pattern = /box/i;//不开启全局的话，匹配到第一个字符串返回数组
// var str = 'This is a Box,That is a box';
// // alert(str.match(pattern));

// var box = str.match(pattern);

// alert(box[1])//证明box是数组



// var pattern = /box/ig;
// var str = 'this is a box, That is a Box';
// alert(str.search(pattern));//返回的第一个匹配的位置，从0开始，无需g全局，如果查找不到返回-1


// var pattern = /box/ig;
// var str = 'This is a box, That is a Box';
// alert(str.replace(pattern,'hello'));



// var pattern = /box/i;
// var str = 'this is a box, that is a box';
// alert(str.split(pattern));


// var pattern = /Baidu/ig;
// var box = 'this is a baidu Baidu,that is a baidU';
// pattern.test(box);
// alert(RegExp.input);
// alert(typeof RegExp.leftContext);
// alert(RegExp.rightContext);
// alert(RegExp.lastMatch);



// var pattern = /box/g;
// alert(pattern.global);



// var pattern = /b.du/;//点符号表示匹配除了换行符之外的任意字符
// var str = 'bodu';
// alert(pattern.test(str));

// var pattern = /bo*du/;//o*, 表示0个，1个，或者多个o
// var str = 'bdu';
// alert(pattern.test(str));





// var pattern = /bo+du/;//o+, 表示至少一个o
// var str = 'boooodu';
// alert(pattern.test(str));




// var pattern = /bo?du/;//o+, 表示匹配一个或0个 
// var str = 'boooodu';
// alert(pattern.test(str));


// var pattern = /bo{2,4}du/;//o+, 表示匹配至少两个，最多四个o    {3}只能限定为3个
// var str = 'boodu';
// alert(pattern.test(str));



// var pattern = /bo{2,}du/;//o+, 表示匹配2或2个以上
// var str = 'boodu';
// alert(pattern.test(str));




// var pattern = /[a-z0-9]oodu/;//[a-z]表示26个小写字母，任意一个都可以匹配
// var str = '8oodu';
// alert(pattern.test(str));




// var pattern = /[^0-9]oodu/;//[^0-9]表示非0-9之间的任意字符
// var str = '8oodu';
// alert(pattern.test(str));




// var pattern = /^[0-9]oodu/;//加在斜杠后面，不是中括号里面 ，代表行首匹配
// var str = '8oodu';
// alert(pattern.test(str));



// var pattern = /^[0-9]+oodu/;//
// var str = '88888oodu';
// alert(pattern.test(str));



// var pattern = /\woodu/;//    \w代表数字，字母，下划线     \W代表非数字字母下划线
// var str = '8oodu';
// alert(pattern.test(str));


// var pattern = /^[a-z]8oodu[0-9]$/;//    匹配行首和行尾
// var str = 'c8oodu7';
// alert(pattern.test(str));



// var pattern = /bai du/;//直接使用空格匹配
// var str = 'bai du';
// alert(pattern.test(str));


// var pattern = /bai\sdu/;//表示空格匹配
// var str = 'bai du';
// alert(pattern.test(str));



// var pattern = /baidu\b/;//表示匹配边界
// var str = 'baidu';
// alert(pattern.test(str));






// var pattern = /baidu|xinlang|souhu/;//表示匹配或选择模式
// var str = 'this is a baidu';//匹配概念，不是相等
// alert(pattern.test(str));




// var pattern = /(baidu){4,8}/;//分组，可以看成一个字符
// var str = 'baidubaidubaidubaidu';//表示baidu4-8次
// alert(pattern.test(str));



// var pattern = /8(.*)8/;
// var str = 'this is a 8google8';
// pattern.test(str);
// alert(RegExp.$1);//RegExp.$1表示获取模式中第一个分组对应的匹配字符串




// var pattern = /8hello8/;
// var str = 'this is hello';
// document.write(str.replace(pattern,'<strong>$1</strong>'));//得到替换的字符串输出


// var pattern = /(.*)\s(.*)/;
// var str = 'baidu google';
// alert(str.replace(pattern,'$1,$2'));



// var pattern = /[a-z]+/;   //这里使用了贪婪模式，所以所有的字符串变成了1
// var str = 'asadsdas';
// alert(str.replace(pattern, '1'));




// var pattern = /[a-z]+?/;   //这里使用了惰性模式，只有第一个字符变成了1，后面没有匹配
// var str = 'asadsdas';
// alert(str.replace(pattern, '1'));





// var pattern = /8(.*)8/;//使用了贪婪
// var str = '8baidu8 8baidu8 8baidu8';//匹配到了baidu8 8baidu8 8baidu
// document.write(str.replace(pattern,'<strong>$1</strong>'));



// var pattern = /8(.*?)8/;//禁止了贪婪，使用了惰性
// var str = '8baidu8 8baidu8 8baidu8';//匹配到了baidu8 8baidu8 8baidu
// document.write(str.replace(pattern,'<strong>$1</strong>'));





// var pattern = /8([^8]*?)8/g;//另一种禁止贪婪的方法，屏蔽8的匹配，也就是两边包含字符
// var str = '8baidu8 8baidu8 8baidu8';//匹配到了baidu8 8baidu8 8baidu
// document.write(str.replace(pattern,'<strong>$1</strong>'));



// var pattern = /^[a-z]+\s[0-9]{4}$/;
// var str = 'google 2012';
// alert(pattern.exec(str));//返回一个包含字符串的数组


// var pattern = /^[a-z]+/;//只匹配字母
// var str = 'google 2012 baidu';
// alert(pattern.exec(str));//返回一个包含字符串的数组



// var pattern = /^([a-z]+)\s([0-9]{4})$/;//使用分组模式
// var str = 'baidu 2012';
// var a = pattern.exec(str);
// alert(a[0]);//返回匹配到的整个字符串
// alert(a[1]);//返回匹配到的第一个分组的字符串
// alert(a[2]);//返回匹配到的第二个分组的字符串


// var pattern = /(\d+)([a-z]+)/;//捕获性分组，所有的分组都捕获返回
// var str = '123abc';
// var a = pattern.exec(str);
// alert(a[0]);
// alert(a[1]);
// alert(a[2]);


// var pattern = /(\d+)(?:[a-z]+)/;//非捕获性分组，只要在不需要捕获返回的分组加上?:即可 
// var str = '123abc';
// alert(pattern.exec(str));


// var pattern = /(a?(b?(c?)))/;//嵌套分组，从外往里获取
// var str = 'abc';
// alert(pattern.exec(str));
// 第一步 a[0] 整个匹配到的字符串abc
// 第二步 a[1] 匹配到第一个分组 (a?(b?(c?))) abc
// 第三步 a[2] 匹配到第二个分组 (b?(c?))  bc
// 第四步 a[3] 匹配到第三个分组 (c?)  c




// var pattern = /bai(?=du)/;//bai后面必须是du才能返回bai
// var str = 'baidu';
// alert(pattern.exec(str));//返回的是bai ，叫做前瞻性捕获





// var pattern = /\[/;//用\符号来转义正则里面的特殊字符，才能匹配
// var str = '[';
// alert(pattern.test(str));




// var pattern = /^\d+/gm;//限定了首匹配，并且开启了换行
// var str = '1.baidu\n2.souhu\n3.ali\n';
// alert(str.replace(pattern, '#'));




// var pattern = /[1-9][0-9]{5}/;//邮政编码  第一位不能为0，共6位
// var str = '220002';
// alert(pattern.test(str));



// var pattern = /^\w+\.(zip|rar|gz)$/;// 检查文件压缩包  加上^来限定首行
// var str = 'hehe.zip';//文件名  .   后缀名
// alert(pattern.test(str));



// var pattern = /\s/g;//替换空格
// var str = '111 222 333 444';
// alert(str.replace(pattern,''));




// var pattern = /^\s+/;//去掉行首行尾空格
// var str = '   hello   ha     ';
// var result = str.replace(pattern,'');
// pattern = /\s+$/;
// result = result.replace(pattern,'');
// alert('|'+result+'|');




// var pattern = /^\s+(.+?)\s+$/;//(.+)是贪婪模式

// var str = '   hello   ha     ';
// var result = pattern.exec(str)[1];
// alert('|'+result+'|');





// var pattern = /^\s+(.+?)\s+$/;//(.+)是贪婪模式

// var str = '   hello   ha     ';
// var result = str.replace(pattern,'$1');//使用分组获取
// alert('|'+result+'|');



// var pattern = /^([\w\-\.]+)@([\w\-]+)\.([a-zA-Z]{2,4})$/;
// var str = 'shagnguan.uplooking@qq..com';

// alert(pattern.test(str));
















































































































