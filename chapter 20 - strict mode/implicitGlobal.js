function foo() { x = 1; }

// 함수 실행
foo();

// 현재 var, let, const 등을 활용한 변수 x에 대한 선언은 존재하지 않음
console.log(x);  // 1
console.log(globalThis.x);  // 1 → JS 엔진에 의해 전역 객체의 property로 등록된 것을 확인할 수 있다