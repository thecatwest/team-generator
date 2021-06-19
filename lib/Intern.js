// require Employee.js
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email, school);
        this.school = school;
        console.log(school);
        // this.role = 'Intern';
    };

    getGithub(){
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;