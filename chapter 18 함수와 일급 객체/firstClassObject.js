// 함수가 일급 객체인 이유는...

// 1️⃣ 무명의 변수 리터럴로 생성 가능
const add = function(a, b) {
    return a + b;
}

console.log(add(1, 2));  // 3

// 2️⃣ 변수나 자료구조에 저장 가능
const calcObject = {
    add: add,
};

console.log(calcObject.add(3, 4)); // 7

// 3️⃣ 함수의 인자로 전달하거나 반환 값으로 활용 가능
const addFourNumbers = (addFunction, a, b, c, d) => {
    return addFunction(a, b) + addFunction(c, d);
}

console.log(addFourNumbers(add, 1, 2, 3, 4));  // 10