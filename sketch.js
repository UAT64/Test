var box 
//box.shapeColor = 100

function setup() {
  createCanvas(400,500);
  box = createSprite(100,100,100,100)
}

function draw() 
{
  background(200);

  if (keyDown(LEFT_ARROW)){
    box.x -=2
  }

  if (keyDown(RIGHT_ARROW)){
    box.x +=2
  }

  if (keyDown(UP_ARROW)){
    box.y -=2
  }

  if (keyDown(DOWN_ARROW)){
    box.y +=2 
  }


  drawSprites()
}




