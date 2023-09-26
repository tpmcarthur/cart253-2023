/**
 * Movement 4.7
 * Taylor McArthur
 * 
 *  
 * Movement
 */

"use strict";

let backgroundShade = 0;
let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0, 
    vy: 0,
    ax: 0, // new acceleration in x
    ay: 0, // new acceleration in y
    maxSpeed: 2, //renamed to reflect max speed
    acceleration: 0.05 // new how much the circle can accelerate per frame
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
    background(backgroundShade);

    // If the mouse x position is GREATER than the circle x position, it must be to the RIGHT of the circle
    if (mouseX > circle.x){
        // So set the circle's x acceleration to positive to start moving it right 
        circle.ax = circle.acceleration;
    }

    // Or if the mouse x position is LESS than the circle x position, it must be to the LEFT of the circle
    else if (mouseX < circle.x){
         // So set the circle's x acceleration to negative to start it moving left 
        circle.ax = -circle.acceleration;
    }
    // If the mouse position is GREATER than the circle y position, it must be BELOW the circle
    if (mouseY > circle.y){
        // So set the circle's y acceleration to positive start it moving down
        circle.ay = circle.acceleration;
    }

    // Or if the mouse y position is LESS than the circle y position, it must be ABOVE the circle
    else if(mouseY < circle.y){
        // So set the circle's y acceleration to negative start it moving up
        circle.ay = -circle.acceleration;
    }

    // Update the circle's current velocity based on its acceleration!
    // Note that we also want to CONSTRAIN the velocity to not exceed the maximum speed
    circle.vx = circle.vx + circle.ax;
    circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);

    circle.vy = circle.vy + circle.ay;
    circle.vy = constrain(circle.vy, -circle.maxSpeed, circle.maxSpeed);

    // Then we actually APPLY these changes to `vx` and `vy` to the circle's position
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    //draw ellipse at it's new position
    ellipse(circle.x,circle.y,circle.size);
  }
