'use strict'

var x = 1;

function person() {
  console.log(this);
}

person();  // undefined
