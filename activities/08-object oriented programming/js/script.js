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
        let flower = createFlower();
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


/**
 * Description of draw()
*/
function draw() {

}