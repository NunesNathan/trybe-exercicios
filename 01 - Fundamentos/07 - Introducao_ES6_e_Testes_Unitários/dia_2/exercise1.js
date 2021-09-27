const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = Object.entries(order.order.delivery)[0][1]
  const street = Object.entries(order.address)[0][1]
  const house = Object.entries(order.address)[1][1]
  const apartment = Object.entries(order.address)[2]
  console.log(` Olá ${deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${street}, Nº: ${house}, AP: ${apartment}`);
}

customerInfo(order);

const newOrder = Object.assign({}, order)
newOrder.name = 'Luiz Silva'
newOrder.payment.total = 50

const orderModifier = (order) => {
  const pedido1 = Object.keys(order.order.pizza)
  const pedido2 = Object.values(order.order.drinks.coke)
  console.log(`Olá ${order.name}, o total do seu pedido de ${pedido1[0]}, ${pedido1[1]} e ${pedido2[0]} é R$ ${order.payment.total},00.`);

}

orderModifier(newOrder);