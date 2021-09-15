class dustbin
{
	constructor(x,y)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=200;
        this.wallThickness=20;
        this.image=loadImage("dustbin.png");
		this.body=Bodies.rectangle(x, y, 200, 200 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var dustbinPos=this.body.position;		
            
			push()
			translate(dustbinPos.x, dustbinPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,255);
            image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
			//rect(0,0,this.w, this.h);
			pop()
			
	}

}