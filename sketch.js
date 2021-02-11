var canvas;
var surface1, surface2, surface3, surface4, edges;
var box;
var music1,music2,music3,music4;

function preload(){
    music1 = loadSound("music.mp3");
    music2 = loadSound("music_2.mp3");
    music3 = loadSound("music_3.mp3");
    music4 = loadSound("music_4.mp3")


}

function setup(){ 
    canvas = createCanvas(800,600);

    surface1=createSprite(100,600,200,30);
    surface1.shapeColor="Red";
    surface2=createSprite(300,600,180,30);
    surface2.shapeColor="Green";
    surface3=createSprite(500,600,180,30);
    surface3.shapeColor="Blue";
    surface4=createSprite(700,600,200,30);
    surface4.shapeColor="Yellow";

    //surfaceTop=createSprite(0, 0, 1600, 1);
    //surfaceTop.shapeColor = "Red";
   
    //create box sprite and give velocity
    box=createSprite(random(20,750),400,40,40);
    box.shapeColor="white";
    box.velocityX=6;
    box.velocityY=10;
}

function draw() {
    background(rgb(10,169,169));

    edges = createEdgeSprites();
    box.bounceOff(edges);
 
    //add condition to check if box touching surface and change the box's color
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        music1.play();
        music2.stop();
        music3.stop();
        music4.stop();
        box.shapeColor="red";
    }
    if(surface2.isTouching(box)){
        music1.stop();
        music2.stop();
        music3.stop();
        music4.stop();
        box.velocityX=0;
        box.shapeColor="green";   
    }                            
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        music1.stop();
        music2.stop();
        music3.play();
        music4.stop();
        box.shapeColor="blue";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        music1.stop();
        music2.stop();
        music3.stop();
        music4.play();
        box.shapeColor="yellow";
    }

    // if (surface2.isTouching(box)){
    //     music1.stop();
    //     music2.stop();
    //     music3.stop();
    //     music4.stop();
    //     box.velocityX=0;
    //     box.shapeColor= rgb(255,128,0);
    // }

    drawSprites();
}
