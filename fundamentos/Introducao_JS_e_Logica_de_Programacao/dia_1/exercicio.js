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

function eTriangulo(value1, value2, value3) {
  let angulo = value1 + value2 + value3
  let absAngulo = Math.abs(value1) + Math.abs(value2) + Math.abs(value3)
  if (absAngulo != angulo) {
    return "tem numero errado ai, bonachão!"
  } else if (angulo == 180) {
    return true
  } else {
    return false
  }
}

//6  => https://www.ichess.net/blog/chess-pieces-moves/

function chess(pieces) {
  pieces = pieces.toLowerCase()
  if (pieces == "king"){
    return "one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling."
  } else if (pieces == "queen") {
    return "diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces."
  } else if (pieces == "rook") {
    return "horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles."
  } else if (pieces == "bishop") {
    return "diagonally any number of squares. They are unable to jump over pieces."
  } else if (pieces == "knight") {
    return "in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces."
  } else if (pieces == "pawn") {
    return "vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction. Pawns are unable to move backward on captures or moves.Upon reaching the other side of the board a pawn promotes into any other piece, except for a king.Additionally, pawns can make a special move named En Passant."
  } else {
    return "ta errado isso aí"
  }
}

//7

function aTo90(rate) {
  if (rate >= 90 && rate <= 100) {
    return "A"
  } else if (rate >= 80) {
    return "B"
  } else if (rate >= 70) {
    return "C"
  } else if (rate >= 60) {
    return "D"
  } else if (rate >= 50) {
    return "E"
  } else if (rate >= 0 && rate < 50) {
    return "F"
  }
}

//8  => Bonus: use somente um if .

function thePair(value1, value2, value3) {
  let a = value1 % 2
  let b = value2 % 2
  let c = value3 % 2
  if (a == 0 && value1 > 1  || b == 0 && value2 > 1 || c == 0 && value3 > 1 ) {
  return true
  } else {
  return false
}
}

//9  => Bonus: use somente um if .

function theOdd(value1, value2, value3) {
  let a = value1 % 2
  let b = value2 % 2
  let c = value3 % 2
  if (a != 0 && value1 > 0 || b != 0 && value2 > 0 || c != 0 && value3 > 0) {
    return true
  } else {
    return false
  }
}

console.log(theOdd(0, 10, 47));

//10

function elProfit(custo, valor) {
  let imposto = custo / 100
  imposto = 20 * imposto
  custo = imposto + custo
  let profitEm1000 = (valor - custo) * 1000
  if (custo == 0 || valor == 0) {
    return "valores incompatives com o programa!"
  } else {
    return profitEm1000
  }
}

//11

function liquid(salary) {
  let salaryPercent = salary / 100
  let IR = 0
  let INSS = 0
  if (salary <= 1556.94) {
    INSS = salaryPercent * 8
  } else if (salary < 2594.92) {
    INSS = salaryPercent * 9
  } else if (salary <= 5189.82) {
    INSS = salaryPercent * 11
  } else if (salary > 5189.83) {
    INSS = 570.88
  }
  INSS = Math.ceil(INSS)
  let baseSalary = salary - INSS
  let baseSalaryPercent = baseSalary / 100
  if (baseSalary <= 1903.98) {
    IR = 0
  } else if (baseSalary < 2826.65) {
    IR = (baseSalaryPercent * 7.5) - 142.80
  } else if (baseSalary <= 3751.05) {
    IR = (baseSalaryPercent * 15) - 354.80
  } else if (baseSalary <= 4664.68) {
    IR = (baseSalaryPercent * 22.5) - 636.13
  } else if (baseSalary > 4664.68) {
    IR = (baseSalaryPercent * 27.5) - 869.36
  }
  IR = Math.ceil(IR)
  let liquid = baseSalary - IR
  return liquid
}

console.log(liquid(3500));