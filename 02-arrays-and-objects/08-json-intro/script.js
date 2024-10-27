"use strict";

const post = [ {
  id: 1,
  title: "Post one",
  body: "This is the body",
},
{
  id: 2,
  title: "Post two",
  body: "This is the body",
},

];
console.log(post)

// convert to JSON string
const str = JSON.stringify(post);
console.log(str);


// parse JSON to object

const obj = JSON.parse(str);
console.log(obj);
