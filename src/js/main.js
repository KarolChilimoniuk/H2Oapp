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

const addBtn = document.querySelector('.button-add--js');
const removeBtn = document.querySelector('.button-remove--js');
const clearBtn = document.querySelector('.button-clear--js');
const valueSpan = document.querySelector('.span-counter--js');
const key = new Date ().toISOString().slice(0, 10);
const waterColor = document.querySelector('.img__element--fill');
const teachIcon = document.querySelector('.img-teacher--js');
const previousIcon = document.querySelector('.img-previous--js');
const infoSection = document.querySelector('.section-info--js');
const tableBtn = document.querySelector('.img-table--js');
const tablePrevBtn = document.querySelector('.img-score-previous--js');
const scoreSection = document.querySelector('.section-score--js');

// color changer for the water

function colorChanger (x) {
  if (valueSpan.innerHTML > 5) {
     x.style.fill = "#2E4272";
  } else {
    x.style.fill = "#BBD7EA";
  }
}

colorChanger(waterColor);

// getting items from Local Storage

if (localStorage[key] >= 0) {
  valueSpan.innerHTML = localStorage.getItem(key);
} 

if (valueSpan.innerHTML >= 0) {
  localStorage.setItem(key, valueSpan.innerHTML);
}

// setting items in Local Storage

addBtn.addEventListener('click', function () {
  valueSpan.innerHTML++;
  localStorage.setItem(key, valueSpan.innerHTML);
})

removeBtn.addEventListener('click', function () {
  if (valueSpan.innerHTML < 1) {
    valueSpan.innerHTML++;
  }
  valueSpan.innerHTML--;
  localStorage.setItem(key, valueSpan.innerHTML);
})

//removing data from local storage

clearBtn.addEventListener('click', function () {
  valueSpan.innerHTML = 0;
  localStorage.removeItem(key);
})

//sections and images

teachIcon.addEventListener('click', function () {
  infoSection.classList.toggle('section-info--left');
  teachIcon.classList.toggle('img--display');
  previousIcon.classList.toggle('img--display');
})

previousIcon.addEventListener('click', function () {
  infoSection.classList.toggle('section-info--left');
  teachIcon.classList.toggle('img--display');
  previousIcon.classList.toggle('img--display');
})

tableBtn.addEventListener('click', function () {
  scoreSection.classList.toggle('section-score--left');
  tableBtn.classList.toggle('img--display');
  tablePrevBtn.classList.toggle('img--display');
})

tablePrevBtn.addEventListener('click', function () {
  scoreSection.classList.toggle('section-score--left');
  tableBtn.classList.toggle('img--display');
  tablePrevBtn.classList.toggle('img--display');
})

// scores and dates in table

for(let i = 0; i < localStorage.length; i++) {

  const dataDate = localStorage.key(i);
  const dataScore = localStorage.getItem(dataDate);
  const tableBody = document.querySelector('.table__body--js')

  tableBody.innerHTML += `<tr class="table__row"><td class="table__detail-date"> ${dataDate}</td><td class="table__detail-score"> ${dataScore}</td>
  </tr>`;

  console.log(dataDate);
  console.log(dataScore);
}


  /* function getScore() {

  const tableRow = document.createElement('tr');
  tableRow.classList.add('table__row');
  tableBody.appendChild(tableRow);

  // date 
  const dateElement = document.createElement('td')
  dateElement.classList.add('table__detail-date');
  tableRow.appendChild(dateElement);
  dateElement.innerHtml = `${dataDate}`;

  //score
  const scoreElement = document.createElement('td');
  scoreElement.classList.add('table__detail-score');
  tableRow.appendChild(scoreElement);
  scoreElement.innerHTML = `${dataScore}`;   - rozwiązanie, które legło :D  */



