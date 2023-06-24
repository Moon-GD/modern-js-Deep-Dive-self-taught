// constructor
// 1. 함수 선언문
function A() {}
const a = new A();

// 2. 함수 표현식
const B = function() {}
const b = new B();

// 3. 객체 내부에서 (축약 표현되어 있지 않은) 메소드
const C = {
    C: function() {}
};
const c = new C.C();

// non-constructor
// 1. 객체 내부에서 (축약 표현되어 있는) 메소드
const D = {
    D() {}
}
// const d = new D.D();  // D.D is not a constructor

// 2. 화살표 함수
const E = () => {}
// const e = new E();  // E is not a constructor