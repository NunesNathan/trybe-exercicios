import './App.css';
import Order from './Order';
import Image2 from './image';
import React from 'react';
import UserProfile from './UserProfile';

const headphone = {
  id: 102,
  user: "cena@gmail.com",
  product: "Razer Headphone",
  price: {
    value: 99.99,
    currency: "dollars"
  }
};

const energyDrink = {
  id: 77,
  user: "cena@gmail.com",
  product: "Monster 500mL",
  price: {
    value: 9.99,
    currency: "dollars"
  }
};



class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App-header">
        <main>
          <h3>Fixando 1</h3>
          <Image2 source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='gatinho lindo' />
          <hr />
          <h3>Fixando 2</h3>
          <Order order={headphone} />
          <Order order={energyDrink} />
          <hr />
          <h3>Fixando 3</h3>
          <div>
            {users.map(user => <UserProfile key={user.name} user={user} />)}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
