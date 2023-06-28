// 권장되지 않는 방법인 것은 알지만!
// 처음 접해보는 문법이기에 활용해보기
const person = {
    name: 'moon',
    age: 26,
};

// 객체의 property에 접근할 때 with scope 안에서는 property만 작성해주면 됨!
with(person) {
    console.log(name);
    console.log(age);
}

// with 문의 단점
// 1. 코드 가독성 저하
// 2. 코드 성능 저하 → 동적 scope chain을 통해 property를 검색하기에 js 엔진에 오버헤드 발생. 특히, 활용되는 property가 많을 수록 큰 오버헤드!