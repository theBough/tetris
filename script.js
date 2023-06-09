//this grabs the input box
var input = document.querySelector("input");
//this looks for what key is down and calls the function
//"isKeyDown()" whan a key is pressed/
input.addEventListener("keydown", isKeyDown)
var activeTetromino = []
var cubeArray = [4,5,14,15,"yellow","cube"];
var stickArray = [4,14,24,34,"blue","stick","vertical"];
var elArray = [4,14,24,25,"orange","el","vertical"];
var reverseElArray = [4,14,23,24,"cyan","reverseEl","vertical"];
var esArray = [4,5,13,14,"green","es","horizontal"];
var reverseEsArray = [4,5,15,16,"grey","reverseEs","horizontal"];
var teeArray = [5,14,15,16,"purple","tee","knobUp"]
var finishedArrary = []
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
 
  for(i=0 ; i<6 ; i++){
    activeTetromino[i] = reverseEsArray[i]
    console.log(activeTetromino[i])
  }
  placeTetromino()
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
  for(i=3 ; i> -1 ; i--){
    if(activeTetromino[i] + 10 >200){
      resolveStoppedTetromino();
    }
  }
  for(i=0 ; i < finishedArrary.length; i++){
    if(finishedArrary.includes(activeTetromino[3]+10)){
      resolveStoppedTetromino()
    }
  }
}
function resolveStoppedTetromino(){
  for(i=0 ; i<4 ; i++){
    finishedArrary.push(activeTetromino[i])
  }
  for(i=0 ; i<6 ; i++){
    activeTetromino[i] = cubeArray[i];
  }
  placeTetromino()
}
function rotateTetromino(){
 if(activeTetromino[5] == "stick"){
   rotateStick(activeTetromino)
 }else if(activeTetromino[5] == "el"){
   rotateEl(activeTetromino)
 }else if(activeTetromino[5] == "reverseEl"){
   rotateReverseEl(activeTetromino)
 }else if(activeTetromino[5] == "es"){
   rotateEs(activeTetromino)
 }else if(activeTetromino[5] == "reverseEs"){
    rotateReverseEs(activeTetromino)
 }else if(activeTetromino[5]== "tee"){
   rotateTee(activeTetromino)
 }
    
}
function rotateStick(){
   if(activeTetromino[6]=="vertical"){
    document.getElementById(activeTetromino[0]).style.backgroundColor = "black"
    activeTetromino[0] += 9
    document.getElementById(activeTetromino[0]).style.backgroundColor = activeTetromino[4]

   document.getElementById(activeTetromino[2]).style.backgroundColor = "black"
    activeTetromino[2] -= 9
    document.getElementById(activeTetromino[2]).style.backgroundColor = activeTetromino[4]

   document.getElementById(activeTetromino[3]).style.backgroundColor = "black"
    activeTetromino[3] -= 18
    document.getElementById(activeTetromino[3]).style.backgroundColor = activeTetromino[4]
    activeTetromino[6] = "horizontal"
  }else{
     document.getElementById(activeTetromino[0]).style.backgroundColor = "black"
    activeTetromino[0] -= 9
    document.getElementById(activeTetromino[0]).style.backgroundColor = activeTetromino[4]

     document.getElementById(activeTetromino[2]).style.backgroundColor = "black"
    activeTetromino[2] += 9
    document.getElementById(activeTetromino[2]).style.backgroundColor = activeTetromino[4]

   document.getElementById(activeTetromino[3]).style.backgroundColor = "black"
    activeTetromino[3] += 18
    document.getElementById(activeTetromino[3]).style.backgroundColor = activeTetromino[4]
    activeTetromino[6] = "vertical"
  }
}
function rotateEl(){
  
}
function rotateReverseEl(){
  
}
function  rotateEs() {
  
}
function  rotateReverseEs() {
  
}
function rotateTee(){
  
}
function off(){
  clearInterval(myGravity)
}
function on(){
  myGravity = setInterval(moveTetrominoDown, 500)
}
