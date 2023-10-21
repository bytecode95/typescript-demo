//advanced typescript conecpts
//Type aliases
//in this basic object code if we have create a another object we have to write another blog of code. 
//DRY - Dont Repeat yourself

//other employe object have other properties
//overall structure basic object if complex to understand

//using type alias we can use custom type


//we have a single place to define shape of an object
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let storeEmployee: Employee = {id: 1, 
    name:'chethana', 
    retire:(date: Date)=>{
        console.log(date)
    }
};