let activeImage = document.querySelector('.image');

const showPhoto = (e) => {
    // figure out which element the user clicked from the event object:
    const clickedElement = e.target;
    // figure out what its background image is:
    const imgURL = clickedElement.style.backgroundImage;
    console.log(imgURL);
    // PART 1:
    // 1. set the featured_image element's backgroundImage property
    //    to the imgURL associated with the image the user just clicked
    //    the photo the user just clicked on.
    // 2. add the active class to the preview_box element so that the card
    //    becomes visible to the user.
    document.querySelector('.featured_image').style.backgroundImage = imgURL;
    document.querySelector('.preview_box').className = 'preview_box active';
};


// PART 2: Replace this code with what's commented below.
//         Instead of just applying the event handler to
//         the first .card element, you want to apply it to
//         all of the card elements

const cards = document.querySelectorAll('.card');
for (card of cards) {
   card.onclick = showPhoto;
};


// PART 3: Close functionality
// a. Create a “close” function that removes the “active” class
//    from the “.preview_box” element.
// b. Attach your newly created “close” function to the onclick
//    event handler of the close button (in the upper right-hand corner).
const close = () => {
  document.querySelector('.preview_box').className = 'preview_box';
};

document.querySelector('.close').onclick = close;


// PART 4: Next functionality:
// a. Create a “next” function that switches out the “.featured_image”
//    background image to the next image in the list.
// b. Attach your newly created “next” function to the onclick event
//    handler of the “.next” button (in the upper right-hand corner).
// c. Also attach your “next” function to the onclick event handler of
//    the “.featured_image” element (so that clicking anywhere on the
//    image will advance it to the next one) — for convenience.
const next = () => {
  if (activeImage.parentElement.nextElementSibling == null) {
    activeImage = activeImage.parentElement.parentElement.firstElementChild.firstElementChild;
  } else {
    activeImage = activeImage.parentElement.nextElementSibling.firstElementChild;
  };
document.querySelector('.featured_image').style.backgroundImage = activeImage.style.backgroundImage;
};

document.querySelector('.next').onclick = next;
document.querySelector('.featured_image').onclick = next;


// PART 5: Previous functionality:
// a. Create a “previous” function that switches out the
//    “.featured_image” background image to the previous image
//    in the list.
// b. Attach your newly created “previous” function to the onclick
//    event handler of the “.prev” button (in the upper right-hand corner).
const previous = () => {
  if (activeImage.parentElement.previousElementSibling == null) {
    activeImage = activeImage.parentElement.parentElement.lastElementChild.firstElementChild;
  }
  else {
    activeImage = activeImage.parentElement.previousElementSibling.firstElementChild;
  };
document.querySelector('.featured_image').style.backgroundImage = activeImage.style.backgroundImage;
};

document.querySelector('.prev').onclick = previous;
