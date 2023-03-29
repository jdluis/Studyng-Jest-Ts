# Studyng-Jest-Ts

This repository contains my notes on Jest and TypeScript.

## Jest

Jest is a JavaScript testing framework that allows developers to ensure that the code they write meets certain requirements/expectations. It provides tools for writing unit tests, which test small parts of code to ensure that they meet the desired requirements.

### Types of tests

There are two types of tests: functional and non-functional.

Functional tests ensure that the code meets the standard and produces the desired output. Unit tests are an example of functional tests, where small parts of code are tested to ensure that they meet the desired requirements.

Non-functional tests ensure that the code meets performance and reliability standards.

### Syntax

To define test files in Jest, we always use the naming convention of `name.test.js`. A basic syntax for writing tests in Jest is:

test("description", () => {
expect(...).toBe(...)
});


We can also group tests with `describe`:

describe('Name of the test group', () => {
test('...', () => {
expect(...).toBe(...)
});

test('...', () => {
expect(...).toBe(...)
});
});


### Test with Promises

If we add the script `jest --watch` in the package.json file, we can automatically execute the tests with the commands indicated in the terminal. The script can be added as:

"test:watch": "jest --watch"

## Code coverage 
#### (Jest can collect code coverage information from entire projects, including untested files)
With:  'jest --coverage'
## TypeScript

TypeScript is a typed superset of JavaScript that adds optional types to the language. Here are some best practices for using TypeScript:

- ✅ Do use the return type `void` for callbacks whose value will be ignored.
- ❌ Don’t use the return type `any` for callbacks whose value will be ignored.
- ✅ Do use the types `number`, `string`, `boolean`, and `symbol`.
- ❌ Don’t ever use the types `Number`, `String`, `Boolean`, `Symbol`, or `Object`. These types refer to non-primitive boxed objects that are almost never used appropriately in JavaScript code.
