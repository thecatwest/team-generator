const Manager = require('../lib/Manager');

test('create Manager object with valid inputs', () => {
    const manager = new Manager('Albus Dumbledore', 1, 'a.dumbledore@hogwarts.edu', '555-555-5555');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.phone).toEqual(expect.any(String));
})