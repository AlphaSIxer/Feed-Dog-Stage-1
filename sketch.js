var dog,sadDog,happyDog;
var add, subtract

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  add=createButton("Add Milk")
  add.position(850,300)

  subtract=createButton("Feed Doggo")
  subtract.position(750,300)
}

function draw() {
  background(46,139,87);
  drawSprites();

  if(mousePressed("Add Milk")){
    add("milk.png")
  }
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
