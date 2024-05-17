// Write, Edit and Run your Javascript code using JS Online Compiler
// Write a JavaScript program that creates a class called 'Employee'
// with properties for name and salary. Include a method to calculate
// annual salary. Create a subclass called 'Manager' that inherits from the
// 'Employee' class and adds an additional property for department.
// Override the annual salary calculation method to include bonuses for
// managers. Create two instances of the 'Manager' class and calculate
// their annual salary.
class Employee{
    constructor(name,salary){
        this.name =name;
        this.salary=salary;
    }
    ma(){
        // var res=this.sal;
        console.log("Annual salary of employee is : "+this.salary*12)
    }
}
class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department=department;
        
    }
        ma1(){
        const asal=this.salary*12
        const bonus=0.10;
        console.log("bonus of manager with salary is ",(bonus * asal) + asal);
    }
}
var e1 = new Employee("surya" , 20000 );
e1.ma();
var e2 = new Manager("shiva",10000,"cse")
e2.ma1();