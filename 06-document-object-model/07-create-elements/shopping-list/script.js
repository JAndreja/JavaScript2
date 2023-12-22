"use strict";

const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My element");

//div.innerText = "Hello World";

const text = document.createTextNode("Hello Andreja");
div.appendChild(text);

//added to the end of body
document.body.appendChild(div);

// added to the list
document.querySelector("ul").appendChild(div);
