const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Inquirer questions
const questions = [
    {
        type: "input",
        message: "Project Title:",
        name: "title",
    },
    {
        type: "input",
        message: "Description:",
        name: "description",
    },
    {
        type: "input",
        message: "Installation instructions:",
        name: "installation",
    },
    {
        type: "input",
        message: "Usage information:",
        name: "usage",
    },
    {
        type: "input",
        message: "Contributing guidelines:",
        name: "contributing",
    },
    {
        type: "input",
        message: "Test instructions:",
        name: "test",
    },
    {
        type: "list",
        message: "License:",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause Simplified License",
            "BSD 3-Clause New or Revised License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ],
    },
    {
        type: "input",
        message: "Your GitHub username:",
        name: "username",
    },
    {
        type: "input",
        message: "Your email address:",
        name: "email",
    },
];

// Write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("Something went wrong. ", err);
        } else {
            console.log("Success!");
        }
    });
}

// Initialize the app, set Project Title as the filename
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile(response.title + "-README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
