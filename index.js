const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description',
    },
    
    {
        type: 'input',
        message: 'Provide any useage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide any contributers',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Provide any test instructions.',
        name: 'tests',
    },
    {
        type: 'checkbox',
        message: 'Chose license',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'GNU General Public License v3.0']
    },
    {
        type: 'input',
        message: 'Provide any installation instructions.',
        name: 'installation',
        default: 'npm i'
    },
    {
        type: 'input',
        message: 'Provide your github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Provide your email address',
        name: 'email',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err){
            console.error(err)
        } else console.log('sucsess')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('README.md', data)
        })
}

// Function call to initialize app
init();
