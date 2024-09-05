
import { renderBigPicture } from './render-big-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailContainer = document.querySelector('.pictures');

const localData = [];

const createPictureTemplate = (id, url, description, likes, comments) => {
  const singlePictureTemplate = pictureTemplate.cloneNode(true);

  singlePictureTemplate.querySelector('.picture__img').src = url;
  singlePictureTemplate.querySelector('.picture__img').alt = description;
  singlePictureTemplate.querySelector('.picture__likes').textContent = likes;
  singlePictureTemplate.querySelector('.picture__comments').textContent = comments.length;
  singlePictureTemplate.dataset.thumbnailId = id;
  return singlePictureTemplate;
};

const clear = () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

const renderThumbnails = (userPictures) => {
  localData.length = 0;
  localData.push(...userPictures.slice());
  clear();
  for (let i = 0; i < userPictures.length; i++) {
    const { id, url, description, likes, comments } = userPictures[i];
    const userPicture = createPictureTemplate(id, url, description, likes, comments);
    thumbnailContainer.append(userPicture);
  }
};

thumbnailContainer.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const photoData = localData.find((item) => item.id === Number(card.dataset.thumbnailId));
    renderBigPicture(photoData);
  }
});

export { renderThumbnails };
