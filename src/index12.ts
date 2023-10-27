//Nullable types
// typescript is very strict using null & undeifned

//TypeScript special type variables
// 1. any
// 2. Never
// 3. Nullable
// 4. Undefined
// 5. Unknown

function greet(name: string | null | undefined){
    if(name)
    console.log(name.toUpperCase());
    else
        console.log('Hola');
}

greet(null);