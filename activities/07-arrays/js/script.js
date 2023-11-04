/**
 * 7.1 Eat em up - done
 * 7.2 Introducing Arrays - done
 * 7.3 The Nature of Arrays - started
 * Taylor McArthur
 * 
 * 
 */

"use strict";
// An array to store our images
let images = [];

// A variable to store the image we want to display
let displayImage;


// preload() loads 10 images
function preload() {
    images[0] = loadImage(`assets/images/clown-0.png`); console.log("clown img load");
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

// setup() selects the image to display randomly
function setup() {
    createCanvas(600, 600);
    // Choose an image to display randomly from the array
    displayImage = random(images);
    console.log("should be a random one");
}

// draw() displays the randomly chosen image
function draw() {
    background(0);
    // Display the randomly selected image
    imageMode(CENTER);
    image(displayImage, width / 2, height / 2);
    console.log("image should be here!");
}












