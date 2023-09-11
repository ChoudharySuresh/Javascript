const accountId = 144553;
let accountEmail = "suresh@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState; //when value is not assigned then it is undefined


// accountId = 1; Not Allowed

accountEmail = "SC@gmail.com";
// let accountEmail = "sc@google.com" : let cannot be redecalred 
accountPassword = "21212121";
// var accountPassword = "98765";  : var can be redecalre but never use it 
accountCity = "singapore"; //valid syntax


console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);