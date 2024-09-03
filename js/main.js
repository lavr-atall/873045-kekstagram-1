import { renderThumbnails } from './render-picture-thumbnails.js';
import {closeFileUploadModal} from'./form-validation.js';
//import './form-validation.js';
// import { updateZoom } from './image-scale.js';
//import { closeModal } from './render-big-picture.js';
import { DOWNLOAD_SERVER_URL } from './const.js';
import './image-sort.js';

let savedServerData = [];

fetch(DOWNLOAD_SERVER_URL)
  .then((response) => response.json())
  .then((serverData) => {
    savedServerData = serverData;
    renderThumbnails (serverData);
  })
  .then(() => document.querySelector('.img-filters').classList.remove('img-filters--inactive'))
  .then (() => debouncedSortImages())

  .catch((error) => {
    document.querySelector('.data-loading__error').classList.remove('hidden');
    return null;
  });

// Сортировка
import { RENDER_DELAY, RANDOM_SORTED_COUNT } from './const.js';
import { getRandomInteger } from './util.js';

const setActiveButton = () => {
  const menu = document.querySelector ('.img-filters__form');
  menu.addEventListener('click', (e) => {
    if(e.target.classList.contains('img-filters__button--active')) {
      return;
    }
    e.currentTarget.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    e.target.classList.add('img-filters__button--active');
  });
};

//Сортировка по умолчанию
const sortByDefault = () => {
  renderThumbnails (savedServerData);
};

// Функция для случайного выбора объектов
const getRandom = (data, number) =>
  data.slice().sort(() => 0.5 - Math.random()).slice(0, number);

const sortByRandom = (savedServerData) => {
  const randomThumbnails = getRandom(savedServerData, RANDOM_SORTED_COUNT);
  renderThumbnails(randomThumbnails);
};

// Функция для сортировки по количеству комментариев
const sortByDiscussed = () => {
  const sortedData = savedServerData.slice().sort((a, b) => b.comments - a.comments);
  renderThumbnails(sortedData);
};

function debounce(callback, timeoutDelay = RENDER_DELAY) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, args), timeoutDelay);
  };
}

// Функция для сортировки изображений
function sortImages() {
  document.querySelector('.img-filters__form').addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.id === 'filter-default') {
      sortByDefault();
      setActiveButton();
    } else if (evt.target.id === 'filter-random') {
      sortByRandom();
      setActiveButton();
    } else if (evt.target.id === 'filter-discussed') {
      sortByDiscussed();
      setActiveButton();
    }
  });
}

const debouncedSortImages = debounce(sortImages, RENDER_DELAY);
