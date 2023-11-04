/**
 * 7.1 Eat em up - done
 * 7.2 Introducing Arrays - done
 * 7.3 The Nature of Arrays - started
 * Taylor McArthur
 * 
 * 
 */

"use strict";
// an array to store our images
let images = [];

// a variable to store the image we want to display 
let displayImage;


//PreLoad() loads 10 images
function preload() {
    images[0] = loadImage(`assets/images/clown-0.png`);
    images[1] = loadImage(`assets/images/clown-1.png`);
    images[2] = loadImage(`assets/images/clown-2.png`);
    images[3] = loadImage(`assets/images/clown-3.png`);
    images[4] = loadImage(`assets/images/clown-4.png`);
    images[5] = loadImage(`assets/images/clown-5.png`);
    images[6] = loadImage(`assets/images/clown-6.png`);
    images[7] = loadImage(`assets/images/clown-7.png`);
    images[8] = loadImage(`assets/images/clown-8.png`);
    images[9] = loadImage(`assets/images/clown-9.png`);
}

//setup() selects the image to display randomly
function setup() {
    createCanvas(600, 600);
    // choose an image to display randomly from the array 
    displayImage = random(images);
}

//draw() displays the randomly chosen image
function draw() {
    background(0);
    // display the randomly selected image
    imageMode(CENTER);
    image(displayImage, width / 2, height / 2);
}













