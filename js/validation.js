const form = document.querySelector('.img-upload__form');
const fileUploadOverlay = document.querySelector('.img-upload__overlay');
const hashtagField = fileUploadOverlay.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

//Валидация формы
import {MAX_HASHTAG_QUANTITY, REQUIRED_SIMBOLS} from './const.js';

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

  const hashtags = getHashtagsArray(value);
  for (const hashtag of hashtags) {
    if (!REQUIRED_SIMBOLS.test(hashtag)) {
      return false;
    }
  }
  return validateUniqueHashtags(value) && validateMaxNumberHashtags(value);
};

pristine.addValidator(hashtagField, validateHashtags, 'Форма не валидна');

export const isValid = () => pristine.validate();

export const reset = () => {
  pristine.reset();
};
