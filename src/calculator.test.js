import { add, subtract, divide, multiply } from './calculator';

test('Adds 3 + 3 to equal 6', () => {
  expect(add(3, 3)).toEqual(6);
});

test('Subtracts 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toEqual(1);
});

test('Divides 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toEqual(3);
});

test('Multiply 5 * 2 to equals 10', () => {
    expect(multiply(5,2)).toEqual(10);
})