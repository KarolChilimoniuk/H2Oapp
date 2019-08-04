const addBtn = document.querySelector('.button-add--js');
const removeBtn = document.querySelector('.button-remove--js');
let counterSpan = document.querySelector('.span-counter--js'), count = 0;

const svgWater = document.querySelector('.img__water--js');

function colorChange (x) {
  if (count >= 10) {
    svgWater.style.fill = '#5500ff';
  }
  else {
    svgWater.style.fill = '#2196F3';
  }
}

addBtn.addEventListener('click', (x) => {
  colorChange(x)
  counterSpan.innerHTML = count += 1;
})

removeBtn.addEventListener('click', (x) => {
  colorChange(x)
  if (count == 0) {
    counterSpan.innerHTML = 0;
  } else {
    counterSpan.innerHTML = count -= 1;
  }
})

console.log(`Hello world!`);


