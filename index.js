// Include packages need for the application.
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/intern")
const generateHTML = require("./src/generateHTML")

// an empty array to get all data collected from user
var allinput = []


// Array of  Manager questions for user input
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

// Array of  Engineer questions for user input
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
        // created new intern based on the data given
                    const engineer = new Engineer(data.name, data.id, data.email, data.github)
                    // pushed the data taken from the questionare to an empty array
                    allinput.push(engineer)
                    // calls a function to chose question based on the user input choice to add employee or finish building team.
                    choices(data.addEmployee[0])
                   
    })
   
    
    
}


// Array of  Intern questions for user input
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
                // created new intern based on the data given
                    const intern = new Intern(data.name, data.id, data.email, data.school);
                    // pushed the data taken from the questionare to an empty array
                    allinput.push(intern)
                    // calls a function to chose question based on the user input choice to add employee or finish building team.
                    choices(data.addEmployee[0])
                        
                        
                        
    })
}

// function to choose question based on user input to add employee or finish building team
// if user chooses to finish building team it will create the team profile html file.
function choices (choice){
    
    if(choice === "Engineer"){
        return questionsengineer();
    }
    else if (choice ==="Intern"){
        return questionsintern();
    }
    else {
        // Use writeFileSync method to use promises instead of a callback function
        fs.writeFileSync('Team Profile.html', generateHTML(allinput))
       
        console.log('Successfully Generated Team Profile!')
    }
}


// TODO: Create a function to initialize app
const init = () => {
    
    questions()
      
    
    
    .then((data) => {
        // created new manager based on the data given
        const manager = new Manager(data.name, data.id, data.email, data.office)
        // pushed the data taken from the questionare to an empty array
        allinput.push(manager)
        // calls a function to chose question based on the user input choice to add employee or finish building team. 
        choices(data.addEmployee[0])
        
        // console.log(manager)
        return data
    })
   
    
   
    .catch((err) => console.error(err));
  
  }
  
  // Function call to initialize app
  init();