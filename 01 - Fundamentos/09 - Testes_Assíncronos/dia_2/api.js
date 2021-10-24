const fetchArray = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  const allCoins = await fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => console.log('error', error));
  
  allCoins.forEach((coin) => {
    if (coin.rank < 11) {
      const priceUsd = Number(coin.priceUsd)
      createList(coin.id, priceUsd, coin.symbol)
    }
  });
}

const createList = (id, priceUsd, symbol) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li')
  li.innerText = `${id} (${symbol}): ${priceUsd.toFixed(2)}`
  ul.appendChild(li)
};


fetchArray();

