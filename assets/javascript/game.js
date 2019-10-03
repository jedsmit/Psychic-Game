//set variables

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessesSoFar = "";
var secretLetter = "";
var userGuess = "";


//letter array

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//generates a secret letter

function generateLetter(array) {
    return array[Math.floor(Math.random() * array.length)];
};

//----------------main game------------------------------------------


secretLetter = generateLetter(letters);
console.log("secret: " + secretLetter);

//get user's guess
//runs 5 times
//compare it to the secret letter
// if true, increment wins, reset guesses left, so far, secret letter, and user guess
// if false, decrement guesses left, add users guess to guesses so far 
for (i = 0; i < 6; i++) {

    document.onkeyup = function (event) {
        userGuess = event.key.toLowerCase();
        console.log("user: " + userGuess);


        if (userGuess === secretLetter) {
            wins++;
            guessesLeft = 5;
            guessesSoFar = "";
            secretLetter = "";
        } else {
            guessesLeft--;
            guessesSoFar = guessesSoFar + " " + userGuess;
            console.log(guessesSoFar);
        };

        document.getElementById("wins").innerHTML = ("Wins: " + wins);
        document.getElementById("losses").innerHTML = ("Losses: " + losses);
        document.getElementById("guesses-left").innerHTML = ("Guesses left: " + guessesLeft);
        document.getElementById("guesses-so-far").innerHTML = ("Guesses so far: " + guessesSoFar);
    };
};
