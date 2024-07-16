const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Example reducer function
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// Example test cases
const batteries = [1, 2, 3, 4, 5];

// Calculate total batteries using reducer function
const totalBatteries = batteries.reduce(reducer, 0);

// Output total batteries
console.log(totalBatteries); // Should output the sum of all numbers in the batteries array


// Example batteries array
const batteries = [10, 5, 8, 3, 5]; // Replace with your actual array of battery counts

// Reducer function to compute sum
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// Calculate total batteries using reducer function
const totalBatteries = batteries.reduce(reducer, 0);

// Output total batteries
console.log(totalBatteries); // Should output the sum of all numbers in the batteries array