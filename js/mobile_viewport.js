const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
let resize;

// fix a problam with resizing on orientation change

window.addEventListener('orientationchange', function() {
  resize = true;
});

window.addEventListener('resize', () => {
  if ( resize ) {
    // setTimeout fix resing problem on chrome mobile
    setTimeout( () => {
      let vh = Math.max(document.documentElement.clientHeight, window.innerHeight) * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, 50)
  }
  resize = false;
})