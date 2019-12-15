const projects = [
  {
    title: "asteroids_game",
    imageSrc: "images/asteroids.webp",
    href: "https://arochniak.github.io/AsteroidsGame/"
  },
  {
    title: "calculator",
    imageSrc: "images/calculator.webp",
    href: "https://arochniak.github.io/React-Calculator/"
  },
  {
    title: "weather app",
    imageSrc: "images/weatherApp.webp",
    href: "https://arochniak.github.io/weatherapp/"
  },
  {
    title: "notes",
    imageSrc: "images/ARNotes.webp",
    href: "https://arochniak.github.io/ARNotes/"
  },
  {
    title: "simple store",
    imageSrc: "images/simpleStore.webp",
    href: "https://arochniak.github.io/simpleStore/"
  },
  {
    title: "orders manager",
    imageSrc: "images/orders.webp",
    href: "https://arochniak.github.io/orders_products/"
  }
];

const works = document.createElement("div");
works.classList.add("works");

projects.forEach(project => {
  const figure = document.createElement("figure");
  const a = document.createElement("a");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  a.href = project.href;
  img.src = project.imageSrc;
  img.alt = project.title;
  a.append(img);
  figure.append(a);
  figcaption.textContent = project.title;
  figure.append(figcaption);
  works.append(figure);
});

document.getElementsByTagName("main")[0].append(works);
