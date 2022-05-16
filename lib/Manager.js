const Employee = require("./Employee")

class manager extends Employee{
    constructor( name, id, email,officeNumber){
        
       

        super(name, id, email);
        this.office=officeNumber;
        
    }
    getrole(){
        return "Manager"
    }
}

module.exports = manager