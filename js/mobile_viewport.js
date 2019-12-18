const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('orientationchange', function() {
  function resizeHandler () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.removeEventListener('resize', resizeHandler);
  }
  window.addEventListener('resize', resizeHandler);
});