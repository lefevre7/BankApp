import { Component, OnInit } from "@angular/core";
import { Transaction } from "../../model/transaction";
import { TransactionService } from "../../service/transaction.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-transaction-history",
  templateUrl: "./transaction-history.component.html",
  styleUrls: ["./transaction-history.component.css"]
})
export class TransactionHistoryComponent implements OnInit {
  transactions: Observable<Transaction[]>;
  balance: Observable<number>;

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
}
