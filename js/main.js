import { renderThumbnails } from './render-picture-thumbnails.js';
import {closeFileUploadModal} from'./form-validation.js';
//import './form-validation.js';
import { updateZoom } from './image-scale.js';
import { closeModal } from './render-big-picture.js';

fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((serverData) => {
    renderThumbnails (serverData);
  })

  .catch((error) => {
    document.querySelector('.data-loading__error').classList.remove('hidden');
    return null;
  });

// Отправка формы
const successMessageTemplate = document.querySelector('#sucess');
const errorMessageTemplate = document.querySelector('#error');

document.querySelector('#upload-submit').addEventListener('click', (event) => {
  event.preventDefault();
  const form = document.querySelector('#upload-select-image');
  const formData = new FormData(form);

  fetch('https://28.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const successMessage = successMessageTemplate.content.cloneNode(true);
      document.querySelector('body').append(successMessage);
      const successButton = document.querySelector('.success__button');
      const currentSuccessMessage = document.querySelector('.success');

      successButton.addEventListener('click', () => {
        if (currentSuccessMessage) {
          currentSuccessMessage.remove();
          form.reset();
          closeFileUploadModal();
        }
      });

      document.addEventListener('click', () => {
        if (currentSuccessMessage) {
          currentSuccessMessage.remove();
          form.reset();
          closeFileUploadModal();
        }
      });

    })
    .catch((error) => {
      const errorMessage = errorMessageTemplate.content.cloneNode(true);
      document.querySelector('body').append(errorMessage);
      const errorButton = document.querySelector('.error__button');
      const currentErrorMessage = document.querySelector('.error');

      errorButton.addEventListener('click', () => {
        if (currentErrorMessage) {
          closeFileUploadModal();
          currentErrorMessage.remove();
        }
      });

      document.addEventListener('click', () => {
        if (currentErrorMessage) {
          currentErrorMessage.remove();
        }
      });
    });
});
