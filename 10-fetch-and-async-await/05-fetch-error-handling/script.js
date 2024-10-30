// fetch('https://run.mocky.io/v3/d0630ff6-45fc-4a1d-94a3-c6743ce5e3e9')
//  .then( response => {
//     return response
//  })
// .then (() => console.log('success'))



// fetch('https://run.mocky.io/v3/a4a38c22-30dd-42fa-a67e-94d4716935d1')
//  .then( response => {
//     if(!response.ok){
//         throw new Error('Request Failed')
//     }
//     return response
//  })
// .then (() => console.log('success'))


const url500 = 'https://run.mocky.io/v3/7ba24c29-b231-4591-97f3-8c7e0d70f996'
const url404 = 'https://run.mocky.io/v3/a4a38c22-30dd-42fa-a67e-94d4716935d1'
const url401 = 'https://run.mocky.io/v3/cd35c356-589c-43c4-9e50-252e997ef970'
const url200 ='https://run.mocky.io/v3/d0630ff6-45fc-4a1d-94a3-c6743ce5e3e9'

fetch(url200)
 .then( response => {
    if(response.status === 404){
        throw new Error('Not Found')
    } 
     else if (response.status === 500){
        throw new Error('Server Error')
    } else if ( response.status !== 200){
        throw new Error('Request Failed')
    }
    return response
 })
.then (() => console.log('success'));']'

