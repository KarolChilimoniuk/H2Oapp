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

// app code

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

class o2app {
  constructor() {
    this.waterResult = 0;
  }

  setValue(resultEl) {
    localStorage[key] !== undefined? this.waterResult = localStorage.getItem(key) : 0;
    resultEl.textContent = this.waterResult;
  }

  colorChanger(resultEl) {
    if (resultEl.textContent > 5) {
      resultEl.style.fill = "#2E4272";
    } else {
      resultEl.style.fill = "#BBD7EA";
    }
  }

  setResultTable() {
    for(let i = 0; i < localStorage.length; i++) {
      const dataDate = localStorage.key(i);
      const dataScore = localStorage.getItem(dataDate);
      const tableBody = document.querySelector('.table__body--js')
    
      tableBody.innerHTML += `<tr class="table__row"><td class="table__detail-date">${dataDate}</td><td class="table__detail-score">${dataScore}</td>
      </tr>`;
    }
  }

  stylesHandler() {

    teachIcon.addEventListener('click', function () {
      infoSection.classList.toggle('section-info--left');
      teachIcon.classList.toggle('img--display');
      previousIcon.classList.toggle('img--display');
    });
    
    previousIcon.addEventListener('click', function () {
      infoSection.classList.toggle('section-info--left');
      teachIcon.classList.toggle('img--display');
      previousIcon.classList.toggle('img--display');
    });
    
    tableBtn.addEventListener('click', function () {
      scoreSection.classList.toggle('section-score--left');
      tableBtn.classList.toggle('img--display');
      tablePrevBtn.classList.toggle('img--display');
      addBtn.classList.toggle('.button--hidden');
      removeBtn.classList.toggle('.button--hidden');
      clearBtn.classList.toggle('.button--hidden');
    });
    
    tablePrevBtn.addEventListener('click', function () {
      scoreSection.classList.toggle('section-score--left');
      tableBtn.classList.toggle('img--display');
      tablePrevBtn.classList.toggle('img--display');
      addBtn.classList.toggle('.button--hidden');
      removeBtn.classList.toggle('.button--hidden');
      clearBtn.classList.toggle('.button--hidden');
    });
  }

  startApp(resultEl) {  
    this.setValue(resultEl);
    this.setResultTable();
    this.colorChanger(resultEl);
    this.stylesHandler();
    
    let currentValue = this.waterResult;

    addBtn.addEventListener('click', () => {
      currentValue++;
      resultEl.textContent = currentValue;
      localStorage.setItem(key, resultEl.textContent);
    });

    removeBtn.addEventListener('click', () => {
      if (resultEl.textContent < 1) {
        currentValue++;
      }
      currentValue--;
      resultEl.textContent = currentValue;
      localStorage.setItem(key, resultEl.textContent);
    });

    clearBtn.addEventListener('click', () => {
      currentValue = 0;
      resultEl.textContent = currentValue;
      localStorage.clear();
    });
  }
}

const app = new o2app();

app.startApp(valueSpan);
