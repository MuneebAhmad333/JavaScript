// let balance = 120.55
// console.log(balance)

// let score =new Number(223) //object also tell type if explicitely defined
// console.log(score) 
// console.log(score.toString())
// console.log(balance.toFixed(2))
// console.log(balance.toPrecision(3))
// let num = 2000000
// console.log(num.toLocaleString('en-IN'))

//+++++++++++++++++++++++++++++ +++++++++++++++++++++++++++++++
//Maths in JavaScript

// console.log(Math)
// console.log(Math.abs(-22))
// console.log(Math.round(33.6))
// console.log(Math.ceil(33.4))
// console.log(Math.floor(33.4))
// console.log(Math.sqrt(25))
// console.log(Math.pow(3))

// console.log(Math.random()) //random GENERATES a number btw 0 and 1
// console.log((Math.random()*10)+1)


//General Fomula to Generate Number
// const max = 20
// const min = 10

// console.log(Math.floor(Math.random()*(max-min+1))+min)

// const min = 100
// const max = 1000
// console.log(Math.floor(Math.random()*(max-min+1))+min)
// ***********************************************************************
//DATES in JAVASCRIPT
// let Today = new Date()
// console.log(Today.toTimeString())
// let x = new Date(2024,0,12)
// console.log(x.toLocaleString())

// //time stamp
// let mytimestamp = Date.now()//particularly used fo time calculation
// console.log(mytimestamp)
// console.log(x.getTime())

//convert milliseconds to seconds
// console.log(Math.floor(Date.now()/1000))
 let newDAte =new Date()
 console.log(newDAte.toLocaleString(' default',{
    day:"2-digit",
    dateStyle:"full",
    
    }))

