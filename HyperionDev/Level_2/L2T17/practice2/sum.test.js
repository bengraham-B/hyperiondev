const sum = require('./sum')

//^ First Param : what the test is doing and shows up in console when running the test...
test('properly adds two numbers', () => {
    expect(
        sum(1, 2)
    ).toBe(3)
})