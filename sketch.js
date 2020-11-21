const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 


var paperObject, groundObject; 
var engine, world; 

var container, container2, container3; 

var binImg, bin;
function preload (){

	binImg = loadImage("dustbingreen.png");
}

function setup() { 
	
	createCanvas(1100, 700); 
	rectMode(CENTER); 
	engine = Engine.create(); 
	world = engine.world; 


	bin = createSprite(1000,630,70,20);
	bin.addImage(binImg);
	bin.scale = 0.45

	container = Bodies.rectangle(1000,675,70,20,{isStatic:true}); 
	container2 = Bodies.rectangle(955,650,20,70,{isStatic:true}); 
	container3 = Bodies.rectangle(1025,650,20,70,{isStatic:true}); 
	
	
	World.add(world, container); 
	World.add(world, container2); 
	World.add(world, container3); 
	
	paperObject = new Paper(100,450,70); 
	//image(binImg,paperObject.position.x,paperObject.position.y,40,40)


	groundObject = new Ground(width/2,670,width,20); 
	Engine.run(engine); 

} 
function draw() { 
	
	rectMode(CENTER); 
	background(200); 

	Engine.update(engine); 

	paperObject.display(); 

	
	groundObject.display(); 
	

	push() 
	translate(container.position.x, container.position.y); 
	rectMode(CENTER) 
	//strokeWeight(4); 
	angleMode(RADIANS) 
	fill(0) 
	stroke(0) 
	rotate(this.angle) 
	rect(0, 0, 70,20); 
	pop() 

	push() 
	translate(container2.position.x, container2.position.y); 
	rectMode(CENTER) 
	//strokeWeight(4); 
	stroke(0) 
	angleMode(RADIANS) 
	fill(0) 
	rotate(-1*this.angle) 
	rect(0,0,20,70); 
	pop(); 
	
	push() 
	translate(container3.position.x, container3.position.y); 
	rectMode(CENTER) 
	//strokeWeight(4); 
	stroke(0) 
	angleMode(RADIANS) 
	fill(0) 
	rect(0,0,20,70); 
	pop() 


	

	drawSprites(); 
	// keyPressed(); 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-80}); 
	} 
}