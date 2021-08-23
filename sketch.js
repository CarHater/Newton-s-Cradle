const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var roof1;
var roof2;
var roof3;
var roof4;
var roof5;


//Create multiple bobs, mulitple ropes varibale here

var bob1;
var bob2;
var bob3;
var bob4;

var rope1;
var rope2;
var rope3;
var rope4;


function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  var roof_options={
	  isStatic:true			
	}

  roof = Bodies.rectangle(400,100,180,20,roof_options);
  World.add(world,roof);

  roof1 = Bodies.rectangle(328,100,48,20,roof_options);
  World.add(world,roof);

  roof2 = Bodies.rectangle(364,100,48,20,roof_options);
  World.add(world,roof);

  roof3 = Bodies.rectangle(400,100,48,20,roof_options);
  World.add(world,roof);

  roof4 = Bodies.rectangle(436,100,48,20,roof_options);
  World.add(world,roof);

  roof5 = Bodies.rectangle(472,100,48,20,roof_options);
  World.add(world,roof);

  
  var bob_options = {
    restitution: 0.8
    }
  
  bob1 = Bodies.circle(328,400,10,bob_options);
  World.add(world,bob1);

  bob2 = Bodies.circle(364,400,10,bob_options);
  World.add(world,bob2);

  bob3 = Bodies.circle(400,400,10,bob_options);
  World.add(world,bob3);

  bob4 = Bodies.circle(436,400,10,bob_options);
  World.add(world,bob4);

  bob5 = Bodies.circle(472,400,10,bob_options);
  World.add(world,bob5);

  rope1 = new rope(bob1,roof1,0,0);
  rope2 = new rope(bob2,roof2,0,0);
  rope3 = new rope(bob3,roof3,0,0);
  rope4 = new rope(bob4,roof4,0,0);
  rope5 = new rope(bob5,roof5,0,0);

  Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,180,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,36);
  ellipse(bob2.position.x,bob2.position.y,36);
  ellipse(bob3.position.x,bob3.position.y,36);
  ellipse(bob4.position.x,bob4.position.y,36);
  ellipse(bob5.position.x,bob5.position.y,36);

  push();
  strokeWeight(2);
  stroke(255);
  pop();


 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.01,y:0.01});

	}


}



