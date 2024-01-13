// Promis ama async/await

function orderCoffee(order) {
  // code here
  return order;
}

console.log(orderCoffee("capuchino"));

function orderjoke() {
  let respone = fetch("https://api.api-ninjas.com/v1/jokes");

  console.log(respone);
}

orderjoke();
