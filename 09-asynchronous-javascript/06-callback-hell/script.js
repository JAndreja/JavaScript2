
// function getData(endpoint , cb){
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', endpoint);

//   xhr.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//       cb(JSON.parse(this.responseText));
//     }
//   };
//    setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);;
// } 

// getData('./movies.json', (data)=> {
//     console.log(data)
//     getData("./actors.json" , (data) => {
//         console.log(data)
//         getData("./directors.json" , (data) => {
//             console.log(data)
//         })
//     })
// } );


function getmovies(endpoint){
        
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            const data = JSON.parse(this.responseText);
            console.log(data)
            console.log(data[0].title)       
        }
    };

}

getmovies('./movies.json');