class Student {
    name;
    age;
    grade;
    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
} 

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();