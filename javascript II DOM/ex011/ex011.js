


function joinPlayer() {
    const confirmAddPlayer = window.confirm("Are you sure you want to add the player to the team? ");
    if(confirmAddPlayer) {
        const list = document.getElementById("listOfPlayersOnTheTeam");
        const positon = document.getElementsByName("position");
        const playerName = document.getElementsByName("name");
        const shirt = document.getElementsByName("shirt");
        const newPlayerLi = document.createElement("li");
        newPlayerLi.className = shirt[0].value;
        const newPlayerP = document.createElement("p");
        newPlayerP.innerText = "Position: " + positon[0].value + ", Name: " + playerName[0].value + ", Shirt number: " + shirt[0].value;
        newPlayerLi.appendChild(newPlayerP);
        list.appendChild(newPlayerLi);
        positon[0].value = "";
        playerName[0].value = "";
        shirt[0].value = "";
    } else {
        window.alert("No player was added to the team!")
    }
}


function removePlayer() {
    const confirmRemovePlayer = window.confirm("Are you suro that you want to remove this player from the team?");
    if (confirmRemovePlayer) {
        const shirtRemove = document.getElementsByName("shirtRemove");
        document.getElementsByClassName(shirtRemove[0].value)[0].remove();
        shirtRemove[0].value = "";
    } else {
        window.alert("No player was removed from the team!");
    }
}
