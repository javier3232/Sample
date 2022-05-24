var p1
var p2
var gamestate="ready"
var keys
var sprites
var t1ran
var t2
var img1
var img2,img3,img4
var sco=0

function preload(){
     img1 = loadImage("blue fire.png")
     img2 = loadImage("limebox.png")
     img3 = loadImage("yellowbox.png")
     img4 = loadImage("redbox.png")
}

function setup(){
    createCanvas(500,500)
    sprites();
}


function draw(){

    keys();
    //c1();
    tex();
    t1ran();
    t2();
    t4();
    t6();
    drawSprites();
}















function keys(){

background(220)

    if(keyDown("d")){
        p1.x=p1.x+2;
    }
    if(keyDown("a")){
        p1.x=p1.x-2;
    }
    if(keyDown("w")){
        p1.y=p1.y-2;
    }
    if(keyDown("s")){
        p1.y=p1.y+2;
    }
}

function sprites(){
    p1=createSprite(250,250,10,10)
    p1.addImage(img1)
    p1.scale = 0.04
    p2=createSprite(100,100,100,100)
    p2.shapeColor = "lime"
    p2.addImage(img2)
    p2.scale=0.2
}



function t2(){
    if(p1.isTouching(p2)){
        p2.remove();
        sco=sco+10
        t3();
    }
}
var p3
function t3(){
        p3=createSprite(50,50,50,50)
        p3.shapeColor = "yellow"
        p3.addImage(img3)
        p3.scale=0.15
        t1ran(); 
}

var t4
function t4(){
    if(p1.isTouching(p3)){
        p3.remove();
        t5();
    }
}

var t5
var p4
function t5(){
    p4=createSprite(25,25,25,25)
    p4.shapeColor = "red"
    p4.addImage(img4)
    sco=sco+50
    p4.scale=0.1

    t2ran(); 
}

var t6
function t6(){
    if(p1.isTouching(p4)){
        p4.remove();
        sco=sco+100
        
    }
}

var tex
function tex(){
    textSize(20);
    fill("blue")
    text("score: "+sco,10,25)
}

var c1
function c1(){
    p1.bounceOff(edges[0]);
    p1.bounceOff(edges[1]);
    p1.bounceOff(edges[2]);
    p1.bounceOff(edges[3]);
}



function t1ran(){
    if(frameCount % 20 == 0){
    p2.x=Math.round(random(0,500));
    p2.y=Math.round(random(0,500));
    
    
    }
}

var t2ran
function t2ran(){
    if(frameCount % 20 == 0){
        p3.x=Math.round(random(0,500));
        p3.y=Math.round(random(0,500));
    }
}

var t3ran
function t3ran(){
    if(frameCount % 20 == 0){
        p4.x=Math.round(random(0,500));
        p4.y=Math.round(random(0,500));
    }
}








