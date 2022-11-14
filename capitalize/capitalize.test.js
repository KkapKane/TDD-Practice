const capitalize = require('./capitalize');

test('uppercase first letter of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('empty string input', () => {
  expect(capitalize('')).toBe('empty string');
});

test('multiple words', ()=> {
  expect(capitalize('how are you?')).toBe('How are you?');
});

test('numbers in the front', ()=> {
  expect(capitalize('1hi')).toBe('Hi');
});

test('numbers at the back', () => {
  expect(capitalize('hello123')).toBe('Hello');
});