const customer = {
  firstName: 'Robertinho',
  age: 21,
  job: 'Teacher',
};

// customer.lastname = 'Zerinho';

let abc = 'lastname'

customer[abc] = 'Zerinho'
console.log(customer);

function client(obj, key, value) {
  return obj[key] = value
}
let time = 'time do coração'
client(customer, time, 'Capivaras de Nova Guiné')

console.log(customer);