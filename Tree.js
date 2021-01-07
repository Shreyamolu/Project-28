class Tree
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.w = 450;
		this.h = 600;
		this.wallThickness = 10;
		
		this.image = loadImage("images/tree.png")
		this.bottomBody = Bodies.rectangle(this.x, this.y, this.w, this.wallThickness, {isStatic:true})
		this.leftWallBody = Bodies.rectangle(0, this.y-this.h/2, this.wallThickness, this.h, {isStatic:false})
		this.rightWallBody = Bodies.rectangle(this.x+this.w/2, this.y-this.h/2, this.wallThickness, this.h, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom = this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.h/2,this.w, this.h)
			pop()
			
	}

}