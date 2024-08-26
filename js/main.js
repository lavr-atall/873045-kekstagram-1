import { renderThumbnails } from './render-picture-thumbnails.js';
import './popup.js';
import './form-validation.js';
import { updateZoom } from './image-scale.js';
import { renderBigPicture } from './render-big-picture.js';
//import { mockPhotos } from './data.js';


fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((serverData) => {
    renderThumbnails (serverData);
    console.log (serverData);
  })

  .catch((error) => {
    document.querySelector('.data-loading__error').classList.remove('hidden');
    return null;
  });

// renderBigPicture (mockPhotos);

