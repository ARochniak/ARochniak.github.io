// projects and imgTemplate added before this script

// Add project exaples to DOM
const works = document.createElement('div');
works.classList.add('works');
let worksContent = '';
projects.forEach(project => {
  worksContent += imgTemplate(project)
});
works.innerHTML = worksContent;

document.querySelector('main').append(works);

// Add dessapear of scroll wown effect 

const displayHeight = document.documentElement.clientHeight;

const observer = new IntersectionObserver(
  entries => {
    entries[0].target.style.opacity = entries[0].isIntersecting ? '0': '1';
  },
  {
    rootMargin: `0px 0px -100px 0px`
  }
);
observer.observe(document.querySelector('.scroll'));

// Add lazy download of images
const imageObserver = new IntersectionObserver( (entries, imgObs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      const picture = lazyImage.parentNode;
      const source = picture.querySelector('source');
      source.srcset = lazyImage.dataset.src+'.webp';
      lazyImage.src = lazyImage.dataset.src+'.jpg';
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

delete imgTemplate;