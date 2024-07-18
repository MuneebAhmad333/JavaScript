// let score = false
// console.log(typeof score)

// let convertoNumber = Number(score)
// console.log(typeof convertoNumber)
// console.log(convertoNumber)
// let isloggedin = ""
// let boolisloggedin = Boolean(isloggedin)
// console.log(boolisloggedin)
// console.log("2" == 2)
// console.log("2" === 2) // === mean strict check and also check datatype of variable 

/*
Data Types in JavaScript
primitive
number, boolean, string,null,undefined,big int  and symbol

Non primitive(Reference)
Array  ,, Functions  ,, Objects 

*/

//symbol is used to uniquely identify each variable value
let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id == anotherId)