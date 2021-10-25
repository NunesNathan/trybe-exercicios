const getRepos = require("../../01 - Fundamentos/09 - Testes_Assíncronos/dia_3/getRepos.js");

test('Se contém projetos', async () => {
  const result = await getRepos('https://api.github.com/orgs/tryber/repos')
  expect(result).toContain('sd-01-week4-5-project-todo-list')
});