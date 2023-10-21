//Objects
// in javascript objects are dynamic, so there shpecan change during the program
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {id: 1, 
    name:'chethana', 
    retire:(date: Date)=>{
        console.log(date)
    }
};

//employee.id = 0; if read only is there we cant not chnage value of the key
