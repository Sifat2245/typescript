// access => modify

class BankAccount {
  readonly userId: number;
  public userName: string;
//   private userBalance: number; // it can only accessible in this class. can not access from outside of the class because it is private
  protected userBalance: number; // it can accessible outside of the class
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number){
    this.userBalance = this.userBalance + balance
  }
}

const sifatBhaiAccount = new BankAccount(111, "sifat", 10);

// sifatBhaiAccount.userId = 222 ---- can not change the value
// sifatBhaiAccount.userBalance = 100  -------- can not accessible.
sifatBhaiAccount.addBalance(100) 

console.log(sifatBhaiAccount);

class StudentBankAccount extends BankAccount{
    test() {
        this.userBalance
    }
}
