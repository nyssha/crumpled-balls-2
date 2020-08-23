var  packageSprite,paperIMG
var packageBody,ground
var box1

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
//helicopterIMG=loadImage("helicopter.png")
	dustbinIMG=loadImage("dustbingreen.png")
	paperIMG=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(730, 200, 30,30);
	packageSprite.addImage(paperIMG)
	packageSprite.scale=0.2
	packageSprite.shapeColor=color("cyan")

	box1=createSprite(700,599,200,20);
	box1.addImage(dustbinIMG)
	box1.scale=0.5
	box1.shapeColor=color("aqua")

	//helicopterSprite=createSprite(740, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	             
	
	             

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(730 , 200 , 5 );
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

	
		
		}
  



function draw() {
  rectMode(CENTER);
  background("aqua");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


keyPressed();
drawSprites();

}



  


function keyPressed() {
 if (keyPressed === UP_ARROW) {
packageSprite.x = mouse.X
packageSprite.y = mouse.Y
  }
}



