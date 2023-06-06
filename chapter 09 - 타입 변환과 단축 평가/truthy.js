function isTruthy(target) {
    if (!!target) {
        console.log('Truthy');
    } else {
        console.log('Falsy');
    }
}

isTruthy([]);
isTruthy('0');
isTruthy({});