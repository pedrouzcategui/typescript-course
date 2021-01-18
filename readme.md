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

## Functions Interfaces

Allow us to describe the params and return type of a determined function expression.

```ts
interface SearchFunc {
    (source: string, subString: string): boolean; // Params and return Type
}

let mySearch: SearchFunc; // I expect that you have the params and return type described on the SearchFunc interface
mySearch = function(src: string, substr: string){
    let result = src.search(subStr);
    return result > -1;
}
```

### Indexable Types

Indexable Types allows us to indicate if an array or propertie of an object is accesed via different data types

In this example, we are using an StringArray interface, indicating that it's only accesible via number indexes and
not dot operators or string index.

```ts
interface StringArray {
    [index: number]: string; // Only allow access via number indexes, and the return type expected is a string.
}

let myArray: StringArray;

myArray = ['bob','fred'];
let myStr = myArray[0];
```

But when we index with numbers, Javascript by default will transform that number into a string, so if you're going to
index with number, the return type of that array must be an subtype of the same indexer.

```ts
interface Example{
    [index: string]: number;
    length: number;
    // name: string; // This is an error, because the index: string is not assibnable to type number;
}
```

Remember when you have an object literal?
```js
var myObj {
    name: "PEDRO",
    age: 19
}
```

You could access it via:
1. myObj.name;
2. myObj["name"];

And we are saying that any string indexer will reurn a number, but at the same time, saying that the name property (that is 
also an string indexer) will return a string? There is the dilema.

### Implementing Interfaces into Classes

When talking about implementing interfaces into typecript classes, we should know that this interfaces only should be used to 
describe the public side of this interface, not the private instance variables or methods.

Interfaces allows us to give the class a determined set of properties or functions that they should have in their implementaiton, 
also, in the case of the functions, we can describe their definition and define their own implementation in the class, making it
reusable along the classes of a program.

The keyword `function` do not go into any method of a class; Only the name of the method.


#### Instance and Statics sides of classes

### Extending Interfaces

We can extend the propertis of an existing interface into another, giving more flexibility in how to separate the interfaces
into reusable components.

```ts
interface Type {
    type: string;
}
interface Pokemon extends Type{
    name: string;
    evolutionLevel: number | null
}

// This is known as Type Assertion, it could be like
let pokemon = {} as Pokemon; 
let pokemon2 = <Pokemon>{}

pokemon.name = "Charizard";
pokemon.type = "Fire"
pokemon.evolutionLevel = null;
```

### Hybrid Types

When an object acts as both a function and an object, there you have an hybrid type.

### Interfaces Extending Classes

We can extend a class in an interface, and that interface will inherit all of the methods and instance variables of that class, even the ones that has access modifiers like private and protected.

## Function Types

We could also pass an arrow function explaining the types that are involved on our function expression. 
In this case, we are saying that the function expression myAdd will contain an anonymous function that
has 2 parameters x and y of type number, and expects to return a number too.

```ts
    let myAdd: (baseValue: number, increment:number) => number = function(
        x:number,
        y:number
    ){
        return x+y;
    }
```

### Optional or Default parameters

Optional: lastname?
Default: lastname = "value"

In Typescript, is assumed that every parameter on our function types are required
In order to make it optional, we should use an `?` to the end of parameters we want to be optional.
Default values are asigned with = "";

### Rest Params;

```ts 
let someRestFunction: (fn: string, ...ln: string[]) => string = (fn: string, ...ln: string[]) => {
    return firstName + " " + ln.join(" ");
} 
```

The rest parameter, its followed by an array of some type, in this case, with an array of strings.
We can also specify normal function declarations

```ts
function buildCompleteName(fn: string, ...ln: string[]){
    return fn + " " + ln.join(" ");
}
```
### This

```ts
let deck = {
    suits: ["hearts","spades","clubs","diamonds"],
    cards: Array(52);
    createCardPicker: function(){
        return function(){
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13}
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
```

This is used in the conext of the function createCardPicker, that will be set to Windows rather than deck.
Why? Because `this` context is assigned where the function it's called, and 
`createCardPicker` is called on the context off windows

To fix this, we need to use Arrow Functions. Arrow Functions capture `this` where the function is created, rather than where
is invoked.

### This: void

Means that the function expects to be a function that does not require a this type, this: void makes unusable the this context.
```ts
    interface UIHandler{
        addClickListener(onclick: (this: void, e: Event) => void): void;
    }

    class Handler {
        info: string,
        onClickBad(this: Handler, e: Event){
            // Using this would crash.
            this.info = e.message;
        }
    }

    let h = new Handler;
```

### What means by not assignable?

### Overloads

If we want to reuse the same function but return different data types, we should consider use  `Overloads`
By definiton, and Overload is a function that is declared multiple Times, but defining different parameters in each one.

When invoking the function, the output will depend of the type of the parameters passed.

### Literals

In typescript exists 3 native types or literal types, those are string, boolean or number.
When we are using let, we are telling typescript that this variable will change its content,
Using const, we are saying that this variable will never change its content.

This means that:

```ts
const helloWorld = "helloWorld"; // TypeScript sets the type to be "Hello World", not string.
let hiWorld = "Hi World"; // On the other hand a let can change, so declares it a string.
```

Narrowing is the action to delimite the infinite number of potential cases to a smaller, finite number of potencial case values.

```ts
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
        // ...
        } else if (easing === "ease-out") {
        } else if (easing === "ease-in-out") {
        } else {
        // It's possible that someone could reach this
        // by ignoring your types though.
        }
    }
}
```








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