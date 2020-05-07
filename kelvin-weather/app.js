// Initializing constant kelvin
const kelvin = 0;

// Converting kelvin to Celsius
const celsius = kelvin - 273;

// Converting Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
