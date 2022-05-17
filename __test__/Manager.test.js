const manager = require("../lib/Manager");

describe("manager", () => {
    describe("name", () => {
        it( "should return the name of manager", () => {
            const name = "Thomas";
            
            const answer = new manager(name).getName()

            expect(answer).toEqual(name)
        })
    })
    describe("id", () => {
        it( "should return the id of manager", () => {
            const name = "Thomas";
            const id = "123";
            
            const answer = new manager(name,id).getId()

            expect(answer).toEqual(id)
        })
    })
    describe("email", () => {
        it( "should return the email of manager", () => {
            const name = "Thomas";
            const id = "123";
            const email = "thomas@gmail.com";
            
            const answer = new manager(name,id,email).getEmail()

            expect(answer).toEqual(email)
        })
    })
    describe("officeno", () => {
        it( "should return the office no. of manager", () => {
            const name = "Thomas";
            const id = "123";
            const email = "thomas@gmail.com";
            const officeno = "15c"
            
            const answer = new manager(name,id,email,officeno).getofficeno()

            expect(answer).toEqual(officeno)
        })
    })
    
    describe("role", () => {
        it( "should return the role of employee", () => {
            const role = "Manager";
            
            const answer = new manager().getrole()

            expect(answer).toEqual(role)
        })
    })

})