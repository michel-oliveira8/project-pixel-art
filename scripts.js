const black = document.querySelector('#black');
const red = document.querySelector('#red');
const purple = document.querySelector('#purple');
const green = document.querySelector('#green');
const pixel = document.getElementsByClassName('pixel');
const btnClear = document.getElementById('clear-board');
const selected = document.querySelector('.selected');
const color = document.getElementsByClassName('color');
const palette = document.getElementById('color-palette');

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
purple.style.backgroundColor = 'purple';
green.style.backgroundColor = 'green';

for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', () => {
    pixel[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  });
}

function changeColor(event) {
  for(let i = 0; i < color.length; i += 1) {
    if(color [i].classList.contains('selected')){
      color [i].classList.remove('selected')
    }
  }
  const colorsSelected = event.target;
 selected.classList.remove('selected');
  colorsSelected.classList.add('selected');
}
palette.addEventListener('click', changeColor);

function clearPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
btnClear.addEventListener('click', clearPixel);
