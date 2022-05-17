const Employee = require("./Employee")
// extends from employee class to create manager class
class manager extends Employee{
    constructor( name, id, email,officeNumber){
        
       

        super(name, id, email);
        this.office=officeNumber;
        
    }
    // method to get office no.
    getofficeno(){
        return this.office
    }
    // method to get employee role
    getrole(){
        return "Manager"
    }
}
// exports the class
module.exports = manager