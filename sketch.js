var still, fast

//BOUNCEOFF CODE

function setup() {
  createCanvas(800,400);
  still=createSprite(150, 300, 50, 50);
  fast=createSprite(650,70,50,50)
fast.velocityY=4
fast.velocityX=-4

still.velocityY=-4
still.velocityX=4

fast.debug=true
still.debug=true

}

function draw() {
  background(0);  
  

//console.log(fast.x - still.x)


bounceOff()


  drawSprites();
}
function bounceOff(){
  
  if(fast.x - still.x < still.width/2 + fast.width/2 &&
    still.x - fast.x < still.width/2 + fast.width/2 ){
   
     fast.velocityX = fast.velocityX * (-1)
     still.velocityX = still.velocityX * (-1) //3*(-1) = -3
     still.shapeColor="green" 
     fast.shapeColor="blue"
   }
    if(fast.y - still.y < still.height/2 + fast.height/2 &&
     still.y - fast.y < still.height/2 + fast.height/2){
   
       fast.velocityY = fast.velocityY * (-1)
       still.velocityY = still.velocityY * (-1)
       still.shapeColor="green" 
       fast.shapeColor="blue"
   
   }
}
