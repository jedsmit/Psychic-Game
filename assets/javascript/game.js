//set variables

var wins = 0;
var losses = 0;
var guessesLeft = 7;
var guessesSoFar = "";
var secretLetter = "";
var userGuess = "";


//letter array

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//generates a secret letter

function generateLetter(array) {
    return array[Math.floor(Math.random() * array.length)];
};

//updates stats

function updateStats() {
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    document.getElementById("losses").innerHTML = ("Losses: " + losses);
    document.getElementById("guesses-left").innerHTML = ("Guesses left: " + guessesLeft);
    document.getElementById("guesses-so-far").innerHTML = ("Guesses so far: " + guessesSoFar);
};
//----------------main game function start------------------------------------------
function game() {
    updateStats();
    //get secret letter
    secretLetter = generateLetter(letters);
    console.log("secret: " + secretLetter);
    //get user's guess
    document.onkeyup = function (event) {
        userGuess = event.key.toLowerCase();
        console.log("user: " + userGuess);
        //------------------compare guesses-------------------
        //if not correct: decrement guesses left, update stats
        if (userGuess != secretLetter) {
            guessesLeft--;
            guessesSoFar = guessesSoFar + " " + userGuess;
            updateStats();
            //if not correct *and* no guesses left: increment losses, reset guesses, update stats,     //restart game         
            if (guessesLeft === 0) {
                guessesLeft = 7;
                guessesSoFar = "";
                secretLetter = "";
                losses++;
                updateStats();
                game();
            };
            //if correct: increment wins, reset guesses, update stats, restart game            
        } else {
            wins++;
            guessesLeft = 7;
            guessesSoFar = "";
            secretLetter = "";
            updateStats();
            game();
        };

    };
};
//----------------main game function end---------------
// call game function
game();