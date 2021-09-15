const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj,paperObj,dustbinObj;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObj=new paper(200,400,60);
	groundObj=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,559)

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	groundObj.display();
	paperObj.display();
	dustbinObj.display();
		
	//image(paperImg,ball.position.y,ball.position.x,radius,radius);
	//image(paperImg,ball.position.x,ball.position.y,radius/2,radius/2);
	//ellipse(ball.position.x,ball.position.y,radius,radius);
	//image(paperImg,ball.position.x,ball.position.y,radius,radius);


	
	//image(1185, 570, 200,200);
	//rect(1185, 570, 200,200);
	//image(dustbinImg, 1185, 570, 200,200);
	//ellipse(1185, 570, 200,200)



} 

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
    
  	}
}
