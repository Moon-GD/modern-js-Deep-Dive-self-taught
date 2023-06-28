# Chapter 21 : 빌트인 객체, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ JS 객체의 분류
- 1. built-in object(빌트인 객체) : ECMAScript 사양에 정의된 객체로서, 환경에 상관없이 활용 가능한 객체
- 2. host objects(호스트 객체) : 환경 종속적으로 활용할 수 있는 객체 
    - browser : web API
    - node : Node API
- 3. user defined objects(사용자 정의 객체)

<br>

#### 2️⃣ primitive values & wrapper object
- 원시 타입의 변수나 리터럴을 통해서도 관련된 property나 메소드를 활용할 수 있음 ⭐️⭐️⭐️ (공부 안했다면 설명 못 했을 현상... 😊)
    - 원시 값에 점 연산자('.')를 통해 property에 접근하려고 하면 JS 엔진에 의해 암묵적으로 관련된 객체로 변환됨 (이 때의 객체를 wrapper object라고 함)
    - 그래서 property나 메소드에 문제 없이 접근할 수 있으며, 모든 연산이 완료되면 다시 원래의 원시 값으로 돌아온다
    - 이 때의 wrapper object는 참조되는 곳이 없기에 가비지 컬렉터의 대상이 됨
    - <a href="./wrapperObject.js">wrapper object 활용 예제 살펴보기</a>
- 단, null과 undefined의 원시 값은 wrapper 객체를 생성하지 않기에 점 연산자와 활용될 경우 에러를 발생시킴

<br>

#### 3️⃣ 거의 활용되지 않겠지만, eval 함수란?
- 문자열을 입력 받아 js 하나의 코드로서 실행해주는 함수
- js 실행 모드에 따라 다른 scope를 지님
    - common mode : eval 함수가 호출된 위치의 scope를 지님. 즉, eval 함수의 위치에 코드가 존재한다고 생각하면 됨
    - strict mode : eval 함수 자체적인 scope를 생성. eval 함수의 호출이 종료되면 해당 scope는 소멸
    - 추가로, eval 함수로 let, const를 통해 변수를 선언하면 내부적으로 strict mode로 인식
- <a href="./eval.js">eval 함수 활용해보기</a>

<br>

#### 4️⃣ isFinite, isNaN, parseFloat, parseInt
- 인자 값을 함수 역할에 맞는 숫자로 변환하여 논리 값이나 숫자 혹은 NaN을 반환
- 좌우 공백이 존재하는 경우 무시되며, 공백을 기준으로 긴 문자열이 전달되면 문자열의 첫 번째 부분이 인자로 인식
- parseInt의 경우 값을 해석할 수 없는 경우 NaN을 반환하지만, 중간 과정에서 해석할 수 없는 값을 마주치게 되는 경우 무시하고 파싱을 계속 진행