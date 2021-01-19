// Array Generic
// Create a type called numArray that is an Array of numbers
type numArray = Array<number>;

// Is called a generic because we can put any value and that will change the entire type
type stringArray = Array<string>;

// Three ways to say the same thing

const last = (arr: number[]) => {
    return arr[arr.length - 1];
}
const lastGeneric = (arr: Array<number>) => {
    return arr[arr.length - 1];
}
const lastType = (arr: numArray) => {
    return arr[arr.length - 1];
}

// Using the famous type "T"

// We specify thet the generic is of type T using the angle bracket syntax
// We do not know wtf the data type is, but we expect to use an array of that data type in the params and return it.
const genericFunction = <T>(arr: T[]): T => {
    return arr[arr.length -1];
}

// Know, our function adapts to the type passed in
let result1 = genericFunction(["Hola","Como","Estas","Pedro"]);
// Know, the type assigned is "string", we could pass it splicitly using:
let result2 = genericFunction<string>(['Otro','Array','De','Strings']);

// But our function could also work with numbers!
let result3 = genericFunction([1,2,3]);

// Generics allows us to give more flexibility to the functions we define.



// MultiGenerics
// We could use multiple generics.
const makeArr = <X, Y>(x:X,y:Y):[X,Y] => {
    return[x,y];
}
// By default, generics are of type unknown.

// makeArr<string, string>(x:string,y:string): [string, string]
let r1 = makeArr("a","b");
// makeArr<number, number>(x:number,y:number): [number, number]
let r2 = makeArr(1,2);
// makeArr<string, number>(x:string, y:number): [string, number]
let r3 = makeArr("a",3);

// We could pass it splicitly too
let r4 = makeArr<number, string>(4,"b");



// Generics and objects

// <T extends {firstName: string; lastName: string}> means that we want a generic type but at least need to have a firstName and
// lastName property.

// But the generic itself is an object, so you will pass object properties and values.
const makeFullName = <T extends {firstName: string; lastName: string}> (obj: T) => {
    return {
        ...obj,
        fullname: obj.firstName + " " + obj.lastName
    }
}

let v1 = makeFullName({firstName: "Xiomara",lastName:"Arellano",age: 52});
console.log(v1);

// INTERFACES AND GENERICS

interface Tab<T>{
    id: string;
    position: number;
    data: T
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
