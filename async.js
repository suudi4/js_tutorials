// Promis ama async/await

function orderCoffee(order) {
  // code here
  return order;
}

console.log(orderCoffee("capuchino"));

function orderjoke() {
  let respone = fetch("https://jsonplaceholder.typicode.com/todos/1");

  console.log(respone);
}

orderjoke();
