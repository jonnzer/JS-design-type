// 封装1 每次改动需要改变 原函数makeSound 

var makeSound = function (animal) {
	if (animal instanceof Duck) {
		console.log("噶噶噶");
	}else if (animal instanceof Chicken) {
		console.log("咯咯咯");
	}
};

// var Duck = function() {};
// var Chicken = function () {};

// makeSound (new Duck());
// makeSound (new Chicken());

// 封装2 基于使用者的原型来改变
var makeSound = function (animal ) {
	animal.sound()
}
var Duck = function () {}
var Chicken = function() {}
var Dog = function () {}

Duck.prototype.sound = function () {
	console.log(' i am a duck')
}
Chicken.prototype.sound = function () {
	console.log('i am a chicken')
}
Dog.prototype.sound = function() {
	console.log('i am a dog')
}

makeSound( new Duck()) 
makeSound( new Chicken()) 
makeSound( new Dog()) 

// 深切的意义：
// 各司其职，让不同的对象执行不同的指令，我们只管调用，而不是处理条件分支语句。