import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TransactionsComponent } from "./transactions/transactions/transactions.component";
import { TransactionsOverviewComponent } from "./transactions/transactions-overview/transactions-overview.component";
import { TransactionDetailComponent } from "./transactions/transaction-details/transaction-detail.component";
import { TransactionHistoryComponent } from "./transactions/transaction-history/transaction-history.component";

const routes: Routes = [
  { path: "", redirectTo: "/transactions-overview", pathMatch: "full" },
  { path: "transactions", component: TransactionsComponent },
  { path: "transaction-detail/:id", component: TransactionDetailComponent },
  { path: "transactions-overview", component: TransactionsOverviewComponent },
  { path: "transaction-history", component: TransactionHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
