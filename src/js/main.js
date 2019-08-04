const addBtn = document.querySelector('.button-add--js');
const removeBtn = document.querySelector('.button-remove--js');
let counterSpan = document.querySelector('.span-counter--js'), count = 0;


addBtn.addEventListener('click', (x) => {
  counterSpan.innerHTML = count += 1;
})

removeBtn.addEventListener('click', (x) => {
  if (count == 0) {
    counterSpan.innerHTML = 0;
  } else {
    counterSpan.innerHTML = count -= 1;
  }
})

console.log(`Hello world!`);


