const addCommon = function(a, b) { return a + b; }
const addArrow = (a, b) => a + b;

console.log(addCommon.hasOwnProperty('prototype'));  // true
console.log(addArrow.hasOwnProperty('prototype'));  // false

// 차이가 생기는 이유?
// 함수의 property 중 'prototype'은 생성자 함수로 활용될 수 있는 경우에만 존재❗️
// 위의 경우 addCommon은 함수 표현식으로 선언된 함수로, 생성자로 활용될 수 있기에 'prototype' 속성이 존재
// 하지만, addArrow는 생성자 함수로 활용될 수 없는 화살표 함수이기에 'prototype' 속성이 존재하지 않음!