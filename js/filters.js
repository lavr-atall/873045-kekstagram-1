import { RANDOM_SORTED_COUNT, FILTERS } from './const.js';
import { renderThumbnails } from './render-picture-thumbnails.js';
import { debounce } from './util.js';

let savedServerData = [];

const setActiveButton = ({ target, currentTarget }) => {
  if (target.classList.contains('img-filters__button--active') || !target.classList.contains('img-filters__button')) {
    return;
  }
  currentTarget.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  target.classList.add('img-filters__button--active');
};

const getRandom = (data, number) =>
  data.slice().sort(() => 0.5 - Math.random()).slice(0, number);

const sortByDefault = () => {
  renderThumbnails(savedServerData);
};

const sortByRandom = () => {
  const randomThumbnails = getRandom(savedServerData, RANDOM_SORTED_COUNT);
  renderThumbnails(randomThumbnails);
};

const sortByDiscussed = () => {
  const sortedData = savedServerData.slice().sort((a, b) => b.comments.length - a.comments.length);
  renderThumbnails(sortedData);
};

const filtersActions = {
  [FILTERS.DEFAULT]: sortByDefault,
  [FILTERS.RANDOM]: sortByRandom,
  [FILTERS.DISCUSSED]: sortByDiscussed
};

document.querySelector('.img-filters__form').addEventListener('click', debounce((evt) => {
  evt.preventDefault();
  filtersActions[evt.target.id]();
}));

document.querySelector('.img-filters__form').addEventListener('click', (evt) => {
  evt.preventDefault();
  setActiveButton(evt);
});

export const init = (data) => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  savedServerData = [...data];
};
