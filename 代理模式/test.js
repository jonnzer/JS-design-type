/**
 * 代理模式：
 *  （1）保护代理：作为筛选用
 *  （2）虚拟代理：把一些开销很大的对象，延迟到 真正需要它的时候才去创建。（图片预加载）
 */

 // http://e.hiphotos.baidu.com/image/pic/item/80cb39dbb6fd526684327508a718972bd4073694.jpg

// var myImage = (function () {
//     var imgNode = document.createElement('img')
//     document.body.appendChild(imgNode)
//     return{
//         setSrc: function (src) {
//             imgNode.src = src
//         }
//     }
// })()



// myImage.setSrc('http://e.hiphotos.baidu.com/image/pic/item/80cb39dbb6fd526684327508a718972bd4073694.jpg')

// --------------------------------------------------⬆️ 原始1----------------------------------------------------------


// var myImage = (function () {
//     var imgNode = document.createElement('img')
//     document.body.appendChild(imgNode)
//     return{
//         setSrc: function (src) {
//             imgNode.src = src
//         }
//     }
// })()

// var proxyImage = (function() {
//     var img = new Image()
//     img.onload = function () {      // onload 事件会在页面或图像加载完成后立即发生。
//         myImage.setSrc(this.src)
//     }
//     return {
//         setSrc: function (src) {
//             myImage.setSrc('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521629427380&di=f1932f3a8ede6a8ec01dc51d845ec179&imgtype=0&src=http%3A%2F%2Fupload.chinaz.com%2F2015%2F0426%2F1430007062731.gif')
//             img.src = src
//         }
//     }
// })()

// proxyImage.setSrc('http://e.hiphotos.baidu.com/image/pic/item/80cb39dbb6fd526684327508a718972bd4073694.jpg')

// --------------------------------------------------⬆️ 演变1----------------------------------------------------------

// 不用代理模式的替换图片 (中间介质 onload)

// var myImage = (function () {
//     var imgNode = document.createElement('img')
//     document.body.appendChild(imgNode)
//     var img = new Image()

//     img.onload = function (){
//         imgNode.src = img.src
//     }
//     return {
//         setSrc: function (src) {
//             imgNode.src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521629427380&di=f1932f3a8ede6a8ec01dc51d845ec179&imgtype=0&src=http%3A%2F%2Fupload.chinaz.com%2F2015%2F0426%2F1430007062731.gif'
//             img.src = src
//         }
//     }
// })()
// myImage.setSrc('http://e.hiphotos.baidu.com/image/pic/item/80cb39dbb6fd526684327508a718972bd4073694.jpg')

// --------------------------------------------------⬆️ 演变2----------------------------------------------------------

/**
 * 单一职责：，就一个类(通常也包括对象和函数等)而言，应该仅有一个引起它变 化的原因。
 */ 

// 同步请求文件id

// var syFile = function (id) {
//     console.log('开始同步文件，id为'+ id)
// }

// var proxySyFile = (function(){
//     var cache = [],timer;
//     return function(id) {
//         cache.push(id)
//         if (timer){
//             return;
//         }
//         timer = setTimeout(function(){
//             syFile(cache.join(','))
//             clearTimeout(timer)
//             timer = null
//             cache.length = 0
//         },2000)
//     }
// })()

// --------------------------------------------------⬆️ 演变3----------------------------------------------------------

/** 
 * 缓存乘积
 * 
 *
 */ 
var mult = function () {
    console.log('开始计算乘积');
    var a  = 1;
    for (let i = 0; i < arguments.length; i++) {
            a = a * arguments[i]
    }
    console.log(a)
    return a   
}

mult(2,3)

// 加入缓存
var proxyMult = (function (){
    var cache = {}
    return function (){
        var args = Array.prototype.join.call(arguments,',')
        if (args in cache ){
            return cache[args]
        }
        return cache[args] = mult.apply(this,arguments)
    }
})()
proxyMult(2,3,4)
proxyMult(2,3,4)
// --------------------------------------------------⬆️ 演变4----------------------------------------------------------
