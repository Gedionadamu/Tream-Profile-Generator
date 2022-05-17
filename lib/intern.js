const Employee = require("./Employee")
// extends from employee class to create intern class
class Intern extends Employee{
    constructor( name, id, email,school){
        
        

        super(name, id, email);
        this.school=school
        
    }
    // method to get shool 
    getschool(){
        return this.school
    }
    //method to get role
    getrole(){
        return "Intern"
    }
}
// exports the class
module.exports = Intern