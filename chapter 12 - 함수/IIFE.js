// 보편적인 형태
// ① : (함수 표현식)()
(function() {
  console.log("보편적인 형태 ①");
})();

// ② : ( 함수 표현식 ())
(function() {
  console.log("보편적인 형태 ②");
}());


// 연산자를 활용한 형태
// ① : + 연산자
+ function() {
  console.log("+ 연산자 활용");
}();

// ② : - 연산자
- function() {
  console.log("- 연산자 활용");
}();

// ③ : ! 연산자
! function() {
  console.log("! 연산자 활용");
}();

// ④ : * 연산자
1 * function () {
  console.log("* 연산자 활용");
}();