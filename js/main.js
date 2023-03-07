// find = value
// finindex = index

// let users = [
//     {name: "Asadullo"},
//     {name: "Olimjon"},
//     {name: "Behruz"}
// ]
// let user = users.find(function(object, index){
//     return object.name === "Olimjon"
// })
// console.log(user);

// let users = [
//     {name: "Asadullo"},
//     {name: "Olimjon"},
//     {name: "Behruz"}
// ]
// let user = users.findIndex(function(object, index){
//     return object.name === "Behruz"
// })
// console.log(user);

let isNum = 0;
setInterval(() => {
  console.log((isNum += 2));
}, 1000);
