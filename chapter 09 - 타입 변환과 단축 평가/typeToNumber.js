// 숫자 타입으로의 변환 방법
// 1️⃣ Number 생성자 함수 활용
Number(1);  // 1
Number(false);  // 0
Number(undefined);  // NaN
Number([]);  // 0

// 2️⃣ parseInt, parseFloat 메소드 활용
parseInt(1);  // 1
parseInt(false);  // NaN
parseInt(undefined);  // NaN
parseInt([]);  // NaN

// 3️⃣ + 단항 연산자 활용
+ 1  // 1
+ false;  // 0
+ undefined;  // NaN
+ [];  // 0

// 4️⃣ * 연산자 활용
1 * '0';  // 0
1 * false;  // 0
1 * [];  // 0
