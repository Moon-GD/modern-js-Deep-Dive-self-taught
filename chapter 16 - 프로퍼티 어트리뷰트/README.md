# Chapter 16 : 프로퍼티 어트리뷰트, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ internal slot & method
- ESM 사양에서 정의된 자바스크립트 객체의 내부적인 속성(slot)과 동작(method)을 의미
- 일반적으로 개발자가 접근할 수 없는 영역이며 내부적으로 객체를 정의하는데에 사용된다
- internal slot : [[ Prototype ]], [[ Extensible ]], [[ GetPropertyOf ]]...
- internal method : [[ Get ]], [[ Set ]], [[ Call ]], [[ Construct ]]...
- [[ Prototype ]]과 같은 일부 슬롯의 경우, 우회적으로 접근 가능 → 객체.__proto__

<br>

#### 2️⃣ property attribute
- JS 엔진은 객체의 property를 생성할 때 자동으로 property에 대한 정보를 정의
- property attributes : value, writable, enumerable, configurable
- getOwnPropertyDescriptor를 통해 객체의 property 정보를 확인할 수 있다
- ES8부터 getOwnPropertyDescriptors를 통해 객체의 모든 property 정보를 확인할 수 있다
- <a href="./getOwnPropertyDescriptor.js">예제 파일</a>

<br>

#### 3️⃣ property의 종류 : data property & accessor property
- 1. data property
    - 키와 값으로 구성된 일반적인 property
    - property attribute : value, writable, enumerable, configurable

    <br>

- 2. accessor property 
    - 자체적으로 값을 가지는 것이 아니라, 다른 property의 값을 가져오거나 설정하는데에 활용
    - property attribute : get, set, enumerable, configurable
        - configurable은 특히 생소했는데 property의 재정의 가능 여부를 지정!
        - configurable = false인 경우 해당 property의 삭제, 값의 변경이 금지됨
        - 단, writable = true인 경우 value 수정, writable을 false로 변경하는 것도 가능하다

    <br>

- <a href="./properties.js">예제 파일</a>

<br>

#### 4️⃣ accessor property 중 get/set 동작 방식
- getter 동작 방식
- property key 유효성 체크
- prototype chain에서 해당 key 검색
- property 종류 분석 (data property & accessor property)
- accessor property의 attribute인 [[ Getter ]] 를 호출하여 필요한 로직 수행

<br>

#### 5️⃣ define property
- <a href="./defineProperties.js">예제 파일</a> 쭉 읽어보는 게 이해가 더 쉬울 것!
- property descriptor 객체에 누락된 property의 기본 값 :

<br>
  
|property|property attribute|default value|
|:-|:-|:-|
| value | [[ Value ]] | undefined |
| get | [[ Get ]] | undefined |
| set | [[ Set ]] | undefined |
| writable | [[ Writable ]] | false |
| enumerable | [[ Enumerable ]] | false |
| configurable | [[ Configurable ]] | false |
