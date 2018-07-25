var Singleton = function (name) {
    this.name = name
    this.instance = null
}
Singleton.prototype.getName = function () {
    alert(this.name)
}
Singleton.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Singleton (name)
    }
    return this.instance
 }

 var a = Singleton.getInstance('svn1')
 var b = Singleton.getInstance('svn2')

//  alert(a === b)

// 单例
// var CreateDiv = function (html) {
//     this.html = html
//     this.init()
// }
// CreateDiv.prototype.init = function () {
//     var div = document.createElement('div')
//     div.innerHTML = this.html
//     document.body.appendChild(div)
// }
// var proxySCreateDiv = (function() {
//     var instance;
//     return function (html) {
//         if (!instance) {
//             instance = new CreateDiv(html)
//         }
//         return instance
//     }
// })()

// var a = new proxySCreateDiv('svn1')
// var b = new proxySCreateDiv('svn2')



/**
 * 自执行函数，return函数时传参，等于构造新的自执行函数传的参
 */
 
// var testFun = (function () {
//     return function (params) {
//         console.log(params);
//     };
// })();
// var c = new testFun([1, 2]);



/*使用闭包封装私有变量*/
// var user = (function (){
//     var _name = 'svn'
//     var _age = 123
//     return {
//         getUserInfo: function () {
//             return _name + '-'+ _age
//         }
//     }
// })();
