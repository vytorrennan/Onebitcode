const css = require("./style.css");

const addToDoBnt = document.querySelector("#titleAndInput > div > button")
const list = document.getElementsByTagName("ul")[0];

addToDoBnt.addEventListener("click", () => {
    const input = document.getElementsByTagName("input")[0];

    const newLi = document.createElement("li");
    const newInput = document.createElement("input");
    newInput.type = "radio";
    const newP = document.createElement("p");
    newP.innerText = input.value;
    const newDiv = document.createElement("div");
    const newBnt = document.createElement("button");
    newBnt.innerText = "-";
    


    newDiv.appendChild(newInput);
    newDiv.appendChild(newP);
    newLi.appendChild(newDiv);
    newLi.appendChild(newBnt);
    list.appendChild(newLi);

    newBnt.addEventListener("click", () => {
      newLi.remove();  
    })

    newInput.addEventListener("click", () => {
        newP.style.textDecoration = "line-through";
    })
})