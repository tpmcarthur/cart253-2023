/**
 * 7.1 Eat em up - done
 * 7.2 Introducing Arrays
 * Taylor McArthur
 * 
 * 
 */

"use strict";

let school = []; //Create an empty array and assign it to the school variable
//PreLoad
function preload() {

}


//Setup
function setup() {
    createCanvas(600, 600);

    //Create four fish, positioned randomly, storing each one in four successive
    // spaces in our array by using the addresses `0` through `3`
    school[0] = createFish(random(0, width), random(0, height));
    school[1] = createFish(random(0, width), random(0, height));
    school[2] = createFish(random(0, width), random(0, height));
    school[3] = createFish(random(0, width), random(0, height));

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

    // moveFish(school[0]);
    // moveFish(school[1]);
    // moveFish(school[2]);
    // moveFish(school[3]);

    // displayFish(school[0]);
    // displayFish(school[1]);
    // displayFish(school[2]);
    // displayFish(school[3]);

    // Use a for loop to count from 0 up to 3
    // and move the fish at that index in the schools arrays each time -- this doesn't make sense to me, but the top part does, check in with TA
    for (let i = 0; i < 4; i++) {
        // use i as the index to get the current fish to move
        // the first time i will be 0 and the second time 1, then 2, then 3
        let fish = school[i];
        // move the fish
        moveFish(fish);
    }

    // same for displaying
    for (let i = 0; i < 4; i++) {
        let fish = school[i];
        displayFish(fish);
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
// Displays the provided fish on the canvas
function displayFish(fish) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
}




