const imgTemplate = options => {
  const {href, imageSrc, title} = options;
  const lazyImg = projects[0].imageSrc;
  return `
    <figure>
      <a href="${href}">
        <picture>
          <source srcset="${lazyImg}.webp" type="image/webp">
          <img src="${lazyImg}.jpg" alt="${title}" data-src="${imageSrc}">
        </picture>
      </a>
      <figcaption>
        ${title}
      </figcaption>
    </figure>
  `
}