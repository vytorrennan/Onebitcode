let option = 5;

do {
    option = parseFloat(window.prompt(
        "Enter an option:\n" +
        "1 - have 5 cm more penis\n" +
        "2 - have 30 cm more height\n" +
        "3 - free games every week\n" +
        "4 - infinite knowledge\n" +
        "5 - bruh, this is all a lie, stop the program"
    ));

    switch(option) {
        case 1:
            window.alert("oh, wau");
            break;
        case 2:
            window.alert("hmm");
            break;
        case 3:
            window.alert("good but not the best");
            break;
        case 4:
            window.alert("perfect, you have choosen the best one!");
            break;
        case 5:
            window.alert("bye");
            break;
        default:
            window.alert("invalid answer")
    }
} while(option !== 5);