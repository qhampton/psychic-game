//call elements from html and set up as variables
var userGuessdiv = document.getElementById("userGuess");
var guessCountdiv = document.getElementById("guessCount");
var winScorediv = document.getElementById("winScore");
var lossScorediv = document.getElementById("lossScore");
var mainPicdiv = document.getElementById("mainPic");
var scoreBoard = document.getElementById("scoreBoard");
var titlediv = document.getElementById("title");

//set up variables using in js
var computerChoices = ["p", "s", "y", "c", "h", "i", ];
var guessCount = 5;
var winScore = 0;
var lossScore = 0;
var userLetterChoice = [];
var computerGuess = "";
var gameOver = false;

function turnReset() {
    userLetterChoice = [];
    guessCount = 5;
    computerGuess = "";
    mainPicdiv.setAttribute("src", "assets/images/abra.png");
    letter();
}

function letter() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

//document key up and dertimin which key is pressed
document.onkeyup = function (event) {
    var userLetter = event.key;
    //initial game start
    // if (!gameOver){
    //alerts you've made a guess of ""
    alert("You guessed " + userLetter + "!");
    userLetterChoice.push(userLetter);
    //randomize computer choices
    // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    console.log(userLetter);
    console.log(computerGuess);

    //if else condtions *rememder to increase scores by x and decrease guesses by y
    if ((userLetter === "p") || (userLetter === "s") || (userLetter === "y") || (userLetter === "c") || (userLetter === "h") || (userLetter === "i")) {
        //if guessed correct: alter you're psychic, show kadabra, increase winScore
        if (userLetter === computerGuess) {
            titlediv.textContent = "You're a psychic!- Keep going to evolve Abra."
            winScore++;
            mainPicdiv.setAttribute("src", "assets/images/abra.png");
            alert(" You got it- Try guessing a new letter!")
            turnReset();
        }

        //else if guessed incorrect: alter oh no..., show psyduck, decrease guessCounter
        else if (userLetter !== computerGuess) {
            titlediv.textContent = " Oh no! You gave Psyduck a headache. Be careful and try again.";
            mainPicdiv.setAttribute("src", "assets/images/psyduck.png");
            guessCount--;
            confirm(" Incorrect- You have " + guessCount + " guesses left!");
            console.log(mainPic);
        }

        //else if guessCounter is one: alert you've given psyduck confusion, alert he uses confusion
        if (guessCount == 1) {
            titlediv.textContent = "Uh-oh! Looks like Psyduck has become confused from trying too hard! Let's try one more time";
            mainPicdiv.setAttribute("src", "assets/images/psyduck-angry.png");
        }

        //if loss counter is 0 reset turn
        if (guessCount == 0) {
            lossScore++;
            titlediv.textContent = "Oh no! Looks like you're not psychic.";
            confirm("Play Again?");
            turnReset();
        }

        //if loss count is 10 alert you lose, show teamrocket 

        else if (lossScore == 10) {
            titlediv.textContent = "You loose! Looks like we're blasting off again!";
            mainPicdiv.setAttribute("src", "assets/images/team-rocket.jpg");
            // gameOver = true;
            confirm("Play Again?");
            gameOver();
        }
        //else if winScore is 5:kadabra evolution
        else if (winScore === 5) {
            titlediv.textContent = "Abra is now Kadabra - keep going to power up! Find a new letter!";
            mainPicdiv.setAttribute("src", "assets/images/kadabra.png");
            confirm("Play Again?");
            turnReset();
        }

        //if winScore is 10: alert you've won- your kadabra evolved into an alakazam, show alakazam
        if (winScore === 10) {
            alert("Congrats! You've become a Psychic Master!");
            alert("What's this?");
            alert("Your Kadabra has turned into an Alakazam!");
            mainPicdiv.setAttribute("src", "assets/images/alakazam.png");
            // gameOver = true;
            confirm("Play Again?");
            gameOver();
        }

        //print score to scoreboard 
        userGuessdiv.textContent = "Your guess was " + userLetterChoice;
        guessCountdiv.textContent = "You have " + guessCount + " guesses left.";
        winScorediv.textContent = "You have won " + winScore + " times.";
        lossScorediv.textContent = "You have lost " + lossScore + " times.";
    }
    // }
    // else if (gameOver){
    //     guessCount = 13;
    //     winScore = 0;
    //     lossScore = 0;
    //     gameOver=false;
    // }
};

letter();
console.log(letter);

function gameOver() {
    userLetterChoice = [];
    guessCount = 5;
    winScore = 0;
    lossScore = 0;
    computerGuess = "";
    mainPicdiv.setAttribute("src", "assets/images/abra.png");
    letter();
}
