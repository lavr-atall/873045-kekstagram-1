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
    document.querySelector('.data-loading__error').classList.remove('hidden');
    return null;
  });
