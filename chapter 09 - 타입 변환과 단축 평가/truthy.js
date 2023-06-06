function isTruthy(target) {
    if (!!target) {
        console.log('Truthy');
    } else {
        console.log('Falsy');
    }
}

isTruthy([]);  // true
isTruthy('0');  // true
isTruthy({});  // true