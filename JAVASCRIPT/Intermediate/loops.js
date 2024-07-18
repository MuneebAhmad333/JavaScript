for (let i = 0; i <=10; i++) {
    //console.log(i) 
}

for (let i = 0; i <=10 ;i++) {
    for (let j = 0; j <=10; j++) {
       //console.log( i +'*'+j," = "+i*j)
        
    }
    
}
//for each loop
const arr = ["name","muneeb"]
for (const names of arr) {
   //console.log(`name is ${names}`)
}
const greeting = "hello world!"
for (const greet of greeting) {
    if(greet == " "){
        console.log(`space detected`)
        continue
    }
   //console.log(greet)
}
// for of loop on maps

const map = new Map()
map.set('Isl','islamabad')
map.set('LHR','lahore')
map.set('KRI','karachi')

for (const [cities,value] of map) {
   // console.log(cities,':-',value)
    
}
const myobj ={
    name : 'sodu',
    password:'shohh',
    Email: 'hduoshcoh'
}
for (const key in myobj) {
    //console.log(key)
    console.log(`${key} : ${myobj[key]}`)
}
// for in loop on array gives index value

let arr1 = [1,2,3,4,5]
for (const key in arr1) {
   console.log(`${key}`)
}