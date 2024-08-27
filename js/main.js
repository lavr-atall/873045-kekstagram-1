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
const successMessageTemplate = document.querySelector('#success');
const errorMessageTemplate = document.querySelector('#error');

document.querySelector('#upload-submit').addEventListener('click', (evt) => {
  evt.preventDefault();
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

      document.body.addEventListener('click', (evt) => {
        const currentsuccessMessage = document.querySelector('.success');
        const successInner = document.querySelector('.success__inner');

        if (currentsuccessMessage) {
          if (evt.target.closest('.success__button')) {
            currentsuccessMessage.remove();
            closeFileUploadModal();
          } else if (!evt.target.closest('.success__inner')) {
            currentsuccessMessage.remove();
            closeFileUploadModal();
          }
        }
      });
    })


    .catch((error) => {
      const errorMessage = errorMessageTemplate.content.cloneNode(true);
      document.querySelector('body').append(errorMessage);

      document.body.addEventListener('click', (evt) => {
        const currentErrorMessage = document.querySelector('.error');
        const errorInner = document.querySelector('.error__inner');

        if (currentErrorMessage) {
          if (evt.target.closest('.error__button')) {
            currentErrorMessage.remove();
          } else if (!evt.target.closest('.error__inner')) {
            currentErrorMessage.remove();
          }
        }
      });

    });
});


