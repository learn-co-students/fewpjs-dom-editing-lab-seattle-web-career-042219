let temp = document.createElement("h1");
temp.textContent = "My HTML adventure"
document.body.appendChild(temp);

let pTag = document.createElement("p");
document.body.appendChild(pTag);

let strTag = document.createElement("strong");
strTag.textContent = "strong tag";
document.querySelector("p").appendChild(strTag);

let emTag = document.createElement("em");
document.querySelector("p").appendChild(emTag);

let aTag = document.createElement("a");
aTag.href="https://developer.mozilla.org/en-US/docs/Web/HTML";
document.querySelector("p").appendChild(aTag);

let tableTag = document.createElement("table");
document.body.appendChild(tableTag);
