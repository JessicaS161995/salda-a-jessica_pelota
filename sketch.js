let posX;
let posY;
let diametro;
let radio;
let fondo;
let circulo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = windowHeight / 2;

  // frameRate(10);
  // print(posX);
  // posX = 234;
  // print(posX);
  // posX = posX + 25;
  // print(posX);
  // posX = posX * 2;
  // print(posX);
  // posX = posX / 5;
  // print(posX);
  // posX *= 8;
  // print(posX);
  // posX += 1;
  // print(posX);
  // posX ++ ;

  diametro = 100;
  radio = diametro / 2;
  fondo = color(25, 50, 100);
  circulo = color(random (10, 102), random (10, 102), random (10, 102));
  
}

function draw() {
  background(fondo);

  posX -= 3; 
  if(posX < - radio){
    diametro = random(10, 100);
    radio = diametro / 2; 
    fondo = color(255, random(100, 255), 50);
    circulo = color(255, random(100, 255), 255);
    posX = windowWidth + radio;


   }

  fill(circulo);
 circle(posX, posY, diametro,);
 

 print(posX);
 posY;
}


