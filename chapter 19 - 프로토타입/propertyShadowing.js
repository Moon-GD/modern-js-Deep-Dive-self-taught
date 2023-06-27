const Person = function(name) {
  this.name = name;
}

// Person prototype에 sayHello 등록
Person.prototype.sayHello = function() {
  console.log(`<Person> 이름 : ${this.name}`);
}

const moon = new Person('moonGD');
moon.sayHello = function() {
  console.log(`<moon> 이름 : ${this.name}`);
}

moon.sayHello();  // <moon> 이름 : moonGD
// <Person>의 sayHello가 아닌, 인스턴스 property에 등록된 sayHello가 호출됨을 알 수 있다
