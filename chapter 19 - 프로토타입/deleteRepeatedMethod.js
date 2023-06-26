function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getRadius = function() {
    return this.radius;
}

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log('Circle prototype :', Object.getOwnPropertyDescriptors(Circle.prototype));
/**
Circle prototype : {
  constructor: {
    value: [Function: Circle],
    writable: true,
    enumerable: false,
    configurable: true
  },
  getRadius: {
    value: [Function (anonymous)],
    writable: true,
    enumerable: true,
    configurable: true
  }
}
 */

console.log('c1 :', Object.getOwnPropertyDescriptors(c1)); 
/*
c1 : {
    radius: { value: 1, writable: true, enumerable: true, configurable: true }
}
*/

console.log('c2 :', Object.getOwnPropertyDescriptors(c2));
/**
c2 : {
    radius: { value: 2, writable: true, enumerable: true, configurable: true }
  }
*/

console.log(c1.getRadius());  // 1
console.log(c2.getRadius());  // 2

// c1, c2에는 getRadius 관련 정보가 존재하지 않지만, 생성자 함수의 prototype에 "단 하나의" getRadius() 함수가 property로서 등록되어 있기에 활용할 수 있는 것!

console.log(c1.__proto__);  // { getRadius: [Function (anonymous)] }
console.log(c1.__proto__.constructor);  // [Function: Circle]
console.log(Circle.prototype === c1.__proto__);  // true