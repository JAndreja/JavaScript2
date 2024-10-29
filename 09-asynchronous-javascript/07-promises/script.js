const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation completed");
    resolve();
  });
}, 2000);

// promise.then(() => {
//   console.log("Promise consumed");
// });

// console.log("Hello from global scope");

// return a promise
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "John", age: 30 });
  });
}, 2000);

// promise2.then((user) => {
//   console.log(user);
// });

// handling errors

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (error) {
      reject(new Error("⛔ ERROR:Something went wrong ⛔"));
    }
    resolve({ name: "John", age: 30 });
  });
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error.message);
  });
