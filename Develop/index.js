var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown");
var api = require("./utils/api");
var inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please explain project description ?",
  },
  {
    type: "input",
    name: "tableOfcontents",
    message: "Please enter table of contents ?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation details ?",
  },

  {
    type: "input",
    name: "usage",
    message: "Please describe usage of the project ?",
  },
  {
    type: "input",
    name: "licence",
    message: "Please provide licence of project ?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please write contributing of the project ?",
  },
  {
    type: "input",
    name: "test",
    message: "Have done test of this project ?, please provide details",
  },


  {
    type: "input",
    name: "gitHub",
    message: "What is your github user name ?"
  },

  {
    type: "input",
    name: "email",
    message: "What is your github email ?",
  },
];

function writeToFile(fileName, data) {}

function init() {
  inquirer.prompt(questions).then((answers) => {
    api.getUser(answers.gitHub).then(response=>{
      var data = { 
        avatarUrl: response.data.avatar_url,
        description: answers.description,
        title: answers.projectTitle,
        tableOfcontents: answers.tableOfcontents,
        installation : answers.installation,
        licence: answers.licence,
        usage: answers.usage,
        test: answers.test,
        contribution: answers.contribution,

        email: (response.data.email) ? response.data.email: "ppsdeora@gmail.com"
      }
      fs.writeFile("README.md", generateMarkdown(data), ()=>{});
    })
  });
}

init();
