var runnerImg,pathImg,path,runner,left_boundry,right_boundry,coin,coinImg,coinscore,song,slider,bombImg,bomb,powerImg,power;
function preload(){
  //pre-load images
  runnerImg=loadAnimation("Runner-1.png" , "runner-2.png");
  pathImg=loadImage("path.png");
  bombImg=loadImage("bomb.png");
  coinImg=loadImage("coin.png");
  powerImg=loadImage("power.png");
 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  path.scale=1.2;
  runner=createSprite(180,340,50,170);
  runner.addAnimation("running" , runnerImg);
  runner.scale=0.1
  
  power=createSprite(200,80,100,100);
  power.addImage(powerImg);
  power.scale=0.5;
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundry=createSprite(0,300,100,600);
  right_boundry=createSprite(390,300,80,600);
  left_boundry.visible=false;
  right_boundry.visible=false;
}

function draw() {
  background(0);
  textSize(10);
  text('coin score' , 1,250);
  textSize(10);
  text( 20,230);
  path.velocityY=5;
  runner.x=World.mouseX;
  if(path.y>400){
    path.y=height/2;
    if(runner.isTouching(coin)){
    coinscore=coinscore+1;
    }
  }

drawSprites();

}
