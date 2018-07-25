/**
 * 策略对象
 *  （1）消除ifelse语句
 *  （2）封装算法
 */
// var startegies = {       
//     "S": function (salary) {
//         return salary * 4;
//     },

//     "A": function (salary) {
//         return salary * 3
//     },

//     "B":function (salary) {
//         return salary * 2
//     }
// }

// var calculateBonus = function (level,salary) {
//     return startegies[level](salary)
// }

// console.log(calculateBonus('S',2000))

// ---------------------------------👆 demo1 -----------------------------------------


// var startegies = {
//     isNoEmpty: function (values,errorMsg) {
//         if (values === '') {
//                 return errorMsg
//             }
//     },
//     minLength: function (value,length,errorMsg) {
//         if (value.length < length) {
//             return errorMsg
//         }
//     },
//     isMobile: function (value,errorMsg) {
//         if ( !/(^1[3|5|8][0-9]{9}$)/.test( value ) ) {
//             return errorMsg
//         }
//     }
// }

// var registerForm = document.getElementById('registerForm')
// var validataFunc = function () {
//     var validator = new Validator()
//     validator.add(registerForm.userName,'isNoEmpty','用户名不能为空')       
//     validator.add(registerForm.password,'minLength:6','密码不能少于6位')
//     validator.add(registerForm.phoneNumber,'isMobile','手机号码格式不正确')

//     var errorMsg = validator.start()
//     return errorMsg
// }

// registerForm.onsubmit = function() {                            //  提交按钮触发
//     var errorMsg = validataFunc()
//     if (errorMsg) {
//         alert(errorMsg)
//         return false;
//     }
// }

// var Validator = function () {
//     this.cache = []
// }

// Validator.prototype.add = function (dom,rule,errorMsg) {        // 添加规则
//     var ary = rule.split(':')
//     this.cache.push(
//         function(){
//             var strategy = ary.shift()
//             ary.unshift(dom.value)
//             ary.push(errorMsg)
//             return strategies[strategy].apply(dom,ary)
//         }
//     )
// }

// Validator.prototype.start = function () {                       // 启动
//     for (var i = 0,validataFunc;validataFunc = this.cache[i ++];) {
//         var msg = validataFunc()
//         if (msg) {
//             return msg
//         }
//     }
// }

// ------------------------------------------------  👆 自己  ----------------------------------------------------

// var strategies = {
//     isNonEmpty: function (value, errorMsg) {
//         if (value === '') {
//             return errorMsg;
//         }
//     },
//     minLength: function (value, length, errorMsg) {
//         if (value.length < length) {
//             return errorMsg;
//         }
//     },
//     isMobile: function (value, errorMsg) {
//         if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
//             return errorMsg;
//         }
//     }
// };

// var Validator = function () {
//     this.cache = [];
// };
// Validator.prototype.add = function (dom, rules) {
//     var self = this;
//     for (var i = 0, rule; rule = rules[i++];) {
//         (function (rule) {
//             var strategyAry = rule.strategy.split(':'); 
//             var errorMsg = rule.errorMsg;
//             console.log('strategyAry is '+ strategyAry)
//             self.cache.push(function () {
//                 var strategy = strategyAry.shift();
//                 console.log('strategy is ' + strategy )
//                 debugger
//                 strategyAry.unshift(dom.value);
//                 console.log(strategyAry)
//                 debugger
//                 strategyAry.push(errorMsg);
//                 console.log(strategyAry)
                
//                 debugger
//                 return strategies[strategy].apply(dom, strategyAry);
//             });
//         })(rule)
//     }
// };
// Validator.prototype.start = function () {
//     for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
//         var errorMsg = validatorFunc(); if (errorMsg) {
//             return errorMsg;
//         }
//     }
// };

// var registerForm = document.getElementById('registerForm');
// var validataFunc = function () {
//     var validator = new Validator();
//     validator.add(registerForm.userName, [{
//         strategy: 'isNonEmpty',
//         errorMsg: '用户名不能为空'
//     }, {
//         strategy: 'minLength:6',
//         errorMsg: '用户名长度不能小于 10 位'
//     }]);
   
//     validator.add(registerForm.password, [{
//         strategy: 'minLength:6',
//         errorMsg: '密码长度不能小于 6 位'
//  }]);
//     validator.add(registerForm.phoneNumber, [{
//         strategy: 'isMobile',
//         errorMsg: '手机号码格式不正确'
//     }]);
//     var errorMsg = validator.start();
//     return errorMsg;
// }
// registerForm.onsubmit = function () {
//     var errorMsg = validataFunc();
//     if (errorMsg) {
//         alert(errorMsg);
//         return false;
//     }
// };

// ------------------------------------------------ 👆 官方  ----------------------------------------------------

/**
 * 总结： 
    策略模式：
        （1）处理算法与处理处理对象解藕
        （2）开发--封闭原则，适合添加，不适合深入修改
        （3）函数对象的多态性        
*/