paper.install(window)
paper.setup('myCanvas')
const screenW = view.size.width
const screenH = view.size.height

const random = (min, max) => {
    return Math.random() * (max - min) + min;
}

const makeRandomBubble = () => {
    const x = random(0, screenW);       // some number between zero and the screen width
    const y = random(0, screenH);       // some number between zero and the screen height
    const r = random(5, 40);            // some number between 5 and 40
    const bubble = new Path.Circle({
        center: new Point(x, y),
        radius: r,
        strokeColor: '#FFF'
    });
    return bubble;
};

/* TODO: instead of repeating makeBubble();
   over and over again, use a loop to repeat it
   as many times as you like. NOTE: this file
   uses a JavaScript library called Paper.js
*/
let i = 0;

while(i < 100) {
makeRandomBubble();
i += 1;
view.draw()
}
