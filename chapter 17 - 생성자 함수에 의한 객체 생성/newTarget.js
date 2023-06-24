function Person(age) {
    // new 키워드와 함께 호출되지 않은 경우
    // scope-safe constructor pattern
    if(!new.target) {
        return new Person(age);
    }
    this.age = age;
}

// new 키워드로 인스턴스 생성
const person = new Person(26);
console.log(person);  // Person { age: 26 }

// new 키워드 없이 인스턴스 생성
const person2 = Person(26);
console.log(person2);  // Person { age: 26 }
