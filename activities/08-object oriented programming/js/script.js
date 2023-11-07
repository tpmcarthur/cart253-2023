/**
 * Object Oriented Programming
 * Taylor McArthur
 * 
 * Learning OOP
 */

"use strict";
let garden = {
    // array to store the indiviual flowers
    flowers: [],
    // how many flowers in the garden 
    numFlowers: 20,
    // the color of the grass (background)
    grassColor: {
        r: 120,
        g: 180,
        b: 120
    }
};

/**
 * Description of preload
*/
function preload() {

}


// setup() creates the canvas and the flowers in the garden
function setup() {
    createCanvas(600, 600);

    // create our flowers by counting up the number of the flowers
    for (let i = 0; i < garden.numFlowers; i++) {
        // create a new flower
        let flower = new Flower();
        // add the flower to the array of flowers
        garden.flowers.push(flower);
    }
}

// createFlower()
// Creates a new JavaScript Object describing a flower and returns it
function createFlower() {
    // create our object 
    let flower = {
        // position and size information
        x: random(0, width),
        y: random(0, height),
        size: 50,
        stemLength: 75,
        stemThickness: 10,
        petalThickness: 10,
        // color information
        stemColor: {
            r: 50,
            g: 150,
            b: 50
        },
        petalColor: {
            r: 200,
            g: 50,
            b: 50
        },
        centreColor: {
            r: 50,
            g: 0,
            b: 0
        }
    };
    return flower;
}

// displayFlower(flower)
// Displays the provided flower on the canvas
function displayFlower(flower) {
    push();
    // draw a line for the stem 
    strokeWeight(flower.stemThickness);
    stroke(flower.stemColor.r, flower.stemColor.g, flower.stemColor.b);
    line(flower.x, flower.y, flower.x, flower.y + flower.stemLength);
    // draw a circle with a heavy outline for the flower
    strokeWeight(flower.petalThickness);
    fill(flower.centreColor.r, flower.centreColor.g, flower.centreColor.b);
    stroke(flower.petalColor.r, flower.petalColor.g, flower.petalColor.b);
    ellipse(flower.x, flower.y, flower.size);
    pop();
}

// draw()
// Displays our flowers
function draw() {
    // display the grass
    background(garden.grassColor.r, garden.grassColor.b, garden.grassColor.g);

    // loop through all the flowers in the array and display them
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        displayFlower(flower);
    }

}