# Project 2 - Artist Statement

In the early phases of my prototype project, I embarked on a journey that intertwines art with code and object-oriented programming. My aim was not just to create art, but to weave a story of connection and remembrance. This project is a tribute to my Mushum, MacNeil McArthur (Sweetgrass Echo Lodge), whose tales under the night sky ignited a lifelong fascination and love for the celestial realms. His stories were not just narratives; they were a bridge to the stars, where I now feel his presence.

Central to my creation are clusters of stars, with the Pleiades constellation at its heart, symbolizing Mushum and his indomitable spirit. Surrounding him are smaller constellations, each representing family members, echoing the bond we shared. I chose the constellations of Virgo and Cancer to represent my mother and me, a nod to our zodiacal connections.

As the clusters come into view, a heartbeat sound emerges, a metaphor for enduring love and connection. This sound is a homage to Mushum, who deeply loved his eight children and over 27 grandchildren. To me, he was more than a grandfather in those formative years—he was a father figure, a guiding star. 

Mushum believed in the persistence of energy, teaching us that it can never be destroyed. Although his physical heart stopped beating on October 21, 2023, his energy and love continue to resonate through his descendants and everyone he touched. My last memory of him is laced with pride and encouragement, as I stood on the brink of a new chapter in Montreal. His words, imbued with pride for my venture into uncharted territories, resonate with me as a beacon of his enduring spirit and love.

This project is more than an artistic endeavor; it is a cosmic echo of my Mushum's teachings, love, and legacy—a constellation of memories and an eternal bond that stretches beyond the earthly plane.










//Future developments and ideas below to explore

We have an image of his ECG. Lastly I want to incorporate the sound of his heartbeat and have the brightness of the emissive points to be audio reactive, rippling outwards like a wave. Extending his never ending love for his family and culture that will always live within us. 

//Soundwave, maybe for later?
-Converting the ECG into a soundwave would mean I would need to digitize the image. Hi-res to get an accurate conversion.

-Data extraction. I would have to find image processing tools to extract the numerical data from the ECG image, each peak and valley in the ECG corresponds to a specific voltage. (Find someone who works with signal processing or software like MATLAB).

-Time VS Voltage. X-axis of ECG represents time and Y-axis represents the voltage. Map the voltage amplitudes to a frequency range that the human ear can hear.

-Soundwave. Into research I found I would have to use Python or something that has libraries like NumPy and SciPy to generate a soundwave, then map the voltage values to the amplitude of the soundwave at each corresponding time point

-Audio output. Save the generated as an audio file. WAV or MP3

I want to have a point cloud or point particle system encapsulating a chosen constellation in the Milky Way. I wanted it to have some 3 dimensionality meaning you can click and drag to rotate around the point cloud (mouseOnClick()). I also wanted to explore more with colours. I came across some articles that mentioned using a CIE XYZ colour model. That focuses more on HSL (hue, saturation, brightness and alpha). I wanted the entire piece to be glowing using a bloom effect. Lastly I want to incorporate the sound of his heartbeat and have the brightness of the emissive points to be audio reactive. 

// Sources Below //

//Glow Effect P5js

https://www.youtube.com/watch?v=iIWH3IUYHzM 

//Lerp Color
https://editor.p5js.org/kjhollen/sketches/232-JFW4Gf

// Math Random 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 

//Text Fade in 
https://editor.p5js.org/remarkability/sketches/rtM08miUD  

//Push/Pop
https://p5js.org/reference/#/p5/push 

//loop(); noLoop();
https://p5js.org/reference/#/p5/noLoop 

//getLevel
https://p5js.org/reference/#/p5.Amplitude/getLevel 

//Random lines Generation, used source code, modified and changed 

//User Profile, Okazz 

https://openprocessing.org/user/128718?view=sketches&o=32 

//Sketch 

https://openprocessing.org/sketch/883474 

