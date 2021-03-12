import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TransactionHistoryService {
  balance: number = 0;

  addTransactionDeposit(balance: number) {
    this.balance += balance;
  }

  addTransactionWithdraw(balance: number) {
    this.balance -= balance;
  }

  getBalance(): number {
    return this.balance;
  }
}
