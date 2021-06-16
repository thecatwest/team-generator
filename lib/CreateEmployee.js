const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const createEmployeeList = require('./CreateEmployee');
const teamDirectoryArray = [];

class teamDirectory {
    // create manager for team
    createManager() {
        inquirer.prompt([{
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
                        if (email.includes('@')) {
                            return true;
                        } else {
                            console.log('You must enter a valid email address');
                            return false;
                        }
                    }
                },
                {
                    message: 'Enter a phone number for the manager:',
                    type: 'input',
                    name: 'phone',
                    validate: phone => {
                        if (phone) {
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
                var managerObject = {
                    name: object.name,
                    id: object.id,
                    email: object.email,
                    phone: object.phone,
                    role: 'Manager'
                };
                // push to teamDirectory array
                teamDirectoryArray.push(managerObject);
                this.createEmployee();
            })
    };

    // user must either select next employee to create, or finish team building
    createEmployee() {
        inquirer.prompt([{
                message: "Please select from the following options:",
                type: "list",
                choices: ['Add Engineer', 'Add Intern', 'Finish Team Building']
            }])
            // if user selects 'Finish Team Building', decon data
            .then(({
                createEmployee
            }) => {
                if (createEmployee === 'Add Engineer') {
                    this.createEngineer();
                } else if (createEmployee === 'Add Intern') {
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
    createEngineer() {
        inquirer.prompt([{
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
                        if (email.includes('@')) {
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
                var engineerObject = {
                    name: object.name,
                    id: object.id,
                    email: object.email,
                    github: object.github,
                    role: 'Engineer'
                };
                teamDirectoryArray.push(engineerObject);
                this.createEmployee();
            });
    };

    // create Intern
    createIntern() {
        inquirer.prompt([{
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
                    if (email.includes('@')) {
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
                var internObject = {
                    name: object.name,
                    id: object.id,
                    email: object.email,
                    school: object.school,
                    role: 'Intern'
                };
                teamDirectoryArray.push(internObject);
                this.createEmployee();
            })
    };

    sortArrayData() {
        const managerInfo = [];
        const engineerInfo = [];
        const internInfo = [];

        for (var i = 0; i < teamDirectoryArray.length; i++) {
            if (teamDirectoryArray[i].role == 'Manager') {
                managerInfo.push(teamDirectoryArray[i]);
            } else if (teamDirectoryArray[i].role == 'Engineer') {
                engineerInfo.push(teamDirectoryArray[i]);
            } else if (teamDirectoryArray[i].role == 'Intern') {
                internInfo.push(teamDirectoryArray[i]);
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

    //  module.exports = teamDirectory;

    // generate HTML for page sections
    renderPageTop() {
        `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./src/assets/style.css">
    <script src="https://kit.fontawesome.com/1223513c02.js" crossorigin="anonymous"></script>
    <title>Hogwarts Team Directory</title>
</head>

<body>
    <header class="bg-secondary text-warning text-center">
        <h1><i class="fas fa-hat-wizard text-light"></i> Hogwarts School of Witchcraft and Wizardry <i class="fas fa-quidditch text-light"></i></h1>
        <h2>Team Directory</h2>
    </header>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 justify-content-center space-between d-flex">
    `
    };

    renderManager(array) {
        const {
            name,
            id,
            email,
            phone,
        } = array[0];
        `
    <div class="card col-sm-3 bg-warning m-4" style="width: 18rem;">
                        <div class="card-body">
                            <h3 class="card-title">Manager</h3>
                            <h4 class="card-title">${name}</h4>
                            <h6 class="card-subtitle mb-2 text-muted">ID: ${id}</h6>
                            <p class="card-text">Email: <a href="mailto:${email}"></a>${email}</p>
                            <p class="card-text">${phone}</p>
                        </div>
                    </div>
    `
    };

    renderEngineer(array) {
        if (array) {
            `
    <div class="card col-sm-3 bg-warning m-4" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">Engineer</h3>
            ${this.loopEngineer(array)}

    `
        } else {
            return ``
        };
    }
    loopEngineer(array) {
        let renderText = ``;
        for (var index = 0; index < array.length; index++) {
            var name = array[index].name;
            var id = array[index].id;
            var email = array[index].email;
            var github = array[index].githubl

            renderText += `
        <h4 class="card-title">Rubeus Hagrid</h4>
            <h6 class="card-subtitle mb-2 text-muted">ID: 24</h6>
            <p class="card-text">Email: <a href="mailto:r.hagrid@hogwarts.edu"></a>R.Hagrid@Hogwarts.edu</p>
            <p class="card-text">555-555-5555</p>
            <p class="card-text">Github: <a href="https://www.github.com/thecatwest"></a>Github</p>
        </div>
    </div>
        `
        };
        return engineerLoop;
    };

    renderIntern(array) {
        // if intern, render with this html
        if (array) {
            `
        <div class="card col-sm-3 bg-warning m-4" style="width: 18rem;">
                        <div class="card-body">
                            <h3 class="card-title">Intern</h3>
                            ${this.interLoop(array)}
        `
            // otherwise, return blank
        } else {
            return ``
        }
    };

    internLoop(array) {
        let renderText = ``;
        for (var index = 0; index < array.length; index++) {
            var name = array[index].name;
            var id = array[index].id;
            var email = array[index].email;
            var school = array[index].school;

            renderText += `
        <h4 class="card-title">Harry Potter</h4>
                <h6 class="card-subtitle mb-2 text-muted">ID: 731</h6>
                <p class="card-text">Email: <a href="mailto:h.potter@hogwarts.edu"></a>H.Potter@Hogwarts.edu</p>
                <p class="card-text">School: <a href="https://www.hogwarts.edu"></a>www.Hogwarts.edu</p>
            </div>
        </div>
        `
        };
        return renderText;
    };

    writeFile(data){
        return new Promise((resolve, reject) =>{
            fs.writeFile('./index.html', data, err => {
                if(err){
                    reject(err);
                    return;
                }

                resolve({
                    ok: true,
                    message: 'index.html created successfully!'
                });
          });
        });
    };

};

module.exports = teamDirectory;