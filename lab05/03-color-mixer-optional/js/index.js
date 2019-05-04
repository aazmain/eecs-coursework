// Challenge 1: Can you use the three text boxes to change the background color?
// Challenge 2: Can you get the background to change anytime the user updates the
//              number (so that clicking the button is not necessary)?

const redElement = document.getElementById("red");
const greenElement = document.getElementById("green");
const blueElement = document.getElementById("blue");

const updateColor = () => {
    console.log('Use the redElement, greenElement, and blueElement to set the background!')
    // change this so that it's not hard-coded:
    document.querySelector('body').style.backgroundColor = 'rgb(255, 0, 0)';
}

document.querySelector('button').onclick = updateColor;
