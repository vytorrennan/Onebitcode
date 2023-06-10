import Account from "./classes/client/Account.js";
import User from "./classes/client/User.js";
import Loan from "./classes/financialExchange/Loan.js";

class App {
    static allUsers = [];

    static findUser(email) {
        return this.allUsers.filter((user) => {
            if (user.email === email) {
                return user;
            }
        })
    }

    static createUser(completeName, email) {
        if (this.findUser(email).length === 0) {
            const newUser = new User(completeName, email);
            this.allUsers.push(newUser);
        } else {
            console.log("erro");
        }
    }

    static changeTax(percent) {
        Loan.tax = percent;
    }

    static deposit(email, value) {
        this.findUser(email)[0]?.account.deposit(value);
    }

    static transfer(sentEmail, receiveEmail, value) {
        this.findUser(sentEmail)[0]?.account.transfer(this.findUser(sentEmail)[0], this.findUser(receiveEmail)[0], value);
    }

    static loan(email, numberOfinstallments, value) {
        this.findUser(email)[0]?.account.loan(value, numberOfinstallments);
    }
}


App.createUser("Jonas", "yahoo@gmail.com");
App.createUser("Jonas", "gmail@gmail.com");
App.deposit("yahoo@gmail.com", 100);
App.transfer("yahoo@gmail.com", "gmail@gmail.com", 50);
App.loan("yahoo@gmail.com", 12, 1200);

console.log(App.findUser("yahoo@gmail.com")[0].account.balance);
console.log(App.findUser("gmail@gmail.com")[0].account.balance);

App.changeTax(59)
