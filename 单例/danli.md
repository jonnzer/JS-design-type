### 单例模式
#### 定义：保证一个类仅有一个实例，并提供一个全局访问点
### 简单的实现
```js
    用一个变量标记当前是否为某个类创建过对象
    var Single = function (name) {
        this.name = name
        this.instance = null
    }
    Single.prototype.getName = function () {
        alert (this.name)
    }
    Single.getInstance = function (name) {
        if (!this.instance) {
            this.instance = new Single (name)
        }
        return this.instance
    }
    var a = Single.getInstance ('sven1')
    var b = Single.getInstance ('sven2')
    alert (a === b)
```

### 依靠闭包缓存和代理函数 实现闭包 这段函数是给页面添加div 
```js
    var CreateDiv = function (html) {
    this.html = html
    this.init()
}
CreateDiv.prototype.init = function () {
    var div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
}
var proxySCreateDiv = (function() {
    var instance;
    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html)
        }
        return instance
    }
})()

var a = new proxySCreateDiv('svn1')
var b = new proxySCreateDiv('svn2')
```