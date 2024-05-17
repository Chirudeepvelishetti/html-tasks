class BankAccount{
    constructor(accountnumber , accountholdername,balance){
        this.accountnumber=accountnumber;
        this.accountholdername=accountholdername;
        this.balance=balance;
    }
    deposit(amount){
        this.balance = amount + this.balance;
        console.log(amount ,'credited to your accont your account balance is',this.balance);
    }   
    withdraw(amount){
        if(amount < this.balance){
            this.balance = this.balance - amount;
            console.log(amount ,"is debited from your account XXXXXX available balance is ",this.balance);
        }
        else{
            console.log("you are unable to do this transaction due to insufficient funds in your account");
        }
    }
    transfer(amount , recacc){
        if(amount <= this.balance){
            this.balance = this.balance - amount;
            recacc.deposit(amount);
            console.log(amount,"transfered to XXXXXXXXXXXid from",this.accountnumber,"to",recacc.accountnumber,"balance is",this.balance);
        }
        else{
            console.log("you are unable to do this transaction due to insufficient funds in your account");
        }
    }
}
var b1 = new BankAccount(123456,"shiva",500);
var b2 = new BankAccount(123459,"chirudeep",1000);
b1.deposit(50000);
b1.withdraw(1000);
b1.transfer(1000 , b2);