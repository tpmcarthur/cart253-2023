/**
 * 7.1 Eat em up - done
 * 7.2 Introducing Arrays - done
 * 7.3 The Nature of Arrays - started
 * Taylor McArthur
 * 
 * 
 */

"use strict";

//Our arrays of fourtunes, each of which is a string 
// Note that we still use square brackets around the array
// but now we list the elements the array should start with
// separated by commas
// As here, we can put each element on a separate line for clarity 

let soliloquy = [
    `To be, or not to be`,
    `That is the question.`,
    `Whether 'tis nobler in the mind`,
    `To suffer the slings and arrows`,
    `Of outrageous fortune`,
    `Or to take arms`,
    `Against a sea of sorrows`,
    `And by opposing end them.`
];

// We need a variable to store the current line we want to display
// It should start at ZERO because that's the first index in the array
let currentLine = 0;

//PreLoad
function preload() {

}

//Setup
function setup() {
    createCanvas(800, 800);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
}

//Draw
function draw() {
    background(0);
    // get the element in the array at the CURRENT index (starts at 0 and goes up)
    let dialog = soliloquy[currentLine];
    // display the string in that element on the canvas
    text(dialog, width / 2, height / 2);
}

// mousePressed() chooses a random fortune from the fortunes array 
function mousePressed() {
    // go to the next line in the soliloquy
    currentLine = currentLine + 1;
    // check if we've reached the length of the array
    // If we have, we've gone past the end because we started counting at 0 
    // The length of our array is 8, but the final element is at index 7
    if (currentLine === soliloquy.length) {
        // if we've gone past the end, go back to the last real element 
        currentLine = soliloquy.length - 1;
    }
}









