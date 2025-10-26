
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
    public accountName: string;
    private balance: number;
    protected accountType: string;

    constructor(nameP: string, balanceP: number) {
        this.accountName = nameP;
        this.balance = balanceP;
        this.accountType = 'saving';
    }

    public showBalance() {
        console.log(`Your balance is ${this.balance}`);
    }

}

const account1 = new BankAccount("Hasan sarder", 5000);
account1.showBalance();


// --------------------
//🔒 private

class BankAccount1 {
    private balance: number;

    constructor(amount: number) {
        this.balance = amount;
    }

    showBalance() {
        console.log(`Your balance is ${this.balance}`);
    }
}

const account = new BankAccount1(1000);
account.showBalance(); // ✅ OK
// console.log(account.balance); ❌ Error (private)


//---------------------------



