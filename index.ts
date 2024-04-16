#! /usr/bin/env node

import inquirer from "inquirer";

//Ask for Sentence to Count the words

const Answer: {
    Sentence: string
} = await inquirer.prompt([
    {
        name : "Sentence",
        type : "input",
        message : "Enter Sentence to Count the words"
    }
]);

//trims White Spaces and Split Sentance
const words = Answer.Sentence.trim().split(" ");

//Print Array of words to the console
console.log(words);

//Print the word count of the sentence to the console
console.log(`Your Sentence words count is ${words.length}`);
