!function(n){var c={};function t(l){if(c[l])return c[l].exports;var e=c[l]={i:l,l:!1,exports:{}};return n[l].call(e.exports,e,e.exports,t),e.l=!0,e.exports}t.m=n,t.c=c,t.d=function(n,c,l){t.o(n,c)||Object.defineProperty(n,c,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,c){if(1&c&&(n=t(n)),8&c)return n;if(4&c&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&c&&"string"!=typeof n)for(var e in n)t.d(l,e,function(c){return n[c]}.bind(null,e));return l},t.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(c,"a",c),c},t.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},t.p="",t(t.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function() {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function(err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\nconst addBtn = document.querySelector('.button-add--js');\r\nconst removeBtn = document.querySelector('.button-remove--js');\r\nconst clearBtn = document.querySelector('.button-clear--js');\r\nconst valueSpan = document.querySelector('.span-counter--js');\r\nconst key = new Date ().toISOString().slice(0, 10);\r\nconst waterColor = document.querySelector('.img__element--fill');\r\nconst teachIcon = document.querySelector('.img-teacher--js');\r\nconst previousIcon = document.querySelector('.img-previous--js');\r\nconst infoSection = document.querySelector('.section-info--js');\r\nconst tableBtn = document.querySelector('.img-table--js');\r\nconst tablePrevBtn = document.querySelector('.img-score-previous--js');\r\nconst scoreSection = document.querySelector('.section-score--js');\r\n\r\n// color changer for the water\r\n\r\nfunction colorChanger (x) {\r\n  if (valueSpan.innerHTML > 5) {\r\n     x.style.fill = \"#2E4272\";\r\n  } else {\r\n    x.style.fill = \"#BBD7EA\";\r\n  }\r\n}\r\n\r\ncolorChanger(waterColor);\r\n\r\n// getting items from Local Storage\r\n\r\nif (localStorage[key] >= 0) {\r\n  valueSpan.innerHTML = localStorage.getItem(key);\r\n} \r\n\r\nif (valueSpan.innerHTML >= 0) {\r\n  localStorage.setItem(key, valueSpan.innerHTML);\r\n}\r\n\r\n// setting items in Local Storage\r\n\r\naddBtn.addEventListener('click', function () {\r\n  valueSpan.innerHTML++;\r\n  localStorage.setItem(key, valueSpan.innerHTML);\r\n})\r\n\r\nremoveBtn.addEventListener('click', function () {\r\n  if (valueSpan.innerHTML < 1) {\r\n    valueSpan.innerHTML++;\r\n  }\r\n  valueSpan.innerHTML--;\r\n  localStorage.setItem(key, valueSpan.innerHTML);\r\n})\r\n\r\n//removing data from local storage\r\n\r\nclearBtn.addEventListener('click', function () {\r\n  localStorage.clear();\r\n})\r\n\r\n//sections and images\r\n\r\nteachIcon.addEventListener('click', function () {\r\n  infoSection.classList.toggle('section-info--left');\r\n  teachIcon.classList.toggle('img--display');\r\n  previousIcon.classList.toggle('img--display');\r\n})\r\n\r\npreviousIcon.addEventListener('click', function () {\r\n  infoSection.classList.toggle('section-info--left');\r\n  teachIcon.classList.toggle('img--display');\r\n  previousIcon.classList.toggle('img--display');\r\n})\r\n\r\ntableBtn.addEventListener('click', function () {\r\n  scoreSection.classList.toggle('section-score--left');\r\n  tableBtn.classList.toggle('img--display');\r\n  tablePrevBtn.classList.toggle('img--display');\r\n  addBtn.classList.toggle('.button--hidden');\r\n  removeBtn.classList.toggle('.button--hidden');\r\n  clearBtn.classList.toggle('.button--hidden');\r\n})\r\n\r\ntablePrevBtn.addEventListener('click', function () {\r\n  scoreSection.classList.toggle('section-score--left');\r\n  tableBtn.classList.toggle('img--display');\r\n  tablePrevBtn.classList.toggle('img--display');\r\n  addBtn.classList.toggle('.button--hidden');\r\n  removeBtn.classList.toggle('.button--hidden');\r\n  clearBtn.classList.toggle('.button--hidden');\r\n})\r\n\r\n// scores and dates in table\r\n\r\nfor(let i = 0; i < localStorage.length; i++) {\r\n\r\n  const dataDate = localStorage.key(i);\r\n  const dataScore = localStorage.getItem(dataDate);\r\n  const tableBody = document.querySelector('.table__body--js')\r\n\r\n  tableBody.innerHTML += `<tr class=\"table__row\"><td class=\"table__detail-date\"> ${dataDate}</td><td class=\"table__detail-score\"> ${dataScore}</td>\r\n  </tr>`;\r\n\r\n  console.log(dataDate);\r\n  console.log(dataScore);\r\n}\r\n\r\n\r\n  /* function getScore() {\r\n\r\n  const tableRow = document.createElement('tr');\r\n  tableRow.classList.add('table__row');\r\n  tableBody.appendChild(tableRow);\r\n\r\n  // date \r\n  const dateElement = document.createElement('td')\r\n  dateElement.classList.add('table__detail-date');\r\n  tableRow.appendChild(dateElement);\r\n  dateElement.innerHtml = `${dataDate}`;\r\n\r\n  //score\r\n  const scoreElement = document.createElement('td');\r\n  scoreElement.classList.add('table__detail-score');\r\n  tableRow.appendChild(scoreElement);\r\n  scoreElement.innerHTML = `${dataScore}`;   - rozwiązanie, które legło :D  */\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsY0FBYyx5QkFBeUI7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQSxtRkFBbUYsU0FBUyx3Q0FBd0MsVUFBVTtBQUM5STs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixTQUFTOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XHJcblxyXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcclxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcclxuXHJcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYWRkLS1qcycpO1xyXG5jb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJlbW92ZS0tanMnKTtcclxuY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNsZWFyLS1qcycpO1xyXG5jb25zdCB2YWx1ZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Bhbi1jb3VudGVyLS1qcycpO1xyXG5jb25zdCBrZXkgPSBuZXcgRGF0ZSAoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcclxuY29uc3Qgd2F0ZXJDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWdfX2VsZW1lbnQtLWZpbGwnKTtcclxuY29uc3QgdGVhY2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy10ZWFjaGVyLS1qcycpO1xyXG5jb25zdCBwcmV2aW91c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLXByZXZpb3VzLS1qcycpO1xyXG5jb25zdCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWluZm8tLWpzJyk7XHJcbmNvbnN0IHRhYmxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy10YWJsZS0tanMnKTtcclxuY29uc3QgdGFibGVQcmV2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1zY29yZS1wcmV2aW91cy0tanMnKTtcclxuY29uc3Qgc2NvcmVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tc2NvcmUtLWpzJyk7XHJcblxyXG4vLyBjb2xvciBjaGFuZ2VyIGZvciB0aGUgd2F0ZXJcclxuXHJcbmZ1bmN0aW9uIGNvbG9yQ2hhbmdlciAoeCkge1xyXG4gIGlmICh2YWx1ZVNwYW4uaW5uZXJIVE1MID4gNSkge1xyXG4gICAgIHguc3R5bGUuZmlsbCA9IFwiIzJFNDI3MlwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB4LnN0eWxlLmZpbGwgPSBcIiNCQkQ3RUFcIjtcclxuICB9XHJcbn1cclxuXHJcbmNvbG9yQ2hhbmdlcih3YXRlckNvbG9yKTtcclxuXHJcbi8vIGdldHRpbmcgaXRlbXMgZnJvbSBMb2NhbCBTdG9yYWdlXHJcblxyXG5pZiAobG9jYWxTdG9yYWdlW2tleV0gPj0gMCkge1xyXG4gIHZhbHVlU3Bhbi5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG59IFxyXG5cclxuaWYgKHZhbHVlU3Bhbi5pbm5lckhUTUwgPj0gMCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWVTcGFuLmlubmVySFRNTCk7XHJcbn1cclxuXHJcbi8vIHNldHRpbmcgaXRlbXMgaW4gTG9jYWwgU3RvcmFnZVxyXG5cclxuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIHZhbHVlU3Bhbi5pbm5lckhUTUwrKztcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlU3Bhbi5pbm5lckhUTUwpO1xyXG59KVxyXG5cclxucmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmICh2YWx1ZVNwYW4uaW5uZXJIVE1MIDwgMSkge1xyXG4gICAgdmFsdWVTcGFuLmlubmVySFRNTCsrO1xyXG4gIH1cclxuICB2YWx1ZVNwYW4uaW5uZXJIVE1MLS07XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZVNwYW4uaW5uZXJIVE1MKTtcclxufSlcclxuXHJcbi8vcmVtb3ZpbmcgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuXHJcbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG59KVxyXG5cclxuLy9zZWN0aW9ucyBhbmQgaW1hZ2VzXHJcblxyXG50ZWFjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgaW5mb1NlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VjdGlvbi1pbmZvLS1sZWZ0Jyk7XHJcbiAgdGVhY2hJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ltZy0tZGlzcGxheScpO1xyXG4gIHByZXZpb3VzSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdpbWctLWRpc3BsYXknKTtcclxufSlcclxuXHJcbnByZXZpb3VzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBpbmZvU2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzZWN0aW9uLWluZm8tLWxlZnQnKTtcclxuICB0ZWFjaEljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaW1nLS1kaXNwbGF5Jyk7XHJcbiAgcHJldmlvdXNJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ltZy0tZGlzcGxheScpO1xyXG59KVxyXG5cclxudGFibGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgc2NvcmVTZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ3NlY3Rpb24tc2NvcmUtLWxlZnQnKTtcclxuICB0YWJsZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpbWctLWRpc3BsYXknKTtcclxuICB0YWJsZVByZXZCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnaW1nLS1kaXNwbGF5Jyk7XHJcbiAgYWRkQnRuLmNsYXNzTGlzdC50b2dnbGUoJy5idXR0b24tLWhpZGRlbicpO1xyXG4gIHJlbW92ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCcuYnV0dG9uLS1oaWRkZW4nKTtcclxuICBjbGVhckJ0bi5jbGFzc0xpc3QudG9nZ2xlKCcuYnV0dG9uLS1oaWRkZW4nKTtcclxufSlcclxuXHJcbnRhYmxlUHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICBzY29yZVNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VjdGlvbi1zY29yZS0tbGVmdCcpO1xyXG4gIHRhYmxlQnRuLmNsYXNzTGlzdC50b2dnbGUoJ2ltZy0tZGlzcGxheScpO1xyXG4gIHRhYmxlUHJldkJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdpbWctLWRpc3BsYXknKTtcclxuICBhZGRCdG4uY2xhc3NMaXN0LnRvZ2dsZSgnLmJ1dHRvbi0taGlkZGVuJyk7XHJcbiAgcmVtb3ZlQnRuLmNsYXNzTGlzdC50b2dnbGUoJy5idXR0b24tLWhpZGRlbicpO1xyXG4gIGNsZWFyQnRuLmNsYXNzTGlzdC50b2dnbGUoJy5idXR0b24tLWhpZGRlbicpO1xyXG59KVxyXG5cclxuLy8gc2NvcmVzIGFuZCBkYXRlcyBpbiB0YWJsZVxyXG5cclxuZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xyXG5cclxuICBjb25zdCBkYXRhRGF0ZSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XHJcbiAgY29uc3QgZGF0YVNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YURhdGUpO1xyXG4gIGNvbnN0IHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZV9fYm9keS0tanMnKVxyXG5cclxuICB0YWJsZUJvZHkuaW5uZXJIVE1MICs9IGA8dHIgY2xhc3M9XCJ0YWJsZV9fcm93XCI+PHRkIGNsYXNzPVwidGFibGVfX2RldGFpbC1kYXRlXCI+ICR7ZGF0YURhdGV9PC90ZD48dGQgY2xhc3M9XCJ0YWJsZV9fZGV0YWlsLXNjb3JlXCI+ICR7ZGF0YVNjb3JlfTwvdGQ+XHJcbiAgPC90cj5gO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhRGF0ZSk7XHJcbiAgY29uc29sZS5sb2coZGF0YVNjb3JlKTtcclxufVxyXG5cclxuXHJcbiAgLyogZnVuY3Rpb24gZ2V0U2NvcmUoKSB7XHJcblxyXG4gIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICB0YWJsZVJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XHJcbiAgdGFibGVCb2R5LmFwcGVuZENoaWxkKHRhYmxlUm93KTtcclxuXHJcbiAgLy8gZGF0ZSBcclxuICBjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJylcclxuICBkYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fZGV0YWlsLWRhdGUnKTtcclxuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XHJcbiAgZGF0ZUVsZW1lbnQuaW5uZXJIdG1sID0gYCR7ZGF0YURhdGV9YDtcclxuXHJcbiAgLy9zY29yZVxyXG4gIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgc2NvcmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19kZXRhaWwtc2NvcmUnKTtcclxuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChzY29yZUVsZW1lbnQpO1xyXG4gIHNjb3JlRWxlbWVudC5pbm5lckhUTUwgPSBgJHtkYXRhU2NvcmV9YDsgICAtIHJvendpxIV6YW5pZSwga3TDs3JlIGxlZ8WCbyA6RCAgKi9cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);