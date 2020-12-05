const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,800);
  stroke(255)
  engine= Engine.create()
  world= engine.world
  
  stand= new Ground(480,500,200,10);
  ground= new Ground(400,700,800,20);

  block1 = new Box(420,470,30,40);
  block2 = new Box(450,470,30,40);
  block3 = new Box(480,470,30,40);
  block4 = new Box(510,470,30,40);
  block5 = new Box(540,470,30,40);
  block6 = new Box(450,430,30,40);
  block7 = new Box(480,430,30,40);
  block8 = new Box(510,430,30,40);
  block9 = new Box(480,390,30,40);


  polygon1= new Polygon(80,480,30);
  console.log(polygon1.body);
  sling= new Slingshot(polygon1.body, {x:80, y:480});
}

function draw() {
  background(0);  
  text(mouseX+","+mouseY,mouseX,mouseY);
  Engine.update(engine);
  stand.display();
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  polygon1.display();
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

 