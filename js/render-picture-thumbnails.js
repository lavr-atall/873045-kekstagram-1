import { mockPhotos } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictureContainer = document.querySelector('.pictures');

const createPictureTemplate = (id, url, description, likes, comments) => {
  const singlePictureTemplate = pictureTemplate.cloneNode(true);

  singlePictureTemplate.querySelector('.picture__img').src = url;
  singlePictureTemplate.querySelector('.picture__img').alt = description;
  singlePictureTemplate.querySelector('.picture__likes').textContent = likes;
  singlePictureTemplate.querySelector('.picture__comments').textContent = comments.length;
  singlePictureTemplate.querySelector('.picture__img').dataset.thumbnailId = id;
  return singlePictureTemplate;
};

const renderThumbnails = (userPictures) => {
  for (let i = 0; i < userPictures.length; i++) {
    const { id, url, description, likes, comments } = userPictures[i];
    const userPicture = createPictureTemplate(id, url, description, likes, comments);
    pictureContainer.append(userPicture);
  }
};

renderThumbnails(mockPhotos);

export { renderThumbnails };

