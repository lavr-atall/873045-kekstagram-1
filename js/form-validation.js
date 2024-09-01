import { isEscapeKey } from './util.js';
import './image-filters.js';
import { isValid } from './validation.js';
import { reset as resetValidation } from './validation.js';
import { showSuccessPopup, showErrorPopup } from './popups.js';
import { reset as resetZoom } from './image-scale.js';
import {reset as resetEffect} from './image-filters.js';
import { removeEscapeControl, setEscapeControl } from './keydown-control.js';
import { UPLOAD_SERVER_URL } from './const.js'

const form = document.querySelector('.img-upload__form');
const fileUpload = document.querySelector('#upload-file');
const fileUploadCloseButton = document.querySelector('#upload-cancel');
const fileUploadOverlay = document.querySelector('.img-upload__overlay');
const hashtagField = fileUploadOverlay.querySelector('.text__hashtags');
const commentField = fileUploadOverlay.querySelector('.text__description');

//Закрытие модального окна загрузки
const closeFileUploadModal = () => {
  fileUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  fileUploadCloseButton.removeEventListener('click', onCloseButtonClick);
  form.reset();
  resetZoom();
  resetEffect();
  resetValidation();
};

const canBeClosed = () => document.activeElement !== hashtagField && document.activeElement !== commentField;

//Открытие модального окна загрузки
fileUpload.addEventListener('change', () => {
  fileUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  fileUploadCloseButton.addEventListener('click', onCloseButtonClick);
  setEscapeControl(closeFileUploadModal, canBeClosed);
});


const onCloseButtonClick = (evt) => {
  evt.preventDefault();
  closeFileUploadModal();
  removeEscapeControl();
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {

    fetch(UPLOAD_SERVER_URL, {
      method: 'POST',
      body: new FormData(form)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        closeFileUploadModal();
        removeEscapeControl();
        showSuccessPopup();
      })

      .catch((error) => {
        showErrorPopup();
      });
  }
});
export { closeFileUploadModal };
