import Account from "./Account.js";

export default class User {
    constructor(completeName, email, account) {
        this.completeName = completeName;
        this.email = email;
        this.account = new Account(this);
    }
}