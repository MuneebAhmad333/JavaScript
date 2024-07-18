//Object Array and Function return Function DataType (Function return Object Function DataType)


// myHeros = ["Raju","Hassan","Sufi"]
// console.log(myHeros)

// myObj = {
//     name:'hassan',
//     age: 22
// }

// const myFunction = function(){
//     console.log(myObj)
// }
// console.log(myFunction)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory types in JavaScript
//Stack(Premitive) and Heap(Non premitive)
//Another important Concept is Call by Memory or Call by Value

//stack gives copy
//heap gives reference
let name = "basit"
let newname = name

console.log(name)
//newname = "saad"
console.log(newname)
//Incase of heap

myObj = {
    Email: "Raja@gamil.com",
    Password: "112233"
}
myObj1 = myObj
myObj1.Email = "Saad@gamil.com"
myObj1.Password = "998877"

console.log(myObj1)
console.log(myObj)