
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

const reverseString = (str:string, callback: { (str: string): void }) => {
    callback(str.split("").reverse().join(""))
}

test(" Test Callback", () => {
    reverseString("Hola", (str:string) => {
        expect(str).toBe("aloH");
    });
})

// test Promises

const reverseString2 = (str: string) => {
    return new Promise ((resolve, reject) => {
        if (!str) {
            reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}

test('Test Promises', () => {
    return reverseString2('Hola')
    .then(string => {
        expect(string).toBe('aloH');
    })
})

test ('Test Async/await', async () => {
    const string = await reverseString2('hola');
    expect (string).toBe('aloh')
})

//Execute code after each test run

afterEach(()=> console.log("After each test"))
afterAll(()=> console.log("After all test"))

//Execute code before each test run

beforeEach(()=> console.log("Before each test"))
beforeAll(()=> console.log("Before all test"))

export default {}