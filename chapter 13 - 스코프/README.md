# Chapter 13 : 스코프, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ var의 지원 스포크
- var 키워드는 함수의 코드 블록 만을 유효한 지역 스코프로 인정한다.
- 즉, 함수의 코드 블록을 기준으로 지역 스코프가 형성되며 스코프 체이닝이 발생한다.

<br>

#### 2️⃣ dynamic scope vs static scope
- dynamic scope : 함수의 호출 시점을 기준으로 함수의 상위 스코프를 결정
- static scope : 함수의 정의된 시점을 기준으로 함수의 상위 스코프를 결정
- static scope는 lexcial scope라고도 부른다
- JS를 포함한 대부분의 언어는 static scope를 가짐
- <a href="./lexicalScope.js">대표적인 예시</a>

<br>