const person = {
    firstName: 'GD',
    lastName: 'moon',
    // getter
    get fullName() {
        return `full name : ${this.lastName} ${this.firstName}`;
    },
    // setter
    set fullName(newName) {
        [this.firstName, this.lastName] = newName.split(" ");
    }
};

// getter 활용
console.log(person.fullName);

// setter 활용
person.fullName = "moon gyoung-deok";
console.log(person.fullName);