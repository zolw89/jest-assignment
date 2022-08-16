import capitalize from "./capitalize";

test('"test" should become "Test"', () => {
    expect(capitalize('test')).toBe('Test');
  });

test('capitalized first letter of string', () => {
    expect(capitalize('barcelona')).toBe('Barcelona');
})

test('capitalized first letter of string', () => {
    expect(capitalize('hello, how are you')).toBe('Hello, how are you');
})

test('capitalized first letter of string', () => {
    expect(capitalize('pizza!')).toBe('Pizza!');
})