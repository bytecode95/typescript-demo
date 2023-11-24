//functions

let sayhitoTypescrtpt = () =>{
    console.log("Hi");
}

let returnFunc = ():string =>{
    return "chetana"
}

let trySum = (num:number):number =>{
    return num*2;
}

let trySum1 = (num:number) =>{
    return num*2;
}

let trySum2 = (num:number):void =>{
    //return num*2;
}

let trySum3 = (num1:number, num2:number, num3?:number) =>{
    return num1+num2;
}

trySum3(2,4,6);

//here function argurments me be more than 3, so this will lead to complex to understand
function userFunc(user:{username:string, age:number, phone?:number}){
    console.log(user.username);
}

//can be used type alias

type userTypedemo = {
    username:string
    email?: string
    age: number
    password: string
}

function betterUserfun(user: userTypedemo){
    console.log(user.username);
    console.log(user.age);
}

//type signature
type myFunc = (a:number, b:number) => void

let write: myFunc = (num, str)=>{
    console.log(num + "times" + str);
}

type userTypedemo1 = {
    username:string
    email?: string
    age: number
    password: string
    theme : "dark" | "light"
}

const userWithTheme1 : userTypedemo1 = {
    username:"John",
    email:"john@gmail.com",
    age: 25,
    password: "12345",
    theme:"light"
}