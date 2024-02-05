let userName = "John"; 

const newUser = userName //type inferents, where even though we are not defining this type, its by default the type of the variable

let userSurName : string | number = "Fane";
//userSurName = 56; MERGE


//let userSurName2 : string;

let age: number;

age = 45;
//age = true; ERROR
 

console.log("My name is " + userSurName);