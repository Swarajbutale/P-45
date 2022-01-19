var tiger, hunter, obstacles, tigerAm, tigerImg, bgImg,hunterAm,obstaclesAm;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground, invisibleGround, groundImage;

function preload() {
    tigerAm = loadAnimation("images/t1.png","images/t2.png","images/t3.png","images/t4.png","images/t5.png","images/t6.png","images/t7.png","images/t8.png","images/t9.png","images/t10.png");
    tigerImg = loadImage("images/t1.png")
    bgImg = loadImage("images/jungle1.png");
    hunterAm = loadAnimation("images/h1.png","images/h2.png","images/h3.png","images/h4.png","images/h5.png","images/h6.png","images/h7.png","images/h8.png","images/h9.png",);
   
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    tiger = createSprite(windowWidth/2-10,windowHeight-100);
    tiger.addAnimation("tigerRunning",tigerAm);
    //tiger.addImage(tigerImg);
    tiger.scale = 0.25;
    //tiger.addAnimation("tigerRunning",tigerAm);
    hunter = createSprite(windowWidth/2-300,windowHeight-200);
    hunter.addAnimation("hunterRunning",hunterAm)
    hunter.scale=0.75;
    ground = createSprite(windowWidth/2,windowHeight-50,windowWidth,20);
    ground.visible= true;
    
}

function draw() {
    background(bgImg);
    tiger.collide(ground);
    hunter.collide(ground);
 if(keyDown("s")) {
     gameState=PLAY;
 }   
    if(gameState = PLAY) {

        if(ground.x<0) {
            ground.x=ground.width/2+200;
        }

    ground.velocityX=-5;        

        if(keyDown("space")) {
            tiger.velocityY=-10;
        }
        tiger.velocityY = tiger.velocityY+0.8
    }
    drawSprites();
}