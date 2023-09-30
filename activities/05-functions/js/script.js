/**
 * Learning States
 * Taylor McArthur
 * 
 * States 5.5
 */

"use strict";

let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2
};


//Preload 
function preload() {

}


//Set up
function setup() {
    createCanvas(500,500);
    circle.vx = circle.speed;

}


//Displaying the text 
function draw() {
    background(0);

    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    ellipse(circle.x,circle.y,circle.size);

   
}

