function addInput() {
    const ul = document.getElementById("inputs");

    const newLi = document.createElement("li");
    newLi.className = "newLis";
    newLi.innerText = "New input";

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "input";

    newLi.appendChild(newInput);
    ul.appendChild(newLi);

}