const redElement = document.getElementById("red");
const yellowElement = document.getElementById("yellow");
const blueElement = document.getElementById("blue");

const updateColor = (ev) => {
    /*
    INSTRUCTIONS: Update this function as follows:
    If red is turned on, make the background red.
    If yellow is turned on, make the background yellow.
    If blue is turned on, make the background blue.
    If red and yellow are both turned on, make the background orange.
    If red and blue are turned on, make the background purple.
    If yellow and blue are turned on, make the background green.
    If everything is turned on, then make the background black.
    */
    if (yellowElement.value === 'ON' && redElement.value === 'ON' && blueElement.value === 'ON') {
         document.body.style.backgroundColor = 'black';
     } else if (redElement.value === 'ON' && yellowElement.value === 'ON') {
         document.body.style.backgroundColor = 'orange';
     } else if (redElement.value === 'ON' && blueElement.value === 'ON') {
         document.body.style.backgroundColor = 'purple';
     } else if (yellowElement.value === 'ON' && blueElement.value === 'ON') {
         document.body.style.backgroundColor = 'green';
     } else if (redElement.value === 'ON') {
         document.body.style.backgroundColor = 'red';
     } else if (yellowElement.value === 'ON') {
         document.body.style.backgroundColor = 'yellow';
     } else if (blueElement.value === 'ON') {
         document.body.style.backgroundColor = 'blue';
     } else {
         document.body.style.backgroundColor = 'white';
     }
 };

redElement.onchange = updateColor;
yellowElement.onchange = updateColor;
blueElement.onchange = updateColor;
