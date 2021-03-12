export class Transaction {
  id: number;
  memo: string;
  date: Date;
  deposit: string;
  withdraw: string;
  amount: number;
  balance: number;

  constructor(
    id: number,
    name: string,
    date: Date,
    deposit: string,
    withdraw: string,
    amount: number,
    balance: number
  ) {
    this.id = id;
    this.memo = name;
    this.date = date;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.amount = amount;
    this.balance = balance;
  }
}
