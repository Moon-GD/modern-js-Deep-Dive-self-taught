let x = '1';  // type : string, 값 : '1'

console.log(+x);  // type : number, 값 : 1
console.log(x);  // type : string, 값 : '1' → 즉, 다른 단항 연산자 ++, --와 다르게 피 연산자에 변화를 주지 않음

// boolean
x = true;
console.log(+x)  // type : number, 값 : 1
console.log(-x)  // type : number, 값 : -1

x = false;
console.log(+x)  // type : number, 값 : 0
console.log(-x)  // type : number, 값 : -0

// string
x = 'Hello';
console.log(+x);  // type : number, 값 : NaN