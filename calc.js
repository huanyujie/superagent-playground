// Tiny calculator used as a playground for agent testing.
function add(a, b) { return a + b }
function sub(a, b) { return a - b }
// Bug: multiply returns a + b instead of a * b
function multiply(a, b) { return a + b }
// Bug: factorial misses the base case for 0
function factorial(n) {
  if (n === 1) return 1
  return n * factorial(n - 1)
}
module.exports = { add, sub, multiply, factorial }
