let money = parseFloat(window.prompt("Enter the inicial amount of money: "));

let option;
do {
    window.alert("You have: $" + money)
    option = parseFloat(window.prompt(
        "MENU\n\n" +
        "1 - Add money\n" +
        "2 - Remove money\n" +
        "3 - Finish\n"
    ));

    switch(option) {
        case 1:
            money = money + parseFloat(window.prompt("Enter how much you want to add:"));
            break;
        case 2:
            money = money - parseFloat(window.prompt("Enter how much you want to remove:"));
            break;
        case 3:
            window.alert("Finishing...");
            break;
        default:
            window.alert("Invalid answer")
    }
} while(option !== 3);