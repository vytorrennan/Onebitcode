function triangle(base, height) {
    return base*(height/2);
}

function rectangle(base, height) {
    return base*height;
}

function square(side) {
    return side**2;
}

function trapeze(bigBase, smallBase, height) {
    return (bigBase + smallBase) * (height /2);
}

function circule(radius) {
    return 3.14 * radius**2;
}

let selectedOption = "";

do{
    selectedOption = parseFloat(window.prompt("You want to calculete the area of:\n1-Triangle\n2-Rectangle\n3-Square\n4-Trapeze\n5-Circle\n6-Finish program"))

    switch(selectedOption) {
        case 1:
            window.alert("The area is: " + triangle(window.prompt("Enter the base: "), window.prompt("Enter the height: ")));
            break;
        case 2:
            window.alert("The area is: " + rectangle(window.prompt("Enter the base: "), window.prompt("Enter the height: ")));
            break;
        case 3:
            window.alert("The area is: " + square(window.prompt("Enter the side: ")));
            break;
        case 4:
            window.alert("The area is: " + trapeze(window.prompt("Enter the bigger base: "), window.prompt("Enter the smaller base: "), window.prompt("Enter the height: ")));
            break;
        case 5:
            window.alert("The area is: " + circule(window.prompt("Enter the redius: ")));
            break;
        case 6:
            window.alert("Finishing the program...");
            break;
        default:
            window.alert("Invalid Option");
    }
}while(selectedOption !== 6);
