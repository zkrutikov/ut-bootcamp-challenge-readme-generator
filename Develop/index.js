// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
     name: 'title',
    message: 'What is the title of your project?'},
    {type: 'input',
     name: 'description',
    message: 'What is the description of your project?'},
    {type: 'input',
     name: 'github',
    message: 'What is your github username?'},
    {type: 'input',
     name: 'installation',
    message: 'What are the steps required to install your project?'},
    {type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples for use'   
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT','apache','none']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        console.log(answers);
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
