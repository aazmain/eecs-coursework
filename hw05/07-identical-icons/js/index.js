const elem = document.getElementById('output');

// Todo: make
const className = 'fa-heart';

/* TODO: instead of repeating the line below
   over and over again, use a while loop to repeat it
   as many times as you like.
*/

let i=0;

while (i <100) {
elem.innerHTML += '<i class="fa ' + className + '"></i>';
i += 1;
}
