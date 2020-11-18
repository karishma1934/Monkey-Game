
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,invisibleground ;
var ground;
var survivaltime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  

    
  monkey = createSprite(28,410,20,40);
  monkey.addAnimation("animates",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,450,600,10);
  ground.velocityX=-4;
  ground.scale = 2;
  
  ground.x = ground.width /2;
  console.log(ground.x);

  invisibleground = createSprite(250,445,500,10);
  invisibleground.visible =false;
  
  FoodGroup = createGroup();
 

  
}


function draw() {
  background("lightblue");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500,50 );
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivaltime, 100, 50);
  
  if(keyDown("space")) {
     monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnfood();
  spawnobstacle();
  
 monkey.collide(invisibleground);
  drawSprites()
}

function spawnfood(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(500,300,2,10);
    banana.velocityX= -3;

    banana.addImage("bannaimage",bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(160,200));
   FoodGroup.add(banana);
  }
  
}

function spawnobstacle(){
  
  if(frameCount % 300 === 0) {
    obstacle = createSprite(510,410,20,20);
    obstacle.addImage("obstacleimage",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX= -3;
    obstacle.lifetime = 166;
    
  }
  
  
  
  
  
  
  
  
}



