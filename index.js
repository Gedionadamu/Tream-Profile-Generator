// Include packages need for the application.
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/intern")
const generateHTML = require("./src/generateHTML")

var allinput = []


// Array of  Employee questions for user input
const questions = () => {
    return inquirer.prompt([
        {
           type : "input",
           name : "name",
           message : "Please provide Team Managers name?"

        },
        {
            type : "input",
            name : "id",
            message : "Please provide Team Manager's ID no.?"
 
         },
         {
            type : "input",
            name : "email",
            message : "Please provide Team Manager's E-Mail address?"
 
         },
         {
            type : "input",
            name : "office",
            message : "Please provide Team Manager's office no.?"
 
         },
         {
            type : "checkbox",
            name : "addEmployee",
            message : "Please Add team members if you are done adding team members please choosse finish building team?",
            choices:[
                {name: "Engineer", value: "Engineer"},
                {name: "Intern", value: "Intern"},
                {name: "Finish Building Team", value: "done"}
            ]
 
         },
        
    ])
    
}

// Array of  Employee questions for user input
const questionsengineer = () => {
    return inquirer.prompt([
        {
           type : "input",
           name : "name",
           message : "Please provide Enginner's name?"

        },
        {
            type : "input",
            name : "id",
            message : "Please provide Team Manager's ID no.?"
 
         },
         {
            type : "input",
            name : "email",
            message : "Please provide Engineer's E-Mail address?"
 
         },
         {
            type : "input",
            name : "github",
            message : "Please provide Engnieer's Github username?"
 
         },
         {
            type : "checkbox",
            name : "addEmployee",
            message : "Please Add team members if you are done adding team members please choosse finish building team?",
            choices:[
                {name: "Engineer", value: "Engineer"},
                {name: "Intern", value: "Intern"},
                {name: "Finish Building Team", value: "done"}
            ]
 
         },
        
    ])
    .then((data)=> {
                    const engineer = new Engineer(data)
                    allinput.push(engineer)
                    choices(data.addEmployee[0])
                   
    })
   
    
    
}


// Array of  Employee questions for user input
const questionsintern = () => {
    return inquirer.prompt([
        {
           type : "input",
           name : "name",
           message : "Please provide Intern's name?"

        },
        {
            type : "input",
            name : "id",
            message : "Please provide Intern's ID no.?"
 
         },
         {
            type : "input",
            name : "email",
            message : "Please provide Intern's E-Mail address?"
 
         },
         {
            type : "input",
            name : "school",
            message : "Please provide Intern's school?"
 
         },
         {
            type : "checkbox",
            name : "addEmployee",
            message : "Please Add team members if you are done adding team members please choosse finish building team?",
            choices:[
                {name: "Engineer", value: "Engineer"},
                {name: "Intern", value: "Intern"},
                {name: "Finish Building Team", value: "done"}
            ]
 
         },
        
    ])
    .then((data)=> { 
                    const intern = new Intern(data);
                    console.log(intern.getRole(allinput))
                     allinput.push(intern)
                    choices(data.addEmployee[0])
                        
                        
                        
    })
}


function choices (choice){
    
    if(choice === "Engineer"){
        return questionsengineer();
    }
    else if (choice ==="Intern"){
        return questionsintern();
    }
    else {
        fs.writeFileSync('Team Profile.html', generateHTML(allinput))
        // console.log(allinput)
        console.log('Successfully Generated Team Profile!')
    }
}


// TODO: Create a function to initialize app
const init = () => {
    
    questions()
      // Use writeFileSync method to use promises instead of a callback function
    //   .then((data) => fs.writeFileSync('Team Profile.html', generateMarkdown(data)))
    // .then((data) => console.log(data))
    
    .then((data) => {
        const manager = new Manager(data)
        allinput.push(manager)
        choices(data.addEmployee[0])
        
        console.log(manager)
        return data
    })
    // .then((allinput) => fs.writeFileSync('Team Profile.html', generateHTML(allinput)))
    
   
    .catch((err) => console.error(err));
  
  }
  
  // Function call to initialize app
  init();