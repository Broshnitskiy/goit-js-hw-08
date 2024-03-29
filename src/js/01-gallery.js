// Add imports above this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryRef = document.querySelector('.gallery');


function createGalleryMarkup (items) {
    const markup = items.map(item => {
        return `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`}).join("");

    galleryRef.innerHTML = markup;
}

createGalleryMarkup(galleryItems);

new SimpleLightbox('.gallery .gallery__item', {captionsData: "alt", captionDelay: 250});