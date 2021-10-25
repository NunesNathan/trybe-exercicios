const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
} = require("../../01 - Fundamentos/07 - Introducao_ES6_e_Testes_Unitários/dia_3/fixando/my_new_project/loginValidation.js");

describe("a função verifyCredentials()", () => {

  it("verifyCredentials() calls the correct function depending on the user and password input", () => {

    const user = {
      userName: 'Bob',
      password: 123456,
    };

    const { userName, password } = user;

    expect(verifyCredentials({ userName, password })).toBe(
      "Hello, Joana! Que bom ter você de volta"
    );
  });

  it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
    expect(greetingMessage("Lucas")).toBe(
      "Hello, Lucas! Que bom ter você de volta"
    );
  });

  it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
    expect(loginErrorMessage("Bob")).toBe(
      "Pessoa usuária 'Bob' não encontrada, tente novamente!"
    );
  });
});