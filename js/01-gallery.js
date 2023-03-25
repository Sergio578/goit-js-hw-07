import { galleryItems } from './gallery-items.js';



const containerGallery = document.querySelector(".gallery");

const galleryDemo = galleryItems
  .map(
    (element) =>
      `<li class= "gallery__item">
      <a class= "gallery__link" href="${element.original}">
        <img
            class= "gallery__image"
            src= "${element.preview}"
            data-source= "${element.original}"
            alt= "${element.description}"
          />
      </a>
    </li>`
  )
  .join("");

containerGallery.insertAdjacentHTML("afterbegin", galleryDemo);
containerGallery.addEventListener("click", originalIMage); 

function originalIMage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  instance.show();

  containerGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}



