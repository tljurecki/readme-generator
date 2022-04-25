// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    
        {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application? (required)'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please enter a description of your application. (required)'  
        },
        {
            type: 'input',
            name: 'table-of-contents',
            message: 'Table of Contents:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What needs to be installed to run your application?',
        },
        {
            type: 'input',
            name: 'use',
            message: 'Please describe how to use your application'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is being used?',
            choices: ['MIT', 'ISC', 'APACHE', 'None']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Did anyone contribute to this application?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do you test this application?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?(required)'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (required)'
        }

    
    ]; 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File created'
        });
    });
}); 
}; 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();
