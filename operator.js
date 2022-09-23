// operator sama dengan tapi nilai saja
var a = true;
var benar = true;
console.log(a == benar);

var a = 12;
var b = 4;
console.log(a == b);
// false

var a = 7;
var b = '7';
console.log(a == b);

// === operator sama dengan sampai ke tipr data
var a = true;
var benar = true;
console.log(a === benar);
// false

var a = 12;
var b = 4;
console.log(a === b);
// false

var a = '7';
var b = '7';
console.log(a === b);
// true

// !=operator tidak sama dengan tapi nilai saja
var a = true;
var benar = true;
console.log(a !== benar);
// false

var a = 12;
var b = 4;
console.log(a !== b);
// true

var a = '7';
var b = '7';
console.log(a !== b);
// false

// operator kurang dari {<}dan kurang sama dengan dari {<=}
var a = 3;
var b = 4;
console.log(a < b);
// true
console.log(a <= b);
// true

var a = 5;
var b = 5;
console.log(a < b);
// false
console.log(a <= b);
// true

var a = 5;
var b = 5;
console.log(a > b);
// false
console.log(a >= b);
// true
