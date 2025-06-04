import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let currentQuery = '';
let totalImages = 0;
let loadedImages = 0;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  totalImages = 0;
  loadedImages = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    totalImages = data.totalHits;
    loadedImages = data.hits.length;

    hideLoader();

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'No images found. Please try another query.',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    if (loadedImages < totalImages) {
      showLoadMoreButton();
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  }

  form.reset();
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    loadedImages += data.hits.length;
    createGallery(data.hits);
    hideLoader();

    smoothScroll();

    if (loadedImages >= totalImages) {
      iziToast.info({
        title: 'End of Results',
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Failed to load more images.',
      position: 'topRight',
    });
  }
});

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery-item')
    .getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}