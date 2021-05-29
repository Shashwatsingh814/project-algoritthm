var box1,box2;

function setup(){
createCanvas(400,400);

box1=createSprite(20,50,100,100);
box2=createSprite(100,200,100,100);
}
function draw(){
  background("blue");
  drawSprites();
}