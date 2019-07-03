//call elements from html and set up as variables
var userGuessdiv = document.getElementById("userGuess");
var guessCountdiv = document.getElementById("guessCount");
var userGuessdiv = document.getElementById("userGuess");
var winScorediv = document.getElementById("winScore");
var lossScorediv = document.getElementById("lossScore");

//set up variables using in js
var computerChoices = ["a", "e", "i", "o", "u", "y",]
var guessCount = 13;
var winScore = 0;
var lossScore = 0;

//document key up and dertimin which key is pressed
document.onkeyup = function (event) {
    var userGuess = event.key;

 //alerts you've made a guess of ""
alert("You guessed " + userGuess + "!")

//randomize computer choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//if else condtions *rememder to increase scores by x and decrease guesses by y
if ((userGuess === "a") || (userGuess === "e") || (userGuess === "i") || (userGuess === "o") || (userGuess === "u") || (userGuess === "y")) {
     //if guessed correct: alter you're psychic, show kadabra, increase winScore
    if (userGuess === computerGuess) {
        alert("You're a psychic!");
        winScore++;
    }

        //else if guessed incorrect: alter oh no..., show psyduck, decrease guessCounter
        else if (userGuess !== computerGuess) {
            alert("Incorrect!");
            alert("Oh no! You gave Psyduck a headache. Be careful and try again.");
            lossScore++;
            guessCount--;
            alert("You have " + guessCount + " guesses left!");
        }

        //else if guessCounter is zero: alert you've given psyduck confusion, alert he uses confusion, alert you lose, show teamrocket 
        if (guessCount == 0) {
            alert("Uh-oh! Looks like Psyduck has become confused from trying too hard - watch out!");
            alert("Looks like we're blasting off again!");
        }

        //else if winScore is 5:kadabra evolution
        else if (winScore === 5) {
            alert("Abra is now Kadabra - keep going to power up!");
        }

        //if winScore is 10: alert you've won- your kadabra evolved into an alakazam, show alakazam
        if (winScore === 10) {
            alert("Congrats! You've become a Psychic Master!");
            alert("What's this?");
            alert("Your Kadabra has turned into an Alakazam!");
        }

//print score to scoreboard 
userGuessdiv.textContent = "You're guess was " + userGuess;
guessCountdiv.textContent = "You have " + guessCount + " guesses left.";
winScorediv.textContent = "You have won " + winScore + " times.";
lossScorediv.textContent = "You have lost " + lossScore + " times.";
}
};
        //reset button- reset score without the whole page
        //reset game score bored to zeros
