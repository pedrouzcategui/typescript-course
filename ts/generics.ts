function identity<T>(arg: T): T{
    return arg;
}

let output:string = identity<string>("myString");

function loggingIdentity<T>(arg: T[]): T[]{
    console.log(arg.length);
    return arg;
}

// Another way to describe it
function loggingIdentity2<T>(arg: Array<T>): Array<T>{
    console.log(arg.length);
    return arg;
}