
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
  <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" />
  </a>
  <div class="info">
    <div class="info-item">
      <p class="label">Likes</p>
      <p class="value">${likes}</p>
    </div>
    <div class="info-item">
      <p class="label">Views</p>
      <p class="value">${views}</p>
    </div>
    <div class="info-item">
      <p class="label">Comments</p>
      <p class="value">${comments}</p>
    </div>
    <div class="info-item">
      <p class="label">Downloads</p>
      <p class="value">${downloads}</p>
    </div>
  </div>
</li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('visible');
}

export function hideLoader() {
  loader.classList.remove('visible');
}
