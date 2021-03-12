import { Transaction } from "../model/transaction";

export var TRANSACTIONS: Transaction[] = [
  {
    id: 0,
    memo: "Christmas Check from Grandma",
    date: new Date("12/25/2020 01:25:27 PM"),
    deposit: "Deposit",
    withdraw: "",
    balance: 500,
    amount: 500
  },
  {
    id: 1,
    memo: "Winco",
    date: new Date("12/26/2020 01:25:27 PM"),
    deposit: "",
    withdraw: "Withdraw",
    balance: 400,
    amount: 100
  },
  {
    id: 2,
    memo: "Chevron",
    date: new Date("12/27/2020 01:25:27 PM"),
    deposit: "",
    withdraw: "Withdraw",
    balance: 370,
    amount: 30
  },
  {
    id: 3,
    memo: "Wendy's",
    date: new Date("12/28/2020 01:25:27 PM"),
    deposit: "",
    withdraw: "Withdraw",
    balance: 350,
    amount: 20
  },
  {
    id: 4,
    memo: "Home Depot",
    date: new Date("12/29/2020 01:25:27 PM"),
    deposit: "",
    withdraw: "Withdraw",
    balance: 340,
    amount: 10
  },
  {
    id: 5,
    memo: "Target",
    date: new Date("01/01/2021 01:25:27 PM"),
    deposit: "",
    withdraw: "Withdraw",
    balance: 330,
    amount: 10
  },
  {
    id: 6,
    memo: "Chick-fil-a",
    date: new Date("01/05/2021 01:25:27 PM"),
    deposit: "",
    withdraw: "Withdraw",
    balance: 320.5,
    amount: 9.5
  },
  {
    id: 7,
    memo: "Dentist",
    date: new Date("01/09/2021 01:25:27 PM"),
    deposit: "",
    withdraw: "Withdraw",
    balance: 300.5,
    amount: 20
  },
  {
    id: 8,
    memo: "new phone",
    date: new Date("01/10/2021 01:25:27 PM"),
    deposit: "",
    withdraw: "Withdraw",
    balance: -50.5,
    amount: 350
  },
  {
    id: 9,
    memo: "Birthday money",
    date: new Date("01/17/2021 01:25:27 PM"),
    deposit: "Deposit",
    withdraw: "",
    balance: 0,
    amount: 50.5
  }
];
