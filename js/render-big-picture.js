import { mockPhotos } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');

// Функция для создания шаблона большого изображения
const createBigPictureTemplate = (url, description, comments, likes) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.likes-count').textContent = likes;
};

// Функция для рендеринга большого изображения
const renderBigPicture = (thumbnailId) => {
  const photoID = mockPhotos.find((photo) => photo.id === thumbnailId);

  if (photoID) {
    const { url, description, comments, likes } = photoID;
    createBigPictureTemplate(url, description, comments, likes);

    // Генератор комментариев
    const bigPictureCommentsGenerator = () => {
      const commentsContainer = bigPicture.querySelector('.social__comments');
      const singleCommentTemplate = commentsContainer.querySelector('.social__comment');
      commentsContainer.innerHTML = '';

      comments.forEach((comment) => {
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
