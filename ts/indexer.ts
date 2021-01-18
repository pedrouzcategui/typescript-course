interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

interface notOkay {
    [x: number]: Animal;
}

interface NumberDictionary {
    [index: string]: number; // When the dictionary is accesed via an string index, it will return a number;
    length: number; // Ok, the length is a number;
    // name: string; // ERROR: Property 'name' of type 'string' is not assignable to string index type 'number'.
}

// Solving the above issue

interface NumberOrStringDictionary {
    [index: string]: number|string; // Accessing with a string, we might get or a number, or a string.
    length: number;
    name: string;
}

interface ReadonlyStringArray {
    readonly [index:number]: string;
}


