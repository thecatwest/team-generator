const Intern = require('../lib/Intern');

test('create Intern object with valid inputs', () => {
    const intern = new Intern('Harry Potter', 3, 'h.potter@hogwarts.edu', 'Hogwarts School of Witchcraft and Wizardry - Gryffindor');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})