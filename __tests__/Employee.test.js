
const Employee = require("../lib/Employee")

test('create a employee obj', () => {
    const employee = new Employee('tina', 99, 'tinastouch@gmail.com');

    expect(employee.name).toBe('tina');
    expect(employee.id).toBe(99);
    expect(employee.email).toBe('tinastouch@gmail.com');
    
});