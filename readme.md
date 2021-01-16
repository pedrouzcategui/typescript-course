## BASIC TYPES

To declare the type of an specific variable, we will follow this syntax:

```ts
let <variable>: typeofthevariable = "value";

// Examples
let isTrue: boolean = true;
let number: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

let color: string = "red";
let name: string = 'Pedro';
```

To declare an array, we could do it in some ways:

```ts
let list: number[] = [1,2,3];
let list: Array<number> // This is called generic type
```

To declare tuples:

```ts
let x: [string, number];
x = ["Hello",10] // Ok
x = [10,"Hello"] // Not okay
```

## UNKNOWN

When not sure what kind of value is, you could use unknown.

```ts
const idk: unknown = getValueFromARandomApi(); 
```
## ANY

Any types are used when some libraries or functions are not written with Typescript, in that cases, we might want to opt-out type checking

```ts
declare function getValue(key: string): any;
const str: string = getValue("myString");
```

The difference between unknown and any is that any allows us to access properties that doesn't exist.

Try to avoid ANY when is possible.

## VOID

Abscence of type, commonly used as a return value for some funcitons.
```ts
function greetUser():void{
    console.log("Hello");
}
```
## NEVER

Represents the types of values that never occurs.
Used on functions that always throw an exception or one that never returns.

## OBJECTS

Represents non-primitive types (number,string,boolean,bigint,symbol,null,undefined)

## TYPE ASSERTIONS

A.K.A Type casts in another languages, but it doesn't do special checking, data restructuring or runtime impact, it's handled by the compiler.

Type assertions have two forms:

1. `as` syntax
```ts
let someValue: unkown = "This is a string";
let strLength: number = (someValue as string).length;
```

2. Angle Bracket Syntax

```ts
let someValue: unkown = "this is another string";
let strLength: number = (<string>someValue).length
```

NOTE: never use the primitive values starting with uppercase, instead, use the lowecase versions.

## ENUMS

List of predefined possible values

## GENERIC TYPES

## INTERFACES

Type checking focuses on the shape that values have. This is called 'duck typing' or 'structural subtyping';
This term is used in dynamic languages that does not have strong typing.
The idea behind duck typing is that you don't need a type in order to invoke an existing method on an object,
if a method is defined, you can invoke it.

"If it looks like a duck and quacks like a duck, it's a duck".
Not formally specify.

Interfaces tells objects or implementations how they have to behave in certain conditions.

```ts
interface LabeledValue{
    label: string
}

function printLabel(labeledObj: LabeledValue){
    console.log(labeledObj.label);
}

let myObj = {size:10, label:"Size 10 Object"};
printLabel(myObj);
```

Despite our object have more another property, the thing that typescript does is find if the object passed to the interface have
everything that the interface requires, if that is, then is allowed.



































## Unions

Used to specify 2 or more data types that could be spected:

```ts
function saluteOrBet(thing: string | number){
    if(typeof thing == "string"){
        console.log("Hello");
    }
    if(typeof thing == "number"){
        console.log(30);
    }
    throw new Error(`Expected string or number, instead got ${typeof thing}`)
}
```

## Intersection Types

## Generics

## Classes


## LET VS VAR

`var` variables has access through all the function, this means that we can access inner function variables outside their own scope

```js
function getValue(){
    var x = 1;

    if(x < 2){
        var b = 3;
    }

    return b; // b is accesible, even though is declared inside an if statment.
}
```

Using let:

```js
function getValue(){
    let x = 1;

    if(x < 2){
        let b = 2;
        return b;
    }

    return b; // b is not defined here.
}
```

Let uses block-scoping, refering that the variables are allowed to use only in their main an subinner blocks.
Var uses function-scoping, refering that the variables are allowed in all the function block.