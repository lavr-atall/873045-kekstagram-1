import { renderThumbnails } from './render-picture-thumbnails.js';
import {closeFileUploadModal} from'./form-validation.js';
//import './form-validation.js';
// import { updateZoom } from './image-scale.js';
import { closeModal } from './render-big-picture.js';
import { DOWNLOAD_SERVER_URL } from './const.js'


fetch(DOWNLOAD_SERVER_URL)
  .then((response) => response.json())
  .then((serverData) => {
    renderThumbnails (serverData);
  })

  .catch((error) => {
    document.querySelector('.data-loading__error').classList.remove('hidden');
    return null;
  });



