var i1 = 3;
var i2 = "3";
var i3 = Number(i1) + Number(i2);
var i4 = Number(i2) + Number(i1);
console.log('i3', i3);
console.log('i4', i4);

//addition/
console.log(2 + 2);
// Expected output: 4
console.log(2 + true);
// Expected output: 3
console.log('hello ' + 'world');
// Expected output: "hello world"
console.log(13 + ': Friday');
// Expected output: "13: Friday"

//multiplication/

console.log('3' * '2');
// Expected output: 6
console.log(2 * false);
// Expected output: 0

let multi = 2;
let str = "Little lamb";
let multiStr = "";

for(let i = 0; i < multi; i++){
  multiStr += str
}
console.log(multiStr);

//divide/
console.log(3 / 4);
// Expected output: 0.75
console.log(2 / true);
// Expected output: 2

//convert/

var num = 24;
var str = num.toString();
console.log(num); // 24
console.log(str); // "24" //num to str and vice versa

var obj = new Boolean(27);
console.log(obj.toString()); //bool to str

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-0)); //  false
console.log(Boolean(-1)); //  true
const num = 1;
const bool = Boolean(num);
console.log(bool); // true // num to bool



