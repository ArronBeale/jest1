/**
 * @jest-environment jsdom
 */

// Imports functions object from calc.js
const functions = require("../calc");

// Calculator tests
describe ("calculator", () => {
    describe("addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(functions.add(20, 22)).toBe(42);
        });
        test("should return 73 for 41 + 31", () => {
            expect(functions.add(42, 31)).toBe(73);
        })
        test("Adds 5 + 5 to NOT equal 11", () => {
            expect(functions.add(5, 35)).not.toBe(11);
        })
    })

    // Subtraction
    describe("subtract function", () => {
        test("should return 1 for 10 - 9", () => {
            expect(functions.subtract(10, 9)).toBe(1);
        });
        test("should return 10 for 100 - 90", () => {
            expect(functions.subtract(100, 90)).toBe(10);
        });
    })
    
    // Multiply
    describe("multiply function", () => {
        test("should return 9 for 3 * 3", () => {
            expect(functions.multiply(3, 3)).toBe(9);
        });
        test("should return 100 for 20 * 5", () => {
            expect(functions.multiply(20, 5)).toBe(100);
        });
    })

    // Division
    describe("division function", () => {
        test("should return 10 for 100 / 10", () => {
            expect(functions.divide(100, 10)).toBe(10);
        });
        test("should return 9 for 90 / 10", () => {
            expect(functions.divide(90, 10)).toBe(9);
        });
    })
});

// Check value
describe('Check value of parameter', () => {
    test('Should be falsy', () => {
        expect(functions.checkValue(null)).toBeFalsy();
    });
});

// Object test, toEqual
describe('Check value of objects', () => {
    test('Should be John Doe object', () => {
        expect(functions.createUser()).toEqual({ // toBe wil fail, obj/array is reference type and not primitive
            firstName: 'John',
            lastName: 'Doe',
        });
    });
});