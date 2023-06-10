let patients = ["Matheus", "Marcos", "Jonas Del Toro", "Dacerra Pinto", "Sujeito Sujo"];
let allPatients = "";
finish = 0;
do{
    allPatients = "";
    for(let i=0;i<patients.length;i++) {
        allPatients += (i+1) + "º ";
        allPatients += patients[i] + "\n";
    }

    optionSelected = parseFloat(window.prompt("Queue:\n" + allPatients + "\n1-New patient\n2-Treate patient\n3-Finish"));
    
    switch(optionSelected){
        case 1:
            patientsName = window.prompt("Enter the name of the new pacient on the queue: ");
            patients.push(patientsName);
            break;
        case 2:
            removed = patients.shift();
            if(removed) {
                window.alert(removed + " was treated!");
            } else {
                window.alert("Queue empty");
            }
            break;
        case 3:
            finish = 1;
            window.alert("finishing...")
            break;
        default:
            window.alert("Invalid option");
    }

}while(!finish);