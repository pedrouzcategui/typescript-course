// Classes in Javascrcipt are prototype based inheritance

class Greeter {
    greeting: string;

    constructor(msg: string){
        this.greeting = msg;
    }

    greet(){
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

