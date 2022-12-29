/*
Whole business in this page happens around "frame" object, which
is basically configuration and event log for the frame.
TBD: Configuration

*/

/* Let's initialize frame object */
var score1 = 0
var score2 = 0
var activeplayer = 1
var frame = []
/* move array should start with player identifier, either 1 or 2  */
var move = []

function ActivatePlayer(player) { /* 0 means change */
    if (player == 1) {activeplayer = 1}
    if (player == 2) {activeplayer = 2}
    if (player == 0) {
        if (activeplayer == 2) {activeplayer = 1}
        else if (activeplayer == 1) {activeplayer = 2}
    }
document.getElementById("Activeplayer").innerHTML= activeplayer
}

function Score(points){
    move = [activeplayer, points]
    frame.push(move)
    ReCalculate() 
    PostScores()   
}

function ReCalculate(){
    score1 = 0
    score2 = 0
    for (var i = 0; i < frame.length; i++) {
        if (frame[i][0] == 1){
            if (frame[i][1] < 0){ score2 = score2 - frame[i][1] }
            else score1 = score1 + frame[i][1]
        }
        if (frame[i][0] == 2){
            if (frame[i][1] < 0){ score1 = score1 - frame[i][1] }
            else score2 = score2 + frame[i][1]
        }
    }
}

function Undo() {
    frame.pop()
    ReCalculate() 
    PostScores()
}

function ResetScore(){
    score1 = 0
    score2 = 0
    PostScores()
};

function PostScores(){
    document.getElementById("Player1Score").innerHTML = score1
    document.getElementById("Player2Score").innerHTML = score2
 }