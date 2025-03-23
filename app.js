const galleryContainer = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector(".lightbox__overlay");

galleryContainer.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") return;

  lightbox.classList.add("is-open");
  lightboxImage.src = event.target.dataset.source;
  lightboxImage.alt = event.target.alt;
});

const closeModal = () => {
  lightbox.classList.remove("is-open");
  lightboxImage.src = "";
};
