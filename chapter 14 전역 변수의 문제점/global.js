var a = "var a";
let b = "let b";
const c = "const c";

console.log(window.a);  // 브라우저 환경 : 'var a' 출력
console.log(globalThis.a);  // node 환경 : undefined (❗️ question 1 ❗️)