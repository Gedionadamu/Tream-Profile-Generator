
var  card = []
function generateCards(data){
    for( var i=0; i < data.length; i++){
        // if()
       card.push( `<div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                ${data[i].name.name}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID : ${data[i].name.id}</li>
                <li class="list-group-item">Email :<a href = "mailto:${data[i].name.email}">${data[i].name.email}</a></li>
                <li class="list-group-item">PLACEHOLDER</li>
            </ul>
        </div>
    </div>`)
    
    }
    return card.join()
}


function generateHTML (data){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        
    </head>
    <body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <h1 class="navbar-brand display-10 " href="#">My Team</h1>
            </div>
          </nav>
          </body>
          <div class="my-5 ">
          <div class="row row-cols-1 row-cols-md-6 g-4">
           
             ${generateCards(data)}
        </div>    
          </div>  
    
    
    
    
    
    
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>  
    </body>
    </html>`
}
module.exports = generateHTML