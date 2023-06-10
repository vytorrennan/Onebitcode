let title = document.getElementById("title");
const form = document.getElementById("form");
const startBtn = document.getElementsByTagName("button");
const main = document.getElementsByTagName("main")[0];

let a1 = document.getElementsByTagName("p")[0];
let a2 = document.getElementsByTagName("p")[1];
let a3 = document.getElementsByTagName("p")[2];
let b4 = document.getElementsByTagName("p")[3];
let b5 = document.getElementsByTagName("p")[4];
let b6 = document.getElementsByTagName("p")[5];
let c7 = document.getElementsByTagName("p")[6];
let c8 = document.getElementsByTagName("p")[7];
let c9 = document.getElementsByTagName("p")[8];


form.addEventListener("submit", function (ev) {
    ev.preventDefault();
})

startBtn[0].addEventListener("click", function (ev) {
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");
    title.innerText = player2.value;
    form.remove();

    function playerAction(event) {
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
    
    a1.addEventListener("click", playerAction);
    a2.addEventListener("click", playerAction);
    a3.addEventListener("click", playerAction);
    b4.addEventListener("click", playerAction);
    b5.addEventListener("click", playerAction);
    b6.addEventListener("click", playerAction);
    c7.addEventListener("click", playerAction);
    c8.addEventListener("click", playerAction);
    c9.addEventListener("click", playerAction);
    console.log(a1);
    console.log(a2);
})


function checkWinner(player1) {
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

function reset(player1) {
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