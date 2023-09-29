/**
 * Functions with parameters
 * Taylor McArthur
 * 
 * Learning functions 5.2
 */

"use strict";

//Preload 
function preload() {

}


//Set up
function setup() {
    createCanvas(500,500);

}

function draw() {
    background(0);

    paralells(100,100,5,15,50,6);
    paralells(200,300,20,20,10,15 );
   
}

function paralells(x,y,numLines,lineWidth,lineHeight,lineSpacing){
    for(let i = 0; i < numLines; i++){
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x,y,2,lineWidth,lineHeight);
        x = x + lineSpacing;
    }

}



