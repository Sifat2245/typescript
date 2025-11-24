// getter - setter

class BankAccount {
  readonly userId: number;
  public userName: string;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  //   addBalance(balance: number){
  //     this.userBalance = this.userBalance + balance
  //   }

  // using set to add new amount with the existing account
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  // using getter to show or get the updated user balance

  get getBalance () {
    return this.userBalance // get must return a value!
  }

  //get balance
  //   getBalance () {
  //     return this.userBalance
  //   }
}

const sifatBhaiAccount = new BankAccount(111, "sifat", 10);

// sifatBhaiAccount.addBalance(100);
// sifatBhaiAccount.addBalance(70);

sifatBhaiAccount.addBalance = 200

console.log(sifatBhaiAccount);
