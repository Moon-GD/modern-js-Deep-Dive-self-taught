const Person = function(name) {
  this.name = name;
}

const Animal = function(name) {
  this.name = name;
}

// 객체 생성
const moon = new Person('moonGD');

// Animal instanceof 확인
console.log(moon instanceof Animal);  // false

// Animal prototype 변경
Animal.prototype = Person.prototype;

// Animal instanceof 재-확인
console.log(moon instanceof Animal);  // true

// 즉, 인자로 받은 생성자 함수의 prototype이 객체의 prototype chain에 존재 여부를 반환해줌!