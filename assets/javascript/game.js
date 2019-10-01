//set variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = "";


//generate a random letter

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

secretLetter = letters[Math.floor((Math.random() * 20) + 7)];

function compare(userGuess, secretLetter) {
    if (userGuess === secretLetter) {
        wins = wins++;
        guessesLeft = 10;
        guessesSoFar = "";
    } else if (userGuess != secretLetter) {
        guessesLeft = guessesLeft--;

        if (guessesLeft > 0) {
            guessesSoFar = guessesSoFar + userGuess;
        } else {
            losses = losses--;
        };
    }
};


console.log(secretLetter);

//get user's guess

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    console.log(userGuess);
}
//compare guesses and increment variables accordingly




console.log(wins);
console.log(losses);
console.log(guessesLeft);
console.log(guessesSoFar);



//compare user's guess with random letter
//allow 10 guesses that decrease with each wrong guess
//print letters guessed to the screen 
