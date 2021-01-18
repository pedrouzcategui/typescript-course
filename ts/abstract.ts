//abstract class Animal1 {
//   abstract makeSound():void;
   
//   move():void{
//       console.log("Roaming the earth");
//   }
//}

abstract class Department {
    constructor(public name: string){} // Abstract classes could have constructors, 

    printName(): void{
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // The derived class must define their own implementation
}

class AccountingDepartment extends Department {
    constructor(){
        super("Accounting and Auditing");
    }

    printMeeting(){
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(){
        console.log('Generating Accounting Reports...');
    }
}


let department: Department;
department = new AccountingDepartment();
console.log(department.name);
