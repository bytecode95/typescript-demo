//it similar to type but advanced version in typescript in OOP

//interfaces

interface IUserdemo {
    username: string;
    email: string;
    age: number;
}

interface IEmployeedemo extends IUserdemo {
    empID: number
}

const emp: IEmployeedemo = {
    username: "John",
    email:"john@gmail.com",
    age:30,
    empID: 10001
}

const client: IUserdemo = {
    username:"Jane",
    email: "jane@gamil.com",
    age: 30
}

