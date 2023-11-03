/**
 * 7.1 Eat em up - done
 * 7.2 Introducing Arrays
 * Taylor McArthur
 * 
 * 
 */

"use strict";

let school = []; //Create an empty array and assign it to the school variable
let schoolSize = 4;


//PreLoad
function preload() {

}

//Setup
function setup() {
    createCanvas(600, 600);


    for (let i = 0; i < schoolSize; i++) {
        //create a fish
        let fish = createFish(random(0, width), random(0, height));
        //add the fish to our array
        school.push(fish);
    }
}

//createFish(x,y)
//Creates a new javascript object describing a fish and returns it 
function createFish(x, y) {
    let fish = {
        x: x,
        y: y,
        size: 50,
        vx: 0,
        vy: 0,
        speed: 2
    };
    return fish;
}

//Draw
function draw() {
    background(0);

    for (let i = 0; i < school.length; i++) {
        moveFish(school[i]);
        displayFish(school[i]);
    }
}

// moveFish(fish)
// Chooses wether the provided fish changes direction and moves it
function moveFish(fish) {
    //Choose wether to change directions
    let change = random(0, 1);
    if (change < 0.05) {
        fish.vx = random(-fish.speed, fish.speed);
        fish.vy = random(-fish.speed, fish.speed);
    }

    //Move the fish
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;

    //Constrain the fish to the canvas
    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
function displayFish(fish) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
}

function mousePressed() {
    let fish = createFish(mouseX, mouseY); // create a fish at the mouse position
    school.push(fish); // add the fish to our array and will be moved and drawn with all the other in the for loop
}





