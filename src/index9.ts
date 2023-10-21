//union types --- we can give variables of function parameters more than one time

function kgToLbs(weight: number | string): number{
    //narrowing
    if(typeof weight === 'number')
        //weight.   -- here shows all the methods avaiable for number object
        return weight * 2.2;
    else{
        //weight.  -- nowthis shows all the methods avaiable for weight as string
        return parseInt(weight) * 2.2;
    }
    
}

kgToLbs(10);
kgToLbs('10kg');