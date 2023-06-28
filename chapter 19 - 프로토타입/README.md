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

#### 5️⃣ 객체 생성 방식과 프로토타입의 결정
- 여러 가지 객체 생성 방식 : 리터럴, Object 생성자, 사용자 생성자 함수, Object.create() ...
- 모두 내부적으로 OrdinaryObjectCreate에 의해 생성
- OrdinaryObjectCreate는 빈 객체를 생성한 후 (property 목록을 전달 받은 경우) property를 등록해주고, 인수로 전달 받았던 prototype을 반환될 객체의 [[ prototype ]]에 등록. 이후 객체를 반환
- 전달되는 prototype 인수
    - 리터럴, Object 생성자 : Object.prototype
    - 사용자 생성자 함수 : 생성자 함수의 prototype

<br>

#### ⑥ property shadowing
- 상속 관계에서 하위 객체에 의해 상위 객체의 property가 보이지 않는 현상
- 예제로 보면 이해가 더 빠름! <a href="./propertyShadowing.js"></a>

<br>

#### ⑦ instance of 연산자는 사실..
- instance of 연산자는 "생성자 함수의 prototype"이 객체의 prototype chain에 존재하는 지 여부를 반환해주는 함수!
- 이전에 알던 "어떤 생성자 함수의 객체야?" 라는 의미로 사용하는 것과는 조금의 차이가 있음! → <a href="./instanceOf.js">예제 파일</a>

<br>

#### ⑧ 직접 상속
- Object.create() 메소드를 활용하면 직접적으로 상속과 상속될 property, 그리고 property의 attribute를 지정 가능
- 첫 번째 인자로 prototype (필수 인자), 두 번째 인자로 property list(선택 인자)를 전달
- 이를 통해 리터럴로 생성된 객체도 상속 받을 수 있다는 장점이 있음
- <a href="./objectCreate.js">Object.create 예제 파일</a>

<br>

#### ⑨ static property / method
- Python class의 멤버 변수, Java의 static 메소드처럼 생성자 역할을 하는 함수에서 바로 접근할 수 있는 property(메소드 포함)를 static하다고 표현
- 단, JS의 static 메소드는 인스턴스에서 접근 불가 (prototype chain에 존재하지 않기에)
- <a href="./staticProperty.js">static property 예제 파일</a>

<br>

#### 🔟 in 연산자, 객체의 property 존재 여부 확인 
- in 연산자는 대상 객체가 상속받는 모든 prototype의 property를 검사 → Object.prototype.hasOwnProperty를 활용하면 대상 객체에 한정해서 property 검사 가능
- for ... in 문도 사실은 대상 객체의 prototype chain 상의 property 중 [[ enumarable ]]이 true인 것을 열거함!
    - 이게 배열을 순회할 때 for ... in 문보다 고차 함수, for of를 사용하는 것이 권장되는 이유임

<br>

※ 객체 순회에 필요한 메소드 활용해보기 → <a href="./iterateObject.js">Object.keys/values/entries 활용 예제</a>

<br>