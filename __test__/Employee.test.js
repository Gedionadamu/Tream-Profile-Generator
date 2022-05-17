const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("name", () => {
        it( "should return the name of employee", () => {
            const name = "Thomas";
            
            const answer = new Employee(name).getName()

            expect(answer).toEqual(name)
        })
    })
    describe("id", () => {
        it( "should return the id of employee", () => {
            const name = "Thomas";
            const id = "123";
            
            const answer = new Employee(name,id).getId()

            expect(answer).toEqual(id)
        })
    })
    describe("email", () => {
        it( "should return the email of employee", () => {
            const name = "Thomas";
            const id = "123";
            const email = "thomas@gmail.com";
            
            const answer = new Employee(name,id,email).getEmail()

            expect(answer).toEqual(email)
        })
    })
    describe("role", () => {
        it( "should return the role of employee", () => {
            const role = "Employee";
            
            const answer = new Employee().getrole()

            expect(answer).toEqual(role)
        })
    })

})