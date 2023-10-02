/**
 * Activity 05: Looking for love
 * Taylor McArthur
 * 
 * Complete the 05 activity looking for love.
 */

"use strict";

let lover1 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy:0,
    speed: 3
}

let lover2 = {
    x: undefined,
    y: 250,
    size: 100,
    vx: 0,
    vy:0,
    speed: 3
}

let state = `title`; //Can be: title, simulation, love, sadness


/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    setUpLovers();
}

function setUpLovers(){
    //Position circles separated from one another
    lover1.x = width / 3;
    lover2.x = 2 * width / 3;

    //Start circles separated from one another
    lover1.vx = random(-lover1.speed,lover1.speed);
    lover1.vy = random(-lover1.speed,lover1.speed);

    lover2.vx = random(-lover2.speed,lover2.speed);
    lover2.vy = random(-lover2.speed,lover2.speed);
}

/**
 * Description of draw()
*/
function draw() {
    background(0);

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

}

function title(){
    push();
    textSize(64);
    fill(200,100,100);
    textAlign(CENTER,CENTER);
    text(`LOVE?`,width/2,height/2)
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
    textSize(64);
    fill(255,150,150);
    textAlign(CENTER,CENTER);
    text(`LOVE!`,width/2,height/2)
    pop();
}

function sadness(){
    push();
    textSize(64);
    fill(150,150,255);
    textAlign(CENTER,CENTER);
    text(`What is love? :(`,width/2,height/2)
    pop();
}

function move(){
    //Move the lovers
    lover1.x = lover1.x + lover1.vx;
    lover1.y = lover1.y + lover1.vy;

    lover2.x = lover2.x + lover2.vx;
    lover2.y = lover2.y + lover2.vy;
}

function checkOffScreen(){
    //Check if the lovers have gone off screen
    if (isOffScreen(lover1) || isOffScreen(lover2)){
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

function checkOverlap(){
    //Check if the lovers are overlapping
    let d = dist(lover1.x,lover1.y,lover2.x,lover2.y);
    if (d < lover1.size/2 + lover2.size/2){
        //Happily ever after
        state = `love`;
    }
}

function display(){
    //Display the lovers
    ellipse(lover1.x,lover1.y,lover1.size);
    ellipse(lover2.x,lover2.y,lover2.size);
}

function mousePressed(){
    if (state ===  `title`){
        state = `simulation`;
    }
}