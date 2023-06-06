# Chapter 09 : 타입 변환과 단축 평가, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ 문자열 덧셈을 통한 암묵적 타입 변환
- 예제 파일을 보는 것이 훨씬 더 빠른 이해를 도울 것
- <a href="./typeToString.js">예제 파일</a>

<br>

#### 2️⃣ Truthy / Falsy 구분
- <a href="./truthy.js">truty 예제 파일</a>
    - 신기했던 것 - [] : 숫자로 해석될 땐 0 이지만, truthy
- <a href="./falsy.js">falsy 예제 파일</a>

<br>

#### 3️⃣ string type으로의 변환 방법
- 1. String 생성자 함수 활용
- 2. Object.prototype.toString() 메소드 활용
- 3. 문자열 덧셈 연산자 활용
- <a href="./typeToString.js">예제 파일</a>

<br>

#### 4️⃣ 숫자 type으로의 변환 방법
- 1. Number 생성자 함수 활용
- 2. parseInt(), parseFloat() 빌트인 메소드 활용
- 3. '+' 단항 연산자 활용
- 4. '*' 단항 연산자 활용
- <a href="./typeToNumber.js">예제 파일</a>

<br>

#### 5️⃣ boolean type으로의 변환 방법
- 1. Boolean 생성자 함수 활용
- 2. 부정 논리 연산자 ! 2개 활용
- <a href="./typeToBoolean.js">예제 파일</a>

<br>

#### 6️⃣ optional chaining 연산자
- Typescript를 활용하며 종종 봤던 문법이었지만 이름을 알지는 못하고 있었다.
- null, undefined가 아닌 경우 property 참조를 진행한다.

<br>

#### 7️⃣ null 병합 연산자
- ES11 (2020)에서 등장한 문법으로 null, undefined인 경우 ?? 뒤의 값을 참조한다.
- 초기 값 / 기본 값 설정에 유용하다
- <a href="./nullishCoalescing.js">예제 파일</a>