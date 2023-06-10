class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password) {
        console.log(email === this.email && password === this.password ? "Logged in successfully!" : "Email or password don't match any account!")
    }
}

const john = new User("John Woodstock", "john123@gmail.com", "1234john");
console.log(john);
john.login("test@gmail.com", "1234");
john.login("john123@gmail.com", "1234john");
