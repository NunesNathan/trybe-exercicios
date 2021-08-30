const a = 10
const b = 9
const c = 12

//1

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a % b);

//2

if (a > b) {
  console.log(a)
} else {
  console.log(b);
}

//3


if (a < b < c ) {
  console.log(a);
} else if (b > a > c) {
  console.log(b);
} else if (c > a > b) {
  console.log(c);
} else {
  console.log('os maiores valores são os mesmos!'); 
}


//4


if (!!a === true) {
  console.log('positive');
} else if (!!a === false) {
  console.log('negative');
} else {
  console.log('zero');
}


//5