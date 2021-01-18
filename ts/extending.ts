interface Shape {
    color: string;
}

let square = {} as Square;
square.color = "Red";
square.sideLength = 120;

// Multiple interfaces

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square2 = <Square>{};
square2.color = "blue";
square2.penWidth = 5;
square2.sideLength = 10;
