import { RENDER_DELAY } from './const.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const debounce = (callback, timeoutDelay = RENDER_DELAY) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, args), timeoutDelay);
  };
};

export {
  isEscapeKey,
  debounce
};
