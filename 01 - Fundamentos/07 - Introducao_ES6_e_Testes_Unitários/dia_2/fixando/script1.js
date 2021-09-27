const customer = {
  firstName: 'Robertinho',
  age: 21,
  job: 'Teacher',
};

// customer.lastname = 'Zerinho';

let abc = 'lastname'

customer[abc] = 'Zerinho'
// console.log(customer);

// const cliente = (obj, key, value) => {
//   let kei = `${key}`
//   let object = obj
//   return object[kei] = `${value}`
// }

function client(obj, key, value) {
  return obj[key] = value
}

client(customer, 'time do coração', 'capivaras')

console.log(customer);