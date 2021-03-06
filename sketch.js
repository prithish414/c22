const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var engine,world,ground,ball,ball2;
function setup()
{
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var options={
    isStatic: true
  }
  ground=Bodies.rectangle(400,390,800,20,options)
  World.add(world,ground)
  var optionsball = {
    restitution: 0.8
  }
  ball = Bodies.circle(400,100,40,optionsball)
  World.add(world,ball)


  ball2 = Bodies.circle(100,100,40,optionsball)
  World.add(world,ball2)
}
function draw()
{
  background(255,255,255)
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)

  ellipseMode(RADIUS)
  ellipse(ball2.position.x,ball2.position.y,40,40)
}




