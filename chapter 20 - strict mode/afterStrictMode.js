'use strict';

// 1. 일반 함수에서 this 바인딩의 변화
// common mode : 일반 함수의 this - 전역 객체
// strict mode : 일반 함수의 this - undefined
function foo() {
    console.log(this);
}

foo();  // undefined


// 2. arguments 객체의 고정
// common mode : arguments가 재할당되는 경우 재할당된 값을 가지게 됨
// strict mode : arguments에 재할당이 발생해도 전달받은 값을 유지
function bar(someNumber) {
    someNumber = 1;
    console.log(someNumber);  // 1 → 
    console.log(arguments);  // { '0': 100 } → 호출된 함수에 전달된 인수 값 100을 유지하고 있음
}

bar(100);