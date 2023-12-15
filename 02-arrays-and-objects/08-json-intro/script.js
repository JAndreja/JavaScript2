"use strict";

const post = {
  id: 1,
  title: "Post one",
  body: "This is the body",
};

// convert to JSON string
const str = JSON.stringify(post);

// parse JSON

const obj = JSON.parse(str);
console.log(str);
console.log(obj);
