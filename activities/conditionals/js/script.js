/**
 * Mouse Input 4.6
 * Taylor McArthur
 * 
 *  
 * Mouse input
 */

"use strict";

// Our circle object
let circle = {
    x: 250,
    y: 250,
    size: 50,
    // Because it changes size, let's set a minimum and maximum size
    minSize: 50,
    maxSize: 400,
    fill: 0,
    // We need to keep track of whether the circle is being dragged or not
    // so we know whether to move it with the mouse position
    dragging: false
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
 createCanvas(500,500);   

}

/**
 * Description of draw()
*/
function draw() {
    background(127);
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);
  }

function mousePressed(){
    let d = dist(mouseX,mouseY,circle.x,circle.y);

    if (d < circle.size / 2){
        circle.dragging = true;
    }
}

function mouseReleased(){
    circle.dragging = false;
}

function mouseDragged(){
    
    if (circle.dragging){
        circle.x = mouseX;
        circle.y = mouseY;
    }
}

function mouseWheel(event){
    circle.size += event.delta;
    circle.size = constrain(circle.size,circle.minSize,circle.maxSize);
}
