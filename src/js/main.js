"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

/* Pierwszy sposób na zapisanie localStorage */

/* const key = new Date().toISOString().slice(0, 10);
const addBtn = document.querySelector('.button-add--js');
const removeBtn = document.querySelector('.button-remove--js');
let counterSpan = document.querySelector('.span-counter--js'), count = 0;
let counterContent = counterSpan.innerHTML = count;
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
  colorChange(x);
  counterContent.innerHTML = count += 1;
  localStorage.setItem(key, counterSpan.innerHTML);
})

removeBtn.addEventListener('click', (x) => {
  colorChange(x);
  if (count == 0) {
    counterSpan.innerHTML = 0;
  } else {
    counterSpan.innerHTML = count -- 1;
  }
  localStorage.setItem(key, counterSpan.innerHTML);
})



console.log(`Hello world!`); */


/* Drugi sposób na zapisanie localStorage */

const key = new Date().toISOString().slice(0, 10);
const addBtn = document.querySelector('.button-add--js');
const removeBtn = document.querySelector('.button-remove--js');
const counterSpan = document.querySelector('.span-counter--js');
let   counterValue = document.querySelector('.span-counter--js').innerHTML;
const svgWater = document.querySelector('.img__water--js');
const presentValue = parseInt(localStorage.getItem(key));

function colorChange (x) {
  if (counterValue >= 10) {
    svgWater.style.fill = '#5500ff';
  }
  else {
    svgWater.style.fill = '#2196F3';
  }
}

addBtn.addEventListener('click', function () {
  colorChange();
  counterValue++;
  document.querySelector('.span-counter--js').innerHTML = counterValue;
  localStorage.setItem(key, counterValue);
})

removeBtn.addEventListener('click', function () {
colorChange();
if (counterValue > 0) {
  counterValue--;
  document.querySelector('.span-counter--js').innerHTML = counterValue;
  localStorage.setItem(key, counterValue);
} else {
  countervalue = 0;
}
}) 