const functions = {

    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    checkValue: x => x,

    createUser: () => {
        const user = {firstName: 'John'}
        user['lastName'] = 'Doe';
        return user
    }
}


// Exports for use in calc.test.js
module.exports = functions;