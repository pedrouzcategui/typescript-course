// Interfaces also allows classes to meet a particular contract or behaviour.

interface ClockInterface1 {
    currentTime: Date // This class needs to implement this property.
    setTime(d: Date): void; // This class needs to implement this setTime function.
}

class Clock1 implements ClockInterface1 {
    currentTime = new Date();
    setTime(d: Date){
        this.currentTime = d;
    };
    constructor(h:number, m: number){}
}