var ship , shipImg;
var sea , seaImg;
var edges;

function preload(){
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png" , "ship-4.png");
  seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200);
  sea.addImage("sea",  seaImg);
  sea.scale = 0.1
  edges = createEdgeSprites();
  ship = createSprite(100,200);
  ship.addAnimation("ship" , shipImg);
  ship.scale = 0.15;

  


}
createEdgeSprites();
function draw() {
  background("white");

  drawSprites();
 ship.velocityX = 4;
 
  if(sea.x < 0 ) {
    sea.x = sea.width/2;
  }

 ship.collide(edges[0]);
 ship.collide(edges[1]);

}