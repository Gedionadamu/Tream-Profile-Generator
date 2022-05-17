const intern = require("../lib/intern");

describe("intern", () => {
    describe("name", () => {
        it( "should return the name of intern", () => {
            const name = "Thomas";
            
            const answer = new intern(name).getName()

            expect(answer).toEqual(name)
        })
    })
    describe("id", () => {
        it( "should return the id of intern", () => {
            const name = "Thomas";
            const id = "123";
            
            const answer = new intern(name,id).getId()

            expect(answer).toEqual(id)
        })
    })
    describe("email", () => {
        it( "should return the email of intern", () => {
            const name = "Thomas";
            const id = "123";
            const email = "thomas@gmail.com";
            
            const answer = new intern(name,id,email).getEmail()

            expect(answer).toEqual(email)
        })
    })
    describe("school", () => {
        it( "should return the school of intern", () => {
            const name = "Thomas";
            const id = "123";
            const email = "thomas@gmail.com";
            const school = "st.mary"
            
            const answer = new intern(name,id,email,school).getschool()

            expect(answer).toEqual(school)
        })
    })
    
    describe("role", () => {
        it( "should return the role of intern", () => {
            const role = "Intern";
            
            const answer = new intern().getrole()

            expect(answer).toEqual(role)
        })
    })

})