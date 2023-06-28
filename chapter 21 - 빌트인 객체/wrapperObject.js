const str = "moonGD";
str.name = 'moon';
console.log(str.name);  // undefined
// → 2번째 줄에서 생성되었던 wrapper object와 다른 wrapper object를 생성하여 name 을 참조하기에 undefined가 출력됨

// wrapper object 생성 순서
// 1. 원시 타입의 값에서 점 연산자('.')를 통해 property에 접근을 시도하는 경우
// 2. JS 엔진에 의해 연관된 wrapper 객체로 변환됨
// 3. 이 때 원시 타입의 정보는 wrapper 객체의 [[ NumberData ]], [[ StringData ]] 등의 관련된 내부 슬롯에 저장됨
// 4. wrapper 객체의 연산이 수행된 이후, 기존의 원시 값은 wrapper 객체의 내부 슬롯의 값으로 돌아옴
// 5. wrapper 객체는 참조되는 곳이 없기 때문에 garbage collector의 대상이 됨