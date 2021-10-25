const sum = require("../../01 - Fundamentos/07 - Introducao_ES6_e_Testes_Unitários/dia_3/sum.js");

describe('sum function', () => {
  test('sums two values', () => {
    expect(sum(2, 3)).toEqual(5);
  })
  test('sum 0 plus 0', () => {
    expect(sum(0, 0)).toEqual(0);
  })
  test('recusa strings', () => {
    expect(() => sum('3', 10)).toThrowError('parameters must be numbers')
  })
});