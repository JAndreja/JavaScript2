// const intervald = setInterval( myCallback , 1000);

// function myCallback(){
//     console.log(Date.now());;
// }

let intervald;

function startChange(){
    if(!intervald){
        intervald = setInterval(changeRandomColor, 1000);
    }
}
// function changeColor(){
//     if(document.body.style.backgroundColor !== "black"){
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//     }else{
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     }
// }


function changeRandomColor(){
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor = "#" + randomColor;

}
function stopChange(){
    clearInterval(intervald);
}

document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click",stopChange);