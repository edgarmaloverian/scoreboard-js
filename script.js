/*
Whole business in this page happens around "frame" object, which
is basically configuration and event log for the frame.
TBD: Configuration

*/

/* Let's initialize frame object */
var score1 = 0
var score2 = 2
var frame = []
/* move array should start with player identifier, either 1 or 2  */
var move = []

function ResetScore(){
    score1 = 0
    score2 = 0
    PostScores()
};

function PostScores(){
    document.getElementById("Player1Score").innerHTML = score1
    document.getElementById("Player2Score").innerHTML = score2
 }