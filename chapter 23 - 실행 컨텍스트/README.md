# Chapter 23 : 실행 컨텍스트, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ 실행 컨텍스트란? (공부 시작 단계에서 내가 알기론..!)
- JS 코드가 실행되는 환경에 대한 정보를 담고 있는 객체. 크게 렉시컬 환경과 this binding 객체로 구성됨
- 변수 스코프와 값을 관리하고(렉시컬 환경), 현재 맥락에서의 this binding 정보를 저장하고 있음
- 공부할 수록, 현재 개념에서 덧붙여지는 것이 있는 것으로 보이니 계속 공부해보자! 😝

<br>

#### 2️⃣ ECMAScript 사양에서 source code의 타입
- 크게 4가지로 나눔!
    - source code의 type을 구분하는 이유는? → code type에 따라 실행 컨텍스트 생성 과정과 관리되는 내용이 다름!
- 1. 전역 코드
    - 전역 변수를 관리하기 위한 최상위 전역 스코프를 생성.
    - 전역 코드가 평가되면 var 키워드로 선언된 변수와 함수가 전역 객체의 property로 등록됨
- 2. 함수 코드
    - 중괄호({}) 단위로 지역 스코프를 생성하며, arguments 객체, 지역 변수, 매개 변수를 관리
- 3. eval 코드 (권장되지 않는 함수이지만)
    - strict mode에서 독자적인 자신만의 스코프를 생성
- 4. module 코드
    - module 단위의 스코프 생성

<br>

#### 3️⃣ 소스코드가 실행되는 과정?
- 크게 '소스 코드 평가'와 '소스 코드 실행'의 과정으로 나뉘어서 진행
- 1. 소스 코드 평가
    - 실행 컨텍스트를 생성하고 식별자의 선언문만 먼저 실행하여 실행 컨텍스트가 관리하는 스코프에 등록
- 2. 소스 코드 실행
    - 평가 과정이 끝난 이후에 진행되는 과정
    - 소스 코드 실행에 필요한 정보는 실행 컨텍스트의 스코프에서 검색하여 취득
    - 연산이 진행되어 값의 갱신이 필요한 경우 실행 컨텍스트의 값을 갱신

<br>

##### ❗️ 실행 컨텍스트에서 식별자와 스코프는 **렉시컬 환경**으로 관리하고, 코드 실행 순서는 **실행 컨텍스트의 스택**으로 관리된다고 함!!
##### 우선 실행 컨텍스트 스택부터 살펴봐야겠당

<br>

#### 4️⃣ 실행 컨텍스트 스택
- <a href="./contextStack.js">예제 파일로 바로 확인하기!</a>

<br>

#### 5️⃣ 전역 코드가 실행되는 순서 ⭐️⭐️⭐️⭐️⭐️
- global execution context - (global lexical environment component : environment record, outer lexical environment reference, this binding) - (environment record : object / declarative environment record) - (object environment record's bindingObject - 전역 객체) 이 구조의 흐름을 잘 기억하기!!!
- 머릿속에 들어올 때까지 칠판에 적었다가 지우는 과정을 반복해봤음!

<br>