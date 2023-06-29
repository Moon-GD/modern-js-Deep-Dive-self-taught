# Chapter 22 : this, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ strict mode는 this binding에 영향을 준다!
- 일반적으로 this는 객체 스스로, 혹은 객체가 생성할 인스턴스를 가리키기 위해 생긴 키워드!
- 하지만, strict mode가 적용된 경우 일반 함수에서의 this는 undefined로 binding
  - this가 생긴 이유를 고려해봤을 때, 생성자 함수가 아닌 일반 함수에서 this를 활용할 필요가 없다고 생각하기 때문!
  - <a href="./thisInStrictMode.js">예제 파일 확인하기</a>

<br>

#### 2️⃣ 메소드 호출에서의 this
- 객체에 정의되어 있는 메소드는 정확하게 ** 객체의 property에 또 다른 함수 객체를 바인딩한 것**이다.
- 즉, 메소드는 객체에 포함되어 있는 것이 아니라, 별도로 존재한다
- 이런 메소드에서의 this는 메소드를 호출한 객체 혹은 함수에 this를 바인딩한다
- <a href="./thisInMethod.js">메소드 this binding 예제 확인하기</a>

<br>

#### 3️⃣ Function.prototype.apply/call/bind
- apply와 call은 인수 관련 인자를 넘겨줄 때의 방식에서만 차이가 생기며 동일한 역할을 수행
- 또한, bind는 함수를 반환하는 것과 다르게 apply, call은 해당 함수를 호출까지 실행한다
- bind는 depth가 깊어져 this에 대한 맥락 차이가 발생할 때 활용하기 좋다
- <a href="applyBindCall.js">apply,call,bind 활용 예제</a>

<br>