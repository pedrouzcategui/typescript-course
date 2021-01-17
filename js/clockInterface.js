"use strict";
function createClock(ctor, // Constructors can be defined in their own and passed as a functions.
hour, minute) {
    return new ctor(hour, minute);
}
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.tick = function () {
        console.log("beep beep");
    };
    return Clock;
}());
var clock = new Clock(12, 17);
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
