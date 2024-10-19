
let totoroBackgroundImg, catBusImg, totoroImg, babyTotoroImg;
let totoroX, totoroY, babyTotoroX, babyTotoroY, catBusY, catBusX;
let imgSize = 100;

function preload(){
totoroBackgroundImg = loadImage("totorolandscape.jpg");
catBusImg = loadImage("catBus.png");
totoroImg = loadImage("totoro.png");
babyTotoroImg = loadImage("babyTotoro.png");

}
function setup(){
createCanvas (500,500);
randomPositions();

}
function draw(){

background(totoroBackgroundImg);

image(catBusImg, catBusX, catBusY, imgSize, imgSize);
image(totoroImg, totoroX, totoroY, imgSize, imgSize);
image(babyTotoroImg, babyTotoroX, babyTotoroY, imgSize, imgSize);

}

function mousePressed() {   
    randomPositions();
    pressed = true;
    print ("hi");
}

function randomPositions() {
    
    totoroX = random(0, width - imgSize);
    totoroY = random(0, height - imgSize);
    
    babyTotoroX = random(0, width - imgSize);
    babyTotoroY = random(0, height - imgSize);

    catBusX = random(0, width - imgSize);
    catBusY = random(0, height - imgSize);
  }