// //arrays
// const myArray = [0,1,2,3,4,5]
// console.log(myArray)
//  myArray.push(6)
//  console.log(myArray)
//  myArray.pop()
//  console.log(myArray)
//  myArray.pop()
//  console.log(myArray)
//  //unshift is used to put value in the start of array 
//  myArray.unshift(11)
//  console.log(myArray)
//  //shift remove element from start
//  myArray.shift()
//  console.log(myArray)

//  console.log(myArray.includes(3))
//  console.log(myArray.indexOf(3))

//  const arr1= myArray.join()
//  console.log(myArray)
//  console.log(typeof myArray)
//  console.log(arr1)
//  console.log(typeof arr1)

 
// //Difference Between Slice and Splice (Important Interview Question)

// console.log(myArray.slice(1,4))
//  console.log("A:",myArray)

//  console.log(myArray.splice(1,4))
//  console.log("B:",myArray)

const names = ["ali","muneeb","rehman"]
const friends =["ahmad","naseer","abdullah"]
const homies = ["pen","marker","eraser"]

// console.log(names.concat(friends))

// const all = [...names, ...friends, ...homies]
// console.log(all)
// const numbers = [1,2,3,[4,5],6,7[3,3,[3,5]]]
// const newNumbwe = numbers.flat(4)
// console.log(newNumbwe)

 console.log(Array.isArray("Muneeb"))
 console.log(Array.from("Muneeb"))
 console.log(Array.from({
    name:"muneeb"
 }))//interseting case gives empty array if passed in form of object

 let s1 = 1
 let s2 = 2
 let s3 = 3
 console.log(Array.of(s1,s2,s3))