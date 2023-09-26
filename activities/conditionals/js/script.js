/**
 * Intermediate drawing 
 * Taylor McArthur
 * 
 *  
 * Styling with push() and pop (), transformations
 */

"use strict";

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
    //Red rectangle
    push(); //save defaults for ex the origin is at the top left 
    translate(100,100); //Move the origin 100 pixels right and 100 pixels down
    fill(255,0,0);
    rect(0,0,100,100);
    pop();//restore the defaults, the origin goes back to the top left

    //Blue rectangle
    push(); //save the defaults like the origin is at the top left
    translate(100,200); //Move the origin 100 pixels to the right, 200 pixels down
    fill(0,0,255);
    rect(0, 0, 100, 100);
    pop(); // restore the defaults, the origin goes back to the top left
  }

