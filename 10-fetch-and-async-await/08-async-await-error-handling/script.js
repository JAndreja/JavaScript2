
const url404 = 'https://run.mocky.io/v3/c761c040-d1e8-410a-972b-0470ef110c1f'
async function getUsers() {
     try {
         //const response = await fetch('https://jsonplaceholder.typicode.com/users');
         const response = await fetch(url404)
         if (! response.ok){
            throw new Error('Request Failed')
         }
         const data = await response.text();
         console.log('HELLO');
     } catch (error) {
        console.log(error);
     }
} 

//getUsers()


async function getPosts() {

    
        //const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await fetch(url404)
        if (! response.ok){
           throw new Error('Request Failed')
        }
        const data = await response.text();
        console.log(data);
    

} 

getPosts().catch( (error) => console.log(error))