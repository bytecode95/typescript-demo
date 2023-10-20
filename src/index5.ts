//enum -- list of related constants
//C# and java

// const small = 1;
// const medium = 2;
// const large =3;

//PascalCase

//bydefault typescript compiler assigned values to members 0,1,2 
//if we dont want this default values we can explicitly set values 
const enum Size {Small = 1, Medium, Large};
enum SizeinLetter {Small='s', Medium='m', Large='l'}

let mySize: Size = Size.Medium;
console.log(mySize)
