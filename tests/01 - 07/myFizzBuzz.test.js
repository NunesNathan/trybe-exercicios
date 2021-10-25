const myFizzBuzz = require('../../01 - Fundamentos/07 - Introducao_ES6_e_Testes_Unitários/dia_3/myFizzBuzz.js');

describe('myFizzBuzz function', () => {
  test('confere respostas', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('2')).toBe(false);
  })
});