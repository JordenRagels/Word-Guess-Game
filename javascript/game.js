//Global Variables
var answerLocation = document.getElementById("test");

var gameObject = {
    sunderingWord: "sundering",
    eriadorWord: "eriador",
    rohanWord: "rohan",
    mordorWord: "mordor",
}

for (x = 0; x < gameObject.sunderingWord.length; x++){
    answerLocation.innerHTML += "<span><strong>&nbsp;_&nbsp;</strong></span>";
}
