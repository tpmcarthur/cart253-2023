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
    //Red rectangle, no translation
    translate(100,100); //Move the origin 100 pixels right and 100 pixels down
    fill(255,0,0);
    rect(0,0,100,100);

    //Blue rectangle, translated
    translate(100,100); //Move the origin 100 pixels more to the right, 100 more pixels down
    fill(0,0,255);
    rect(0, 0, 100, 100);
  }

