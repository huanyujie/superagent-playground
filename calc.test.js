const { add, sub, multiply, factorial } = require('./calc')
if (multiply(3, 4) !== 12) throw new Error('multiply is broken')
if (factorial(0) !== 1) throw new Error('factorial(0) should be 1')
console.log('all good')
