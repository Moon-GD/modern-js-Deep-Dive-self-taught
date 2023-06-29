// 1. apply
// this 역할을 수행할 빈 객체 생성
const sumObj = {};

// this의 sum property에 3개 숫자의 합을 저장해주는 함수
function sumThreeNumbers(a, b, c) {
  this.sum = a + b + c;
}

// apply를 통한 this binding
sumThreeNumbers.apply(sumObj, [1, 2, 3]);

// 결과 출력
console.log(sumObj.sum);  // 6

// 2. call
sumThreeNumbers.call(sumObj, 1, 2, 3);

// 결과 출력
console.log(sumObj.sum); // 6

// 3. bind
const person = {
  name: 'moon',
  introduce(callBack) {
    // 여기서의 this : person
    setTimeout(callBack, 100);
    // setTimeout 내부에서 일반 함수의 this : 전역 객체
  }
}

// person introduce 호출
person.introduce(function() { 
  console.log(this.name); 
});  // undefined


// this가 서로 다르므로 통일화 필요!

const newPerson = {
  name: 'moon',
  introduce(callBack) {
    setTimeout(callBack.bind(this), 100);
  }
};

newPerson.introduce(function() {
  console.log(this.name);
});  // moon