let randamNumber=parseInt(Math.random()*100+1)

const userInput=document.querySelector('#GuessField')
const submit=document.querySelector('#submit')
const guessSlot=document.querySelector('.Guesses')
const remaining=document.querySelector('.LastResult')
const lowOrhigh=document.querySelector('.lowOrhigh')
const startover=document.querySelector('.resultparas')

const p = document.createElement('p')

let prevGuess =[]
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();// stops values to move on server on pageload
        const guess=parseInt(userInput.value);
        console.log(guess);
        ValidateGuess(guess);
    })
}

// chech empty or wrong values
function ValidateGuess(guess){
if(isNaN(guess)){
    alert('Please enter a valid number')
}else if(guess < 1){
    alert('Enter a number greater then 1')
}else if(guess > 100){
    alert('Enter a number less or equal to 100')
}else{
    prevGuess.push(guess)
    if(numGuess === 11){
        DisplayGuess(guess)
        DisplayMessage(`Game Over. Random number was ${randamNumber}`)
        endGame()
    }else{
        DisplayGuess(guess)
        CheckGuess(guess)
    }
}

}
// check conditions
function CheckGuess(guess){
    if(guess === randamNumber){
        DisplayMessage(`Congrats! You Guessed it Right`)
    }else if(guess < randamNumber){
        DisplayMessage(`Ohh! Number was tooo Low`)
    }else if(guess > randamNumber){
        DisplayMessage(`Ohh! Number was tooo High`)
    }
    }

// display correct guess / Higher or lower values
function DisplayGuess(guess){
    userInput.value =''
    guessSlot.innerHTML += `${guess}    `
    numGuess++;
    remaining.innerHTML =`${11-numGuess}`
    

}
//Display the Result
function DisplayMessage(message){
    lowOrhigh.innerHTML=`<h2>${message}</h2>`
}
// Quit Game
function endGame(){ 
    userInput.value =''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML =`<h2 id="NewGame">Start New Game</h2>`
    startover.appendChild(p)
    playGame = false
    NewGame()
}
// Start A new game
function NewGame(){
   const NewGame = document.querySelector('#NewGame')
   NewGame.addEventListener('click',function(){
    // reset all parameters values
    randamNumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess =1
    guessSlot.innerHTML =''
    remaining.innerHTML =`${10-numGuess}`
    userInput.removeAttribute('disabled')
    startover.removeChild(p)
    playGame=true

    
   })
}
