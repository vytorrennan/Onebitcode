const form = document.getElementsByTagName("form")[0];
const btn = document.getElementsByTagName("button")[0];
const p = document.getElementsByTagName("p")[0];


form.addEventListener("submit", event => {
    event.preventDefault();
})

btn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        checkValidEmail(email)
        checkValidPassword(password)
        p.innerText = "Logged in!"
        p.style.fontWeight = "bold";
        p.style.color = "green";
    } catch (error) {
        p.innerText = error.message;
        p.style.color = "red";
    }
})

function checkValidEmail(email) {
    const fixedEmail = email.replace(/\s/g, "");
    if (!(fixedEmail.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/i))) {
        throw new Error("Email invalid!")
    }
}

function checkValidPassword(password) {
    if (!(password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/\d/) && password.match(/_|!|@|\$|#|%|&|\*|\./) && password.length > 8)) {
        throw new Error("Password invalid!")
    }    
}
