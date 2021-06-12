var backImage, cat,mouse,cat1,cat2,cat3,mo1,mo2,mo3
function preload() {
cat1 = loadAnimation("/images/cat1.png")
cat2 = loadAnimation("/images/cat2.png","/images/cat3.png")
cat3 = loadAnimation("/images/cat4.png")
mo1 = loadAnimation("/images/mouse1.png")
mo2 = loadAnimation("/images/mouse2.png","/images/mouse3.png")
mo3 = loadAnimation("/images/mouse4.png")
backImg = loadImage("/images/garden.png")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    cat = createSprite(width-200,height-200,10,10);
    mouse = createSprite(60,height-200,10,10);
    mouse.addAnimation("mouse1",mo1)
    mouse.addAnimation("mouse2",mo2)
    mouse.addAnimation("mouse3",mo3) 
    mouse.scale = 0.1
    cat.addAnimation("cat1",cat1)
    cat.addAnimation("cat2",cat2)
    cat.addAnimation("cat3",cat3)
    cat.scale = 0.1
    

}

function draw() {
background(backImg)
if(cat.x-mouse.x<=(cat.width-mouse.width/2)){
    cat.velocityX = 0
    cat.changeAnimation("cat3")
    mouse.changeAnimation("mouse3")
}
   

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
   cat.changeAnimation("cat2")
   cat.velocityX = -3
   mouse.changeAnimation("mouse2")

}



}
