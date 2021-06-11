// require Employee.js
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, phone){
        super(name, id, email);
        this.phone = phone;
    };

    getPhone(){
        return this.phone;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;