// let prom = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Aysinc Function Execution")
//     },1000)
// resolve()
// })
// prom.then(()=>{
//     console.log("promise utilized")
// })
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Aysinc1 Function Execution")
//     },1000)
// resolve()
// }).then(()=>{
//     console.log("promise1 utilized")
// })

//DAta is automatically passed from resolve to then
// new Promise(function(resolve,reject){
//     let error = false
//   if(!error) { resolve({username:'muneeb',password:'*****',Email:'Muneeb@gmail.com'})}else{
//     reject("Error,Data Not found")
//   }
// })
// .then(function(userData){
// return userData.username
// })
// .then(function(username){
// console.log(username)
// })
// .catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log("the promise is finally resolved or rejected")
// })


// we can also use async awite instead of .then.catch

// let promisefive = new Promise(function(resolve,reject){
//     let error = true
//   if(!error) { resolve({username:'JAVA-Developer',Language:'JAVA'})}else{
//     reject("Error,JAVA Not found")
//   }
// })
// async function consumepromiseFive(){
//   try {
//     let sus = await promisefive
//     console.log(sus)
//   } catch (error) {
//     console.log(error)
//   }
// }
// consumepromiseFive()

async function getUserData(){
    try {
        const Data = await fetch('https://api.github.com/users/hiteshchoudhary')
    values = await Data.json()
    console.log(values)
    } catch (error) {
        console.log(error)
    }
}
getUserData()

// fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
// return response.json()
// }).then((Data)=>{
//     console.log(Data)
// })
// .catch((error)=>{
//     console.log(error)
// })


