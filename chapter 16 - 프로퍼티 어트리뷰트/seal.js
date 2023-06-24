const house = { price: 10_000 };

// seal (밀봉) 여부 검증
console.log(Object.isSealed(house));  // false

// seal & 출력
Object.seal(house);
console.log(Object.isSealed(house));  // true

// price property 삭제 시도
delete house.price;
house.color = 'red';
console.log(house);  // { price: 10000 } → seal 되어 있기에 확장/축소가 무시됨을 알 수 있다.