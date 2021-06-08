const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var character;

function setup(){

    createCanvas(1200, 600)

    engine = Engine.create();
    world = engine.world

    ground1 = Bodies.rectangle(600, 580, 1200, 50, {isStatic: true});
    World.add(world,ground1);

    b1 = new box(700, 570);
    b2 = new box(800, 570);
    b3 = new box(700, 500);
    b4 = new box(800, 500);
    b5 = new box(700, 400);
    b6 = new box(800, 400);
      
     c1 = Bodies.circle(300, 300, 50);
     World.add(world, c1);

    var op ={
     
        bodyA: c1,
        pointB: { x: 500, y: 300},
        
    }

    chain = Matter.Constraint.create(op);
    World.add(world,chain)
    

   
}

function draw(){
    
    background(180);
    Engine.update(engine);

    rectMode(CENTER)
    rect(ground1.position.x, ground1.position.y, 1200, 50);

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();

    ellipse(c1.position.x, c1.position.y, 100,100);

    line(chain.bodyA.position.x, chain.bodyA.position.y, chain.pointB.x, chain.pointB.y);

   // drawSprites();

}

function mouseDragged() {

Matter.Body.setPosition(c1, { x:mouseX, y: mouseY } )


}