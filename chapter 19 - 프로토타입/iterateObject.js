const person = {
    age: 26,
    name: 'moon',
    job: 'developer'
};

// Object.keys() : enumerable한 property를 배열로 반환
console.log(Object.keys(person));  // ['age', 'name', 'job']

// Object.values() : enumerable한 property의 값을 배열로 반환
console.log(Object.values(person));  // [26, 'moon', 'developer']

// Object.entries() : enumerable한 property와 대응되는 값을 함께 반환
console.log(Object.entries(person));  // [['age', 26], ['name', 'moon'], ['job', 'developer']]