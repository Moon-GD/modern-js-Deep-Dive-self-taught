// boolean type으로의 변환 방법

// 1️⃣ Boolean 생성자 함수 활용
Boolean([]);  // true
Boolean(Object);  // true
Boolean("");  // false
Boolean(undefined);  // false
Boolean(null);  // false

// 2️⃣ 부정 논리 연산자 ! 2번 활용
!! [];  // true
!! Object;  // true
!! "";  // false
!! undefined;  // false
!! null;  // false