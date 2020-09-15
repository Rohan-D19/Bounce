const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var circle1, ground;

function setup(){
    createCanvas(200,200);
    engine = Engine.create();
    world = engine.world;

    var circles1_options ={
        restitution: 1.0
    }

    var ground_options ={
        isStatic: true
    }
    circle1 = Bodies.circle(100,100,10, circles1_options);
    World.add(world, circle1);

    ground = Bodies.rectangle(100,190,200, 20, ground_options);
    World.add(world, ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(circle1.position.x, circle1.position.y,20);

    rectMode(CENTER);
    rect(ground.position.x, ground.position.y,200,20);
}