function isFalsy(target) {
    if (!target) {
        console.log('Falsy');
    } else {
        console.log('Truthy');
    }
}

isFalsy(undefined);  // false
isFalsy(null);  // false
isFalsy(NaN);  // false
isFalsy('');  // false