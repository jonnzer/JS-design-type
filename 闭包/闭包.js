// 闭包；变量的搜索是从内到外而非从外到 内的。

var func = function(){ var a = 1;
    return function(){ a++;
    alert ( a );
} };
var f = func();
f(); // 输出:2 
f(); // 输出:3 
f(); // 输出:4
f(); // 输出:5

var arr = new Array()
