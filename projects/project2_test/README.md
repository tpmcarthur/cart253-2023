# Project 2

This is the beginning stages of my prototype project2. I wanted to explore generated art with code and object oriented programming to create a meaningful project. I decided I wanted to create something honouring the passing of my mushum MacNeil McArthur (Sweetgrass Echo Lodge). He always told us the Milky Way is the river in the sky and where we will go after we have had our time on this earth. His influence led to a passion for the wonders of the sky and has inspired a lot of my work. Now, when I look up to the stars I know one more has been added as his spirit is up there. 

I wanted to recreate globular clusters, a main one in the middle representing him and his spirit. I want there to be 8 smaller ones around him to represent his kids; my mom, aunties and uncles. Extending outwards are smaller ones representing us grandkids (27 grandchildren). We have an image of his ECG. Lastly I want to incorporate the sound of his heartbeat and have the brightness of the emissive points to be audio reactive, rippling outwards like a wave. Extending his never ending love for his family and culture that will always live within us. 

//Soundwave, maybe for later?

-Converting the ECG into a soundwave would mean I would need to digitize the image. Hi-res to get an accurate conversion.

-Data extraction. I would have to find image processing tools to extract the numerical data from the ECG image, each peak and valley in the ECG corresponds to a specific voltage. (Find someone who works with signal processing or software like MATLAB).

-Time VS Voltage. X-axis of ECG represents time and Y-axis represents the voltage. Map the voltage amplitudes to a frequency range that the human ear can hear.

-Soundwave. Into research I found I would have to use Python or something that has libraries like NumPy and SciPy to generate a soundwave, then map the voltage values to the amplitude of the soundwave at each corresponding time point

-Audio output. Save the generated as an audio file. WAV or MP3

I wanted to have a point cloud or point particle system encapsulating a chosen constellation in the Milky Way. I wanted it to have some 3 dimensionality meaning you can click and drag to rotate around the point cloud (mouseOnClick()). I also wanted to explore more with colours. I came across some articles that mentioned using a CIE XYZ colour model. That focuses more on HSL (hue, saturation, brightness and alpha). I wanted the entire piece to be glowing using a bloom effect. Lastly I want to incorporate the sound of his heartbeat and have the brightness of the emissive points to be audio reactive. 

// Sources Below 

//Glow Effect P5js

https://www.youtube.com/watch?v=iIWH3IUYHzM 

//Lerp Color
https://editor.p5js.org/kjhollen/sketches/232-JFW4Gf

// Math Random 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 