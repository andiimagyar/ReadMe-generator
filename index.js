// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer 
        .prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the title of your project?"
        },
        {
            type: 'input',
            name: 'about',
            message: "Please include a description of your project."
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to add to your project?',
            choices: ["MIT", "Apache2.0", "GPL3.0", "None"]
        },
        {
            type: 'confirm',
            name: 'collab',
            message: 'Would you like to add any collaborators?',
            default: 'false'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list your collaborators with links to their GitHub profiles.',
            when: ({ collab }) => {
                if (collab) {
                    return true;
                } else {
                    return false;
                }
                }
        },
        {
            type: 'confirm',
            name: 'tests',
            message: 'Would you like to add any tests?',
            default: 'false'
        },
        {
            type: 'input',
            name: 'testsConfirm',
            message: 'Please add tests and provide examples on how to run them.',
            when: ({ tests }) => {
                if (tests) {
                    return true;
                } else {
                    return false;
                }
                }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter contact email.'
        },
    ])

    .then((answers) => {
        fs.writeFile('README.md', generateMarkdown(answers), err => {
            if (err) throw err;
        
            console.log('Success! README.md created!');
        })

    })

}

questions();

