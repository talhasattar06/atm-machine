#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
const myPin = 12345;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number: ",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Select an option:",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        },
    ]);
    if (operationAnswer.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount: ",
                type: "number",
            },
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficent balance, can not withdraw your amount.");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`Your remaining balance is ${myBalance}.`);
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAnswer.operation === "Fast Cash") {
        let amountOptions = await inquirer.prompt([
            {
                name: "options",
                message: "Select an amount: ",
                type: "list",
                choices: [1000, 5000, 10000, 20000],
            },
        ]);
        if (amountOptions.options <= myBalance) {
            myBalance -= amountOptions.options;
            console.log(`Your remaining balance is ${myBalance}.`);
        }
        else {
            console.log("Insufficent balance, can not withdraw your amount.");
        }
    }
    else {
        console.log("Please select a valid option.");
    }
}
else {
    console.log("Incorrect Pin Code!!!");
}
