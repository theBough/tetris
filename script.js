//this grabs the input box
var input = document.querySelector("input");
//this looks for what key is down and calls the function
//"isKeyDown()" whan a key is pressed/
input.addEventListener("keydown", isKeyDown)
var activeTetromino = []
var cubeArray = [4,5,14,15,"yellow","cube"];
var stickArray = [4,14,24,34,"blue","stick","vertical"];
var elArray = [4,14,24,25,"orange","el","one"];
var reverseElArray = [4,14,23,24,"cyan","reverseEl","one"];
var esArray = [4,5,13,14,"green","es","horizontal"];
var reverseEsArray = [4,5,15,16,"grey","reverseEs","horizontal"];
var teeArray = [5,14,15,16,"purple","tee","one"]
var newBlock = false;
var corbin = 0;
var finishedArray = []
function makeButtons() {
  for (var i = 0; i < 200; i++) {
      var btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("class", "btnClass");
      btn.setAttribute("id", i);
      document.getElementById("theGrid").appendChild(btn);
      document.getElementById(i).textContent = i
  }//end For loop
  //makeCube()
  for(i=0 ; i < 7 ; i++){
     activeTetromino[i] = teeArray[i]
  }
 
  placeTetromino()
   console.log(activeTetromino)
}//end function makeButton 
function isKeyDown(e){
  if(e.code == "ArrowLeft"){
   moveTetrominoLeft(activeTetromino);
  }
  if(e.code == "ArrowRight"){
   moveTetrominoRight(activeTetromino);
  }
  if(e.code == "ArrowUp"){
    rotateTetromino(activeTetromino)
  }
  if(e.code == "ArrowDown"){
    moveTetrominoDown(activeTetromino)
  }
}

function gravity(){
  moveTetrominoDown()
}
function placeTetromino(){
  for(i=0; i <4; i++){
      document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
    }
}
function moveTetrominoLeft(){
  for(i=0; i <4; i++){
      document.getElementById(activeTetromino[i]).style.backgroundColor = "black"
      activeTetromino[i] -= 1;
      document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
    }
}
function moveTetrominoRight(){
  for(i=3; i >-1; i--){
      document.getElementById(activeTetromino[i]).style.backgroundColor = "black"
      activeTetromino[i] += 1;
      document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
    }
}
function moveTetrominoDown(){
  //backward through the array
  //Turn Black
  //add 10
  //change to Tetromino Color
  
  for(i=3 ; i>-1 ; i--){
    document.getElementById(activeTetromino[i]).style.backgroundColor = "black"
    activeTetromino[i] += 10
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }
  if((activeTetromino[3]+10 > 200)){
     newBlock = true;
  }
  for(i=0 ; i < finishedArray.length; i++){
    if(finishedArray.includes(activeTetromino[3]+10)){
      newBlock = true;
    }
  }
 
  if(newBlock){
    for(i = 0; i<4 ; i++){
      finishedArray.push(activeTetromino[i])
    }
    console.log(finishedArray)
    if(corbin == 0){
      for(i=0 ; i < 6 ; i++){
          activeTetromino[i] = elArray[i]
        }
      corbin += 1
    }else{
       for(i=0 ; i < 6 ; i++){
          activeTetromino[i] = reverseElArray[i]
        }
    }
    
    placeTetromino(activeTetromino)
    newBlock = false
  }
}//end function

function off(){
  clearInterval(myGravity)
}
function on(){
  myGravity = setInterval(gravity,800);
}
