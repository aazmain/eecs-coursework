paper.install(window);
paper.setup('myCanvas');

const screenW = view.size.width;
const screenH = view.size.height;
const leftFishImages = [
    "http://www.foothills.net/siteadmin/ui/unify/plugins/layer-slider/examples/sliderimages/med-fish-close.png",
    "http://ian.umces.edu/imagelibrary/albums/userpics/10043/normal_ian-symbol-acanthurus-lineatus.png"
];
const rightFishImages = [
    "http://orig08.deviantart.net/392e/f/2010/139/5/1/tropical_fish_7_by_it_s.png",
    "http://i769.photobucket.com/albums/xx333/MrPoolsClosed/Tropical-Fish.png"
];

const random = function(min, max) {
    return Math.floor((Math.random() * (max + 1 - min) + min));
};
const randomDecimal = function(min, max) {
    return (Math.random() * (max - min) + min);
};

const generateFish = function(x, y, imageURL, speed, scaleFactor) {
    const raster = new Raster({
        source: imageURL,
        position: [x, y]
    });
    raster.scale(scaleFactor);
    return {
        item: raster,
        speed: speed
    };
};

const generateFishes = (numFish) => {
    const fishes = [];
    numFish = Math.round(numFish / 2);
    for (let i = 0; i < numFish; ++i) {
        //make a left moving fish and add it to the array:
        let x = random(0, screenW);
        let y = random(0, screenH);
        let url = leftFishImages[random(0, leftFishImages.length)];
        let fish = generateFish(x, y, url, -1 * randomDecimal(1, 6), randomDecimal(0.1, 0.4));
        fishes.push(fish);

        //make a right moving fish and add it to the array:
        x = random(0, screenW);
        y = random(0, screenH);
        url = rightFishImages[random(0, leftFishImages.length)];
        fish = generateFish(x, y, url, randomDecimal(1, 6), randomDecimal(0.1, 0.4));
        fishes.push(fish);
    }
    return fishes;
};

var moveFish = function (fish) {
    fish.item.position.x += fish.speed;
    if (fish.item.position.x < -100 ) {
        fish.item.position.x = screenW + 100;
    }
    if (fish.item.position.x > screenW + 100) {
        fish.item.position.x = -100;
    }
};

//call the addFish function and pass
//in the number of fish you would like to generate
//as an argument
const fishList = generateFishes(10);

view.onFrame = (event) => {
    // make a for loop that moves all 20 of the fish
    // in the fishList array
    for (fish of fishList) {
    moveFish(fish);
}
};
