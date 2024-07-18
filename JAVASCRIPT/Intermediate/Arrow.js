// let myObj ={
//     name:"muneeb",
//     Password:"****",
//     greeting: function(){
// console.log(`Welcome to Gulberg ${this.name}`)
// // console.log(this)
//     }
  
// }
// myObj.greeting()
// myObj.name ="Siam"
// myObj.greeting()
// "this" can be used in objects to accrss parameter but doesnot work in functions
// function cahi(){
//     let name ="vycgvs"
//     console.log(this.name)

// }
// cahi()//this is not applicable and output UNDEFINED
// const cahi = function (){
//     let name ="vycgvs"
//     console.log(this.name)

// }
// cahi()


//************************************** */
// Arrow Functionss
// const cahi =  ()=>{
//     let name ="vycgvs"
//     console.log(this.name)

// }
// cahi()

// Implicit and Explcit Return i functions

const AddNum =(num1,num2)=>{
    return num1+num2// this is explicit return
}
console.log(AddNum(1,3))


const AddNum1 =(num3,num4)=>(num3+num4)// this is Implicit return
console.log(AddNum1(1,6))

//return object 
const AddNum2 =(num3,num4)=>({username:"muneeb"})// this is Implicit return
console.log(AddNum2())