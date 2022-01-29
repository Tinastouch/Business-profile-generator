const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('creates engineer obj', () => {
    const engineer = new Engineer('tina', 99, 'tinastouch@gmail.com', 'tinastouch');

    expect(engineer.name).toBe('tina');
    expect(engineer.id).toBe(99);
    expect(engineer.email).toBe('tinastouch@gmail.com');
    expect(engineer.github).toBe('tinastouch');
});