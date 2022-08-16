import reverseString from "./reverseStr";

test("Reversed Hello to be olleH", () => {
    expect(reverseString('Hello')).toBe('olleH')
});

test("Reversed Hi, how are you to be uoy era woh ,iH", () => {
    expect(reverseString('Hi, how are you')).toBe('uoy era woh ,iH')
})