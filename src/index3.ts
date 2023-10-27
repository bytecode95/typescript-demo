//arrays
//typescript compiler can detect numbers as a number array
let numbers = [1,2,3];

const names: readonly string[] = ["Dylan"];
//names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

let count = [];
//if you need to use an empty array you have to expliceilty notation what type of that array
//foreach usage to typecript array - code completion
