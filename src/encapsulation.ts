// ===============================
// OOP – Encapsulation
// ===============================
// Encapsulation means keeping data safe by restricting direct access
// and exposing only controlled methods to interact with the data.


// BankAccount class demonstrating encapsulation through access modifiers
class BankAccount {
  //| 'readonly' → can be assigned once (inside constructor) but cannot be changed later
  readonly userId: number;

  // 'public' → accessible from anywhere (inside class, outside class, subclasses)
  public userName: string;

  // 'protected' → accessible inside this class AND subclasses, but NOT from outside
  protected userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // 'private' → strictly internal method,
  // cannot be called from outside or child classes.
  // This ensures balance updates happen in a controlled way.
  private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  // A public method that safely exposes the private method.
  // This is how encapsulation protects data while still allowing updates.
  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

// Creating an instance of BankAccount
const sifatBhaiAccount = new BankAccount(111, "sifat", 10);

// Cannot call addBalance directly (private), so we use the public wrapper.
sifatBhaiAccount.callHiddenMethod(200);

console.log(sifatBhaiAccount);


// ===============================
// Subclass Demonstrating 'protected' Usage
// ===============================

class StudentBankAccount extends BankAccount {
  test() {
    // 'userBalance' is protected, so it IS accessible inside child class.
    // But still protected from outside access.
    this.userBalance;
  }
}
