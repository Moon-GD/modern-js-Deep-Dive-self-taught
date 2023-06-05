// 템플릿 리터럴의 tagged template 구조 파악

// strings : 템플릿 리터럴 내부 문자열 배열
// ...innerExpressions : 템플릿 리터럴 내부 표현식 배열
function tagFunction(strings, ...innerExpressions) {
    console.log(strings);  // ['a : ', ', b : ', ' c : ', '']
    console.log(innerExpressions);  // [1, 2, 3];
}

tagFunction`a : ${1}, b : ${2} c : ${3}`;


// 1️⃣ 표현식 추출
function printOnlyExpr(strings, ...innerExpressions) {
    console.log('표현식만 추출합니다');
    innerExpressions.forEach((innerExpression) => {
        console.log(innerExpression);
    });
}

printOnlyExpr`${1} ${2} ${3}`;
// 표현식만 추출합니다
// 1
// 2
// 3


// 2️⃣ 문자열 포맷팅
function printPersonsInfo(strings, ...personNames) {
    let info = `참여자 명단 : `
    personNames.forEach((personName) => info += `${personName} `)
    console.log(info);
}

printPersonsInfo`${'철수'}, ${'영희'}, ${'짱구'}`;  // '참여자 명단 : 철수 영희 짱구