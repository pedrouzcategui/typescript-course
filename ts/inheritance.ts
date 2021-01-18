class Animal {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }

    move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark(){
        console.log("Woof! Woof!");
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name); // Wtf
    }
    move(distanceInMeters = 5){
        console.log("Slithering...")
        super.move(distanceInMeters); // It's like calling the parent class animal.move method.
    }
}

class Horse extends Animal {
    constructor(name: string){
        super(name); // Supper will execute the constructor of the base class, in this case, the constructor of Animal.
    }
    move(distanceInMeters = 45){
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the python");
let tom: Animal = new Horse('Tommy the palomino');

sam.move();
tom.move(34);