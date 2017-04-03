
var player1 = 0;
var player2 = 0;
var faceoffWinner = 0;
var teams = [];
var team1 = JSON.parse(localStorage.getItem("teams[0]"));
var team2 = JSON.parse(localStorage.getItem("teams[1]"));
var enterTeams = document.querySelector("#enterTeams");
var enterTeamsModal = document.querySelector("#enterTeamsModal");
var teamsSubmit = document.querySelector("#teamsSubmit");
var faceoff = document.querySelector("#faceoff");
var faceoffModal = document.querySelector("#faceoffModal")
var faceoffPlayers = document.querySelector("#faceoffPlayers");
var faceoffWinnerModal = document.querySelector("#faceoffWinnerModal");
var faceOffForm = document.querySelector("#faceOffForm");
var player1Display = document.querySelector("#player1Wins");
var player2Display = document.querySelector("#player2Wins");
var close = document.getElementsByClassName("close");
var square = document.querySelectorAll(".square");
var homeTeam = document.querySelectorAll(".homeTeam");
var awayTeam = document.querySelectorAll(".awayTeam");
var tickerUl = document.querySelector("#ticker");
var penaltyAgainst;
var penaltyList;
var penaltyTime;

for (var i = 0; i < square.length; i++){
  square[i].addEventListener("click", function(){
    for (var j = 0; j < homeTeam.length; j++){
      homeTeam[j].textContent = team1;
    }
    for (var k = 0; k < awayTeam.length; k++){
      awayTeam[k].textContent = team2;
    }
  })
}

function appendLi(message){
  var li = document.createElement("li");
  var time = new Date();
  // var currentTime = time.getHours() + ":" + time.getMinutes();
  var currentTime = time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
  li.appendChild(document.createTextNode(currentTime + message));
  tickerUl.appendChild(li);
}

enterTeams.addEventListener("click", function(){
  enterTeamsModal.style.display = "block";
})

teamsSubmit.addEventListener("click", function(){
  teams[0] = document.querySelector("#team1").value;
  teams[1] = document.querySelector("#team2").value;
  console.log(teams[0] + " " + teams[1]);
  localStorage.setItem("teams[0]", JSON.stringify(teams[0]));
  localStorage.setItem("teams[1]", JSON.stringify(teams[1]));
  enterTeamsModal.style.display = "none";
})

// When the user clicks on close (x), close the modal
for (var i = 0; i < close.length; i++){
  close[i].addEventListener("click", function(){
    faceoffModal.style.display = "none";
    faceoffWinnerModal.style.display = "none";
    groundBallModal.style.display = "none";
    assistModal.style.display = "none";
    shotModal.style.display = "none";
    penaltyModal.style.display = "none";
    goalieModal.style.display = "none";
    enterTeamsModal.style.display = "none";
  })
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === faceoffModal) {
        faceoffModal.style.display = "none";
    }
}

//Faceoff
faceoff.addEventListener("click", function(){
  document.querySelector("#player1").placeholder = team1;
  document.querySelector("#player2").placeholder = team2;
  faceoffModal.style.display = "block";
})

faceoffPlayers.addEventListener("click", function(){
  faceoffModal.style.display = "none";
  player1 = document.querySelector("#player1").value;
  player2 = document.querySelector("#player2").value;

  faceoffWinnerModal.style.display = "block";
  player1Display.textContent = player1;
  player2Display.textContent = player2;
  //document.querySelector("#faceOffForm").reset();
})

player1Display.addEventListener("click", function(){
  faceoffWinner = player1;
  faceoffWinnerModal.style.display = "none";
  // alert(player1 + " has won the faceoff");
  appendLi(" | " + player1 + " of " + team1 + " has won the faceoff");
})

player2Display.addEventListener("click", function(){
  faceoffWinner = player2;
  //localStorage.setItem(player1, faceoffs++);
  faceoffWinnerModal.style.display = "none";
  // alert(player2 + " has won the faceoff");
  appendLi(" | " + player2 + " of " + team2 + " has won the faceoff");
  // + faceoffs + " faceoffs.");

})

//Ground Ball
var groundBall = document.querySelector("#groundBall");
var groundBallModal = document.querySelector("#groundBallModal");
//var groundBallWins = document.querySelector("#groundBallWins");
var groundBallWinner = 0;
var groundBallWinTeam = "";
var groundHome = document.querySelector("#groundHome");
var groundAway = document.querySelector("#groundAway");

groundBall.addEventListener("click", function(){
  groundBallModal.style.display = "block";
})

groundHome.addEventListener("click", function(){
  groundBallWinTeam = team1;
})

groundAway.addEventListener("click", function(){
  groundBallWinTeam = team2;
})

groundBallWins.addEventListener("click", function(){
  groundBallWinner = document.querySelector("#groundBallWinner").value;
  groundBallModal.style.display = "none";
  // alert(groundBallWinner + " of " + groundBallWinTeam + " got the Ground Ball");
  appendLi(" |  " + groundBallWinner + " of " + groundBallWinTeam + " got the Ground Ball");
})

//Assist
var assist = document.querySelector("#assist");
var assistModal = document.querySelector("#assistModal");
//var assistSubmit = document.querySelector("#assistSubmit");
var scorePlayer = 0;
var assistPlayer = 0;
var scoreHome = document.querySelector("#scoreHome");
var scoreAway = document.querySelector("#scoreAway");

assist.addEventListener("click", function(){
  assistModal.style.display = "block";
})

scoreHome.addEventListener("click", function(){
  scorePlayer = document.querySelector("#scorePlayer").value;
  assistPlayer = document.querySelector("#assistPlayer").value;
  assistModal.style.display = "none";
  // alert(team1 + " scores! " + scorePlayer + " scored and " + assistPlayer + " assisted!");
  appendLi(" |  " + team1 + " scores! " + scorePlayer + " scored and " + assistPlayer + " assisted!");
})

scoreAway.addEventListener("click", function(){
  scorePlayer = document.querySelector("#scorePlayer").value;
  assistPlayer = document.querySelector("#assistPlayer").value;
  assistModal.style.display = "none";
  // alert(team2 + " scores! " + scorePlayer + " scored and " + assistPlayer + " assisted!");
  appendLi(" |  " + team2 + " scores! " + scorePlayer + " scored and " + assistPlayer + " assisted!");
})

//Shot
var shot = document.querySelector("#shot");
var shotModal = document.querySelector("#shotModal");
//var shotPlayer = document.querySelector("#shotPlayer");
var shotTaker = document.querySelector("#shotTaker");
var shotHome = document.querySelector("#shotHome");
var shotAway = document.querySelector("#shotAway");

shot.addEventListener("click", function(){
  shotModal.style.display = "block";
})

shotHome.addEventListener("click", function(){
  shotTaker = document.querySelector("#shotTaker").value;
  shotModal.style.display = "none";
  // alert(shotTaker + " took a shot for " + team1);
  appendLi(" |  " + shotTaker + " took a shot for " + team1);
})

shotAway.addEventListener("click", function(){
  shotTaker = document.querySelector("#shotTaker").value;
  shotModal.style.display = "none";
  // alert(shotTaker + " took a shot for " + team2);
  appendLi(" |  " + shotTaker + " took a shot for " + team2);
})

//Penalty
var penalty = document.querySelector("#penalty");
penaltyAgainst = document.querySelector("#penaltyAgainst");
penaltyList = document.querySelector("#penaltyList");
penaltyTime = document.querySelector("#penaltyTime");
var penaltySubmit = document.querySelector("#penaltySubmit");
var penaltyForm = document.querySelector("#penaltyForm");
var penaltyHome = document.querySelector("#penaltyHome");
var penaltyAway = document.querySelector("#penaltyAway");


penalty.addEventListener("click", function(){
  penaltyModal.style.display = "block";
})

penaltyHome.addEventListener("click", function(){
  penaltyPlayer = penaltyAgainst.value;
  penaltyText = penaltyList.value;
  penaltyDuration = penaltyTime.value;
  penaltyModal.style.display = "none";
  // alert("Player " + penaltyAgainst + " of " + team1 + " committed a " + penaltyTime + " penalty for " + penaltyList);
  appendLi(" | Player " + penaltyPlayer + " of " + team1 + " committed a " + penaltyDuration + " penalty for " + penaltyText);
  penaltyForm.reset();
})

penaltyAway.addEventListener("click", function(){
  penaltyAgainst = penaltyAgainst.value;
  penaltyList = penaltyList.value;
  penaltyTime = penaltyTime.value;
  penaltyModal.style.display = "none";
  // alert("Player " + penaltyAgainst + " of " + team2 + " committed a " + penaltyTime + " penalty for " + penaltyList);
  appendLi(" | Player " + penaltyPlayer + " of " + team2 + " committed a " + penaltyDuration + " penalty for " + penaltyText)
  penaltyForm.reset();
})

//Golie Save
var goalieSave = document.querySelector("#goalieSave");
var goalieModal = document.querySelector("#goalieModal");
//var goaliePlayer = document.querySelector("#goaliePlayer");
var goalieTaker = document.querySelector("#goalieTaker");
var saveHome = document.querySelector("#saveHome");
var saveAway = document.querySelector("#saveAway");

goalieSave.addEventListener("click", function(){
  goalieModal.style.display = "block";
})

saveHome.addEventListener("click", function(){
  goalieTaker = document.querySelector("#goalieTaker").value;
  goalieModal.style.display = "none";
  // alert(goalieTaker + " of " + team1 + " saved the shot!");
  appendLi(" | Goalie " + goalieTaker + " of " + team1 + " saved the shot!");
})

saveAway.addEventListener("click", function(){
  goalieTaker = document.querySelector("#goalieTaker").value;
  goalieModal.style.display = "none";
  // alert(goalieTaker + " of " + team2 + " saved the shot!");
  appendLi(" | Goalie " + goalieTaker + " of " + team2 + " saved the shot!");
})
