import { capitalizeWords , makeMoney} from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitalizeWords('HELLO world'));
console.log(makeMoney(100));
const person = new Person('John', 30);
person.greet();

