// require Employee.js
const Employee = require("../lib/Employee");

test('create Employee object with valid inputs', () => {
    const employee = new Employee('Albus Dumbledore', 1, 'a.dumbledore@hogwarts.edu');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})