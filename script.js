// Add project exaples to DOM

const works = document.createElement('div');
works.classList.add('works');

projects.forEach(project => {
  const figure = document.createElement('figure');
  const a = document.createElement('a');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');
  a.href = project.href;
  // on lazyImage for every img
  img.src = projects[0].imageSrc;
  img.setAttribute('data-src', project.imageSrc);
  img.alt = project.title;
  a.append(img);
  figure.append(a);
  figcaption.textContent = project.title;
  figure.append(figcaption);
  works.append(figure);
});

document.querySelector('main').append(works);

// Add dessapear of scroll wown effect 

const displayHeight = document.documentElement.clientHeight;

const observer = new IntersectionObserver(
  entries => {
    entries[0].target.style.opacity = entries[0].isIntersecting ? '1': '0';
  },
  {
    rootMargin: `-${displayHeight / 2}px 0px 0px 0px`
  }
);
observer.observe(document.querySelector('.scroll'));

// Add lazy download of images
const imageObserver = new IntersectionObserver( (entries, imgObs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      imgObs.unobserve(lazyImage);
    }
  });
  },
  {
    rootMargin: "0px 0px 100px 0px"
  }
);
document.querySelectorAll('img').forEach( img => {
  imageObserver.observe(img);
})
