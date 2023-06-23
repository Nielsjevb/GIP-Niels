window.addEventListener('load', function() {
    var preloader = document.querySelector('.screen');
    var overlay = document.querySelector('.overlay');
    var content = document.querySelector('.content');
    var minimumTime = 500; // 1 second

    var startTime = performance.now();
    var elapsedTime = 0;

    function hidePreloader() {
      var remainingTime = minimumTime - elapsedTime;
      if (remainingTime <= 0) {
        preloader.classList.add('fade-out');
        overlay.classList.add('hide');
        setTimeout(function() {
          preloader.style.display = 'none';
          content.classList.add('interactive');
        }, 500);
      } else {
        setTimeout(hidePreloader, remainingTime);
      }
    }

    function updateElapsedTime() {
      elapsedTime = performance.now() - startTime;
    }

    hidePreloader();
    setInterval(updateElapsedTime, 100);
  });

var preloader = document.querySelector('.screen');
var overlay = document.querySelector('.overlay');
var content = document.querySelector('.content');

function hidePreloader() {
  preloader.classList.add('fade-out');
  overlay.classList.add('hide');
  setTimeout(function() {
    preloader.style.display = 'none';
    content.classList.add('interactive');
  }, 0);
}

window.addEventListener('load', hidePreloader);
