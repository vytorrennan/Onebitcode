export default class installment {
    constructor(value, number, situation = "pendente") {
        this.value = value;
        this.number = number;
        this.situation = situation;
    }
}