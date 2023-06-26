// 함수 property name 에서 중요한 건 한 가지! ES 버전에 따라 다른 value를 가짐
// ES5 : 익명 함수 표현식의 경우 value = ''
// ES6 : 익명 함수 표현식의 경우 value = 함수 식별자의 이름

const add = (a, b) => a + b;
console.log(add.name);
// ES5 : ''
// ES6 : 'add'