// require Employee.js
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, phone){
        super(name, id, email, phone);
        // console.log(phone);
        this.phone = phone;
        // console.log(this.phone);
    };

    getPhone(){
        return this.phone;
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;