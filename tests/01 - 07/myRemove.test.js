const myRemove = require("../../01 - Fundamentos/07 - Introducao_ES6_e_Testes_Unitários/dia_3/myRemove");

describe('myRemove function', () => {
  test('retorna resposta correta', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})