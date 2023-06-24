const person = { age: 26 };

// 확장성 검증
console.log(Object.isExtensible(person));  // true

// 확장 제어 → 금지
Object.preventExtensions(person);
console.log(Object.isExtensible(person));  // false

// name property 확장 시도
person.name = 'moon';
console.log(person);  // { age: 26} → 확장 불가능한 객체로 정의되었기에 확장 시도가 무시됨을 알 수 있다 