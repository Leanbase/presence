(function (win) {
  // H/T: https://davidwalsh.name/javascript-debounce-function
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var header = document.getElementById("blog-header-id");
  var debouncedHeaderClassCallback = debounce(function () {
    var scrollTop = document.body.scrollTop;

    if (scrollTop > 40) {
      header.classList.add('scrolling');
    } else {
      header.classList.remove('scrolling');
    }
  }, 50);


  // The rest of the code locks images when scrolling past anchor elements
  function fixImage(imageId) {
    document.getElementById(imageId).classList.add('fixed');
  }

  function lockImageToBottom(imageId) {
    document.getElementById(imageId).classList.add('lock-to-bottom');
  }

  function unfixImage(imageId) {
    document.getElementById(imageId).classList.remove('fixed');
  }

  function unlockImageToBottom(imageId) {
    document.getElementById(imageId).classList.remove('lock-to-bottom');
  }

  var debouncedScrollLocker = (function () {
    var scrollLockStarts = Array.from(document.querySelectorAll('a.scroll-lock-start'));
    scrollLockStarts.forEach(function (scrollLockStart) {
      var panelId = scrollLockStart.getAttribute('data-panel-id');
      var startPos = scrollLockStart.getBoundingClientRect().top;
      var endPos = document.querySelector('a.scroll-lock-end[data-panel-id="' + panelId + '"]').getBoundingClientRect().top;

      var panelHeight = document.getElementById(panelId).getBoundingClientRect().height;

      var startAnchorHasExitedField =  (113 > startPos);
      var endAnchorHasExitedField = (endPos < panelHeight + 80);

      if (startAnchorHasExitedField && !endAnchorHasExitedField) {
        // Second state, the screen is somewhere between the anchors.
        fixImage(panelId);
        unlockImageToBottom(panelId);
      } else if (startAnchorHasExitedField && endAnchorHasExitedField) {
        // Third state... 
        unfixImage(panelId);
        lockImageToBottom(panelId);
      } else if (!startAnchorHasExitedField && !endAnchorHasExitedField) {
        // Starting state..
        unfixImage(panelId);
        unlockImageToBottom(panelId);
      }
    });
  });

  win.addEventListener('scroll', debouncedHeaderClassCallback);
  win.addEventListener('scroll', debouncedScrollLocker);
})(window);