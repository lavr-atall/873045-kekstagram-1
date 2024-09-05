import './image-filters.js';
import { isValid } from './validation.js';
import { reset as resetValidation } from './validation.js';
import { showSuccessPopup, showErrorPopup } from './popups.js';
import { reset as resetZoom } from './image-scale.js';
import { reset as resetEffect } from './image-filters.js';
import { removeEscapeControl, setEscapeControl } from './keydown-control.js';
import { FILE_TYPES } from './const.js';
import { sendData } from './api.js';

const form = document.querySelector('.img-upload__form');
const fileUpload = form.querySelector('#upload-file');
const fileUploadCloseButton = form.querySelector('#upload-cancel');
const fileUploadOverlay = form.querySelector('.img-upload__overlay');
const hashtagField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');
const fileChooser = form.querySelector('#upload-select-image input[type=file]');
const preview = form.querySelector('.img-upload__preview img');
const effectsPreview = form.querySelectorAll('.effects__preview');

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

function onCloseButtonClick (evt) {
  evt.preventDefault();
  closeFileUploadModal();
  removeEscapeControl();
}

const canBeClosed = () => document.activeElement !== hashtagField && document.activeElement !== commentField;

//Открытие модального окна загрузки
fileUpload.addEventListener('change', () => {
  fileUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  fileUploadCloseButton.addEventListener('click', onCloseButtonClick);
  setEscapeControl(closeFileUploadModal, canBeClosed);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    sendData(new FormData(form))
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        closeFileUploadModal();
        removeEscapeControl();
        showSuccessPopup();
      })
      .catch(() => {
        showErrorPopup();
      });
  }
});

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const loadedFileURL = URL.createObjectURL(file);
    preview.src = loadedFileURL;
    effectsPreview.forEach((element) => {
      element.style.backgroundImage = `url(${loadedFileURL})`;
    });
  }
});

export { closeFileUploadModal };
