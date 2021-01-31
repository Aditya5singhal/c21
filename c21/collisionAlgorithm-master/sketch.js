var fixedRect, movingRect;
var rect, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug  = true;

  rect=createSprite(300,400,60,90);
  rect.shapeColor="blue"
  rect.debug=true;
  rect2=createSprite(500,300,60,90);
  rect2.shapeColor="blue"
  rect2.debug=true;


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(algorithm(movingRect,rect)){
  movingRect.shapeColor = "red";
   rect.shapeColor = "red";
 }
 else
 {
  movingRect.shapeColor = "green";
  rect.shapeColor = "green";
 }
  
  drawSprites();
}

