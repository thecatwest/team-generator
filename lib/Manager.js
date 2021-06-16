// require Employee.js
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, phone){
        super(name, id, email);
        console.log(this.phone);
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