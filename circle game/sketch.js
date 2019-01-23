var ell;
function setup() {
	createCanvas(600,600);
	ell = new Ellipse();
}

function draw() {
	background(51);

	ellipse(ell.ellipsePositionX,ell.ellipsePositionY,ell.ellipseSizeX,ell.ellipseSizeY);
	ell.Move();

}
function GG(img)
{
	image(img,0,0);
}

function Ellipse()
{
	this.ellipsePositionX = Math.round(Math.random() * 500 + Math.random() * 100);
	this.ellipsePositionY = Math.round(Math.random() * 200 + Math.random() * 100);
	this.ellipseSizeX = 800;
	this.ellipseSizeY = 800;
	this.MoveSpeed = 5;

	this.Move = function(){
		this.ellipseSizeX -= this.MoveSpeed;
		this.ellipseSizeY -= this.MoveSpeed;
		if(Math.pow((mouseX - this.ellipsePositionX),2) + Math.pow((mouseY - this.ellipsePositionY),2) < Math.pow(this.ellipseSizeX,2)){ }
			else{ 
			alert("You Lost, Start Again");


		}
		if(this.ellipseSizeX < 30 || this.ellipseSizeY < 30)
		{
			this.ellipseSizeX = 800;
			this.ellipseSizeY = 800;
			this.ellipsePositionX = Math.round(Math.random() * 500 + Math.random() * 100);
			this.ellipsePositionY = Math.round(Math.random() * 200 + Math.random() * 100);
		}
	}
}

