# Chapter 20 : strict mode, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ implicit global (암묵적 전역)
- js 엔진에 의해 임의의 변수가 전역 객체에 property로 등록되는 현상 → <a href="./implicitGlobal.js">암묵적 전역 예제 코드</a>
- 'use strict'를 통한 strict mode로 이러한 잠재적인 문제 예방 가능

<br>

#### 2️⃣ strict mode에 대해 새로 알게 된 부분
- 'use strict'가 선두가 아닌 중간 지점에 작성되어 있다면 위의 부분은 strict mode의 대상이 되지 않는다
- 전역에서 strict mode를 사용하는 것은 권장되지 않음 → 외부 라이브러리가 strict mode를 사용하지 않는 경우도 존재하기 때문!
- 'strict mode'에서 발생되는 에러
    - 1. implicit global
    - 2. delete를 통한 변수, 함수 삭제 시도
    - 3. 같은 이름의 매개 변수
    - 4. with문의 활용 → <a href="./with.js">권장되지는 않지만 처음 보는 문법이기에 활용해보기 !</a>

<br>

#### 3️⃣ strict mode를 적용으로 생긴 변화
- <a href="./afterStrictMode.js">예제 파일</a>로 확인하는 것이 이해가 빠를 것!