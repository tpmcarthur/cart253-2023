//Cluster of all stars, called from the stars.js and sent information back to state allClusters to display all clusters in that state

// = assignment, put objects inside variables

class Cluster {
    // Constructor for the cluster class
    constructor(cluster) {
        //cluster is an object containing data for each star
        this.cluster = cluster;

        // loop through each star in 'cluster' object
        for (let star in this.cluster) {
            // create a new star object for each star in the cluster
            let newStar = new Star(
                this.cluster[star].x, // X pos
                this.cluster[star].y, // Y pos
                this.cluster[star].size //Size of star
            );

            //Add the created star object to the global 'stars' array
            //Handles all stars, checks clicks
            stars.push(newStar);
        }
    }
}