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

//  First food object 

let food1 = {
    x: 250,
    y: 300,
    size: 50,
    eaten: false
};

// second food object 

let food2 = {
    x: 350,
    y: 300,
    size: 50,
    alive: false
};

let food3 = {
    x: 450,
    y: 300,
    size: 50,
    alive: false
};


function preload() {

}



function setup() {
    createCanvas(windowWidth, windowHeight);

}


function draw() {
    background(0);

    // move the user, with the mouse 
    moveUser();

    // check whethere the user has eaten the food or not
    checkFood1();
    checkFood2();
    checkFood3();

    // Display the user and the foods
    displayUser();
    displayFood(food1);
    displayFood(food2);
    displayFood(food3);

}

function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

// checks if the user overlaps the food1 object and eats it if so 
function checkFood1() {
    // we only want to check for an overlap if the food1 hasnt been eaten yet 
    if (!food1.eaten) {
        let d = dist(user.x, user.y, food1.x, food1.y);
        if (d < user.size / 2 + food1.size / 2) {
            food1.eaten = true;
        }
    }
}

// The same as above, but for food 2
function checkFood2() {
    if (!food2.eaten) {
        let d = dist(user.x, user.y, food2.x, food2.y);
        if (d < user.size / 2 + food2.size / 2) {
            food2.eaten = true;
        }
    }
}

function checkFood3() {
    if (!food3.eaten) {
        let d = dist(user.x, user.y, food3.x, food3.y);
        if (d < user.size / 2 + food3.size / 2) {
            food3.eaten = true;
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


