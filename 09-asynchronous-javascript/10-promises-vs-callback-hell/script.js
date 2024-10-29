function getData(endpoint) {
  const xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4 ) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json', (data) => {
//   console.log(data);
//   getData('./actors.json', (data) => {
//     console.log(data);
//     getData('./directors.json', (data) => {
//       console.log(data);
//     });
//   });
// });

getData('./movies.json')
  .then((data) => {
    console.log(data);
    return getData('./actors.json');
  })
  .then((data) => {
    console.log(data);
    return getData('./directors.json');
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

