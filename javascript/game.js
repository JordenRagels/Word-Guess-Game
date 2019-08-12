//Global Variables
var answerLocation = document.getElementById("test");
var currentWord = " ";
var userGuess = "";
var isInWord = false;

var gameObject = {
    sunderingWord: "sundering",
    eriadorWord: "eriador",
    rohanWord: "rohan",
    mordorWord: "mordor",
}


//every time you click the rohan box this will fire.
function nameFunction() {
    answerLocation.innerHTML = "";
    document.getElementById("wrongAnswers").innerHTML = "";
    currentWord = gameObject.sunderingWord;
    for (x = 0; x < gameObject.sunderingWord.length; x++) {
    answerLocation.innerHTML += "<span><strong>&nbsp;_&nbsp;</strong></span>";
}
}
function nameFunction2(){
    answerLocation.innerHTML = "";
    document.getElementById("wrongAnswers").innerHTML = "";
    currentWord = gameObject.eriadorWord;
    for (x = 0; x < gameObject.eriadorWord.length; x++) {
        answerLocation.innerHTML += "<span><strong>&nbsp;_&nbsp;</strong></span>";
    }
}
function nameFunction3(){
    answerLocation.innerHTML = "";
    document.getElementById("wrongAnswers").innerHTML = "";
    currentWord = gameObject.rohanWord;
    for (x = 0; x < gameObject.rohanWord.length; x++) {
        answerLocation.innerHTML += "<span><strong>&nbsp;_&nbsp;</strong></span>";
    }
}
function nameFunction4() {
    answerLocation.innerHTML = "";
    document.getElementById("wrongAnswers").innerHTML = "";
    currentWord = gameObject.mordorWord;
    for (x = 0; x < gameObject.mordorWord.length; x++) {
        answerLocation.innerHTML += "<span><strong>&nbsp;_&nbsp;</strong></span>";
    }
}



document.onkeyup = function () {
    userGuess = event.key;
    console.log(currentWord);
    for (i = 0; i < currentWord.length; i++) {
        if (userGuess == currentWord[i]) {
            isInWord = true;
            console.log("You got this!")
        } else if (userGuess != currentWord[i]) {
            isInWord == false;
            console.log("Sorry you missed")
        }
    }

    if (isInWord === true) {
        console.log("It's in the word!");
        isInWord = false;
    } else if (isInWord === false){
        console.log("fired");
        document.getElementById("wrongAnswers").innerHTML += userGuess;
    }

}









