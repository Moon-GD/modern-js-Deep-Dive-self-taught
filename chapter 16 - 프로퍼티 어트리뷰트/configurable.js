const person = {};

// data property인 age 생성
// configurable = false 인 것에 주목
Object.defineProperty(person, 'age', {
    value: 26,
    writable: true,
    enumerable: false,
    configurable: false
});

console.log(person.age);  // 26

// property 삭제 시도
delete person.age;
console.log(person.age);  // 26 → configurable = false 이기 때문에 삭제 요청이 무시됨

// value 변경
person.age = 27;
console.log(person.age);  // 27

// writable = false로 변경하고 value 변경 시도
// configurable이 false 이기 때문에 property 관련 재정의 작업이 금지되지만, writable을 true → false 변경은 허용됨
Object.defineProperty(person, 'age', {
    writable: false
});
person.age = 100;
console.log(person.age);