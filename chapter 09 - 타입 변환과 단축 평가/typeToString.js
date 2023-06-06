// 1️⃣ String 생성자 함수 활용
String(1);  // '1'
String(false);  // 'false'
String(Object);  // function Object() { [native code] }

// 2️⃣ Object.prototype.toString() 메소드 활용
(1).toString();  // "1"
(false).toString();  // "false"
(Object).toString();  // function Object() { [native code] }

// 3️⃣ 문자열 덧셈 연산자 활용
// symbol type
// console.log(Symbol() + '');  // TypeError: Cannot convert a Symbol value to a string

// object type
console.log(({}) + '');  // "[object Object]"
console.log(Math + '');  // "[object Math]"
console.log([] + '');  // "" (empty string)
console.log([10, 20] + '');  // "10,20"
console.log((function(){}) + '');  // "function(){}"
console.log(Array + '');  // "function Array() { [native code] }"
console.log(Set + '');  // "function Set() { [native code] }"