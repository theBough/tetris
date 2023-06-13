var backColour = "black"
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
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = backColour
  }
  if(activeTetromino[6]=="vertical"){
     activeTetromino[0] += 8;
    activeTetromino[1] -= 1;
    activeTetromino[2] -= 10;
    activeTetromino[3] -= 19;
    activeTetromino[6] = "horizontal"
  }else{
     activeTetromino[0] -= 8;
    activeTetromino[1] += 1;
    activeTetromino[2] += 10;
    activeTetromino[3] += 19;
    activeTetromino[6] = "vertical"
  }
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }  
}
function rotateEl(){
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = backColour
  }
  if(activeTetromino[6]=="one"){
     activeTetromino[0] += 1;
    activeTetromino[1] -= 1;
    activeTetromino[2] -= 10;
    activeTetromino[3] -= 10;
    activeTetromino[6] = "two"
  }else if(activeTetromino[6] == "two"){
     activeTetromino[0] -= 2;
    activeTetromino[1] -= 9;
    //activeTetromino[2] -= 10;
    activeTetromino[3] += 9;
    activeTetromino[6] = "three"
  }else if(activeTetromino[6] == "three"){
     activeTetromino[0] += 10;
    activeTetromino[1] += 10;
    activeTetromino[2] += 1;
    activeTetromino[3] -= 1;
    activeTetromino[6] = "four"
  }else{
     activeTetromino[0] -= 9;
    //activeTetromino[1] += 10;
    activeTetromino[2] += 9;
    activeTetromino[3] += 2;
    activeTetromino[6] = "one"
  }
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }  
}
function rotateReverseEl(){
   for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = backColour
  }
  if(activeTetromino[6]=="one"){
     activeTetromino[0] += 9;
    //activeTetromino[1] -= 1;
    activeTetromino[2] -= 8;
    activeTetromino[3] += 1;
    activeTetromino[6] = "two"
  }else if(activeTetromino[6] == "two"){
     activeTetromino[0] -= 9;
    activeTetromino[1] -= 9;
    activeTetromino[2] -= 1;
    activeTetromino[3] -= 1;
    activeTetromino[6] = "three"
  }else if(activeTetromino[6] == "three"){
     activeTetromino[0] -= 1;
    activeTetromino[1] += 8;
    //activeTetromino[2] += 1;
    activeTetromino[3] -= 9;
    activeTetromino[6] = "four"
  }else{
     activeTetromino[0] += 1;
    activeTetromino[1] += 1;
    activeTetromino[2] += 9;
    activeTetromino[3] += 9;
    activeTetromino[6] = "one"
  }
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }  
}
function  rotateEs() {
 for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = backColour
  }
  if(activeTetromino[6]=="horizontal"){
     activeTetromino[1] += 9;
    activeTetromino[2] += 2;
    activeTetromino[3] += 11;
    activeTetromino[6] = "vert"
  }else{
    activeTetromino[1] -= 9;
    activeTetromino[2] -= 2;
    activeTetromino[3] -= 11;
    activeTetromino[6] = "horizontal"
  }
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }  
}
function  rotateReverseEs() {
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = backColour
  }
  if(activeTetromino[6]=="horizontal"){
    activeTetromino[0] += 1;
    activeTetromino[1] += 9;
    //activeTetromino[2] += 2;
    activeTetromino[3] += 8;
    activeTetromino[6] = "vert"
  }else{
     activeTetromino[0] -= 1;
    activeTetromino[1] -= 9;
    //activeTetromino[2] += 2;
    activeTetromino[3] -= 8;
    activeTetromino[6] = "horizontal"
  }
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }  
}
function rotateTee(){
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = backColour
  }
  if(activeTetromino[6]=="one"){
     //activeTetromino[0] += 9;
    //activeTetromino[1] -= 1;
    //activeTetromino[2] -= 8;
    activeTetromino[3] += 9;
    activeTetromino[6] = "two"
  }else if(activeTetromino[6] == "two"){
     activeTetromino[0] += 9;
    activeTetromino[1] += 1;
    activeTetromino[2] += 1;
    //activeTetromino[3] -= 1;
    activeTetromino[6] = "three"
  }else if(activeTetromino[6] == "three"){
     activeTetromino[0] -= 9;
    //activeTetromino[1] += 8;
    //activeTetromino[2] += 1;
    //activeTetromino[3] -= 9;
    activeTetromino[6] = "four"
  }else{
     //activeTetromino[0] += 1;
    activeTetromino[1] -= 1;
    activeTetromino[2] -= 1;
    activeTetromino[3] -= 9;
    activeTetromino[6] = "one"
  }
  for(i=0 ; i<4 ; i++ ){
    document.getElementById(activeTetromino[i]).style.backgroundColor = activeTetromino[4]
  }  
}
