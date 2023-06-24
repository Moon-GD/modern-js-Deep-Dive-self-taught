// Number - new 연산자 활용 여부에 따라 다른 값 반환
const a = Number(3);
const b = new Number(3);

console.log(a);  // 3
console.log(b);  // [Number: 3]

// Object - scope-safe constructor pattern이 적용되어 있음
const c = Object();
const d = new Object();

console.log(c);  // {}
console.log(d);  // {}