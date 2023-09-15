let randomNumber = parseInt(Math.random() * 100 + 1);

const sumbitBtn = document.querySelector("#submitButton");
const userInput = document.querySelector("#input");
const guessSlot = document.querySelector(".guesses");
const remainingGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".result-para");

const p = document.createElement("p");

let prevGuesses = [];
let numbGuess = 1; 
let playgame = true;

if(playgame){
    sumbitBtn.addEventListener("click", function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter Valid Guess Plz!");
    }else if(guess < 1){
        alert("Please Enter Number greater than 1 Plz!");
    }else if(guess > 100){
        alert("Please Enter Number less than 100 Plz!");
    }else{
        prevGuesses.push(guess);
        if(numbGuess === 11){
            cleanUpMessage(guess);
            displayMessage(`Game Over. Random Number Was ${randomNumber} `)
            endGame();
        }
        else{
            cleanUpMessage(guess);
            checkGuesses(guess);
        }
    }
}

function checkGuesses(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage("Number is TOO Low");
    }else if(guess > randomNumber){
        displayMessage("Number is TOO High");
    }
}
function cleanUpMessage(guess){
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess} `;
    numbGuess++;
    remainingGuesses.innerHTML = `${12 - numbGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value='';
    userInput.setAttribute("disabled","");
    p.classList.add("startover-button");
    p.innerHTML = `<h2 id="newGame">Start A New Game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    startGame();
}

function startGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' , function (e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        userInput.value='';
        prevGuesses=[];
        numbGuess=1;
        guessSlot.innerHTML='';
        remainingGuesses.innerHTML = `${12 - numbGuess}`
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playgame=true;
    })
}


