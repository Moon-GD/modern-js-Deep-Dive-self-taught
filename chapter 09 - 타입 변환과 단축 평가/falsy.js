function isFalsy(target) {
    if (!target) {
        console.log('Falsy');
    } else {
        console.log('Truthy');
    }
}

isFalsy(undefined);
isFalsy(null);
isFalsy(NaN);
isFalsy('');