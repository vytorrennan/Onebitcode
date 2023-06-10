const form = document.querySelector("form");
const btn = document.querySelector("button");
const list = document.querySelector("ul");


async function getTransactions() {
    const transactions = await fetch("http://localhost:3000/Transactions");
    return transactions.json();
}


function displayTransactions() {
    getTransactions().then((transactions) => {
        transactions.forEach(({id, name, value}) => {
            const newLi = document.createElement("li");
            const newP =document.createElement("p");
            newP.innerText = `Name: ${name} - Value: ${value}`;
            const newEditBtn = document.createElement("button");
            newEditBtn.innerText = "EDIT"
            newLi.append(newEditBtn, newP);
            list.append(newLi);
        });
    })
}


form.addEventListener("submit", async (event) => { 
    event.preventDefault()

    const inputName = document.getElementById("name").value;
    const inputValue = document.getElementById("value").value;

    const newTransaction = {"name": inputName, "value": inputValue};
    const postNewTransaction = await fetch("http://localhost:3000/Transactions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTransaction)
    });

    getTransactions().then((transactions) => {
        const newLi = document.createElement("li");
        const newP =document.createElement("p");
        newP.innerText = `Name: ${transactions[transactions.length - 1].name} - Value: ${transactions[transactions.length - 1].value}`;
        const newEditBtn = document.createElement("button");
        newEditBtn.innerText = "EDIT"
        newLi.append(newEditBtn, newP);
        list.append(newLi);
    })
})

displayTransactions();
