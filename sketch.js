const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var canon;
var bomba;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  //towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  angle = -PI/4;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  tower = new Tower(150,350,160,310);
  canon = new Canon(180, 110, 100, 50, angle); 
  bomba = new Bomba(canon.x, canon.y);                  
 }

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  tower.display();
  canon.display();
  bomba.display();
//muestra la torre(desafío 4)
 
}

function keyReleased(){
  if (keyCode === DOWN_ARROW){
    bomba.shoot();
  }

}

