const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

//define manager and push to array
function Questions() {
    this.manager
}

Questions.prototype.createRoster = function() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },/* ).then(({name}) => {this.manager = new Manager(name);}); */
        {
            type: 'number',
            name: 'id',
            message: 'What is your employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email?'
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your office number?'
        }
    )
    .then(({name,id,email,officeNumber}) => {
        this.manager = new Manager(name, id, email, officeNumber);

        this.addEmployee();
    });
};

//ask if they want to add engineer,intern,or stop

Questions.prototype.addEmployee = function() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'nextEmployee',
            message: 'Who do you want to add to the roster?',
            choices: ['Intern', 'Engineer', 'No one']
        }
    )
    .then(answers => {
        if (answers === 'Intern') {
            inquirer.prompt(
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?'
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'What is your employee id?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your Email?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school do you attend?'
                }
            )
            .then(({name},{id},{email},{school}) => {
                this.intern = new Intern(name, id, email, school);
        
                this.addEmployee();
            });
        } else if (answers === 'Engineer') {
            inquirer.prompt(
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?'
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'What is your employee id?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your Email?'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your github?'
                }
            )
            .then(({name,id,email,github}) => {
                this.engineer = new Engineer(name, id, email, github);
        
                this.addEmployee();
            }); 
        } else {}
    });
}

//if engineer or intern, define then push

//if stop, push array to page template and create html page
module.exports = Questions;