/**
 * Keyboard Input
 * Taylor McArthur
 * 
 * States 5.6
 */

"use strict";

let bg = 0;

let circle = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 6
};

//Preload 
function preload() {
}

//Set up
function setup() {
    createCanvas(500,500);
}

//functions written below/after handle
function draw() {
    background(bg);

    handleInput();
    move();
    display();   
}

function handleInput(){
    if(keyIsDown(LEFT_ARROW)){
        circle.vx =-circle.speed;
    }

    else if (keyIsDown(RIGHT_ARROW)){
        circle.vx = circle.speed;
    }

    else {
        circle.vx = 0;
    }

    if (keyIsDown(UP_ARROW)){
        circle.vy =-circle.speed;
    }

    else if (keyIsDown(DOWN_ARROW)){
        circle.vy = circle.speed;
    }

    else {
        circle.vy = 0;
    }

}

//Move the circle on the screen
function move(){
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
}

//Draw the circle on the screen
function display(){
    ellipse(circle.x,circle.y,circle.size);

}





