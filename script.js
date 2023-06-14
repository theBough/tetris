//this grabs the input box

//this looks for what key is down and calls the function
//"isKeyDown()" whan a key is pressed/
document.addEventListener("keydown",isKeyDown)
var gameOn = true;

var activeTetromino = []
var cubeArray = [4, 5, 14, 15, "rgb(10,147,150", "cube"];
var stickArray = [4, 14, 24, 34, "rgb(148,210,189", "stick", "vertical"];
var elArray = [4, 14, 24, 25, "rgb(233,216,166)", "el", "one"];
var reverseElArray = [4, 14, 23, 24, "rgb(238,155,0)", "reverseEl", "one"];
var esArray = [4, 5, 13, 14, "rgb(202,103,2)", "es", "horizontal"];
var reverseEsArray = [4, 5, 15, 16, "rgb(187,62,3)", "reverseEs", "horizontal"];
var teeArray = [5, 14, 15, 16, "rgb(155,34,38)", "tee", "one"]
var newBlock = false;
var corbin = 0;
var finishedArray = []
var finishedRow = 0
function makeButtons() {
  for (var i = 0; i < 200; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btnClass");
    btn.setAttribute("id", i);
    document.getElementById("theGrid").appendChild(btn);
    //document.getElementById(i).textContent = i
  }//end For loop
  //makeCube()
  pickNewBlock();
}//end function makeButton 
function isKeyDown(e) {
  if (gameOn) {
    if (e.code == "ArrowLeft") {
      moveTetrominoLeft(activeTetromino);
    }
    if (e.code == "ArrowRight") {
      moveTetrominoRight(activeTetromino);
    }
    if (e.code == "ArrowUp") {
      rotateTetromino(activeTetromino)
    }
    if (e.code == "ArrowDown") {
      moveTetrominoDown(activeTetromino)
    }
  }//end if

}
function lineClear(){
  console.log("test")
  for(i = finishedRow ; i<200 ; i++){
    document.getElementById(i).style.backgroundColor = "rgb(0,95,115)"
  }
}
function isRowDone(){
  for(i=190 ; i< 200 ; i++){
    if(!(finishedArray.includes(i))){
      return false;
    }//end if
  }//end loop
  finishedRow = 190;
  return true;
}//end function
function isGameOver() {
  for (i = 0; i < 3; i++) {
    if (finishedArray.includes(activeTetromino[i])) {
      //game over.
      clearInterval(myGravity)
      gameOn = false;
    }
  }
}
function pickNewBlock() {
  var rndNum = Math.floor(Math.random() * 7);
  if (rndNum == 0) {
    for (i = 0; i < 7; i++) {
      activeTetromino[i] = elArray[i]
    }
  } else if (rndNum == 1) {
    for (i = 0; i < 7; i++) {
      activeTetromino[i] = reverseElArray[i]
    }
  } else if (rndNum == 2) {
    for (i = 0; i < 7; i++) {
      activeTetromino[i] = teeArray[i]
    }
  } else if (rndNum == 3) {
    for (i = 0; i < 7; i++) {
      activeTetromino[i] = cubeArray[i]
    }
  } else if (rndNum == 4) {
    for (i = 0; i < 7; i++) {
      activeTetromino[i] = stickArray[i]
    }
  } else if (rndNum == 5) {
    for (i = 0; i < 7; i++) {
      activeTetromino[i] = esArray[i]
    }
  } else if (rndNum == 6) {
    for (i = 0; i < 7; i++) {
      activeTetromino[i] = reverseEsArray[i]
    }
  }
  placeTetromino()
  isGameOver()
}
function gravity() {
  moveTetrominoDown()
}
function placeTetromino() {
  for (i = 0; i < 4; i++) {
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }
}
function moveTetrominoLeft() {
  var canMove = true;
  //look if the piece is on the edge
  for (i = 0; i < 4; i++) {
    if (activeTetromino[i] % 10 == 0) {
      canMove = false
    }
    for (j = 0; j < 4; j++) {
      if (finishedArray.includes(activeTetromino[j] - 1)) {
        canMove = false;
      }
    }
  }
  if (canMove) {
    for (i = 0; i < 4; i++) {
      document.getElementById(activeTetromino[i]).style.backgroundColor = backColour
      activeTetromino[i] -= 1;
      document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
    }
  }

}
function moveTetrominoRight() {
  var canMove = true;
  //look if the piece is on the edge
  for (i = 0; i < 4; i++) {
    if (activeTetromino[i] % 10 == 9) {
      canMove = false
    }
    for (j = 0; j < 4; j++) {
      if (finishedArray.includes(activeTetromino[j] + 1)) {
        canMove = false;
      }
    }
  }
  if (canMove) {
    for (i = 3; i > -1; i--) {
      document.getElementById(activeTetromino[i]).style.backgroundColor = backColour
      activeTetromino[i] += 1;
      document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
    }

  }

}
function moveTetrominoDown() {
  //backward through the array
  //Turn Black
  //add 10
  //change to Tetromino Color

  for (i = 3; i > -1; i--) {
    document.getElementById(activeTetromino[i]).style.backgroundColor = backColour
    activeTetromino[i] += 10
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }
  for (i = 3; i > -1; i--) {
    if ((activeTetromino[i] + 10 > 200)) {
      newBlock = true;
    }
  }

  for (i = 0; i < 4; i++) {
    if (finishedArray.includes(activeTetromino[i] + 10)) {
      newBlock = true;
    }
  }

  if (newBlock) {
    for (i = 0; i < 4; i++) {
      finishedArray.push(activeTetromino[i])
    }
    if(isRowDone()){
      
      lineClear();
    }
    newBlock = false
    pickNewBlock()
  }
}//end function
function off() {
  clearInterval(myGravity)
}
function on() {
  myGravity = setInterval(gravity, 400);
}
