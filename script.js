/*
Whole business in this page happens around "frame" datastore, which
is basically configuration and event log for the frame.
TBD: Configuration

Events: full event log should be very detailed to make it possible 
to extract all professional level metrics such as average shot time, 
long pot or safety success. Logging professional way is very cumbersome, 
therefore easy way to use without referee should be possible.
*/

/* Let's initialize frame object */
var frame = { "settings": 
{
"player1": "Player 1",
"player2": "Player 2"

}
       };

function Timer()
{
    var countdown = Date()
    document.getElementById("timer").textContent = countdown;
}

setInterval(Timer, 1000);

function startFrame()
{ 

    document.getElementById('Player1Score').textContent = "0";
    document.getElementById('Player2Score').textContent = "0";
    document.getElementById("startbutton").textContent = "End Frame";
}

function stopFrame()
{
    document.getElementById("startbutton").textContent = "Start Frame";
}

function startStopFrame()
{
 if (document.getElementById("startbutton").textContent == 'Start new frame') {
     startFrame
    }
  else
  {startFrame}
}


function EnterPlayer1Name(){
    document.getElementById("Player1Name").innerText =
     prompt("Please enter player's name", "Player 1");
}

function EnterPlayer2Name(){
    document.getElementById("Player2Name").innerText =
     prompt("Please enter player's name", "Player 2");
}