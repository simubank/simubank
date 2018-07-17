
const fs = require('fs');
var customers = require("./simulants.json");

// let sharingrentCustomers = customers.filter(customer => {
//     if(customer.habitationStatus === 'sharingrent'){
//         return true
//     }
// })
// // console.log(sharingrentCustomers)
// fs.writeFile("sharingrentCustomers.json", JSON.stringify(sharingrentCustomers), function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!");
// }); 

let customersWhoseAgeIsBetween18and30 = customers.filter(customer => {
    if(customer.age >= 18 && customer.age <= 30){
        return true
    }
})
// console.log(customersWhoseAgeIsBetween18and30)
fs.writeFile("customersWhoseAgeIsBetween18and30.json", JSON.stringify(customersWhoseAgeIsBetween18and30), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 