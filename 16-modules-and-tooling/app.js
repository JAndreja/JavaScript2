const {capitalizeWords, makeMoney } = require('./utils')
const Person = require('./Person');
const axios = require('axios');
// async function getUser (){
//     const response = await fetch('https://api.github.com/users/AndrejaJovanovski');
//     const data = await response.json();
//     console.log(data);
// }

// getUser();

console.log(capitalizeWords('HELLO world'));
console.log(makeMoney(100));
const person = new Person('John', 30);
person.greet();


// using axios

async function getPost (){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
}
getPost();