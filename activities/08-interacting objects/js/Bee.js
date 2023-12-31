class Bee {

    // constructor() sets uo our staring properties
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 40;
        this.minSize = 10; // if we get smaller than this min then we're dead
        this.maxSize = 40;
        this.vx = 0;
        this.vy = 0;
        this.speed = 5;
        this.shrinkRate = 0.05; // how much smaller we get each frame
        this.growRate = 0.05; // 
        this.jitteriness = 0.1; // how likely the bee is to change direction
        this.alive = true; // the bee starts out alive  

    }

    // shrink() causes the bee to get smaller over time 
    shrink() {
        // shrink by reducing the size by a set amount 
        this.size = this.size - this.shrinkRate;
        // check if we're smaller than the minimum size
        if (this.size < this.minSize) {
            this.alive = false;
        }
    }

    tryToPollinate(flower) {
        let d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.size / 2 + flower.size / 2, + flower.petalThickness) {
            this.grow();
            flower.pollinate();
        }
    }

    grow() {
        this.size = this.size + this.growRate;
        this.size = constrain(this.size, this.minSize, this.maxSize);

    }

    // move() moves the bee by potentially changing the direction and then changing the position based on velocity 
    move() {
        // first check if we should change direction 
        let r = random(0, 1);
        if (r < this.jitteriness) {
            this.vx = random(-this.speed, this.speed);
            this.vy = random(-this.speed, this.speed);
        }

        // update the positions with velocity to actually move
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        //constrain to the canvas (guess it's a walled garden!)
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    // display() draws our bee onto the canvas
    display() {
        push();
        // wings on either side
        fill(255, 255, 255);
        noStroke();
        ellipse(this.x - this.size / 2, this.y, this.size / 2);
        ellipse(this.x + this.size / 2, this.y, this.size / 2);
        pop();

        // Body 
        push();
        fill(255, 255, 50);
        noStroke();
        ellipse(this.x, this.y, this.size);
        pop();

        // eyes
        push();
        fill(0, 0, 0);
        noStroke();
        ellipse(this.x - this.size / 10, this.y, this.size / 10);
        ellipse(this.x + this.size / 10, this.y, this.size / 10);
        pop();
    }
}