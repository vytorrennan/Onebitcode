import installment from "./Installment.js";

export default class Loan {
    static #tax = 0.20;

    constructor(value, numberOfinstallments, date) {
        this.value = value;
        this.date = date;
        this.installments = this.#calculateInstallments(numberOfinstallments);
    }

    #calculateInstallments(numberOfinstallments) {
        let installments = []
        const installmentsValues = this.value * Loan.#tax / numberOfinstallments;
        for (let i=0;i<numberOfinstallments;i++) {
            installments.push(new installment(installmentsValues, i+1))
        }
        return installments;
    }

    static get tax() {
        return Loan.#tax * 100;
    }

    static set tax(newTax) {
        Loan.#tax = newTax / 100;
    }
}
