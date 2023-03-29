const randomStringofArray = require("../utils/examplesFunctions.js");

console.log(typeof randomStringofArray)


// For make groups of testing
describe('Test funcionalitys of randomStrings', () => {
    test('Testing funcionality', () => {
        expect(typeof (randomStringofArray())).toBe("string")
    })

    test('Check if the city dosent exist', () => {
        expect(randomStringofArray()).not.toMatch(/Las Palmas/)
    })
})