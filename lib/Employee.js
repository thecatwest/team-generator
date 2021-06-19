// set up Employee class
class Employee {
    constructor(name, id, email, phone) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.phone = phone;
        this.role = 'Employee';
    };

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getPhone() {
        return this.phone;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;