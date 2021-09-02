n1 = 4
x1 = ""
symbol1 = '*'

for (let index = 0; index < n1; index += 1) {
  x1 = x1 + symbol1;
}
for (let index = 0; index < n1; index += 1) {
  console.log(x1);
}


let n = 7
let symbol = '*'
let espaco = ''
let x = (n - 1) / 2


for (let index = 0; index < n; index += 1) {
  for (let b = n; b < x - index; b++) {
    console.log(b);
  }
}