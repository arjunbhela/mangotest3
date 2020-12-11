
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground
var rockk
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8
var sling
function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1028, 528);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	ground = new Ground(500,540,1500,50)
	rockk = new Rock(190,200,100)
	sling = new Slingshot(rockk.body,{x:190,y:200})
	mango1 = new Mango(830,150,50)
	mango2 = new Mango(800,120,30)
	mango3 = new Mango(750,200,65)

	mango4 = new Mango(880,150,35)
	mango5 = new Mango(920,180,65)
	mango6 = new Mango(840,70,50)

	mango7 = new Mango(700,160,40)
	mango8 = new Mango(980,200,50,50)

	tree = new Tree(500,300,450,450)
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  sling.display();
  tree.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  rockk.display()
  drawSprites();
  ground.display();
  detectCollision(rockk,mango1)
  detectCollision(rockk,mango2)
  detectCollision(rockk,mango3)
  detectCollision(rockk,mango4)
  detectCollision(rockk,mango5)
  detectCollision(rockk,mango6)
  detectCollision(rockk,mango7)
  detectCollision(rockk,mango8)
  
  

  image(boyImg,100,100,400,400)
 
}

function keyPressed() {
	if(keyCode===32) {
		Matter.Body.setPosition(rockk.body,{x:190,y:200})
		sling.attach(rockk.body)
	}
}

function mouseDragged() {
	Matter.Body.setPosition(rockk.body,{x:mouseX,y:mouseY})
	}
	
	function mouseReleased(){
	  sling.fly();
	}

function detectCollision(ob1,ob2){
mangoBodyPos = ob1.body.position
rockBodyPos = ob2.body.position

var distance = dist(rockBodyPos.x,rockBodyPos.y,mangoBodyPos.x,mangoBodyPos.y)
if (distance<=ob1.r+ob2.r) {
	Matter.Body.setStatic(ob2.body,false);
}
}