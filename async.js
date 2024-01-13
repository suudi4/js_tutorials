// Promis ama async/await

function orderCoffee(order) {
  // code here
  return order;
}

console.log(orderCoffee("capuchino"));

// fetch todo list from api

async function gettodos(url) {
  // code here

  const response = await fetch(url);
  const data = await response.json();

  //   console.log(JSON.stringify(data));

  data.forEach((element) => {
    //  if completed

    console.log(element.completed);
    // else  the job is not completed
  });
}

gettodos("https://jsonplaceholder.typicode.com/todos");
