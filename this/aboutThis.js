


// 1  作为对象调用
// var obj = {
//     a: 1,
//     getA: function () {
//         console.log(this === obj);
//         console.log(this.a);
        

//     }
// }
// obj.getA()





// 2 作为普通函数调用
// window.name = 'gName'
// var getName = function () {
//     return this.name
// }
// console.log(getName());

// window.name = 'gName2'
// var myObj = {
//     name: 'svn',
//     getName: function () {
//         return this.name
//     }
// }

// var getName = myObj.getName

// console.log(getName());
// console.log(myObj.getName());





// 3 use strict
// }
/**
 * 在 ECMAScript 5 的 strict 模式下，这种情况下的 this 已经被规定为不会指向全局对象，而 是 undefined:
 */
// function func () {
//     'use strict'
//     alert(this)
// func()




// 4 构造器调用
// var myClass = function () {
//     this.name = 'svn'
// }
// var obj = new myClass()
// console.log(obj.name) // clone

/**
 * 用 new 调用构造器时，还要注意一个问题，如果构造器显式地返回了一个 object 类型的对
象，那么此次运算结果最终会返回这个对象，而不是我们之前期待的 this
 */
// var myClass = function () {
//     this.name = 'svn'
//     return {
//         name: 'amy'
//     }
// }
// var obj = new myClass()
// alert(obj.name)

// var myClass = function () {
//     this.name = 'svn'
//     return 'amy'
// }
// var obj = new myClass()
// alert(obj.name)





// 5 call & apply 修改this的指向 
// var obj1 = {
//     name: 'ojOne',
//     getName: function () {
//         return this.name
//     }
// }
// var obj2 = {
//     name: 'ojTwo'
// }
// console.log(obj1.getName());
// console.log(obj1.getName.call(obj2));



// 6 丢失的this
// var obj = {
//     myName: 'svn1',
//     getName: function () {
//         return this.myName
//     }
// }

// console.log(obj.getName())      //  svn1

// var getName2 = obj.getName
// console.log(getName2());        // undefined


// arguments作实参时，特殊性
// var length = 10
// function foo() {
//     console.log(this.length);
// }
// var object = {
//     length: 1,
//     method: function () {
//         arguments[1]()
//         foo()
//     }
// }

// object.method(100,foo)


// 7 apply
/**
 * @fn func
 * arguments(a,b)
 *      a: this指向
 *      b: array(传入func的参数)
 */
// var func = function (a,b,c) {
//     alert([a,b,c])
// }
// func.apply(null,[1,2,3])


// 8 call
/**
 * @fn:func
 * arguments(a,b)
 *     a 为this指向
 *     b 为参数不稳定
 */
// var func = function( a, b, c ){
//     alert ( [ a, b, c ] ); // 输出 [ 1, 2, 3 ]
//     };
// func.call( null, 1, 2, 3 );




// 9 call apply 第一个参数为null 即指向windows

// var a ="windowA";
// var b = "windowB";
// var str = "str";
// var myObject = {a:"myA",b:"myB"};
// function hello(s){
//     alert("a= "+this.a + ", b= "+this.b+" "+s);
// }
// hello.call(null,str);       //a ="windowA" b = "windowB" str
// hello.call(myObject,str);   //a="myA" b="myB" str




// 10 借用其他对象 apply或call前一个函数作为借力者
var A = function (name) {
    this.name = '11232'
    this.from = 'formA'
    this.funcA = function () {
        return this.name
    }
}
var B = function () {
    this.name = 'bbbb'
    A.apply(this)
    
}
B.prototype.getName = function () {
    return {
        name: this.name,
        from: this.from,
        funcA: this.funcA
    }
}
var b = new B('svnB')
console.log(b.getName().funcA())

// --------------------------- demo ---------------------------

// 测试this
function User (name,pwd) {
    'use strict'
    this.name = name
    this.pwd = pwd
    this.asd = function(){
        alert(123)
    }
}
var u = new User('amy','123456') 
// 严格模式下忘记加new关键字会报错 Cannot set property 'name' of undefined
User.prototype.sayHi = function () {
  console.log('hi')
}
console.log(User)
console.log(User.prototype) // obj: {sayHi}
console.log(u.__proto__ == User.prototype)
console.log(u.name);
console.log(u.pwd);

// javascript中类的本质，是一个构造函数 与 一个用于在该类实例间共享方法的原型对象 的 结合。

















