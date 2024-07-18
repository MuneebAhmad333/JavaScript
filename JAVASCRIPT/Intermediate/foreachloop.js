// let languages = ['cpp','python','ruby','rust','java']
// languages.forEach( function (lan){
// console.log(lan)
// })
// languages.forEach(  (lan,index,arr)=>{
// //console.log(lan,index,arr)
// })

// function lang(item){
// //console.log(item)
// }
// languages.forEach(lang)
// let myobj =[
//     {
//         objectName:'Object',
//         objValue:'Empty'
//     },
//     {
//         objectName:'Array',
//         objValue:'NotEmpty'
//     },
//     {
//         objectName:'Function',
//         objValue:'Empty'
//     }
// ]
// myobj.forEach((item)=>{
//    // console.log(item.objValue)
// })

// //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //filter usage

// const arr =[1,2,3,4,5,6,7,8,9]
// const arr1 =arr.filter((item)=> item>5)// require a condition to be checked
// //console.log(arr1)
// const arr2 =arr.filter((item)=>{// if scope is opened then return is must too be written 
//     return item>5
   
// } )
// //console.log(arr1)
// //*************************************************** 
// const books = [
//     {
//       bookName: "The Great Gatsby",
//       bookTitle: "The Great Gatsby",
//       publishYear: 1925,
//       currentEdition: "3rd"
//     },
//     {
//       bookName: "To Kill a Mockingbird",
//       bookTitle: "To Kill a Mockingbird",
//       publishYear: 1930,
//       currentEdition: "4th"
//     },
//     {
//       bookName: "1984",
//       bookTitle: "Nineteen Eighty-Four",
//       publishYear: 1949,
//       currentEdition: "2nd"
//     },
//     {
//       bookName: "Pride and Prejudice",
//       bookTitle: "Pride and Prejudice",
//       publishYear: 1977,
//       currentEdition: "5th"
//     },
//     {
//       bookName: "The Catcher in the Rye",
//       bookTitle: "The Catcher in the Rye",
//       publishYear: 1951,
//       currentEdition: "3rd"
//     }
//   ];
  
//  const bookinfo = books.filter((item)=>item.currentEdition==='3rd' && item.publishYear ===1951)
//  //console.log(bookinfo)
   

//  // we can also use map instead of filter , syntax is same

//  const arr5 =[1,2,3,4,5,6,7,8,9]
//  const ret =arr5.map((num)=>(num+10))
//  //console.log(ret)

 // we can use CHAINING( multiple methods are used )

 const arr4 =[1,2,3,4,5,6,7,8,9]
 const retn =arr4.map((num)=>num+10)
               .map((num)=>num +3)
                .filter((num)=>num>20)
 console.log(retn)

 // we will use reduce method
 // it is ued in shopping cart to total amount of all products

 const prices = [100,150,300,450,1100,553,778]

 const totalAmount =prices.reduce((acc,currentval)=>{
    console.log(`acc value ${acc} and current val ${currentval}`)
    return acc+currentval
 },0)

console.log(totalAmount)
