let properties = [{propertieName: "Rio beach", numRooms: 6, numBathrooms: 3, hasGarage: true}, {propertieName:"SP center", numRooms: 4, numBathrooms: 2, hasGarage: true}];

let allProperties = "";
let selectedOption = undefined;

// object atributes
let propertieName = "";
let numRooms = 0;
let numBathrooms = 0;
let hasGarage = false;

do{
    selectedOption = parseFloat(window.prompt("Number os properties: " + properties.length + "\n\nOptions:\n1-Add new propertie\n2-Check all properties available\n3-Finish"));

    switch(selectedOption) {
        case 1:
            propertieName = window.prompt("Enter the name of the propertie: ");
            numRooms = parseFloat(window.prompt("Enter the number os rooms: "));
            numBathrooms = parseFloat(window.prompt("Enter the numebr of bathrooms: "));
            hasGarage = window.confirm('Press "Ok" if there is a garage, if it doesn\'t press "Cancel"!');
            properties.push({propertieName, numRooms, numBathrooms, hasGarage});
            break;
        case 2:
            allProperties = "";
            for(let i=0;i<properties.length;i++){
                allProperties += "-Name: " + properties[i].propertieName + ", " + "Rooms: " + properties[i].numRooms+ ", " + "Bathrooms: " + properties[i].numBathrooms+ ", ";
                if (properties[i].hasGarage === true) {
                    allProperties += "Has garage";
                } else {
                    allProperties += "Doesn't has garage";
                }
                allProperties += "\n";
            }
            window.alert("Properties:\n" + allProperties);
            break;
        case 3:
            window.alert("Finishing...");
            break;
        default:
            window.alert("Enter a valid option!");
    }
}while(selectedOption !== 3);