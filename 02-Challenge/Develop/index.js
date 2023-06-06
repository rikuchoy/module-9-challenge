// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleIn => {
            if (titleIn) {
                return true;
            } else {
                console.log('Enter your project title to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub Username',
        message: 'What is your GitHub Username? (Required)',
        validate: githubIn => {
            if (githubIn) {
                return true;
            } else {
                console.log('Enter your GitHub Username to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the title of your email? (Required)',
        validate: githubIn => {
            if (githubIn) {
                return true;
            } else {
                console.log('Enter your email address to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'WHAT is your project and what problem does it solve? (Required)',
        validate: whatIn => {
            if (whatIn) {
                return true;
            } else {
                console.log('Give a descrpition of your project and its purpose to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'WHY did you create your project? (Required)',
        validate: whyIn => {
            if (whyIn) {
                return true;
            } else {
                console.log('Enter why you created your project to continue!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
