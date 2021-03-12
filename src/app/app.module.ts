import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TransactionsOverviewComponent } from "./transactions/transactions-overview/transactions-overview.component";
import { TransactionDetailComponent } from "./transactions/transaction-details/transaction-detail.component";
import { TransactionsComponent } from "./transactions/transactions/transactions.component";
import { TransactionHistoryComponent } from "./transactions/transaction-history/transaction-history.component";

import { AppRoutingModule } from "./app-routing.module";
import { MinusSignToParenthesesPipe } from "./utils/minus-sign-to-parentheses.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    TransactionsOverviewComponent,
    TransactionsComponent,
    TransactionDetailComponent,
    TransactionHistoryComponent,
    MinusSignToParenthesesPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
