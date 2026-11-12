// Tiny calculator used as a playground for agent testing.
function add(a, b) { return a + b }
function sub(a, b) { return a - b }
function multiply(a, b) { return a * b }
function factorial(n) {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
module.exports = { add, sub, multiply, factorial }
