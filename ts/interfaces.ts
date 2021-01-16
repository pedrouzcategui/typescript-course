interface LabeledValue{
    label: string
}

function printLabel(labeledObj: LabeledValue){
    console.log(labeledObj.label);
}

let myObj = {size:10, label:"Size 10 Object"};
printLabel(myObj);

///////////////////////////////////////////////////////

interface SquareConfig {
    color?: string; // Optional properties
    width?: number;
}

function createSquare(config: SquareConfig): {color:string, area:number}{
    let newSquare = {color: "white", area: 100}; // Initial Parameters if not specified
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

////////////////////////////////////////////////////////////////////////

interface Point {
    readonly x:number;
    readonly y:number;
}

let p1: Point = {x:10, y:20};
// p1.x = 30; Error, cannot assign 30 to "x" because it is a readonly propertie

