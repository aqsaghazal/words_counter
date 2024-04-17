#! usr/bin/env node
import inquirer from "inquirer";

function countWords (text: string): number {
    const words = text.trim().split(/\s+/);
    return words.length;
}

function countletters (text: string): number {
    const letters = text.trim().replace(/\s+/g, "").length;
    return letters;
}

async function StartWordCounts(wordCounter: (text: string) =>number, letterCounter: (text : string) => number){
    do{
        let answer = await inquirer.prompt(
            [
                {
                    type: "input",
                    message: "write text here :",
                    name: "text",
                },
            ]);

console.log(`word count:${wordCounter(answer.text)}`);
console.log(`letter count: ${letterCounter(answer.text)}`);

let response = await inquirer.prompt([
    {
     type: "list",
     name: "continue",
     message: "do you want to continue?",
     choices: ["yes","no"]
    }
]); 

if(response.continue === "no")  {
    console.log("Goodbye! see you soon");
    break;
}          
    }while(true);
}
StartWordCounts(countWords, countletters);