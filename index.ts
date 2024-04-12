#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(
  chalk.greenBright.bold(
    "\n \t Welcome to 'Basit Ali Shah' - Currency Convertor\n"
  )
);

let exchange_rate: any = {
  USD: 1,
  PKR: 277,
  EUR: 0.9,
  JPY: 153,
  CAD: 1.4,
  AUD: 1.5,
  INR: 83,
  GBP: 0.8,
};

let userAnswer = await inquirer.prompt([
  {
    name: "fromCurrency",
    type: "list",
    message: "Select the currency to convert from: ",
    choices: ["USD", "PKR", "EUR", "JPY", "CAD", "AUD", "INR", "GBP"],
  },
  {
    name: "toCurrency",
    type: "list",
    message: "Select the currency to convert into: ",
    choices: ["USD", "PKR", "EUR", "JPY", "CAD", "AUD", "INR", "GBP"],
  },
  {
    name: "amount",
    type: "number",
    message: "Enter the amount to convert: ",
  },
]);

let fromAmount = exchange_rate[userAnswer.fromCurrency];
let toAmount = exchange_rate[userAnswer.toCurrency];
let amount = userAnswer.amount;

let baseAmount = amount / fromAmount;
let result = baseAmount * toAmount;
console.log(
  `The converted amount is =  ${chalk.bold.redBright(result.toFixed(2))}`
);
