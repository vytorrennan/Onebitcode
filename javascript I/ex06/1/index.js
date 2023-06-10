let num = window.prompt("Enter a number to see it's multiplication table: ");

let table = "";
for (let i=1;i<21;i++) {
    table += num + " * " + i + " = " + (num * i) + "\n";
}

window.alert(table);