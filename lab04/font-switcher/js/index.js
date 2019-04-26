const makeBigger = () => {
   document.querySelector(".content").style.fontSize="xx-large";
};

const makeSmaller = () => {
    document.querySelector(".content").style.fontSize="small";
};

document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;
