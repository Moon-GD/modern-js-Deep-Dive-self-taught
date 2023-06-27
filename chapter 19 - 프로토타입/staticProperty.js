const Fruits = function(name, price) {
  this.name = name;
  this.price = price;
}

// static property 등록
Fruits.className = 'Fruits';

// static method 등록
Fruits.printClassName = function() {
  console.log(`className : ${Fruits.className}`);
}

// 생성자 함수에서의 static method 호출
Fruits.printClassName();

// 객체 생성
const strawberry = new Fruits("딸기", 100);

// 객체에서 static method 호출
strawberry.printClassName();  
// TypeError: strawberry.printClassName is not a function
// 즉, 객체에서는 static method에 접근할 수 없음을 알 수 있음
