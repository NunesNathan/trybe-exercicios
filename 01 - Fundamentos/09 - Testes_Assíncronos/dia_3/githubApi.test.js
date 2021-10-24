// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
test('Se contém projetos', async () => {
  const result = await getRepos('https://api.github.com/orgs/tryber/repos')
  expect(result).toContain('sd-01-week4-5-project-todo-list')
})