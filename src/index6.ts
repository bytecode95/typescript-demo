//functions
//function parameters and return values should be properly annotate
//specially if you are building an api for others
//void can be used if you are gonna not return any values

function calculateTax(income:number, taxYear:number):number{
    if(taxYear<2022)
        return income*1.2;
    //if condition is falsed javascript bydefault return undefined type. undefined is not a number
    //undefined
    return income*1.3;  //if income>50_000;
    
}

//need to pass exact arugument here
calculateTax(10_000, 2015);