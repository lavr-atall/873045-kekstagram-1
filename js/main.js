import { renderThumbnails } from './render-picture-thumbnails.js';
import './form-validation.js';
import { getData } from './api.js';
import { init as initFilters } from './filters.js';

getData()
  .then((serverData) => {
    renderThumbnails(serverData);
    initFilters(serverData);
  })
  .catch(() => {
    const errorPopup = document.querySelector('.data-loading__error');

    if (errorPopup) {
      errorPopup.classList.remove('hidden');
      setTimeout(() => {
        errorPopup.classList.add('hidden');
      }, 3000);
    }
    return null;
  });

