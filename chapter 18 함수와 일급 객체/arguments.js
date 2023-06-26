// 유사 배열 객체 겸 iterable(ES6)인 함수 내부 객체, arguments property 살펴보기
function add(a, b) {
    console.log(Object.getOwnPropertyDescriptors(arguments));
    return a + b;
}

add(1, 2);
/**
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  length: { value: 2, writable: true, enumerable: false, configurable: true },
  callee: {
    value: [Function: add],
    writable: true,
    enumerable: false,
    configurable: true
  },
  [Symbol(Symbol.iterator)]: {
    value: [Function: values],
    writable: true,
    enumerable: false,
    configurable: true
  }
}
 */

// arguments 활용 예제 → 가변 인자
function getSum() {
    let value = 0;

    for(let i=0;i<arguments.length;i++) {
        value += arguments[i];
    }

    return value;
}

console.log(getSum(1, 2));  // 3
console.log(getSum(1, 2, 3));  // 6
console.log(getSum(1, 2, 3, 4));  // 10
