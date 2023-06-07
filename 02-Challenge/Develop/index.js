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
    {
        type: 'input',
        name: 'how',
        message: 'HOW will someone use your project? (Required)',
        validate: whyIn => {
            if (whyIn) {
                return true;
            } else {
                console.log('Enter how someone should use your project to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project. (Required)',
        validate: installIn => {
            if (installIn) {
                return true;
            } else {
                console.log('Please enter your installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required)',
        validate: usageIn => {
            if (usageIn) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: true
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines. (Required)',
        when: ({confirmContibuters}) => {
            if (confirmContibuters) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerIn => {
            if (contributerIn) {
                return true;
            } else {
                console.log('Enter contributer guidelines to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for app testing? (Required)',
        validate: testIn => {
            if (testIn) {
                return true;
            } else {
                console.log('Enter testing instructions to continue!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log(`Successfully generated ${fileName}`);
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
      })
      .catch((error) => {
        console.error(error);
      });
  }

// Function call to initialize app
init();
