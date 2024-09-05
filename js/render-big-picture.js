import { bigPictureCommentsGenerator } from './comments-generator.js';
import { setEscapeControl, removeEscapeControl } from './keydown-control.js';
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const closeButton = bigPicture.querySelector('#picture-cancel');

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const openModal = () => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  setEscapeControl(closeModal);
};

const createBigPictureTemplate = (url, description, comments, likes) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.likes-count').textContent = likes;
};

const renderBigPicture = ({ url, description, comments, likes }) => {
  createBigPictureTemplate(url, description, comments, likes);

  bigPictureCommentsGenerator(comments);
  openModal();
};

closeButton.addEventListener('click', () => {
  closeModal();
  removeEscapeControl();
});

export { renderBigPicture, closeModal };
