//Video Explicativo: https://youtu.be/DHBJEd6-f_s

let y;
let x;
let l;
let z;
let i;
let inta = 40;
function preload() {
  img = loadImage ('data/Imagen.jpg');
}
function setup() {
createCanvas (800, 400);
  print ("Tocar teclado para cambiar tamaño de circulo y mouse \n para mover las lineas");
}
function draw () {
  background (255);
  image(img,0,0, 400, 400);
  //Lineas Horizontales 
{LineasH (0, 400 ); 
LineasH (200, 600);
}
//Lineas Vericales
for (let g = 600;g < 800; g+=inta){
  noStroke();
  fill(0);
rect (g, 0, 17,200 );
for (let h = 400; h < 600; h+=inta){
rect (h, 200, 17, 200);
}
}
//Circulo Medio
for (i = 210; i >28; i -= 76){
  stroke (0);
  strokeWeight(20);
fill (255);
ellipse ( 600 , 200, i, i);
}

// Animacion Mover Lineas
if (mouseIsPressed === true){
inta ++;
}
if (inta >= 200) {
inta = 40;
} else if (mouseIsPressed === false){
inta = 40;
}

// Modificar el tamaño del circulo 
if (keyIsPressed === true) {
 let d = dist(mouseX, mouseY, 600, 200);
let tam = map(d, 0, 500, 210, 0);
  ellipse(600, 200, tam, tam);
}}
