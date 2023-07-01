const x = 1;

function outer() {
    const x = 10;
    const inner = function() { console.log(x); }
    return inner;
}

// 클로저 함수 반환, 외부 함수의 종료
const closure = outer();
closure(); // ?