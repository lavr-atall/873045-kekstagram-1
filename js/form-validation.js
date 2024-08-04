import { isEscapeKey } from './util.js';
import './image-filters.js';

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const fileUpload = document.querySelector('#upload-file');
const fileUploadCloseButton = document.querySelector('#upload-cancel');
const fileUploadOverlay = document.querySelector('.img-upload__overlay');
const hashtagField = fileUploadOverlay.querySelector('.text__hashtags');
const commentField = fileUploadOverlay.querySelector('.text__description');

//Открытие модального окна загрузки
fileUpload.addEventListener('change', () => {
  fileUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  fileUploadCloseButton.addEventListener('click', onCloseButtonClick);
});

//Закрытие модального окна загрузки
function closeFileUploadModal() {
  fileUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  fileUploadCloseButton.removeEventListener('click', onCloseButtonClick);
  fileUpload.value = '';
  hashtagField.value = '';
  commentField.value = '';
  pristine.reset();
}

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    if (document.activeElement !== hashtagField && document.activeElement !== commentField) {
      evt.preventDefault();
      closeFileUploadModal();
    }
  }
}

function onCloseButtonClick() {
  closeFileUploadModal();
}

//Валидация формы
const MAX_HASHTAG_QUANTITY = 5;

const getHashtagsArray = (value) => value.trim().toLowerCase().split(' ').filter((hashtag) => hashtag.trim() !== '');

const validateUniqueHashtags = (value) => {
  const hashtags = getHashtagsArray(value);
  const uniqueHashtags = new Set(hashtags);
  return hashtags.length === uniqueHashtags.size;
};

const validateMaxNumberHashtags = (value) => {
  const hashtags = getHashtagsArray(value);
  return hashtags.length <= MAX_HASHTAG_QUANTITY;
};

const validateHashtags = (value) => {
  const REQUIRED_SIMBOLS = /^#[а-яА-ЯёЁa-zA-Z0-9]{1,19}$/i;
  const hashtags = getHashtagsArray(value);
  for (const hashtag of hashtags) {
    if (!REQUIRED_SIMBOLS.test(hashtag)) {
      return false;
    }
  }
  return validateUniqueHashtags(value) && validateMaxNumberHashtags(value);
};

pristine.addValidator(hashtagField, validateHashtags, 'Форма не валидна');

fileUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    fileUpload.submit();
  }
});
