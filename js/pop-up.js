import { isEscapeKey } from './util.js';
import { renderBigPicture } from './render-big-picture.js';
const bigPicture = document.querySelector('.big-picture');
const smallPicture = document.querySelectorAll('.picture');
const closeButton = bigPicture.querySelector('#picture-cancel');

smallPicture.forEach((picture) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    const img = picture.querySelector('.picture__img');
    const thumbnailId = +img.getAttribute('data-thumbnail-id');
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    renderBigPicture(thumbnailId);

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        bigPicture.classList.add('hidden');
        document.body.classList.remove('modal-open');
      }
    });
  });

  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });
});
