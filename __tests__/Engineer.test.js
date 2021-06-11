const Engineer = require('../lib/Engineer');

test('create Engineer object with valid inputs', () => {
    const engineer = new Engineer('Rubeus Hagrid', 2, 'r.hagrid@hogwarts.edu', 'rubeushagridcodes');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})