
const text = "Hola Mundo";
const fruits = ["apple", "watermelon", "banana", "orange"]

//test string

test("Need to be aa String", () => {
    expect(text).toMatch(/Mundo/)
})

//test arrays

test("Need to contain Banan in the array", () => {
    expect(fruits).toContain('banana')
})

//test numbers

test("Uper than", () => {
    expect(10).toBeGreaterThan(9)
})

//test booleans

test('True', () => {
    expect(true).toBeTruthy();
});

//test callbacks

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}

test(" Test Callback", () => {
    reverseString("Hola", (str) => {
        expect(str).toBe("aloH");
    });
})