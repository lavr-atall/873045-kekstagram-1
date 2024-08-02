import { isEscapeKey } from './util.js';
import { renderBigPicture } from './render-big-picture.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('#picture-cancel');
const thumbnailContainer = document.querySelector('.pictures');

// Обработчик клика по контейнеру миниатюр
thumbnailContainer.addEventListener('click', (event) => {
  // Проверка, что клик был произведен по миниатюре
  const picture = event.target.closest('.picture');
  if (!picture) {
    return;
  }

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const img = picture.querySelector('.picture__img');
  const thumbnailId = +img.getAttribute('data-thumbnail-id');

  // bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  // bigPicture.querySelector('.comments-loader').classList.add('hidden');

  renderBigPicture(thumbnailId);

  // Обработчик закрытия модального окна по клавише Esc
  function onDocumentKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture();
    }
  }

  // Функция закрытия модального окна
  function closeBigPicture() {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
    closeButton.removeEventListener('click', onCloseButtonClick);
  }

  // Обработчик клика по кнопке закрытия
  function onCloseButtonClick() {
    closeBigPicture();
  }

  document.addEventListener('keydown', onDocumentKeydown);
  closeButton.addEventListener('click', onCloseButtonClick);
});
