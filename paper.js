class paper
{
	constructor(x,y,r)
	{
		//super (x,y,r);
		

		var options={
			isStatic:false,
			restitution:0,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image = loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
		var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			//image(this.image, 0, 0, this.width, this.radius);
			image(this.image, 0, -30, this.width, this.height);
			//strokeWeight(3);
			//fill(255,0,255)
			//ellipse(0,0,this.r, this.r);
			pop()
			//super.display();
			

	}

}