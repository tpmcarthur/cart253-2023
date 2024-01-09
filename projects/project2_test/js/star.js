// ocreating star object

// = assignment, put objects inside variables

class Star {

    constructor(posX, posY, size) {
        this.x = posX;
        this.y = posY;
        this.size = size;
        this.fill = {
            h: 176,
            s: 100,
            b: 80,
            a: 99
        }
        //  Amplitude for size variation
        // this.amplitude = amplitude;
        // this.minSize = size;
        // this.maxSize = size + 10;

        // display stars
        this.display();

        // Check to see if the star(s) have been clicked
        this.clicked = false;
        // timeout ID
        this.timeoutID = null;

        // check if the star is clicked
        this.clickedStar = false;
    }

    checkClick() {
        // calculate distance between mouse position and star position 
        let d = dist(mouseX, mouseY, this.x, this.y);

        // check of mouse is within the boundaries of the star 
        if (d < this.size / 2) {
            // If clicked, play the sound
            if (!this.clickedStar) {
                this.clickedStar = true;
                state = 'writeUp';

                this.clicked = true;
            }
            else {
                this.clickedStar = false;
            }
        }
    }

    //displays the the stars with a emissive material
    display() {
        fill(this.fill.h, this.fill.s, this.fill.b, this.fill.a);

        // let level = this.amplitude.getLevel();
        // let newSize = map(level, 0, 1, this.minSize, this.maxSize);

        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = color(207, 100, 100);

        //Blur effect for glow around each star, multiple times in a for loop 
        for (let i = 0; i < 5; i++) {
            ellipse(this.x, this.y, this.size, this.size);
        }
    }
    // any methods of responding to this specfic event should be in here like mousePressed or mouseClicked. p5 events
}