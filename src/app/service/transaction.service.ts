import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Transaction } from "../model/transaction";
import { TRANSACTIONS } from "./mock-transactions";
import { TransactionHistoryService } from "./balance.service";

@Injectable({ providedIn: "root" })
export class TransactionService {
  constructor(private transactionHistoryService: TransactionHistoryService) {}

  getTransactions(): Observable<Transaction[]> {
    return of(TRANSACTIONS);
  }

  getTransaction(id: number): Observable<Transaction> {
    return of(TRANSACTIONS.find(transaction => transaction.id === id));
  }

  addTransactionDeposit(amount: number, memo: string): void {
    if (amount && amount > 0.01) {
      this.transactionHistoryService.addTransactionDeposit(amount);
      TRANSACTIONS.push(
        new Transaction(
          TRANSACTIONS.length,
          memo,
          new Date(),
          "Deposit",
          "",
          amount,
          this.transactionHistoryService.getBalance()
        )
      );
    } else {
      alert("amount must be a number greater than or equal to 0.01");
    }
  }

  addTransactionWithdraw(amount: number, memo: string): void {
    if (amount && amount > 0.01) {
      this.transactionHistoryService.addTransactionWithdraw(amount);
      console.log("here withdraw number: " + amount);
      TRANSACTIONS.push(
        new Transaction(
          TRANSACTIONS.length,
          memo,
          new Date(),
          "",
          "Withdraw",
          amount,
          this.transactionHistoryService.getBalance()
        )
      );
    } else {
      alert("amount must be a number greater than or equal to 0.01");
    }
  }

  getBalance(): Observable<number> {
    return of(this.transactionHistoryService.getBalance());
  }
}
