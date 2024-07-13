//import { renderThumbnails } from './render-picture-thumbnails.js';
import { mockPhotos } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');

// Функция для создания шаблона большого изображения
const createBigPictureTemplate = function (url, description, comments, likes) {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.likes-count').textContent = likes;
};

// Функция для рендеринга большого изображения
const renderBigPicture = function (thumbnailId) {
  const photo = mockPhotos.find(function (photo) {
    return photo.id === thumbnailId;
  });

  if (photo) {
    const { url, description, comments, likes } = photo;
    createBigPictureTemplate(url, description, comments, likes);

    // Генератор комментариев
    const bigPictureCommentsGenerator = function (comments) {
      const commentsContainer = bigPicture.querySelector('.social__comments');
      const singleCommentTemplate = commentsContainer.querySelector('.social__comment');
      commentsContainer.innerHTML = '';

      comments.forEach(function (comment) {
        const commentElement = singleCommentTemplate.cloneNode(true);
        commentElement.querySelector('.social__picture').src = comment.avatar;
        commentElement.querySelector('.social__picture').alt = comment.name;
        commentElement.querySelector('.social__text').textContent = comment.message;
        commentsContainer.append(commentElement);
      });
    };

    // Вызов функции генерации комментариев
    bigPictureCommentsGenerator(comments);
  }
};

export { renderBigPicture };
