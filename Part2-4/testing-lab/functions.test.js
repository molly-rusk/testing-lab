let myFunctions = require('./functions')

test('This should return the number 2', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('This should return a greeting including the persons name', () => {
    expect(myFunctions.greeting('James')).toBe("Hello, James.")
    expect(myFunctions.greeting('Jill')).toBe("Hello, Jill.")
   
})

test('Adds two numbers together', () => {
    expect(myFunctions.add(1,2)).toEqual(3)
    expect(myFunctions.add(5,9)).toEqual(14)
})

describe('Math functions', () => {

    test('This function multiplies two numbers together', () => {
        expect(myFunctions.multiply(3,4)).toBe(12)
        expect(myFunctions.multiply(4,5)).toBe(20)
    })
    
    test('This function divides two numbers', () => {
        expect(myFunctions.divide(30,10)).toBe(3)
        expect(myFunctions.divide(25,5)).toBe(5)
    })
    
    test('This function subtracts one number from another', () => {
        expect(myFunctions.subtract(10,5)).toBe(5)
        expect(myFunctions.subtract(20,10)).toBe(10)
    })

})
