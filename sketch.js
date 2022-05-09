var bird, birdimage;
var pipe , pipeImage;
var bgImg;


function preload(){
birdimage = loadImage('./images/bird.png')
pipeImage = loadImage('./images/pipe.png')
bgImg = loadImage('./images/bg.png')
}


function setup(){
    createCanvas(800,400)

bird = (150,150,40,40)
bird.addImage(birdimage)
}

function draw(){
   
    background(bgImg)

    drawSprites();

}
