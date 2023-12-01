//objects

//define interface for a person obejct

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

//Create an object that adhere to the Person interface

const person:Person = {
    firstName:'John',
    lastName:'Doe',
    age:20
};

//access properties
console.log(person.firstName);
console.log(person.age);


interface Car {
    make: string;
    model: string;
    year?: number; //conditionally give properties to object
    readonly vin: string;
}

const myCar: Car = {
    make:"Toyota",
    model:"Camrey",
    year: 2020,
    vin: "ABCGFD"
}

//using type alias
type Point = {
    x: number;
    y: number;
  };
  
  const point: Point = {
    x: 1,
    y: 2,
  };