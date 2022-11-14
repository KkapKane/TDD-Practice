const calculator = require('./calculator')

test('adding two numbers', () => {
    expect(calculator(2,'+',3)).toBe(5);
});

test('subtract two numbers', ()=> {
    expect(calculator(10,'-',3)).toBe(7);
});

test('multiply two numbers', () => {
    expect(calculator(9,'*',3)).toBe(27);
});

test('divide two numbers', () => {
expect(calculator(24, '/', 3)).toBe(8);
});