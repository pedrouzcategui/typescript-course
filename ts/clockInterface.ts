interface ClockConstructor {
    new (hour: number, minute:number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

function createClock(
    ctor: ClockConstructor, // Constructors can be defined in their own and passed as a functions.
    hour: number,
    minute: number,
): ClockInterface {
    return new ctor(hour, minute);
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h:number, m:number){}
    tick(){
        console.log("beep beep");
    }
}

let clock = new Clock(12,17);
// class DigitalClock implements ClockInterface { // Podemos Implementar o Extender Interfaces, pero solo extender clases
//     constructor(h:number, m:number){}
//     tick(){
//         console.log("beep beep");
//     }
// }
// 
// class AnalogClock implements ClockInterface {
//     constructor(h:number,m:number){}
//     tick(){
//         console.log("tick tock");
//     }
// }
