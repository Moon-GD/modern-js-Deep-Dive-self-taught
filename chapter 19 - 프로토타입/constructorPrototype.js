// 생성자 함수
function Person(age) {
    // safe-scope constructor pattern
    if (! new.target) {
        return new Person(age);
    }

    this.age = age;
};

// prototype에 고유 메소드 등록
// 1️⃣ getAge
Person.prototype.getAge = function() { return this.age; }

// 2️⃣ setAge
Person.prototype.setAge = function(newAge) { this.age = newAge; }

const moonGD = new Person(26);

console.log(moonGD.__proto__ === Person.prototype);  // true
console.log(Object.getPrototypeOf(moonGD) === Person.prototype);  // true