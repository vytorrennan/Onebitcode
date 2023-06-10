import { title, main, a1, a2, a3, b4, b5, b6, c7, c8, c9 } from "./gameElements.js"
import { player1, player2 } from "./ticTacToe.js";

export default function gameLogic(event) {
    if (event.currentTarget.innerText == "") {
        if (title.innerText === player1.value) {
            event.currentTarget.innerText = player1.className;
            if (checkWinner(player1)) {
                title.innerText = "CONGRATULARIONS " + player1.value + "!";
                reset(player1);
            } else {
                title.innerText = player2.value
            }
        } else if (title.innerText === player2.value) {
            event.currentTarget.innerText = player2.className;
            if (checkWinner(player1)) {
                title.innerText = "CONGRATULARIONS " + player2.value + "!";
                reset(player1);
            } else {
                title.innerText = player1.value
            }
        }
    }
}

export function checkWinner(player1) {
    if (a1.innerText === b5.innerText && b5.innerText === c9.innerText && a1.innerText != "") {
        return true;
    } else if (c7.innerText === b5.innerText && b5.innerText === a3.innerText && c7.innerText != "") {
        return true;
    } else if (a1.innerText === a2.innerText && a2.innerText === a3.innerText && a1.innerText != "") {
        return true;
    } else if (b4.innerText === b5.innerText && b5.innerText === b6.innerText && b4.innerText != "") {
        return true;
    } else if (c7.innerText === c8.innerText && c8.innerText === c9.innerText && c7.innerText != "") {
        return true;
    } else if (a1.innerText === b4.innerText && b4.innerText === c7.innerText && a1.innerText != "") {
        return true;
    } else if (a2.innerText === b5.innerText && b5.innerText === c8.innerText && a2.innerText != "") {
        return true;
    } else if (a3.innerText === b6.innerText && b6.innerText === c9.innerText && a3.innerText != "") {
        return true;
    } else if (a1.innerText != "" && a2.innerText != "" && a3.innerText != "" && b4.innerText != "" && b5.innerText != "" && b6.innerText != "" && c7.innerText != "" && c8.innerText != "" && c9.innerText != "") {
        reset(player1);
    }
    return false;
}

export function reset(player1) {
    const resetbtn = document.createElement("button");
    resetbtn.innerText = "Reset";
    main.appendChild(resetbtn);

    resetbtn.addEventListener("click", function () {
        a1.innerText = ""
        a2.innerText = ""
        a3.innerText = ""
        b4.innerText = ""
        b5.innerText = ""
        b6.innerText = ""
        c7.innerText = ""
        c8.innerText = ""
        c9.innerText = ""
        title.innerText = player1.value;
        resetbtn.remove();
    })
}