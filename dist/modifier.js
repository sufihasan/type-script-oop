// Access Modifiers (public, private, protected)
// ✅ public
// Default in TypeScript.
// Can be accessed anywhere (inside class, subclass, or outside).
// 🔒 private
// Can be accessed only inside the same class.
// Not accessible from outside or subclass.
// 🧬 protected
// Can be accessed inside the class and its subclasses, but not outside.
class BankAccount {
    accountName;
    balance;
    accountType;
    constructor(nameP, balanceP) {
        this.accountName = nameP;
        this.balance = balanceP;
        this.accountType = 'saving';
    }
    showBalance() {
        console.log(`Your balance is ${this.balance}`);
    }
}
const account1 = new BankAccount("Hasan sarder", 5000);
account1.showBalance();
// --------------------
//🔒 private
class BankAccount1 {
    balance;
    constructor(amount) {
        this.balance = amount;
    }
    showBalance() {
        console.log(`Your balance is ${this.balance}`);
    }
}
const account = new BankAccount1(1000);
account.showBalance(); // ✅ OK
export {};
// console.log(account.balance); ❌ Error (private)
//---------------------------
