let cards = ["4 de ouros", "5 de paus", "K", "coringa", "J"];
let cardsOrganized = "";
finish = 0;
do{
    cardsOrganized = "";
    for(let i=0;i<cards.length;i++) {
        cardsOrganized += (i+1) + "º ";
        cardsOrganized += cards[i] + "\n";
    }

    optionSelected = parseFloat(window.prompt("Queue:\n" + cardsOrganized + "\n1-Add new card\n2-Pull a card\n3-Finish"));
    
    switch(optionSelected){
        case 1:
            cardName = window.prompt("Enter the name of the new card on the stack: ");
            cards.unshift(cardName);
            break;
        case 2:
            removed = cards.shift();
            window.alert(removed + " was removed from the stack!")
            break;
        case 3:
            finish = 1;
            break;
    }

}while(!finish);
