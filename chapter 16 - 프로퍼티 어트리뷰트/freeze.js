const clock = {
    color: 'brown',
    price: 1_000,
    madeInfo: {
        country: 'korea'
    }
};

// 동결 여부 검증
console.log(Object.isFrozen(clock));  // false

// 동결 & 동결 여부 출력
Object.freeze(clock);
console.log(Object.isFrozen(clock));  // true

// property 확장, 삭제 시도 후 clock 객체 출력
delete clock.color;
clock.brand = 'rolex';
console.log(clock);  // { color: 'brown', price: 1000, madeInfo: { country: 'korea' } } → 원본 유지

// 쓰기 작업 시도
clock.price = 555_555;
console.log(clock);  // { color: 'brown', price: 1000, madeInfo: { country: 'korea' } } → 원본 유지

// 내부 객체 변경 시도
clock.madeInfo.country = 'USA';
console.log(clock); 
// { color: 'brown', price: 1000, madeInfo: { country: 'USA' } } → 내부 객체 값 변경 → 얕은 복사와 같은 맥락으로 발생하는 것을 확인할 수 있음
