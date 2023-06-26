# Chapter 18 : 함수와 일급 객체, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ 일급 객체 만족 조건
- 무명의 리터럴로 생성 가능
- 변수나 자료 구조에 저장할 수 있다
- 함수의 인자로 전달할 수 있으며, 반환 값으로도 사용할 수 있다
- JS에서 함수는 위의 조건을 모두 만족하기에 일급 객체이다 → <a href="./firstClassObject.js">함수가 일급 객체임을 보여주는 예제 파일</a>
- <a href="./functionDescriptor.js">함수 객체 내부를 들여다보는 예제 파일</a> → __proto__는 property에 없음! → 함수 고유의 property가 아님을 의미

<br>

#### 2️⃣ 함수의 property 살펴보기
- <a href="./arguments.js">arguments : 함수 인자 정보</a>
- <a href="./caller.js">caller : 호출 함수 정보</a>
- <a href="./name.js">name : 함수 식별자 정보</a>
- <a href="./prototype.js">prototype : ⭐️ constructor 함수 객체만이 소유하는 property ⭐️</a>

<br>