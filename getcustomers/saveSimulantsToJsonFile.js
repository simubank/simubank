const fetch = require('node-fetch');
const fs = require('fs');


const ENV = {
    authorization: '',
    botsApiUrl: 'https://dev.botsfinancial.com/api'
  }


async function doSomething  (){
    let customers = await fetch(`${ENV.botsApiUrl}/simulants`,{ 
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json' ,
            'Accept': 'application/json',
            'Authorization': ENV.authorization
        }
    })
    let body = await customers.json()
    console.log(body.result)//body.response)
    fs.writeFile("simulants.json", JSON.stringify(body.result), function(err) {
        if(err) {
            return console.log(err);
        }
    })
        
    
    //     console.log("The file was saved!");
    // }); 
}

doSomething()