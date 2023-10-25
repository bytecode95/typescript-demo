//primitive type in typescript
//typescript compiler can detect the type of their variables by its value. 
// we dont need to annonate them everytime


let sales = 123_456_789;
let course = "typescript";
let is_published = true;


//anytype in typescript - avoid using any type of variable
let level;
level = 1;
level = 'a'

//we havent set this parameter explicietly
// function render(document){
//     console.log(document);
// }

//This behavior can be disabled by enabling noImplicitAny as an option in a TypeScript's project tsconfig.json