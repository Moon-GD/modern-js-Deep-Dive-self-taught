# Chapter 19 : 프로토타입, Summary

<br>

### 처음 알았어요 ❗️
#### 1️⃣ 생성자 함수에서 공통된 메소드가 있는 경우
- 생성자 함수에 필요한 메소드가 있는 경우, prototype에 등록하는 것이 더 효율적!
- 메소드를 포함한 인스턴스를 생성하는 것보다 공통 메소드는 property에 "단 하나" 등록해두고, 인스턴스를 생성하는 것이 메모리 측면에서도 효율적
- <a href="./deleteRepeatedMethod.js">prototype에 메소드를 등록한 예제 파일</a>

<br>

#### 2️⃣ prototype에 대해 정리해보자!
- prototype? JS에서 객체 상속을 구현하기 위해 활용되는 메커니즘
- 모든 객체는 생성될 때 JS 엔진에 의해 prototype 특성이 생성됨 (JS 엔진이 필요한 원본 정보를 담는 것)
- internal slot은 일반적으로 응용 프로그래머에 의해 접근될 수 없는 영역. 단, [[ Prototype ]]은 __proto__를 통해 접근 가능
- __proto__를 출력해보면 상속 받고 있는 프로퍼티, 메소드 등이 객체 형태로 담겨 있음을 확인 가능
- 생성자 함수로 객체를 생성하면 객체.__proto__.constructor에 생성자 함수 정보가 담겨 있음을 확인할 수 있다
- __proto__는 접근자 property이며 [[ Get ]], [[ Set ]] property attribute를 모두 지니고 있다
- __proto__는 상속을 통해 하위 객체가 가지게 되는 property이다 (최상위 객체인 Object.prototype에 존재!)
- 생성자 함수의 prototype을 살펴보면, 해당 함수가 생성하게 될 인스턴스에 대한 정보를 담고 있다. 즉, 인스턴스.__proto__의 내용과 같다 → <a href="./constructorPrototype.js">동일 여부 확인하기!</a>

<br>

#### 3️⃣ 리터럴과 prototype
- 객체의 prototype의 constructor가 항상 해당 객체의 생성 함수인가? No!
    - 리터럴 표현식으로 생성된 경우 별다른 생성자 함수를 활용하지 않았고, 내부적으로 생성자 함수를 통한 객체 생성과 조금 다르게 동작!
    - 다만, 리터럴 표현식으로 생성된 객체도 상속이 필요할 때가 있기에 리터럴 객체의 prototype의 constructor도 적당한 생성자 함수가 기입되어 있다
    - {} → Object, 함수 리터럴 → Function, [] → Array, // → RegExp

<br>

#### 4️⃣ prototype의 생성 시점 - 사용자 정의 생성자 함수
- 1. 사용자 정의 생성자 함수
    - 사용자 정의 생성자 함수? 함수 property로 [[ constructor ]]가 존재하는 함수!
    - 축약 표현을 사용하지 않은 객체의 메소드, 함수 표현식, 함수 선언문이 해당
    - 함수 정의가 이루어진 이후 prototype이 생성됨 → 함수 정의는 호이스팅으로 scope 진입 이후 바로 이루어지기 때문에 scope 진입과 동시에 prototype 생성이 이루어짐

<br>

- 2. 빌트인 함수 (Number, Object, Array ...)
    - 빌트인 함수가 생성되는 시점에 prototype이 생성됨
    - 빌트인 함수는 전역 객체가 생성될 때 함께 생성되며, 전역 객체의 경우 런타임 중 가장 먼저 생성됨 → 즉, 빌트인 함수의 prototype은 코드 실행 이전에 객체화되어 필요한 정보들이 등록되어 있다!

<br>