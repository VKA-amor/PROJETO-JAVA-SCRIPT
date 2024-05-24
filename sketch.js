function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  stroke("white");
  fill("violet");
  if(mouseIsPressed){
    circle(mouseX,mouseY,200,350);
  }
}
