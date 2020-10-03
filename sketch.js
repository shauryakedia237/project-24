
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxl, boxm, boxr;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(800,690,1600,70);
	paper = new Paper(200,600,40);
	
	boxl=createSprite(1000,610,20,100);
	boxl.shapeColor=color(255,0,0)

	boxlbody=Bodies.rectangle(1000,595,20,100,{isStatic:2});
	World.add(world,boxlbody);

	boxm=createSprite(1100,650,200,20);
	boxm.shapeColor=color(255,0,0)

	boxmbody=Bodies.rectangle(1100,645,200,20,{isStatic:2});
	World.add(world,boxmbody);

	boxr=createSprite(1200,610,20,100);
	boxr.shapeColor=color(255,0,0)

	boxrbody=Bodies.rectangle(1200,595,20,100,{isStatic:2});
	World.add(world,boxrbody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();    
  paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-100});   
	 }
   }


