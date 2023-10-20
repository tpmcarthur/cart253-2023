/**
 * Love, actually
 * Taylor McArthur
 * 
 * Exercise Love,actually
 */

"use strict";

//Blue heart player
let player = {
    x: 100,
    y: 250,
    size: 50,
    vx: 0,
    vy:0,
    speed: 3,
    fill: 255,
    image: undefined,
};

//Read heart player
let chaser = {
    x: 100,
    y: 250,
    size: 50,
    speed: undefined,
    fill: 255,
    image: undefined,
};

let state = `title`; //Can be: title, simulation, love, sadness, its over

//Heart flat line variabe
let flatline = {
    x: 0,
    y: 300,
    size: 10,
    fill: {
        r: 255,
        g: 0,
        b: 0,
        a: 1
    }
};

let numStars = 10;

//Preload desc
function preload() {
}

//images as objects loaded in
function setup() {
    createCanvas(500,600);

    imageMode(CENTER);
    player.image = loadImage("assets/images/icy.gif")
    chaser.image = loadImage("assets/images/heart.png")
    
}

function setUpLovers(){
    //Position circles separated from one another
    player.x = width / 3;
    chaser.x = 2 * width / 3;
}

//Drawing the objects 
function draw() {
    background(0);
    // randomSeed(); // I wanted this to stop the gemeration of the stars but push and pop don't work, also doesn't work when put inside the for let i...not sure what I'm doing wrong
    noCursor();
    noStroke();

    //Static background
    push();
    for(let i = 0; i < numStars; i++){
        let x = random(0,width);
        let y = random(0,height);
        stroke(255,204,0);
        strokeWeight(1.5);
        point(x,y);
    }
    pop();

    textFont('Pixelify Sans');

    if(state === `title`){
        title();
    }

    else if (state === `simulation`) {
        simulation();
    }

    else if (state === `love`){
        love();

    }

    else if (state === `sadness`){
        sadness();
    }

    else if (state ===`itsOver`){
        itsOver();
    }

    //Follows mouse to right 
    if(mouseX > chaser.x){
        //velocity x, moves to right
        chaser.vx = 1;
    }
    //Follows mouse to left
    else if (mouseX < chaser.x){
        //velocity x, moves to left
        chaser.vx = -1;
    }

    //Follow mouse up/down
    if (mouseY > chaser.y){
        //velocity y, moves down
        chaser.vy = 1;
    }

    //Follows mouse up/down
    else if (mouseY < chaser.y){
        //velocity y, moves mouse up
        chaser.vy = -1;
    }
}

function title(){
    push();
    textSize(30);
    fill(211,211,211);
    textAlign(CENTER,CENTER);
    text(`1 N E W L U V ?:`,width/2,height/2)
    pop();
}

function simulation(){
    move();
    checkOffScreen();
    checkOverlap();
    display();
}

function love(){
    push();
    textSize(30);
    fill(255,150,150);
    textAlign(CENTER,CENTER);
    text(`i L U < 3`,width/2,height/2)
    pop();
}

function sadness(){
    push();
    textSize(30);
    fill(0,191,255);
    textAlign(CENTER,CENTER);
    text(`I S T I L L M I S S Y O U..`,width/2,height/2);
    pop();
    //Delays/pauses until the next function below
    setTimeout(changeStateToOver, 2000);
}

function changeStateToOver(){
    state = `itsOver`;  
}

//If player isn't ready for love, a flat line like a broken heart appears
function itsOver(){
    push();
    flatline.x += 1;
    fill(flatline.fill.r,flatline.fill.g,flatline.fill.b);
    ellipse(flatline.x,flatline.y,flatline.size);
    createDotTrail(flatline.x);
    pop();

    push();
    textSize(30);
    fill(211,211,211);
    textAlign(CENTER,CENTER);
    text(`T R Y A G A I N?`,width/2,height/2)
    pop();
}

//Move the lovers
function move(){
    
    //Blue heart player movement
    player.x = mouseX;
    player.y = mouseY;

    //Red heart player movement
    chaser.x += chaser.vx;
    chaser.y += chaser.vy;
}

//Check if the lovers have gone off screen
function checkOffScreen(){
    if (isOffScreen(player) || isOffScreen(chaser)){
        //sad ending 
        state = `sadness`;
    }   
}

function isOffScreen(lover){
    if (lover.x < 0 || lover.x > width || lover.y < 0 || lover.y > height){
        return true;
    }

    else{
        return false;
    }

}

//Check if the lovers are overlapping
function checkOverlap(){
    let d = dist(player.x,player.y,chaser.x,chaser.y);
    if (d < player.size/2 + chaser.size/2){
        //Happily ever after
        state = `love`;
    }
}

//Display the lovers
function display(){

    //Random movement of the estatic chaser/red heart
    chaser.speed = random(-5,5);
    chaser.x = chaser.x + chaser.speed;

    chaser.speed = random(-5,5);
    chaser.y = chaser.y + chaser.speed;

    //Displays the lovers/players
    fill(player.fill);
    image(player.image,player.x,player.y,player.size, player.size);
    
    fill(chaser.fill);
    image(chaser.image,chaser.x,chaser.y,chaser.size,chaser.size);

}

//Begins mini experience of love
function mousePressed(){
    if (state ===  `title`){
        state = `simulation`;
    }
}

//Creates a trail/flateline effect if the player runs away from love
function createDotTrail(posX){
    let trail = 300; 
    let opacity = 255;
    
    for (let currentDot = 0; currentDot < trail; currentDot++){
    push();
    posX -= 3;
    opacity -= 5

    let trailColor = color(flatline.fill.r,flatline.fill.g,flatline.fill.b);
    trailColor.setAlpha(opacity);
    fill(trailColor);

    ellipse(posX,flatline.y,flatline.size);
    pop();
    }
}