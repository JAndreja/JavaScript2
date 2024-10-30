// PROMISE
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "John",
      age: 30,
    });
  }, 1000);
});

//promise.then( (data) => console.log(data))

// ASYNC AWAIT

async function getPromis() {
    const response = await promise;
    console.log(response)
}
//getPromis();


async function getUsers() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await users.json();
    console.log(data);
}

getUsers()