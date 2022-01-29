const Manager = require ("./lib/Manager");
const Engineer = require ("./lib/Engineer");
const Intern = require ("./lib/Intern");
const inquirer = require ("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(_dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template");

const teamMembers = [];
const idArray  = [];

function appMenu(){
    function createManger(){
        console.log("Please build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter at least one character.";
                }
            }
            // {
            //     type: "input",
            //     name: "managerId",
            //     message: "What is the team manager's ID"
            //     validate: answer => {

            //         if (num >=1) {
            //             return true   
            //         } else  {
            //             console.log('Please enter a positive number greater than 0');
            //             return false;
            //         }              
            //     }
            // }
            // {
            //     type: "input",
            //     name: "email",
            //     message: "What is the team manager's email"
            // }
            // {
            //     type: "input",
            //     name: "offic number",
            //     message: "What is the team manager's office number?"
            // }
            // {
            //     type: 'list',
            //     name: "team-memeber-type",
            //     message: "Which type of team member would you like to add",
            //     choices: ['Engineer', 'Intern', 'I dont want to add anymore team members']
            // }
        ])
    }
}