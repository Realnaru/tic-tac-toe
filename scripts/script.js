"use strict"
let turn = "player1";
let markForPlayer1;
let markForPlayer2;
let gameField = [["","",""],["","",""],["","",""]]

function setMarks(){
  if (markForPlayer1 === undefined && markForPlayer2 === undefined &&
  document.getElementById('marks').value != ""){
    markForPlayer1 = document.getElementById('marks').value;
    markForPlayer2 = (markForPlayer1 === "X") ? "O" : "X";
    document.getElementById('playerMark1').innerHTML += markForPlayer1;
    document.getElementById('playerMark2').innerHTML += markForPlayer2;
    document.getElementById('turn').innerHTML += markForPlayer1;
    document.getElementById('turn').value = markForPlayer1;
  }
}
function placeMark(row,column){
  let mark = document.getElementById('turn').value;
  if(gameField[row][column] === "" && mark != undefined) {
    gameField[row][column] = mark;
  }
}
function changeTurn(){
let mark = document.getElementById('turn').value;
if (mark != undefined){
document.getElementById('turn').innerHTML =  (mark === "X") ? "Current turn is: " + "O" : "Current turn is: " + "X";
document.getElementById('turn').value = (mark === "X") ? "O" : "X";
}
}
function drawMark(str){
  let mark = document.getElementById('turn').value;
  if (mark != undefined)
  document.getElementById(str).innerHTML = mark;
}
function disableButton(str) {
  let mark = document.getElementById('turn').value;
  if (mark != undefined) {
  document.getElementById(str).disabled = true;
}
}
function winChecker(gameField){
  if (gameField[0][0] === gameField[0][1] && gameField[0][1] === gameField[0][2] && gameField[0][0] != "" ) {
    document.getElementById('winner').innerHTML = gameField[0][0] + " wins!";
    disableAllbuttons();
  }

    if (gameField[1][0] === gameField[1][1] && gameField[1][1]  === gameField[1][2] && gameField[1][0] != "") {
      document.getElementById('winner').innerHTML = gameField[1][0] + " wins!";
      disableAllbuttons();
      return true;
    }

    if (gameField[2][0] === gameField[2][1] && gameField[2][1] === gameField[2][2] && gameField[2][0] != "") {
      document.getElementById('winner').innerHTML = gameField[2][0] + " wins!";
      disableAllbuttons();
      return true;
   }
    if (gameField[0][0] === gameField[1][0] && gameField[1][0] === gameField[2][0] && gameField[0][0] != "") {
      document.getElementById('winner').innerHTML = gameField[0][0] + " wins!";
      disableAllbuttons();
      return true;
    }
    if (gameField[0][1] === gameField[1][1] && gameField[1][1] === gameField[2][1] && gameField[0][1] != "") {
      document.getElementById('winner').innerHTML = gameField[0][1] + " wins!";
      disableAllbuttons();
      return true;
   }
    if (gameField[0][2] === gameField[1][2] && gameField[1][2] === gameField[2][2] && gameField[0][2] != "") {
      document.getElementById('winner').innerHTML = gameField[0][2] + " wins!";
      disableAllbuttons();
      return true;
   }
    if (gameField[0][0] === gameField[1][1] && gameField[1][1] === gameField[2][2] && gameField[0][0] != "") {
      document.getElementById('winner').innerHTML = gameField[0][0] + " wins!";
      disableAllbuttons();
      return true;
   }
    if (gameField[0][2] === gameField[1][1] && gameField[1][1] === gameField[2][0] && gameField[0][2] != "") {
      document.getElementById('winner').innerHTML = gameField[0][2] + " wins!";
      disableAllbuttons();
      return true;
  }
  return false;
}
function disableAllbuttons(){
  let buttons = document.getElementsByTagName('button');
  for (let button of buttons) {
    button.disabled = true;
  }
}
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
function drawChecker(){
  if (!winChecker(gameField) && isFull()){
  document.getElementById('winner').innerHTML = "Nobody wins! We have a draw(standoff)!";
  disableAllbuttons();
}
  }
