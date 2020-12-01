const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var car,carImage;
var bg,bgImg;
var ground,groundImg;
var coins,coinsImg;

function preload(){
    carImage = loadImage("images/allVehiles19.png");
    bgImg = loadImage("images/bg.png");
    groundImg = loadImage("images/ground.png");
    coinsImg = loadImage("images/coins.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    car = Bodies.rectangle(600,100,100,100);
    carImage = loadImage("images/allvehiles19.png");
    World.add(world,car);
    
    

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,600,400,10,ground_options);
    groundImg = loadImage("images/ground.png");
    World.add(world,ground);

    console.log(ground);
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    imageMode(CENTER)
    image(groundImg,ground.position.x,ground.position.y,400,20);
    image(carImage,car.position.x,car.position.y,35,35);

    spawnCoins();

    if(keyPressed("right")){
        car.velocityX = 9;
    }

    if(keyCode===27){
        car.velocityX = -9;
    }

    if(keyDown("SPACE")){
        car.velocityX = 0;
    }

    drawSprites();
}

function spawnCoins(){
if(frameCount%20 === 0){
coins = createSprite(1300,200,10,10);
coinsImg = loadImage("images/coins.png");
coins.addImage(coinsImg);
coins.velocityX = -4;
coins.y = Math.round(random(10,700));
World.add(world,coins);
    }
}
