class Paper{ 
  
  constructor(x, y, diameter,options) { 
    
    var options = { 
      isStatic: false, 
      restitution:0.3, 
      friction:0.5, 
      density:0.375
    } 



    this.width = width; 
    this.height = height; 
    this.radius = diameter / 2; 
    this.body = Bodies.circle(x,y,this.radius, options); 
    this.image = loadImage("paper.png");
    
    World.add(world, this.body); 
  } 
  
  display(){ 
    var pos = this.body.position; 
    push(); 
    translate(pos.x, pos.y); 
    //ellipseMode(RADIUS); 
    //fill(255); 
    //ellipse(0,0,this.radius, this.radius); 
    


    imageMode(CENTER);
    image(this.image, 0, 0, this.radius, this.radius);
    pop(); 
    //image(binImg,paperObject.position.x,paperObject.position.y,40,40)
	
  } 
}






       
    


