//singleton in Object Constructer
//Object.create()
let mysym = Symbol("key1")
const user = {
    name:"Muneeb",
    age:21,
    [mysym] :"helloK",
    Email:"muneeb@gmail.com",
    "Is Logged In":false,
    Martial_Status:"unMarried"
}
//console.log(`My name is ${user.name} and i am ${user.age} years old i am ${user["Is Logged In"]}`)
//Declear a symbol use it as a key in object and also call it


// console.log( typeof user[mysym])


// user.Martial_Status = "Married"
// console.log(user)
// //if you want value of object to not change then use freeze method 
// Object.freeze(user)
// user.name = "Raju"
// console.log(user)

user.gretting = function(){
    console.log(`hello ${user.name}`)
}
console.log(user.gretting())
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//let user1 = Object()
//console.log(user1)

// let user1 = {
//     userName: {
//         firstname:"Hassan",
//         lastName:{
//             soda:"don da putter"
//         }
//     }
// // }
// // console.log(user1.userName.lastName.soda)

// let obj = {1:"a",2:"b"}
// let obj1 ={3:"c",4:"d"}
// let obj2={5:"c",6:"d"}
// // let obj2 = Object.assign({},obj,obj1,obj3)
// // //where {} is target and remaining are sources
// // console.log(obj2)
// let obj3 = {...obj,...obj1,...obj2}
// //we can also use spread opearters(...) to join objects
// //console.log(obj3)
// let hasa =[
//     {
//         id:1
//     },
//     {
//         id:2
//     },
//     {
//         id:3
//     }
// ]
// console.log(hasa[0].id)

// console.log(Object.keys(obj))
// console.log(Object.values(obj1))


// console.log(Object.entries(obj3))//gives value in form of array


// console.log(obj1.hasOwnProperty(3))
// Object de structure
const course = {
    name:"VP",
    InstructerName:"Sir Mohsin",
    Price:"200"
}
const {name} = course
const {InstructerName :is}= course
console.log(is)