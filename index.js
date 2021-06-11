// require packages an files
const inquirer = require("inquirer");
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { objectContaining } = require("expect");
const teamDirectory = [];

class teamDirectory{
    // create manager for team
    createManager(){
        return inquirer.prompt([
            {
                message: 'Enter a name for the manager:',
                type: 'text',
                name: 'name'
            },
            {
                message: 'Enter an ID for the manager:',
                type: 'text',
                name: 'id'
            },
            {
                message: 'Enter an email for the manager:',
                type: 'text',
                name: 'email',
                validate: email => {
                    if (email.includes('@')){
                        return true;
                    } else {
                        console.log('You must enter a valid email address');
                        return false;
                    }
                }
            },
            {
                message: 'Enter a phone number for the manager:',
                type: 'text',
                name: 'phone',
                validate: phone => {
                    if(phone) {
                        return true;
                    } else {
                        console.log('You must enter a phone number');
                        return false;
                    }
                }
            },
        ])
        // create new class for creating new Manager object that can be pushed into array and continue prompt
        .then(create => {
            var newManager = new Manager(create.name, create.id, create.email, create.phone);
            return newManager;
        })
        .then(object => {
            var managerObject = {name: object.name, id: object.id, email: object.email, phone: object.phone, role: 'Manager'};
            // push to teamDirectory array
            teamDirectory.push(managerObject);
            this.createEmployee();
        })
    };

    // user must either select next employee to create, or finish team building
    createEmployee(){
        inquirer.prompt([
            {
                message: "Please select from the following options:",
                type: "list",
                choices: ['Add Engineer', 'Add Intern', 'Finish Team Building']
            }
        ])
        // if user selects 'Finish Team Building', decon data
        .then(({ createEmployee }) => {
            if(createEmployee === 'Add Engineer') {
                this.createEngineer();
            } else if(createEmployee === 'Add Intern') {
                this.createIntern();
            } else {
                console.log('-------------------------------------------');
                console.log('Team Building is complete. Visit your index.html file to view your Team Directory!');
                console.log('-------------------------------------------');
                return this.deconData();
            }
        })
    };

    // create engineer
    createEngineer(){
        inquirer.prompt([
                    {
                        message: 'Enter a name for the engineer:',
                        type: 'text',
                        name: 'name'
                    },
                    {
                        message: 'Enter an ID for the engineer:',
                        type: 'text',
                        name: 'id'
                    },
                    {
                        message: 'Enter an email for the engineer:',
                        type: 'text',
                        name: 'email',
                        validate: email => {
                            if (email.includes('@')){
                                return true;
                            } else {
                                console.log('You must enter a valid email address');
                                return false;
                            }
                        }
                    },
                    {
                        message: 'Enter a GitHub username for the engineer:',
                        type: 'text',
                        name: 'github'
                    },
                ])
                // create new object and push into teamDirectory() array
                .then(create => {
                    var newEngineer = new Engineer(create.name, create.id, create.email, create.github);
                    return newEngineer;
                })
                // push object to array
                .then(object => {
                    var engineerObject = {name: object.name, id: object.id, email: object.email, github: object.github, role: 'Engineer'};
                    teamDirectory.push(engineerObject);
                    this.createEmployee();
                });
    };

    // create Intern
    createIntern(){
        inquirer.prompt([
            {
                message: 'Enter a name for the intern:',
                type: 'text',
                name: 'name'
            },
            {
                message: 'Enter an ID for the intern:',
                type: 'text',
                name: 'id'
            },
            {
                message: 'Enter an email for the intern:',
                type: 'text',
                name: 'email',
                validate: email => {
                    if (email.includes('@')){
                        return true;
                    } else {
                        console.log('You must enter a valid email address');
                        return false;
                    }
                }
            },
            {
                message: 'Enter a school name for the intern:',
                type: 'text',
                name: 'school'
            }
        ])
        // create object
        then(create => {
            var newIntern = new Intern(create.name, create.id, create.email, create.school);
            return newIntern;
        })
        // push new object into array
        .then(object => {
            var internObject = {name: object.name, id: object.id, email: object.email, school: object.school, role: 'Intern'};
            teamDirectory.push(internObject);
            this.createEmployee();
        })
    };

    sortArrayData(){
        const managerInfo = [];
        const engineerInfo = [];
        const internInfo = [];

        for (var i = 0; i < teamDirectory.length; i++){
            if(teamDirectory[i].role == 'Manager'){
                managerInfo.push(teamDirectory[i]);
            } else if(teamDirectory[i].role == 'Engineer'){
                engineerInfo.push(teamDirectory[i]);
            } else if(teamDirectory[i].role == 'Intern'){
                internInfo.push(teamDirectory[i]);
            }
        };

        let renderPage = `
        ${this.renderPageTop()}
        ${this.renderManager()}
        ${this.renderEngineer()}
        ${this.renderIntern()}
        ${this.renderPageBottom()}
        `

        return this.writeFile(renderPage);
    }
}