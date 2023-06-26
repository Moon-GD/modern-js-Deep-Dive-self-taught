function add(a, b) { return a + b; }

// 내부 들여다보기
console.log("function dir : ");
console.dir(add);  
// 브라우저에서 보다 상세하게 설명됨
// node 환경 : [Funciton: add]

// 함수 프로퍼티 확인
console.log("\n\nfunction properties : ");
console.log(Object.getOwnPropertyDescriptors(add));
/**
{
  length: { value: 2, writable: false, enumerable: false, configurable: true },
  name: {
    value: 'add',
    writable: false,
    enumerable: false,
    configurable: true
  },
  arguments: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  caller: {
    value: null,
    writable: false,
    enumerable: false,
    configurable: false
  },
  prototype: { value: {}, writable: true, enumerable: false, configurable: false }
}
 */