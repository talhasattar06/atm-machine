#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance: number = 10000;
const myPin: number = 12345;
console.log(chalk.hex('FFD400')("---------- Welcome to ATM Machine ----------"));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.hex('93E1D8')("Enter your pin number: "),
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(chalk.hex('AFFC41')("Correct Pin Code!"));

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: chalk.hex('93E1D8')("Select an option:"),
      type: "list",
      choices: [chalk.hex('FFA69E')("Withdraw"), chalk.hex('EA638C')("Check Balance"), chalk.hex('89023E')("Fast Cash")]
    },
  ]);

  if (operationAnswer.operation === chalk.hex('FFA69E')("Withdraw")) {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: chalk.hex('D90638')("Enter your amount: "),
        type: "number",
      },
    ]);

    if (amountAnswer.amount > myBalance) {
      console.log(chalk.hex('F42B03')("Insufficient balance, can not withdraw your amount."));

    } else {
      myBalance -= amountAnswer.amount;
      console.log(chalk.hex('AC46A1')(`Your remaining balance is ${myBalance}.`));
    }

  } else if (operationAnswer.operation === chalk.hex('EA638C')("Check Balance")) {
    console.log(chalk.hex('A663CC')(`Your balance is ${myBalance}`));

  } else if (operationAnswer.operation === chalk.hex('89023E')("Fast Cash")) {
    let amountOptions = await inquirer.prompt([
      {
        name: "options",
        message: chalk.hex('01497C')("Select an amount: "),
        type: "list",
        choices: [1000, 5000, 10000, 20000],
      },
    ]);

    if (amountOptions.options <= myBalance) {
      myBalance -= amountOptions.options;
      console.log(chalk.hex('7B2CBF')(`Your remaining balance is ${myBalance}.`));

    } else {
      console.log(chalk.hex('F42B03')("Insufficient balance, can not withdraw your amount."));
    }

  } else {
    console.log(chalk.hex('BF0603')("Please select a valid option."));
  }

} else {
  console.log(chalk.hex('D00000')("Incorrect Pin Code!!!"));
}