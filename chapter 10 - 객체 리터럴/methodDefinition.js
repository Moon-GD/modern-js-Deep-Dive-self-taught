// 1. property 메소드 정의 방식 (~ES5)
let obj = {
  sayHi: function() {
    console.log("Hello World!");
    console.log(this);  // Node.js의 경우 global 객체, 브라우저 환경의 경우 window 객체를 가리킴
  }
}

obj = {
  sayHi() {
    console.log("Hello World!");
    console.log(this);  // obj 객체에 binding 되어 있음!
  }
}