//variabels
var backGroundImage,backGround ;
var balloonImage1,balloonImage2,balloonImage3,balloonImage4,balloonsGroup1,
    balloonsGroup2,balloonsGroup3,balloonsGroup4;
var bow,bowImage;
var bombImage,bombsGroup1,bombsGroup2;
var edges;
var arrowImage,arrow,arrowsGroup;
var score = 0;


//function
function preload(){
  
  //to load images
  backGroundImage = loadImage("background0.png")
  balloonImage1 = loadImage("blue_balloon0.png")
  balloonImage2 = loadImage("red_balloon0.png")
  balloonImage3 = loadImage("pink_balloon0.png")
  balloonImage4 = loadImage("green_balloon0.png")
  bowImage = loadImage("bow0.png")
  arrowImage = loadImage("arrow0.png")
  bombImage = loadImage("bomb.png")
  whooshSound = loadSound("whooshSound (2).mp3")
  balloonBrust = loadSound("balloonBrust.mp3")
  bombBlast = loadSound("bombBlast.mp3")
  
}


//function 
function setup() {
  
  //to create canvas
  createCanvas(400, 400);
  
  //to create background
  backGround = createSprite(200,1,400,10);
  backGround.addImage("backGround",backGroundImage);
  backGround.setVelocity(-5,0);
  backGround.scale = 2;
  
  //to draw bow
  bow = createSprite(380,200,400,10);
  bow.addImage("bow",bowImage);
 
  //groups for balloons,arrows and bomb
  balloonsGroup1 = new Group();
  balloonsGroup2 = new Group();
  balloonsGroup3 = new Group();
  balloonsGroup4 = new Group();
  arrowsGroup = new Group();
  bombsGroup1 = new Group();
  bombsGroup2 = new Group();
  
}  


//function to create arrows
function createArrow(){
  
  arrow = createSprite(360,100,5,10);
  arrow.setVelocity(-8,0);
  arrow.scale = 0.3;
  arrow.lifetime = 40;
  arrowsGroup.add(arrow);
  arrow.setCollider("rectangle",0,0,200,50);
  return arrow;
  
}  


//function to display blue balloon
function spawnBalloon1(){
  
  if (frameCount % 80 === 0){
  var balloon1 = createSprite(560,50,10,10);
  balloon1.addImage("balloon1",balloonImage1);
  balloon1.scale = 0.09;
  balloon1.setVelocity(0,5);
  balloon1.x = Math.round(random(10,200))
  balloon1.lifetime = 70;
  balloonsGroup1.add(balloon1)
  }  
  
}


//function to display red balloon
function spawnBalloon2(){
  
  if (frameCount % 80 === 0){
  var balloon2 = createSprite(560,50,10,10);
  balloon2.addImage("balloon2",balloonImage2);
  balloon2.scale = 0.08;
  balloon2.setVelocity(0,5);
  balloon2.x = Math.round(random(10,200))
  balloon2.lifetime = 70;
  balloonsGroup2.add(balloon2)
  }
  
}


//function to display pink balloon
function spawnBalloon3(){
  
  if (frameCount % 80 === 0){
  var balloon3 = createSprite(560,50,10,10);
  balloon3.addImage("balloon3",balloonImage3);
  balloon3.scale = 1;
  balloon3.setVelocity(0,5);
  balloon3.x = Math.round(random(10,200))
  balloon3.lifetime = 70;
  balloonsGroup3.add(balloon3)
  }
  
}


//function to display green balloon
function spawnBalloon4(){
  
  if (frameCount % 80 === 0){
  var balloon4 = createSprite(560,50,10,10);
  balloon4.addImage("balloon4",balloonImage4);
  balloon4.scale = 0.08;
  balloon4.setVelocity(0,5);
  balloon4.x = Math.round(random(10,200))
  balloon4.lifetime = 70;
  balloonsGroup4.add(balloon4)
  }  
  
}


//function to display bomb
function spawnBomb1(){
  
  if (frameCount % 80 === 0){
  var bomb1 = createSprite(50,50,10,10);
  bomb1.addImage("bomb1",bombImage);
  bomb1.scale = 0.2;
  bomb1.setVelocity(5,0);
  bomb1.y = Math.round(random(0,300))
  bomb1.lifetime = 60;
  bombsGroup1.add(bomb1)
  }  
  
}


//function to display bomb
function spawnBomb2(){
  
  if (frameCount % 80 === 0){
  var bomb2 = createSprite(0,50,10,10);
  bomb2.addImage("bomb2",bombImage);
  bomb2.scale = 0.2;
  bomb2.setVelocity(0,5);
  bomb2.x = Math.round(random(0,200))
  bomb2.lifetime = 60;
  bombsGroup2.add(bomb2)
  } 
  
}


//function
function draw() {
  
  //to set background color
  background("white");
  
  
  //to create edges
  createEdgeSprites();
  
  //to reset the background
  if(backGround.x < 0){
  backGround.x = backGround.width/2
  }
  
  //to move the bow with mouse
  bow.y = mouseY;
  
  //to assign a key to release the arrows
  if (keyWentDown("space")){
  var temp_arrow = createArrow();
  temp_arrow.addImage("temp_arrow",arrowImage);
  temp_arrow.y = bow.y;
  whooshSound.play();
  }
  
  //to select random balloons at random positons
  var selectBalloon_Obs = Math.round(random(1,4))
  console.log(selectBalloon_Obs)
  if (World.frameCount % 80 == 0){
    if(selectBalloon_Obs == 1){
    spawnBalloon1()
    spawnBomb1()
    }
    else if (selectBalloon_Obs == 2){
    spawnBalloon2()
    }
    else if (selectBalloon_Obs == 3){
    spawnBalloon3()
    spawnBomb2()
    }
    else if (selectBalloon_Obs == 4){
    spawnBalloon4()
    }
  }

  //to assign what to do when the arrow touches the balloon
  if(arrowsGroup.isTouching(balloonsGroup1)){
    balloonsGroup1.destroyEach();
    arrowsGroup.destroyEach();
    score = score+5;
    balloonBrust.play();
  }
  
  if(arrowsGroup.isTouching(balloonsGroup2)){
    balloonsGroup2.destroyEach();
    arrowsGroup.destroyEach();
    score = score+2;
    balloonBrust.play();
  }
  
  if(arrowsGroup.isTouching(balloonsGroup3)){
    balloonsGroup3.destroyEach();
    arrowsGroup.destroyEach();
    score = score+1;
    balloonBrust.play();
  }
  
  if(arrowsGroup.isTouching(balloonsGroup4)){
    balloonsGroup4.destroyEach();
    arrowsGroup.destroyEach();
    score = score+1;
    balloonBrust.play(); 
  }
  
  //to assign what to do when the arrow touches the bomb
  if(arrowsGroup.isTouching(bombsGroup1)){
    bombsGroup1.destroyEach();
    arrowsGroup.destroyEach();
    score = score-1;
    bombBlast.play(); 
  }
  
  if(arrowsGroup.isTouching(bombsGroup2)){
    bombsGroup2.destroyEach();
    arrowsGroup.destroyEach();
    score = score-2;
    bombBlast.play(); 
  }

  //to draw the sprites
  drawSprites() 
  
  //to display score
  textSize(20);
  text ("Score : " + score,300,20);
  
}


