var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage
var bananGroup, obstacleGroup
var score;
var ground;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(500, 600)
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10)
  ground.velocityX = -4
  ground.x = ground.width / 2

  bananGroup = createGroup();
  obstacleGroup = createGroup();

}


function draw() {
  background("black");
  drawSprites();
  monkey.collide(ground)
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }


  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 0.8;


  food();
  rock();
  showScore();

  //if(monkey.isTouching(obstacleGroup)){
  // bananGroup.destroyEach();
  // obstacleGroup.destroyEach();
  //monkey.velocityX=-1
  //ground.velocityX=-1
  // }

}

function food() {
  if (frameCount % 80 === 0) {
    var x = createSprite(500, 0, 20, 20);
    x.addImage(bananaImage);
    x.velocityX = -5;
    x.lifetime = 135;
    x.y = Math.round(random(120, 200))
    x.scale = 0.08
    bananGroup.add(x);
  }
}

function rock() {
  if (frameCount % 300 === 0) {
    var y = createSprite(500, 315, 20, 20);
    y.addImage(obstacleImage);
    y.velocityX = -4;
    y.lifetime = 135;
    y.scale = 0.2
    obstacleGroup.add(y);
  }
}



function showScore() {
  score = Math.ceil(frameCount / frameRate());
  stroke("gold")
  textSize(20);
  fill("white")
  text("Survival Time: " + score, 15, 25)
}