// Генератор комментариев

const bigPicture = document.querySelector('.big-picture');
const commentsContainer = bigPicture.querySelector('.social__comments');
const singleCommentTemplate = commentsContainer.querySelector('.social__comment');
const statistic = bigPicture.querySelector('.social__comment-count');
const loaderButton = bigPicture.querySelector('.comments-loader');

const localComment = [];
let renderedComments = 0;
let total = 0;
const COMMENTS_NUMBER = 5;

const renderStatistic = () => {
  statistic.innerHTML = `${renderedComments} из <span class="comments-count">${total}</span> комментариев`;
};

const renderLoader = () => {
  if(localComment.length){
    loaderButton.classList.remove('hidden');
  }else{
    loaderButton.classList.add('hidden');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComment.splice(0, COMMENTS_NUMBER).forEach((comment) => {
    const commentElement = singleCommentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    fragment.append(commentElement);

    renderedComments++;
  });
  commentsContainer.append(fragment);

  renderStatistic();
  renderLoader();
};

const bigPictureCommentsGenerator = (comments) => {
  localComment.length = 0;
  localComment.push(...comments.slice());
  commentsContainer.innerHTML = '';
  renderedComments = 0;
  total = comments.length;
  renderComments();

};

loaderButton.addEventListener('click', renderComments);

export { bigPictureCommentsGenerator };
