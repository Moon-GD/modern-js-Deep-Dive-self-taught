const person = {};

// data property인 firstName 생성
Object.defineProperty(person, 'firstName', {
    value: 'GD',
    writable: true,
    enumerable: false,
    configurable: true,
});

// data property인 lastName 생성
Object.defineProperty(person, 'lastName', {
    value: 'moon',
    writable: true,
    enumerable: false,
    configurable: true,
});

console.log(person.firstName);  // GD
console.log(person.lastName);  // moon

// getter & setter 생성
Object.defineProperty(person, 'fullName', {
    // getter
    get() {
        return `${this.lastName} ${this.firstName}`;
    },
    // setter
    set(newName) {
        [this.lastName, this.firstName] = newName.split(' ');
    }
});

// getter
console.log(person.fullName);  // moon GD 

// setter
person.fullName = "moon gyoung-deok";
console.log(person.fullName);  // moon gyoung-deok