import { capitalizeWords , makeMoney} from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitalizeWords('HELLO world'));
console.log(makeMoney(100));
const person = new Person('John', 30);
person.greet();


async function getPost() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
}
getPost();