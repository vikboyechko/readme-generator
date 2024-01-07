// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
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
        choices: [],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
