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

//Draw function calls from three others below
function draw() {
    background(0);

    paralells(100,100);
   
}

function paralells(x,y){
    for(let i = 0; i < 20; i++){
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x,y,2,50);
        x = x + 5;
    }

}



