class Employee {
    name;
    constructor (name){
        this.name = name;
    }
    displayInfo(){
        console.log(this.name)
    };
};

class Manager extends Employee {
    department = "IT";
    displayInfo(){
        console.log(this.name, this.department)
    }
}

const test = new Manager("John Smith");
test.displayInfo();