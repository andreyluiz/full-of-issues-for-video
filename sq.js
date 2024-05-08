// problematic-sonar.js

let unusedVariable = "I'm not used"; // Unused variable: Code smell for dead code

function add(a, b) {
  return a + b;
}

function add(a, b) {
  // Duplicate function: Code smell for duplicated blocks
  return a + b;
}

let x; // Variables should be initialized: Code smell for uninitialized variables

for (let i = 0; i < 5; i++) {
  // Non-compliant use of "==" instead of "===".
  if (x == undefined) {
    console.log("x is not defined");
  }
}

setTimeout(() => {
  console.log("This is a delayed log.");
}, "1000"); // Use of string for setTimeout delay: Potential bug

function divide(a, b) {
  return a / b; // Potential division by zero: Possible bug if b is 0
}
