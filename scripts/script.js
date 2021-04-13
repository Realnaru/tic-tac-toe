"use strict"

let turn = "player1";//player1 always starts first
let markForPlayer1;//first player's mark
let markForPlayer2;//second player's mark
let gameField = [["","",""],["","",""],["","",""]]//array for storing current game state

//set mark for each player(player1 chooses first, then unchoosen mark goes to player2)
function setMarks(){
  //if both players don't have their marks yet and value of select element isn't undefined
  if (markForPlayer1 === undefined && markForPlayer2 === undefined &&
  document.getElementById('marks').value != ""){
    markForPlayer1 = document.getElementById('marks').value;//player1 takes choosen mark
    markForPlayer2 = (markForPlayer1 === "X") ? "O" : "X";//depending of the first player's choice, second player takes other mark
    document.getElementById('playerMark1').innerHTML += markForPlayer1;//show first players mark on the page
    document.getElementById('playerMark2').innerHTML += markForPlayer2;//show second player's mark on the page
    document.getElementById('turn').innerHTML += markForPlayer1;//show current turn on the page
    document.getElementById('turn').value = markForPlayer1;//set current turn value
  }
}

//if choosen place is free and player has mark then store the mark in the game state array
function placeMark(row,column){
  let mark = document.getElementById('turn').value;
  if(gameField[row][column] === "" && mark != undefined) {
    gameField[row][column] = mark;
  }
}

//change cuurent turn and show current turn on the page
function changeTurn(){
let mark = document.getElementById('turn').value;
if (mark != undefined){
document.getElementById('turn').innerHTML =  (mark === "X") ? "Current turn is: " + "O" : "Current turn is: " + "X";
document.getElementById('turn').value = (mark === "X") ? "O" : "X";
}
}

//placing mark on the page
function drawMark(str){
  let mark = document.getElementById('turn').value;//take mark from the current turn indicator on the page
  if (mark != undefined)//if the mark is not undefined
  document.getElementById(str).innerHTML = mark;//placce the mark to choosen location
}

//disabled clicked place on the game field
function disableButton(str) {
  let mark = document.getElementById('turn').value;
  if (mark != undefined) {
  document.getElementById(str).disabled = true;
}
}

//checking game field for rows or columns of diagonals with the same marks to find out the winner
//if there is any, then disable all buttons ot the game field to stop the game
//show button to start new game and return "true"
//if there isn't any then return "false"
function winChecker(gameField){
  if (gameField[0][0] === gameField[0][1] && gameField[0][1] === gameField[0][2] && gameField[0][0] != "" ) {
    document.getElementById('winner').innerHTML = gameField[0][0] + " wins!";
    disableAllbuttons();
    showButton("new_game");
    return true;
  }

    if (gameField[1][0] === gameField[1][1] && gameField[1][1]  === gameField[1][2] && gameField[1][0] != "") {
      document.getElementById('winner').innerHTML = gameField[1][0] + " wins!";
      disableAllbuttons();
      showButton("new_game");
      return true;
    }

    if (gameField[2][0] === gameField[2][1] && gameField[2][1] === gameField[2][2] && gameField[2][0] != "") {
      document.getElementById('winner').innerHTML = gameField[2][0] + " wins!";
      disableAllbuttons();
      showButton("new_game");
      return true;
   }
    if (gameField[0][0] === gameField[1][0] && gameField[1][0] === gameField[2][0] && gameField[0][0] != "") {
      document.getElementById('winner').innerHTML = gameField[0][0] + " wins!";
      disableAllbuttons();
      showButton("new_game");
      return true;
    }
    if (gameField[0][1] === gameField[1][1] && gameField[1][1] === gameField[2][1] && gameField[0][1] != "") {
      document.getElementById('winner').innerHTML = gameField[0][1] + " wins!";
      disableAllbuttons();
      showButton("new_game");
      return true;
   }
    if (gameField[0][2] === gameField[1][2] && gameField[1][2] === gameField[2][2] && gameField[0][2] != "") {
      document.getElementById('winner').innerHTML = gameField[0][2] + " wins!";
      disableAllbuttons();
      showButton("new_game");
      return true;
   }
    if (gameField[0][0] === gameField[1][1] && gameField[1][1] === gameField[2][2] && gameField[0][0] != "") {
      document.getElementById('winner').innerHTML = gameField[0][0] + " wins!";
      disableAllbuttons();
      showButton("new_game");
      return true;
   }
    if (gameField[0][2] === gameField[1][1] && gameField[1][1] === gameField[2][0] && gameField[0][2] != "") {
      document.getElementById('winner').innerHTML = gameField[0][2] + " wins!";
      disableAllbuttons();
      showButton("new_game");
      return true;
  }
  return false;
}

//choose all buttons on the page and disable them to stop the game
function disableAllbuttons(){
  let buttons = document.getElementsByTagName('button');
  for (let button of buttons) {
    button.disabled = true;
  }
}

//check if game field is full
//by  finding empty cells
function isFull(){
  for (let i = 0; i < gameField.length; i++){
    for (let j = 0; j < gameField[i].length; j++){
      if (gameField[i][j] === ""){
        return false;
      }
    }
  }
  return true;
}

//check for a draw
//if game field is full and there is no winner, then it's a draw
function drawChecker(){
  if (!winChecker(gameField) && isFull()){
  document.getElementById('winner').innerHTML = "Nobody wins! We have a draw(standoff)!";
  disableAllbuttons();
  showButton("new_game");
}
  }

//show needded button
  function showButton(str){
    let button = document.getElementById(str);
    button.hidden = false;
    button.enabled = true;
  }
