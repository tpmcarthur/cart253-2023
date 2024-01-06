/**
 * 7.1 Intermediate Functions 
 * 
 * Taylor McArthur
 * 
 * Relearning intermediate functions
 */

"use strict";

// user to move with mouse 

let user = {
    x: 0,
    y: 0,
    size: 100
};

//  Foods
let food1;
let food2;
let food3;
let food4;




function preload() {

}



function setup() {
    createCanvas(windowWidth, windowHeight);

    food1 = createFood(250, windowHeight / 2);
    food2 = createFood(350, windowHeight / 2);
    food3 = createFood(450, windowHeight / 2);
    food4 = createFood(550, windowHeight / 2);
}

function createFood(x, y) {
    let food = {
        x: x,
        y: y,
        size: 50,
        alive: false
    };

    return food;

}


function draw() {
    background(0);

    // move the user, with the mouse 
    moveUser();

    // check whethere the user has eaten the food or not
    checkFood(food1);
    checkFood(food2);
    checkFood(food3);
    checkFood(food4);

    // Display the user and the foods
    displayUser();
    displayFood(food1);
    displayFood(food2);
    displayFood(food3);
    displayFood(food4);

}

function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

// checks if the user overlaps the food1 object and eats it if so 
function checkFood(food) {
    // we only want to check for an overlap if the food1 hasnt been eaten yet 
    if (!food.eaten) {
        let d = dist(user.x, user.y, food.x, food.y);
        if (d < user.size / 2 + food.size / 2) {
            food.eaten = true;
        }
    }
}

// draw the user as a circle 
function displayUser() {
    push();
    fill(255);
    ellipse(user.x, user.y, user.size);
    pop();
}
function displayFood(food) {
    if (!food.eaten) {
        push();
        fill(255, 100, 100);
        ellipse(food.x, food.y, food.size);
        pop();
    }
}


