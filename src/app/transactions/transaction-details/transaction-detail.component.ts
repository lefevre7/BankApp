import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { Transaction } from "../../model/transaction";
import { TransactionService } from "../../service/transaction.service";

@Component({
  selector: "app-transaction-detail",
  templateUrl: "./transaction-detail.component.html",
  styleUrls: ["./transaction-detail.component.css"]
})
export class TransactionDetailComponent implements OnInit {
  transaction: Observable<Transaction>;

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.transaction = this.transactionService.getTransaction(id);
  }

  goBack(): void {
    this.location.back();
  }
}
