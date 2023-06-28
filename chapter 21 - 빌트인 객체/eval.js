{
    eval('var x = 1;');
}
console.log(x);

{
    eval('let x = 1;');
    console.log(x);  // x is not defined (내부적으로 'use strict'로 인식됨)
}