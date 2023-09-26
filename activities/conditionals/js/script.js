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
    vx: 0, //x velocity
    vy: 0, //y velocity
    speed: 1 // circle knows how fast it can move
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

    //If mouse x position is greater than the circle x position, it must be to the right of the circle
    if (mouseX > circle.x){
        //so set the circle's velocity to a positive number to move it to the right 
        circle.vx = circle.speed;
    }

    //or if the mouse x position is less than the circle x position, it must be to the left of the circle
    else if (mouseX < circle.x){
        //So set the circle's x velocity to a negative number to move it to the left 
        circle.vy = -circle.speed;
    }
    //If the mouse position is greater than the circle y position, it must be below the circle
    if (mouseY > circle.y){
        //so set the circle's x velocity to a positive number to move it down
        circle.vy = circle.speed;
    }

    //Or if the mouse y position is less than the circle y position, it must be above the circle
    else if(mouseY < circle.y){
        //so set the circle's x velocity to a negative number to move it up
        circle.vy = -circle.speed;
    }

    //then we actually apply these changes to vx and vy to the circles position
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    //draw ellipse at it's new position
    ellipse(circle.x,circle.y,circle.size);
  }
