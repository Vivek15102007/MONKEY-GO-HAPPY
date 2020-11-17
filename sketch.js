
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var gameState=1;
var end=0;
var play=1;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
 obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(200,450,200,200);  
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.15;
   
  
  
  ground=createSprite(400,500,1200,20);
  ground.velocityX=-10
  ground.X=ground.width/2;
      
  
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  
score=0;
  
  
  
  
  

  
}


function draw() {
 background("green"); 
 
if(ground.x<0){ 
  ground.x=ground.width/2;
  }
  if(gameState===play){
     score=Math.round(frameCount/ getFrameRate())
     drawSprites();
    spawnObstacles();
  spawnFood();
     stroke("blue");
  textSize(20);
  fill("blue");
  text("Survival Time: "+ score, 200,100)
    
if((keyDown)("space")){monkey.velocityY=-10}
  monkey.velocityY=monkey.velocityY+0.8;
  
     
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
   
   
  }
    
    if(obstaclesGroup.isTouching(monkey)){
    gameState=end;
   
      
  }
    
    
  }
  
 if(gameState===end){
   bananaGroup.destroyEach();
   obstaclesGroup.destroyEach();
   bananaGroup.setVelocity=0;
   obstaclesGroup.setVelocity=0;
    stroke("red");
  textSize(30);
  fill("RED");
  text("GAME OVER", 200,300)
   
   
  
   if(keyDown("space")){
     gameState=play;
     
    reset();
    
     
   }
 }
  monkey.collide(ground);

 
  
}
function spawnFood(){
  if( frameCount%80===0)
  {
    

    var  banana=createSprite(600,300,200,200);
   banana.velocityX = -10;
   
   
   
    
       banana.addImage(bananaImage);
      
    
   
   banana.y=Math.round(random(100,200));
   
            
    
    banana.scale=0.2;
    banana.lifetime = 60;
   
   
    bananaGroup.add(banana);
  
    
    
    
    
    
  }
  
  
  
  
  
  
  
}

function spawnObstacles(){
  if( frameCount%300===0)
  {
    

    var  obstacle=createSprite(600,450,200,200);
   obstacle.velocityX = -10;
   
   
   
    
       obstacle.addImage(obstacleImage);
      
    
  
   
            
    
    obstacle.scale=0.25;
    obstacle.lifetime = 60;
   
   
    obstaclesGroup.add(obstacle);
  
    
    
    
    
    
  }
  
}
function reset(){
  score=0;
  frameCount=0;
  frameRate=0;
  

}

