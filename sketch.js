
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(440,200,560,20);
    bob1 = new Bob(600,600); 
    bob2 = new Bob(520,600); 
    bob3 = new Bob(440,600); 
    bob4 = new Bob(360,600);
    bob5 = new Bob(280,600);
    rope1 = new Rope(bob1.body,{x:600,y:200});
    rope2 = new Rope(bob2.body,{x:520,y:200});
    rope3 = new Rope(bob3.body,{x:440,y:200});
    rope4 = new Rope(bob4.body,{x:360,y:200});
    rope5 = new Rope(bob5.body,{x:280,y:200});
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine);
 roof1.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

  drawSprites();
 
}



