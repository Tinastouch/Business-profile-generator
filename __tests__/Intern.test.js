const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('creates Intern obj', () => {
    const intern = new Intern('tina', 99, 'tinastouch@gmail.com', 'UofT');

    expect(intern.name).toBe('tina');
    expect(intern.id).toBe(99);
    expect(intern.email).toBe('tinastouch@gmail.com');
    expect(intern.school).toBe('UofT');
});