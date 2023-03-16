const cloneArray = require('./cloneArray')

test('properly clones Array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
})