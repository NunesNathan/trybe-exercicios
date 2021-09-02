let inputValues = "hi there!"
var outputStrings = [];
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));

}

console.log(outputStrings);


function encode(str) {
  let string = []
  for (let index = 0; index < str.length; index += 1) {
    let as = str[index]
    if (as == "a") {
      as = 1
      string.push(as)
    } else if (as == "e") {
      as = 2
      string.push(as)
    } else if (as == "i") {
      as = 3
      string.push(as)
    } else if (as == "o") {
      as = 4
      string.push(as)
    } else if (as == "u") {
      as = 5
      string.push(as)
    }else {
      string.push(as)
    }
  } stringEncoded = string.join('')
  return stringEncoded
}

console.log(encode("hi there"));