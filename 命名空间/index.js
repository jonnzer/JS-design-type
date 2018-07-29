var myApp = {}
myApp.nameSpace = function (name) {
    var parts = name.split('.')
    var current = myApp
    for (var i in parts) {  // for in ... in 前为 index
        if (!current[parts[i]]) {
            current[parts[i]] = {} // 让新建的key（也是传进去的值）在current对象里 对应的的value为空对象
        }
        current = current[parts[i]]
    }
}
myApp.nameSpace('event')
myApp.nameSpace('dom.style')

// https://www.cnblogs.com/kaidarwang/p/6559123.html
// for循环对于js变量的影响。
// 这段函数尚未搞懂。