const inquirer = require('inquirer')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const pageTemplate = require('./src/page-template');
const generateSite = require('./src/page-template.js');
const path = require('path')
const fs = require('fs');
const { validate } = require('jest-validate');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const propmtManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                        return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                   console.log('Please enter your email address!');
                   return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {  
                   console.log('Please enter your office number!');
                   return false; 
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};   
    
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select type of employee you would like to continue with:',
            choices: ['Engineer', 'Intern','Finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
            case "Engineer":
                promptEngineer();
                break;
                case "Intern":
                    promptIntern();
                    break;
                    default:
                        buildTeam();
            }
        });
    };   

        const promptEngineer = () => {
            console.log(`
            ==================
            Add a New Engineer
            ==================
            `);
        
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of your Engineer. (Required)',
                    validate: engineerName => {
                        if (engineerName) {
                            return true;
                        } else {
                           console.log('Please enter the name of your Engineer!');
                           return false; 
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'employeeId',
                    message: 'Enter the employee ID number. (Required)',
                    validate: employeeId => {
                        if (employeeId) {
                            return true;
                        } else {
                           console.log('Please enter an ID number!');
                           return false; 
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the employee email address. (Required)',
                    validate: email => {
                        if (email) {
                            return true;
                        } else {
                           console.log('Please enter an email address!');
                           return false; 
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'githubUsername',
                    message: 'Enter your Github username. (Required)',
                    validate: githubUsername => {
                        if (githubUsername) {
                            return true;
                        } else {
                           console.log('Please enter your Github Username!');
                           return false; 
                        }
                    }
                },
                
            ]).then(answers => {
                console.log(answers);
                const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
                teamMembers.push(engineer);
                promptMenu();
            })
        };   

        const promptIntern = () => {
            console.log(`
            =================
            Add a New Intern
            =================
            `);

            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of your Intern. (Required)',
                    validate: internName => {
                        if (internName) {
                            return true;
                        } else {
                           console.log('Please enter the name of your Intern!');
                           return false; 
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'employeeId',
                    message: 'Enter the employee ID number. (Required)',
                    validate: employeeId => {
                        if (employeeId) {
                            return true;
                        } else {
                           console.log('Please enter your emplyee ID');
                           return false; 
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the employee email address. (Required)',
                    validate: email => {
                        if (email) {
                            return true;
                        } else {
                           console.log('Please enter your email address!');
                           return false; 
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter your school name. (Required)',
                    validate: school => {
                        if (school) {
                            return true;
                        } else {
                           console.log('Please enter your school name!');
                           return false; 
                        }
                    }
                },
                
            ]).then(answers => {
                console.log(answers);
                const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
                teamMembers.push(intern);
                promptMenu();
            })
        };   

        const buildTeam = () => {
            console.log(`
            ====================
            Finished building team!
            ====================
            `);

            if (!fs.existsSync(OUTPUT_DIR)) {
                fs.mkdirSync(OUTPUT_DIR)
            }
            fs.writeFileSync(outputPath, generateSite(teamMembers), "UTF-8");
        }
        
        propmtManager();
