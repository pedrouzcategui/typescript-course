class Person {
    private fullname: string;
    constructor(name:string){
        this.fullname = name;
    };

    get name(): string{
        return this.fullname;
    }

    set name(newName: string){
        this.fullname = newName;
    }
}

let person = new Person("Pedro");
console.log(person.name);
person.name = "Juan";
console.log(person.name); // Get accessors doesn't need to be called.