#! /usr/bin/env node
import inquirer from "inquirer";
const currency: any ={
    USD: 1 , 
    GBP:0.80 , 
    CAD:1.38 , 
    EUR:0.94 , 
    INR:83.47 , 
    PKR:279.53,
};


let user_answer: any = await inquirer.prompt (
    [
        {
            name: "from",
            message:"Which currency do you want to convert",
            type:"list",
            choices:['USD' , 'GBP' , 'CAD' , 'EUR' , 'INR' , 'PKR']
        },

        {
            name: "to",
            message:"To which currency do you want to convert",
            type:"list",
            choices:['USD' , 'GBP' , 'CAD' , 'EUR' , 'INR' , 'PKR']
        },
        
        {
            name: "amount",
            message:"Enter your amount",
            type:"number",
        }
    ]
)
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)

