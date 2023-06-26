# Chapter 07 : 연산자, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ '+', '-' 연산자를 활용한 casting
- '+' 단항 연산자는 피 연산자의 값을 숫자 타입으로 변환! (넘나 신기... 😁)
- <a href="./example_number_casting_operand.js">+ 단항 연산자 활용 예제 파일</a>

<br>

#### 2️⃣ loose equality & strict equality
- loose equality : 암묵적 타입 변환을 통해 양측의 타입을 일치시킨 이후 비교 (때론 예측이 넘나 힘듦... 🥲)
- strict equality : 타입과 값이 모두 같은 경우에만 true 반환  (NaN 제외)

<br>

#### 3️⃣ 논리합(||), 논리곱(&&) 연산자
- 다른 논리 연산자와 다르게 반환 값이 boolean이 아닐 수도 있다
- Ex : 
    - 'Cat' && 'Dog' → 'Dog'
    - 'Cat' || 'Dog' → 'Cat'

<br>

#### 4️⃣ typeof
- 피연산자의 타입 정보를 문자열로 반환
- null의 경우 'object'가 반환되는 것을 유의
- 피연산자로 선언한 적 없는 식별자를 작성할 경우 undefined가 반환된다. 