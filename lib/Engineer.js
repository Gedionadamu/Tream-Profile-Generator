const Employee = require("./Employee")
// extends the engineer class from employee class
class Engineer extends Employee{
    constructor( name, id, email, github){
        
        

        super(name, id, email);
        this.github = github
        
    }
    //method to get the github for engineer
    getgithub(){
        return this.github
    }
    // method to get the role of employee
    getrole(){
        return "Engineer"
    }
}
// exports the engineer class
module.exports = Engineer