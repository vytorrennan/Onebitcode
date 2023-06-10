import Deposit from "../financialExchange/Deposit.js";
import Loan from "../financialExchange/Loan.js";
import Transfer from "../financialExchange/Transfer.js";

export default class Account {
    #balance = 0;

    constructor(user) {
        this.user = user;
        this.allDeposits = [];
        this.allLoans = [];
        this.allTransfers = [];
    }

    get balance() {
        return this.#balance;
    }

    deposit(value, date = new Date().toLocaleDateString("pt-BR")) {
        const newDeposit = new Deposit(value, date);
        this.allDeposits.push(newDeposit);
        this.#balance += value;
    }

    loan(value, numberOfinstallments, date = new Date().toLocaleDateString("pt-BR")) {
        const newLoan = new Loan(value, numberOfinstallments, date);
        this.allLoans.push(newLoan);
        this.#balance += value;
    }

    transfer(sentUser, receiveUser, value, date = new Date().toLocaleDateString("pt-BR")) {
        const newTransfer = new Transfer(sentUser, receiveUser, value, date);
        this.allTransfers.push(newTransfer);
        if (sentUser === this.user) {
            this.#balance -= value;
        } else if (receiveUser === this.user) {
            this.#balance += value;
        }
    }
}
