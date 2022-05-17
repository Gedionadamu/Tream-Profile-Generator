const engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("name", () => {
        it( "should return the name of engineer", () => {
            const name = "Thomas";
            
            const answer = new engineer(name).getName()

            expect(answer).toEqual(name)
        })
    })
    describe("id", () => {
        it( "should return the id of engineer", () => {
            const name = "Thomas";
            const id = "123";
            
            const answer = new engineer(name,id).getId()

            expect(answer).toEqual(id)
        })
    })
    describe("email", () => {
        it( "should return the email of engineer", () => {
            const name = "Thomas";
            const id = "123";
            const email = "thomas@gmail.com";
            
            const answer = new engineer(name,id,email).getEmail()

            expect(answer).toEqual(email)
        })
    })
    describe("officeno", () => {
        it( "should return the github of engineer", () => {
            const name = "Thomas";
            const id = "123";
            const email = "thomas@gmail.com";
            const github = "cleanbandit"
            
            const answer = new engineer(name,id,email,github).getgithub()

            expect(answer).toEqual(github)
        })
    })
    
    describe("role", () => {
        it( "should return the role of engineer", () => {
            const role = "Engineer";
            
            const answer = new engineer().getrole()

            expect(answer).toEqual(role)
        })
    })

})