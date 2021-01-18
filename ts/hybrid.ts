interface Counter {
    (start: number): string; // When an interface has a property with parenthesis, is refering to a function expression?,
    interval: number;
    reset(): void // This is refering to a method that is inside a class?
}



function getCounter(): Counter{
    let counter = function(start:number){} as Counter; // Acting as a function
    counter.interval = 123; // But also as an object, that is a Hybrid Type
    counter.reset = function(){};
    return counter;
}

let c2 = getCounter();
c2(10);
c2.reset();
c2.interval = 5;