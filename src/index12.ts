//Nullable types
// typescript is very strict using null & undeifned

function greet(name: string | null | undefined){
    if(name)
    console.log(name.toUpperCase());
    else
        console.log('Hola');
}

greet(null);