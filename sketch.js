const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var bird, slingshot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    block8 = new Box(1000, 235,90,100);

    bird = new Bird(200,40);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){

   background(0);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    
    bird.display(); 

    block8.display();

   

}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


