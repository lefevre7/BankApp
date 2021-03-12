import { Component, OnInit } from "@angular/core";
import { Transaction } from "../../model/transaction";
import { TransactionService } from "../../service/transaction.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-transactions-overview",
  templateUrl: "./transactions-overview.component.html",
  styleUrls: ["./transactions-overview.component.css"]
})
export class TransactionsOverviewComponent implements OnInit {
  transactions: Observable<Transaction[]>;
  balance: Observable<number>;

  constructor(private transactionService: TransactionService) {}

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
