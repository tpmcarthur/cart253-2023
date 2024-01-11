//Creating star object

// = assignment, put objects inside variables

class Cluster {

    constructor(cluster) {
        this.cluster = cluster;

        for (let star in this.cluster) {
            let newStar = new Star(
                this.cluster[star].x,
                this.cluster[star].y,
                this.cluster[star].size
            );
            stars.push(newStar);
        }
    }
}