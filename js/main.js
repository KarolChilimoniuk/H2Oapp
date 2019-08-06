!function(n){var e={};function c(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,c),l.l=!0,l.exports}c.m=n,c.c=e,c.d=function(n,e,t){c.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},c.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},c.t=function(n,e){if(1&e&&(n=c(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var l in n)c.d(t,l,function(e){return n[e]}.bind(null,l));return t},c.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return c.d(e,"a",e),e},c.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},c.p="",c(c.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\nconst addBtn = document.querySelector('.button-add--js');\nconst removeBtn = document.querySelector('.button-remove--js');\nconst clearBtn = document.querySelector('.button-clear--js');\nconst valueSpan = document.querySelector('.span-counter--js');\nconst key = new Date ().toISOString().slice(0, 10);\nconst waterColor = document.querySelector('.img__element--fill');\nconst teachIcon = document.querySelector('.img-teacher--js');\nconst previousIcon = document.querySelector('.img-previous--js');\nconst infoSection = document.querySelector('.section-info--js');\n\nfunction colorChanger (x) {\n  if (valueSpan.innerHTML > 5) {\n     x.style.fill = \"#2E4272\";\n  } else {\n    x.style.fill = \"#BBD7EA\";\n  }\n}\n\nif (localStorage[key] >= 0) {\n  valueSpan.innerHTML = localStorage.getItem(key);\n} \n\ncolorChanger(waterColor);\n\naddBtn.addEventListener('click', function () {\n  valueSpan.innerHTML++;\n  localStorage.setItem(key, valueSpan.innerHTML);\n})\n\nremoveBtn.addEventListener('click', function () {\n  if (valueSpan.innerHTML < 1) {\n    valueSpan.innerHTML++;\n  }\n  valueSpan.innerHTML--;\n  localStorage.setItem(key, valueSpan.innerHTML);\n})\n\nclearBtn.addEventListener('click', function () {\n  valueSpan.innerHTML = 0;\n  localStorage.removeItem(key);\n})\n\nteachIcon.addEventListener('click', function () {\n  infoSection.classList.toggle('section-info--left');\n  teachIcon.classList.toggle('img--display');\n  previousIcon.classList.toggle('img--display');\n})\n\npreviousIcon.addEventListener('click', function () {\n  infoSection.classList.toggle('section-info--left');\n  teachIcon.classList.toggle('img--display');\n  previousIcon.classList.toggle('img--display');\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxuICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hZGQtLWpzJyk7XG5jb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJlbW92ZS0tanMnKTtcbmNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jbGVhci0tanMnKTtcbmNvbnN0IHZhbHVlU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGFuLWNvdW50ZXItLWpzJyk7XG5jb25zdCBrZXkgPSBuZXcgRGF0ZSAoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbmNvbnN0IHdhdGVyQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nX19lbGVtZW50LS1maWxsJyk7XG5jb25zdCB0ZWFjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLXRlYWNoZXItLWpzJyk7XG5jb25zdCBwcmV2aW91c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLXByZXZpb3VzLS1qcycpO1xuY29uc3QgaW5mb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1pbmZvLS1qcycpO1xuXG5mdW5jdGlvbiBjb2xvckNoYW5nZXIgKHgpIHtcbiAgaWYgKHZhbHVlU3Bhbi5pbm5lckhUTUwgPiA1KSB7XG4gICAgIHguc3R5bGUuZmlsbCA9IFwiIzJFNDI3MlwiO1xuICB9IGVsc2Uge1xuICAgIHguc3R5bGUuZmlsbCA9IFwiI0JCRDdFQVwiO1xuICB9XG59XG5cbmlmIChsb2NhbFN0b3JhZ2Vba2V5XSA+PSAwKSB7XG4gIHZhbHVlU3Bhbi5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xufSBcblxuY29sb3JDaGFuZ2VyKHdhdGVyQ29sb3IpO1xuXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhbHVlU3Bhbi5pbm5lckhUTUwrKztcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZVNwYW4uaW5uZXJIVE1MKTtcbn0pXG5cbnJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHZhbHVlU3Bhbi5pbm5lckhUTUwgPCAxKSB7XG4gICAgdmFsdWVTcGFuLmlubmVySFRNTCsrO1xuICB9XG4gIHZhbHVlU3Bhbi5pbm5lckhUTUwtLTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZVNwYW4uaW5uZXJIVE1MKTtcbn0pXG5cbmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YWx1ZVNwYW4uaW5uZXJIVE1MID0gMDtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn0pXG5cbnRlYWNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaW5mb1NlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnc2VjdGlvbi1pbmZvLS1sZWZ0Jyk7XG4gIHRlYWNoSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdpbWctLWRpc3BsYXknKTtcbiAgcHJldmlvdXNJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ltZy0tZGlzcGxheScpO1xufSlcblxucHJldmlvdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpbmZvU2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdzZWN0aW9uLWluZm8tLWxlZnQnKTtcbiAgdGVhY2hJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2ltZy0tZGlzcGxheScpO1xuICBwcmV2aW91c0ljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaW1nLS1kaXNwbGF5Jyk7XG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);