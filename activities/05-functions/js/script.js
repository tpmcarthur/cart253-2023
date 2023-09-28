/**
 * Functions
 * Taylor McArthur
 * 
 * Learning functions 5.1
 */

"use strict";

let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 1,
    vy: 0

};

//Preload 
function preload() {

}


//Set up
function setup() {
    createCanvas(500,500);

}

//Draw function calls from three others below
function draw() {
    background(0);

    move();
    wrap();
    display();

}

//moves the circle
function move() {
    
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
}

//circle grows larger and moves faster 
function wrap(){
    if (circle.x > width) {
        reset();
    }
}

//draws circle
function display(){
    fill(255,0,0);
    ellipse(circle.x,circle.y,circle.size);

}

//Creating a new function
function reset(){
    circle.x = 0;
    circle.vx = circle.vx + 2;
    circle.vy = circle.vy - 0.25;
    circle.size = circle.size + 5;

} 

//same happens as above if clicked with mouse
function mousePressed() {
    reset();
}