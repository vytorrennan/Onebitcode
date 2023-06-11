const form = document.querySelector("section > form");
const btn = document.querySelector("section > button");
const total = document.querySelector("#total");
let list = document.querySelector("ul");
const transactionsDiv = document.querySelector("#transactionsDiv");
const editMenu = document.querySelector("#editMenu");
const formEdit = document.querySelector("#editMenu > form")
const inputEditName = document.querySelector("#nameEdit");
const inputEditValue = document.querySelector("#valueEdit");
let editing = [];

let totalValue = 0;

async function getTransactions() {
    const transactions = await fetch("http://localhost:3000/Transactions");
    return transactions.json();
}


async function postTransaction(data) {
    return await fetch("http://localhost:3000/Transactions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}


async function putTransaction(id, data) {
    return await fetch("http://localhost:3000/Transactions/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}


async function deleteTransaction(id) {
    return await fetch("http://localhost:3000/Transactions/" + id, {
        method: "DELETE",
    });
}


function displayTransactions(list, inputEditName, inputEditValue, editMenu) {
    getTransactions().then((transactions) => {
        transactions.forEach((transaction) => {
            createElementsTransaction(transaction, list, inputEditName, inputEditValue, editMenu);
            totalValue += parseFloat(transaction.value);
        });
        total.innerText = `Total: ${totalValue}`;
    })
}


function createElementsTransaction(transaction, list, inputEditName, inputEditValue, editMenu) {
    const newLi = document.createElement("li");
    const newPName =document.createElement("p");
    newPName.innerText = `Name: ${transaction.name}`;
    const newPValue =document.createElement("p");
    newPValue.innerText = `Value: ${transaction.value}`;
    const newEditBtn = document.createElement("button");
    newEditBtn.innerText = "EDIT";
    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.innerText = "DELETE";
    newLi.append(newEditBtn, newDeleteBtn, newPName, newPValue);
    list.append(newLi);

    newEditBtn.addEventListener("click", () => {
        inputEditName.value = transaction.name;
        inputEditValue.value = transaction.value;
        editMenu.dataset.id = transaction.id;
        editing.push(newPName);
        editing.push(newPValue);
        
        editMenu.style.visibility = "visible"
    })

    newDeleteBtn.addEventListener("click", async () => {
        await deleteTransaction(transaction.id);
        newLi.remove()
    })
}


form.addEventListener("submit", async (event) => { 
    event.preventDefault()

    const inputName = document.getElementById("name").value;
    const inputValue = document.getElementById("value").value;

    const newTransaction = {"name": inputName, "value": inputValue};
    postTransaction(newTransaction);

    getTransactions().then((transactions) => {
        createElementsTransaction(transactions[transactions.length - 1], list, inputEditName, inputEditValue, editMenu);
        totalValue += parseFloat(transactions[transactions.length - 1].value);
        total.innerText = `Total: ${totalValue}`;
    })
})

formEdit.addEventListener("submit", async (event) => {
    event.preventDefault();
    await putTransaction(editMenu.dataset.id, {"name": inputEditName.value, "value": inputEditValue.value})
    editing[0].innerText = "Name: " + inputEditName.value;
    editing[1].innerText = "Value: " + inputEditValue.value;
    editing = [];
    editMenu.style.visibility = "hidden"
})

displayTransactions(list, inputEditName, inputEditValue, editMenu);
