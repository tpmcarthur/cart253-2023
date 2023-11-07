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

function preload() {

}

// setup() creates the canvas and the flowers in the garden
function setup() {
    createCanvas(600, 600);

    // Create our flowers by counting up to the number of the flowers
    for (let i = 0; i < garden.numFlowers; i++) {
        // NEW! Create a new flower
        let flower = new Flower();
        // Add the flower to the array of flowers
        garden.flowers.push(flower);
        console.log("garden flowers array");
    }
}

function draw() {
    // Display the grass
    background(garden.grassColor.r, garden.grassColor.g, garden.grassColor.b);

    // Loop through all the flowers in the array and display them
    for (let i = 0; i < garden.flowers.length; i++) {
        let flower = garden.flowers[i];
        flower.display();
        console.log("garden flowers should be here!");
    }
}


