
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameState1 = PLAY;
var gameState2 = PLAY;
function preload(){
  level1 = loadImage("Images/level1.png");
  level2 = loadImage("Images/level2.png");
  level3 = loadImage("Images/level3.png");
  level4 = loadImage("Images/level4.png");
  player = loadImage("Images/player.png");
  boss5 = loadImage("Images/Ultimateboss.jpg");
}
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  Player = createSprite(50, 350, 50, 40);
  barrier1 = createSprite(300, 315, 800, 10);
  obstacle1 = createSprite(100, 330, 10, 10);
  obstacle2 = createSprite(150, 390, 10, 10);
  obstacle3 = createSprite(200, 330, 10, 10);
  obstacle4 = createSprite(250,390 , 10, 10);
  obstacle5 = createSprite(300, 330, 10, 10);
  obstacle6 = createSprite(350, 390, 10, 10);
  obstacle7 = createSprite(400, 330, 10, 10);
  obstacle8 = createSprite(450,390 , 10, 10);
  obstacle9 = createSprite(500, 330, 10, 10);
  obstacle10 = createSprite(550, 390, 10, 10);
  obstacle11 = createSprite(600, 330, 10, 10);
  obstacle12 = createSprite(650,390 , 10, 10);
  boss1 = createSprite(750, 350, 20, 20);

  barrier2 = createSprite(450, 240, 750, 10);
  fill("white");
  text(mouseX + " " + mouseY, 100, 100);
  obstacle13 = createSprite(695, 250, 10, 10);
  obstacle14 = createSprite(645, 300, 10, 10);
  obstacle15 = createSprite(595, 250, 10, 10);
  obstacle16 = createSprite(545, 300 , 10, 10);
  obstacle17 = createSprite(495, 250, 10, 10);
  obstacle18 = createSprite(445, 300, 10, 10);
  obstacle19 = createSprite(395, 250, 10, 10);
  obstacle20 = createSprite(345, 300 , 10, 10);
  obstacle21 = createSprite(295, 250, 10, 10);
  obstacle22 = createSprite(245, 300, 10, 10);
  obstacle23 = createSprite(195, 250, 10, 10);
  obstacle24 = createSprite(145, 300 , 10, 10);
  boss2 = createSprite(40, 255, 20, 20);

  
  barrier3 = createSprite(300, 160, 800, 10);
  obstacl1 = createSprite(100, 230, 10, 10);
  obstacl2 = createSprite(150, 170, 10, 10);
  obstacl3 = createSprite(200, 230, 10, 10);
  obstacl4 = createSprite(250, 170 , 10, 10);
  obstacl5 = createSprite(300, 230, 10, 10);
  obstacl6 = createSprite(350, 170, 10, 10);
  obstacl7 = createSprite(400, 230, 10, 10);
  obstacl8 = createSprite(450, 170 , 10, 10);
  obstacl9 = createSprite(500, 230, 10, 10);
  obstacl10 = createSprite(550,170, 10, 10);
  obstacl11 = createSprite(600,230, 10, 10);
  obstacl12 = createSprite(650,170 , 10, 10);
  boss3 = createSprite(750, 180 ,20, 20);

  barrier4 = createSprite(300, 20, 800, 10);
  obstaclee1 = createSprite(100, 30, 10, 10);
  obstaclee2 = createSprite(150, 80, 10, 10);
  obstaclee3 = createSprite(200, 30, 10, 10);
  obstaclee4 = createSprite(250, 80 , 10, 10);
  obstaclee5 = createSprite(300, 30, 10, 10);
  obstaclee6 = createSprite(350, 80, 10, 10);
  obstaclee7 = createSprite(400, 30, 10, 10);
  obstaclee8 = createSprite(450, 80 , 10, 10);
  obstaclee9 = createSprite(500, 30, 10, 10);
  obstaclee10 = createSprite(550,80, 10, 10);
  obstaclee11 = createSprite(600,30, 10, 10);
  obstaclee12 = createSprite(650,80 , 10, 10);
  ultimate_boss = createSprite(40, 40 ,20, 20);

  barrier4 = createSprite(450,90, 750, 10);

  ball1 = createSprite(100, 150, 10, 10);
  ball2 = createSprite(150, 100, 10, 10);
  ball3 = createSprite(200, 150, 10, 10);
  ball4 = createSprite(250, 100, 10, 10);
  ball5 = createSprite(300, 150, 10, 10);
  ball6 = createSprite(350, 100, 10, 10);
  ball7 = createSprite(400, 150, 10, 10);
  ball8 = createSprite(450, 100, 10, 10);
  ball9 = createSprite(500, 150, 10, 10);
  ball10 = createSprite(550, 100, 10, 10);
  ball11 = createSprite(600, 150, 10, 10);
  ball12 = createSprite(650, 100, 10, 10);

  Player.addImage("player", player);
  boss1.addImage("boss1", level1);
  boss2.addImage("boss2", level2);
  boss3.addImage("boss3", level3);
  ultimate_boss.addImage("ultimate_boss",boss5)
  obstacle1.velocityY = 2;
  obstacle2.velocityY = -2;
  obstacle3.velocityY = 2;
  obstacle4.velocityY = -2;
  obstacle5.velocityY = 2;
  obstacle6.velocityY = -2;
  obstacle7.velocityY = 2;
  obstacle8.velocityY = -2;
  obstacle9.velocityY = 2;
  obstacle10.velocityY = -2;
  obstacle11.velocityY = 2;
  obstacle12.velocityY = -2;

  obstacle13.velocityY = 2;
  obstacle14.velocityY = -2;
  obstacle15.velocityY = 2;
  obstacle16.velocityY = -2;
  obstacle17.velocityY = 2;
  obstacle18.velocityY = -2;
  obstacle19.velocityY = 2;
  obstacle20.velocityY = -2;
  obstacle21.velocityY = 2;
  obstacle22.velocityY = -2;
  obstacle23.velocityY = 2;
  obstacle24.velocityY = -2;
  
  obstacl1.velocityY = 2;
  obstacl2.velocityY = -2;
  obstacl3.velocityY = 2;
  obstacl4.velocityY = -2;
  obstacl5.velocityY = 2;
  obstacl6.velocityY = -2;
  obstacl7.velocityY = 2;
  obstacl8.velocityY = -2;
  obstacl9.velocityY = 2;
  obstacl10.velocityY = -2;
  obstacl11.velocityY = 2;
  obstacl12.velocityY = -2;
  obstacleGroup = new Group();
  obstacleGroup1 = new Group();
  obstacleGroup2 = new Group();
  
  ball1.velocityY = 2;
  ball2.velocityY = -2;
  ball3.velocityY = 2;
  ball4.velocityY = -2;
  ball5.velocityY = 2;
  ball6.velocityY = -2;
  ball7.velocityY = 2;
  ball8.velocityY = -2;
  ball9.velocityY = 2;
  ball10.velocityY = -2;
  ball11.velocityY = 2;
  ball12.velocityY = 2;
  

}


function draw() {
  background("black"); 
  Player.scale = 0.1;
  boss1.scale = 0.5
  boss2.scale = 0.4
  boss3.scale = 0.5
  boss5.scale = 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
  obstacle1.shapeColor = "blue";
  obstacle2.shapeColor = "blue";
  obstacle3.shapeColor = "blue";
  obstacle4.shapeColor = "blue";
  obstacle5.shapeColor = "blue";
  obstacle6.shapeColor = "blue";
  obstacle7.shapeColor = "blue";
  obstacle8.shapeColor = "blue";
  obstacle9.shapeColor = "blue";
  obstacle10.shapeColor = "blue";
  obstacle11.shapeColor = "blue";
  obstacle12.shapeColor = "blue";

  obstacle13.shapeColor = "green";
  obstacle14.shapeColor = "green";
  obstacle15.shapeColor = "green";
  obstacle16.shapeColor = "green";
  obstacle17.shapeColor = "green";
  obstacle18.shapeColor = "green";
  obstacle19.shapeColor = "green";
  obstacle20.shapeColor = "green";
  obstacle21.shapeColor = "green";
  obstacle22.shapeColor = "green";
  obstacle23.shapeColor = "green";
  obstacle24.shapeColor = "green";
  
  obstacl1.shapeColor = "blue";
  obstacl2.shapeColor = "blue";
  obstacl3.shapeColor = "blue";
  obstacl4.shapeColor = "blue";
  obstacl5.shapeColor = "blue";
  obstacl6.shapeColor = "blue";
  obstacl7.shapeColor = "blue";
  obstacl8.shapeColor = "blue";
  obstacl9.shapeColor = "blue";
  obstacl10.shapeColor = "blue";
  obstacl11.shapeColor = "blue";
  obstacl12.shapeColor = "blue";
  barrier3.shapeColor = "red";

  ball1.shapeColor = "green";
  ball2.shapeColor = "green";
  ball3.shapeColor = "green";
  ball4.shapeColor = "green";
  ball5.shapeColor = "green";
  ball6.shapeColor = "green";
  ball7.shapeColor = "green";
  ball8.shapeColor = "green";
  ball9.shapeColor = "green";
  ball10.shapeColor = "green";
  ball11.shapeColor = "green";
  ball12.shapeColor = "green";

  obstaclee1.shapeColor = "blue";
  obstaclee2.shapeColor = "blue";
  obstaclee3.shapeColor = "blue";
  obstaclee4.shapeColor = "blue";
  obstaclee5.shapeColor = "blue";
  obstaclee6.shapeColor = "blue";
  obstaclee7.shapeColor = "blue";
  obstaclee8.shapeColor = "blue";
  obstaclee9.shapeColor = "blue";
  obstaclee10.shapeColor = "blue";
  obstaclee11.shapeColor = "blue";
  obstaclee12.shapeColor = "blue";


  barrier1.shapeColor = "red";
  barrier2.shapeColor = "red";
  barrier4.shapeColor="red";

  edges = createEdgeSprites();
  obstacle1.bounceOff(edges[3]);
  obstacle2.bounceOff(edges[3]);
  obstacle3.bounceOff(edges[3]);
  obstacle4.bounceOff(edges[3]);
  obstacle5.bounceOff(edges[3]);
  obstacle6.bounceOff(edges[3]);
  obstacle7.bounceOff(edges[3]);
  obstacle8.bounceOff(edges[3]);
  obstacle9.bounceOff(edges[3]);
  obstacle10.bounceOff(edges[3]);
  obstacle11.bounceOff(edges[3]);
  obstacle12.bounceOff(edges[3]);

  
  obstacle1.bounceOff(barrier1);
  obstacle2.bounceOff(barrier1);
  obstacle3.bounceOff(barrier1);
  obstacle4.bounceOff(barrier1);
  obstacle5.bounceOff(barrier1);
  obstacle6.bounceOff(barrier1);
  obstacle7.bounceOff(barrier1);
  obstacle8.bounceOff(barrier1);
  obstacle9.bounceOff(barrier1);
  obstacle10.bounceOff(barrier1);
  obstacle11.bounceOff(barrier1);
  obstacle12.bounceOff(barrier1);

  
  obstacle13.bounceOff(barrier1);
  obstacle14.bounceOff(barrier1);
  obstacle15.bounceOff(barrier1);
  obstacle16.bounceOff(barrier1);
  obstacle17.bounceOff(barrier1);
  obstacle18.bounceOff(barrier1);
  obstacle19.bounceOff(barrier1);
  obstacle20.bounceOff(barrier1);
  obstacle21.bounceOff(barrier1);
  obstacle22.bounceOff(barrier1);
  obstacle23.bounceOff(barrier1);
  obstacle24.bounceOff(barrier1);

  obstacle13.bounceOff(barrier2);
  obstacle14.bounceOff(barrier2);
  obstacle15.bounceOff(barrier2);
  obstacle16.bounceOff(barrier2);
  obstacle17.bounceOff(barrier2);
  obstacle18.bounceOff(barrier2);
  obstacle19.bounceOff(barrier2);
  obstacle20.bounceOff(barrier2);
  obstacle21.bounceOff(barrier2);
  obstacle22.bounceOff(barrier2);
  obstacle23.bounceOff(barrier2);
  obstacle24.bounceOff(barrier2);

  obstacl1.bounceOff(barrier3);
  obstacl2.bounceOff(barrier3);
  obstacl3.bounceOff(barrier3);
  obstacl4.bounceOff(barrier3);
  obstacl5.bounceOff(barrier3);
  obstacl6.bounceOff(barrier3);
  obstacl7.bounceOff(barrier3);
  obstacl8.bounceOff(barrier3);
  obstacl9.bounceOff(barrier3);
  obstacl10.bounceOff(barrier3);
  obstacl11.bounceOff(barrier3);
  obstacl12.bounceOff(barrier3);

  obstacl1.bounceOff(barrier2);
  obstacl2.bounceOff(barrier2);
  obstacl3.bounceOff(barrier2);
  obstacl4.bounceOff(barrier2);
  obstacl5.bounceOff(barrier2);
  obstacl6.bounceOff(barrier2);
  obstacl7.bounceOff(barrier2);
  obstacl8.bounceOff(barrier2);
  obstacl9.bounceOff(barrier2);
  obstacl10.bounceOff(barrier2);
  obstacl11.bounceOff(barrier2);
  obstacl12.bounceOff(barrier2);

  ball1.bounceOff(barrier3);
  ball2.bounceOff(barrier3);
  ball3.bounceOff(barrier3);
  ball4.bounceOff(barrier3);
  ball5.bounceOff(barrier3);
  ball6.bounceOff(barrier3);
  ball7.bounceOff(barrier3);
  ball8.bounceOff(barrier3);
  ball9.bounceOff(barrier3);
  ball10.bounceOff(barrier3);
  ball11.bounceOff(barrier3);
  ball12.bounceOff(barrier3);

  ball1.bounceOff(barrier4);
  ball2.bounceOff(barrier4);
  ball3.bounceOff(barrier4);
  ball4.bounceOff(barrier4);
  ball5.bounceOff(barrier4);
  ball6.bounceOff(barrier4);
  ball7.bounceOff(barrier4);
  ball8.bounceOff(barrier4);
  ball9.bounceOff(barrier4);
  ball10.bounceOff(barrier4);
  ball11.bounceOff(barrier4);
  ball12.bounceOff(barrier4);
  if(keyDown("UP_ARROW")){
    Player.y = Player.y-3;
  }

  if(keyDown("DOWN_ARROW")){
    Player.y = Player.y+3;
  }

  if(keyDown("RIGHT_ARROW")){
    Player.x = Player.x+3;
  }

  if(keyDown("LEFT_ARROW")){
    Player.x = Player.x-3;
  }

  Player.collide(edges[3])
  if(gameState===PLAY){
    spawnObstacles();
    //spawnObstacles1();
  }
  if(gameState1 === PLAY){
    spawnObstacles1();
  }
  if(gameState === PLAY){
    spawnObstacles2();
  }



  if(obstacle1.isTouching(Player)||obstacle2.isTouching(Player)||obstacle3.isTouching(Player)||obstacle4.isTouching(Player)||obstacle5.isTouching(Player)||obstacle6.isTouching(Player)||obstacle7.isTouching(Player)||obstacle8.isTouching(Player)||obstacle9.isTouching(Player)||obstacle10.isTouching(Player)||obstacle11.isTouching(Player)||obstacle12.isTouching(Player)||obstacle13.isTouching(Player)||obstacle14.isTouching(Player)||obstacle15.isTouching(Player)||obstacle16.isTouching(Player)||obstacle17.isTouching(Player)||obstacle18.isTouching(Player)||obstacle19.isTouching(Player)||obstacle20.isTouching(Player)||obstacle21.isTouching(Player)||obstacle22.isTouching(Player)||obstacle23.isTouching(Player)||obstacle24.isTouching(Player)){
    Player.x = 50;
    Player.y = 350;
  }
  if(obstacl1.isTouching(Player)||obstacl2.isTouching(Player)||obstacl3.isTouching(Player)||obstacl4.isTouching(Player)||obstacl5.isTouching(Player)||obstacl6.isTouching(Player)||obstacl7.isTouching(Player)||obstacl8.isTouching(Player)||obstacl9.isTouching(Player)||obstacl10.isTouching(Player)||obstacl11.isTouching(Player)||obstacl12.isTouching(Player)){
    Player.x = 50;
    Player.y = 350;

  }
  
  if(obstacleGroup2.isTouching(Player)||obstacleGroup1.isTouching(Player)||obstacleGroup.isTouching(Player)){
    Player.x = 50;
    Player.y = 350;
  }

  if(Player.isTouching(boss1)){
    gameState = END;
    boss1.visible = false;
    obstacleGroup.destroyEach();
    obstacleGroup.setVelocityXEach(0)
  }
  if(Player.isTouching(boss2)){
    gameState1 = END;
    boss2.visible = false;
    obstacleGroup1.destroyEach();
    obstacleGroup1.setVelocityXEach(0)
  }
 if(Player.isTouching(boss3)){
  gameState2 = END;
  boss3.visible = false;
  obstacleGroup2.destroyEach();
  obstacleGroup2.setVelocityXEach(0)
 }
  drawSprites();
}
function spawnObstacles(){
  if(World.frameCount%100===0){
    var obstacle = createSprite(750, 350, 5, 5);
    obstacle.velocityX = -3;
    obstacle.y = Math.round(random(350, 400));
    obstacleGroup.add(obstacle)
  }
}
  function spawnObstacles1(){
    if(World.frameCount%100===0){
      var obstacle = createSprite(50, 350, 5, 5);
      obstacle.velocityX = 3;
      obstacle.y = Math.round(random(250, 300));
      obstacleGroup1.add(obstacle)
  }
  }

  function spawnObstacles2(){
    if(World.frameCount%100===0){
      var obstacle = createSprite(750, 190, 5, 5);
      obstacle.velocityX = -3;
      obstacle.y = Math.round(random(170, 230));
      obstacleGroup2.add(obstacle)
  }
  }
