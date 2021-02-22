const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,box;

function setup(){

  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option={
    restitution : 0.8
  }

  box = Bodies.circle(200,200,20,20);
  World.add(world,box);

}

function draw(){
  background(0);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(box.position.x,box.position.y,20,20);

}