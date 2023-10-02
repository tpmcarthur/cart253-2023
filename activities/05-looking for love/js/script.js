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

    move();
    checkOffScreen();
    checkOverlap();
    display();
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
    if (lover1.x < 0 || lover1.x > width || lover1.y < 0 || lover1.y > height || lover2.x < 0 || lover2.x > width || lover2.y < 0 || lover2.y > height){
        //sad ending 

    }
}

function checkOverlap(){
    //Check if the lovers are overlapping
    let d = dist(lover1.x,lover1.y,lover2.x,lover2.y);
    if (d < lover1.size/2 + lover2.size/2){
        //Happily ever after
    }
}

function display(){
    //Display the lovers
    ellipse(lover1.x,lover1.y,lover1.size);
    ellipse(lover2.x,lover2.y,lover2.size);
}