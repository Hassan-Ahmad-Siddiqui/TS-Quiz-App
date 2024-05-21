#! /usr/bin/env node
import inquirer from 'inquirer';
const questions = [
    {
        question: "What is the capital of Pakistan?",
        choices: ["Hyderabad", "Lahore", "Berlin", "Islamabad"],
        answer: "Islamabad"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who are you ?",
        choices: ["Programmer", "Coder", "Developer", "Software Engineer"],
        answer: "Developer"
    }
];
let score = 0;
const askQuestion = async (question) => {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'response',
            message: question.question,
            choices: question.choices
        }
    ]);
    if (answer.response === question.answer) {
        console.log("Correct!");
        score++;
    }
    else {
        console.log(`Wrong! The correct answer is ${question.answer}`);
    }
};
const runQuiz = async () => {
    for (const question of questions) {
        await askQuestion(question);
    }
    console.log(`\nYou scored ${score} out of ${questions.length}`);
};
runQuiz();
