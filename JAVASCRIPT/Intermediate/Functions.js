// function Greetings(){
//     console.log("hello!")
// }
// Greetings()


// function AddNum(num1, num2){//PArameters
//     console.log(num1+num2)
// }
// AddNum(2,3)//arguments
// function AddNum(num1, num2){//PArameters
//    //let result = num1 + num2
//    return num1 + num2
// }
// const result =AddNum(55,32)
// console.log("Result:", result)//arguments


// function UserLoginIn(username,password){
//     if(username === undefined || password === undefined){
//         console.log("please enter your username and password correctly ")
//         return
//     }else{
//        return console.log(`${username} has login successfully`)
//     }

// }
// UserLoginIn("hassan","udfhodn")

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//adding multiple product when unkhown using rest operator
// function AddProducts(...product){
//     return product
// }

// console.log(AddProducts("iron","fan","cloths","shoes"))

// using object in function
// let mycart ={
//     name:"utensils",
//     price:"1000"
// }

// function CalculateCartPrice(prices){
// console.log(`product category os ${prices.name} and price is ${prices.price}`)
// }


// we can also pass object in arguments
// CalculateCartPrice(mycart)

// let mycart ={
//         name:"utensils",
//         price:"1000"
//     }
// function CalculateCartPrice(prices){
// console.log(`product category os ${prices.name} and price is ${prices.price}`)
// }

// CalculateCartPrice({
//     name:"iron",
//     price:"2000"
// })

// passing array in function
// myArray = [1,2,3,4,5]
// names = ["hassan","muneeb","sufyan"]
// function returnArray(...arr){
// return arr
// }
// console.log( returnArray(names,[1,3,5,6]) )
// //console.log( returnArray(myArray) )

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//Global scope and Blocked scope
// let aa = 1

// if(true){
//     let a = 55
//     console.log(`Blocked Scope of A ${a} and global scope ${aa}`)
// }
// console.log(aa) 

//++++++++++++++++++  interesting +++++++++++++++++++++++++++
//this is basic function
function AddOne(num){
   return num +1
}
console.log(AddOne(1))

//this is an Expression
const AddTwo = function(num2){
    return num2+2
}
console.log(AddTwo(4))

