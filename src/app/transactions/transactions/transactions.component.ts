import { Component, OnInit } from "@angular/core";
import { Transaction } from "../../model/transaction";
import { TransactionService } from "../../service/transaction.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"]
})
export class TransactionsComponent implements OnInit {
  transactions: Observable<Transaction[]>;
  balance: Observable<number>;
  amount: number;
  memo: string;

  constructor(public transactionService: TransactionService) {}

  ngOnInit() {
    this.getTransactions();
    this.getBalance();
  }

  getTransactions(): void {
    this.transactions = this.transactionService.getTransactions();
  }

  getBalance(): void {
    this.balance = this.transactionService.getBalance();
  }

  addTransactionDeposit(amount: number, name: string) {
    this.transactionService.addTransactionDeposit(amount, name);
    this.getBalance();
  }

  addTransactionWithdraw(amount: number, name: string) {
    this.transactionService.addTransactionWithdraw(amount, name);
    this.getBalance();
  }
}
