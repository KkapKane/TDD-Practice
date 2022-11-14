const reverseString = require('./reverseString');

test('reverse a short string', () =>{
    expect(reverseString('hello')).toBe('olleh')
});

test('reverse a long string', () => {
    expect(reverseString('mississippi')).toBe('ippississim');
});

test('reverse with random Uppercase letters', () => {
    expect(reverseString('LoUiSiAnA')).toBe('AnAiSiUoL')
});

test('empty string', () => {
    expect(reverseString('')).toBe('');
});