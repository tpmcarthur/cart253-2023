/**
 * Eat 'em up 
 * Taylor McArthur
 * 
 * 
 */

"use strict";

// Our user, to move with the mouse
let user = {
    x: 0,
    y: 0,
    size: 100
};

//First food object 
let food1 = {
    x: 250,
    y: 300,
    size: 50,
    eaten: false //track whether the user has eaten the food
};

//Second food object 
let food2 = {
    x: 350,
    y: 300,
    size: 50,
    eaten: false //track whether the user has eaten the food
};


//PreLoad
function preload() {

}


//Setup
function setup() {
    createCanvas(windowWidth, windowHeight);

}


//Draw
function draw() {
    background(0);

    //Move the user with the mouse
    moveUser();

    //Check whether the user has eaten either the food
    checkFood1();
    checkFood2();

    //display user and foods
    displayUser();
    displayFood1();
    displayFood2();
}

//Sets the user position to the mouse position
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

//Checks if the user overlaps food1 object and eats it if so 
function checkFood1() {
    //Check for overlap the food 1 object and eats it if so
    if (!food1.eaten) {
        let d = dist(user.x, user.y, food1.x, food1.y);
        if (d < user.size / 2 + food1.size / 2) {
            food1.eaten = true;
        }
    }
}

//Same as above, but for food 2
function checkFood2() {
    if (!food2.eaten) {
        let d = dist(user.x, user.y, food2.x, food2.y);
        if (d < user.size / 2 + food2.size / 2) {
            food2.eaten = true;
        }
    }
}

//draw user as a circle
function displayUser() {
    push();
    fill(255);
    ellipse(user.x, user.y, user.size);
    pop();
}

//draw food as circle
function displayFood1() {
    //Dont want to display food1 if it's been eaten 
    if (!food1.eaten) {
        push();
        fill(255, 100, 100);
        ellipse(food1.x, food1.y, food1.size);
        pop();
    }
}

//Same as above but for food2
function displayFood2() {
    if (!food2.eaten) {
        push();
        fill(255, 100, 100);
        ellipse(food2.x, food2.y, food2.size);
    }
}