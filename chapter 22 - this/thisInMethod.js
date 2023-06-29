function Animal(name) {
  this.name = name;
}

// prototype에 method binding
Animal.prototype.introduce = function() {
  console.log(`이름 : ${this.name}`);
}

// 객체에서 introduce 메소드 호출
const dog = new Animal("강아지");
dog.introduce();  // 이름 : 강아지

// Animal 함수에서 introduce 메소드 호출
Animal.prototype.introduce();  // 이름 : undefined