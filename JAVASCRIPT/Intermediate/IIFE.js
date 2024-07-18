// immediately invocked function Expression

// (function DBconnection(){
//     console.log("DB is Connected")
// })();//named iife

// ((name)=>{
// console.log(`my name is ${name}`)
// })("raju")//un named iife

// //_______________________________________________________
//truthy value

// const hasLoggedin = "Active"
// const name = "Muneeb"
// if (hasLoggedin){

//     console.log(`${name} has and account`)
// }else{
//     console.log(`${name} dont have an account`)

// Falsy Value  (false ,0,-0, bigInt 0n,"empty string",undefined,null,NaN)
// truthy values ( value in string "0",'false',{},[],function(){},"  ")

// if (useremail.lenght === 0) {
//     console.log(`array is empty`)
// } // for array


// // for empty object 
emptyObject ={}

if(Object.keys(emptyObject).length === 0){
    console.log(`object  is empty`)
}


// Nullish Coalesing Operator (??)
// val1 = null ?? 55 // used for safety checks
// console.log(val1)
val1 = undefined ?? 55 // used for safety checks
console.log(val1)

// Terniary Operator
// condition ? true : False

let iceteaprice = 100
iceteaprice >=80? console.log("price greater then 80"):console.log("price less then 80")