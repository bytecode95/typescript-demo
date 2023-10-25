//Optional Chaining
type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined{
    return id ===0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0);
if(customer !== null && customer !==undefined)
    console.log(customer.birthday);

//optional prperty access operator
console.log(customer?.birthday);


//optional prperty access operator
console.log(customer?.birthday?.getFullYear());


//optional element access opertaor -- for arrays
//customer[0]

// if(customer !== null && customer !==undefined)
//     customer?.[0];



