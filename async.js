// Promis ama async/await

function orderCoffee(order) {
  // code here
  return order;
}

console.log(orderCoffee("capuchino"));

async function orderjoke() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");

  let data = await response.json(); // Get the JSON data from the response

  console.log(JSON.stringify(data));
}

orderjoke();
