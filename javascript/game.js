

//Global Variables
var gameObject = [
    "sundering",
    "eriador",
    "rohan",
    "mordor",
]
var currentWord = ""; //Current word the computer picks
var userGuess = ""; //Letters that the person guesses
var isInWord = []; //Array for letters in word
var blanketSpace = []; //Array for the blank spaces
var blanks = 0;
var wins = 0;
var loses = 0;
var lives = 10;
var wrongLetter = [];



//Functions go here 

// Game start function 

function gameStart() {
    document.getElementById("lives").innerHTML = lives;
    currentWord = gameObject[Math.floor(Math.random() * gameObject.length)];
    isInWord = currentWord.split("");
    blanks = isInWord.length;

    // Reset 
    lives = 10;
    wrongLetter = [];
    blanketSpace = [];

    for (var i = 0; i < blanks; i++) {
        
        blanketSpace.push("_");
    }

    document.getElementById("currentWord").innerHTML = blanketSpace.join(" ");
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;
    //Testing and Debugging
    console.log(isInWord);
    console.log(currentWord);
    console.log(blanks);
    console.log(blanketSpace);
    console.log(wins);


}
function checkLetter(letter) {
    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (currentWord[i] == letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {

        for (var i = 0; i < blanks; i++) {
            if (currentWord[i] == letter) {
                blanketSpace[i] = letter;
            }
        }
    }
    // Letter wasn't found
    else {
        wrongLetter.push(letter);
        lives--
    }
    console.log(blanketSpace);
}

function roundComplete() {
    console.log("Win count: " + wins + " | Loss Count: " + loses + " | Guesses Left " + lives);

    document.getElementById("lives").innerHTML = lives;
    document.getElementById("currentWord").innerHTML = blanketSpace.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetter.join(" ");

    if (isInWord.toString() == blanketSpace.toString()) {
        wins++;
        alert("You Won!");

        document.getElementById("wins").innerHTML = wins;
        gameStart();
    }
    else if (lives == 0) {
        loses++;
        alert("You lost!");

        document.getElementById("loses").innerHTML = loses;
        gameStart();
    }
}


// main process here 

gameStart();




//Register Keyclicks

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(letterGuessed);
   roundComplete();

    //Testing/Debugging
    console.log(letterGuessed);
}
 
