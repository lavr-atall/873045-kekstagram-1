import { mockPhotos } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureContainer = document.querySelector('.pictures');

const createPictureTemplate = function (url, description, likes, comments) {
  const singlePictureTemplate = pictureTemplate.cloneNode(true);

  singlePictureTemplate.querySelector('.picture__img').src = url;
  singlePictureTemplate.querySelector('.picture__img').alt = description;
  singlePictureTemplate.querySelector('.picture__likes').textContent = likes;
  singlePictureTemplate.querySelector('.picture__comments').textContent = comments.length;

  return singlePictureTemplate;
};

const renderPicture = function(userPictures) {
  for (let i = 0; i < userPictures.length; i++) {
    const { url, description, likes, comments } = userPictures[i];
    const userPicture = createPictureTemplate(url, description, likes, comments);
    pictureContainer.append(userPicture);
  }
};

export { renderPicture }
