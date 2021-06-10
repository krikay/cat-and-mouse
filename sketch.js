
function preload() {
    //load the images here
    bgimage=loadImage("images/garden.png")
    catimage1=loadAnimation("images/cat1.png")
    mouseimage1=loadAnimation("images/mouse1.png")
    catimage2=loadAnimation("images/cat2.png, images/cat3.png")
    mouseimage2=loadAnimation("images/mouse2.png, images/mouse3.png")
    catimage3=loadAnimation("images/cat4.png")
    mouseimage3=loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    var cat=createSprite(40,50,20,20);
    cat.addAnimation(catimage1);

    var mouse=createSprite(20,50,20,20);
    mouse.addAnimation(mouseimage1);

    var bg=createSprite(20,20,1000,800);
    bg=addImage(bgimage);
}

function draw() {

    background("bgimage");
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
mouse.addAnimation("mousehappy",mouseimage3);
mouse.changeAnimation("mousehappy");
cat.addAnimation("cathappy",catimage3);
cat.changeAnimation("cathappy");
cat.velocityX=0;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimage2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
}

}
