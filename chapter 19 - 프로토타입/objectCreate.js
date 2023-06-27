// 상속 관계 : null > topObj
// 즉, topObj의 prototype === null
const topObj = Object.create({});

// 상속 관계 : null > topObj > secondObj
const secondObj = Object.create(topObj.__proto__, {
  age: {
    value: 26,
    writable: true,
    enumerable: false,
    configurable: true
  }
});

console.log(secondObj.age);  // 26

// 객체 리터럴에서 __proto__를 통해서도 상속 관계 표현 가능
// 상속 관계 : null > topObj > secondObj > thirdObj
const thirdObj = {
  name: 'third',
  __proto__: secondObj
};

console.log(thirdObj.age);  // 26
console.log(thirdObj.name);  // 'third'