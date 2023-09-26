/**
 * Mouse Input 4.6
 * Taylor McArthur
 * 
 *  
 * Mouse input
 */

"use strict";

let lightIsOn = false;

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
   background(255);

   //Draw a red circle you can only see when the light is on
   fill(255,0,0);
   ellipse(250,250,100,100);

   //If the light is off, draw a black rectangle on top of everything else
   //to hide it (make it "dark")
   //Notice how we check if the light is not on by using in front of the variable

   if (!lightIsOn){
    fill(0);
    rect(0,0,width,height);
   }
}

function mousePressed(){
    lightIsOn = !lightIsOn;
}

