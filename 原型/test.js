// getPrototypeof 方法 获得原型
var obj1 = new Object()
var obj2 = {}

console.log(Object.getPrototypeOf(obj1) === Object.prototype)
console.log(Object.getPrototypeOf(obj2) === Object.prototype)

// class
class Animal {
    constructor (name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name)
    }
    speak (){
        return 'woof'
    }
}

var dog = new Dog('Scamp')
console.log (dog.getName() + ' says '+ dog.speak()) 