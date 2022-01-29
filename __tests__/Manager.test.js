const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('creates manager obj', () => {
    const manager = new Manager('tina', 99, 'tinastouch@gmail.com', 10);

    expect(manager.name).toBe('tina');
    expect(manager.id).toBe(99);
    expect(manager.email).toBe('tinastouch@gmail.com');
    expect(manager.officeNumber).toBe(10);
});