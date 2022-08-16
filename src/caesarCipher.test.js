import caesarCipher from "./caesarCipher";

test('String "SERR PBQR PNZC" should decode to "FREE CODE CAMP"', () => {
    expect(caesarCipher('SERR PBQR PNZC')).toBe('FREE CODE CAMP')
})

test('String "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." should decode to "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."', () => {
    expect(caesarCipher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
})