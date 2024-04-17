#! usr/bin/env node
import inquirer from "inquirer";
function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
}
function countletters(text) {
    const letters = text.trim().replace(/\s+/g, "").length;
    return letters;
}
async function StartWordCounts(wordCounter, letterCounter) {
    do {
        let answer = await inquirer.prompt([
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
                choices: ["yes", "no"]
            }
        ]);
        if (response.continue === "no") {
            console.log("Goodbye! see you soon");
            break;
        }
    } while (true);
}
StartWordCounts(countWords, countletters);
