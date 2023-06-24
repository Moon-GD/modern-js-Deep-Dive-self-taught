const person = {
    name: "moon",
    age : 26,
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// { value: 'moon', writable: true, enumerable: true, configurable: true }


console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {
    value: 'moon',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 26, writable: true, enumerable: true, configurable: true }
}
 */