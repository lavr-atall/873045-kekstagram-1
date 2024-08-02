// Генератор комментариев
const bigPicture = document.querySelector('.big-picture');

const bigPictureCommentsGenerator = (comments) => {
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

export {bigPictureCommentsGenerator};
