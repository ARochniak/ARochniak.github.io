const imgTemplate = (options, lazyImg) => {
  const { href, imageSrc, title } = options;
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
  `;
};

export default imgTemplate;
