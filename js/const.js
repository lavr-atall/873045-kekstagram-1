
export const EFFECTS = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const EFFECTS_SETTING = {
  [EFFECTS.DEFAULT]: { min: 0, max: 1, step: 0.1, filter: '', units: '' },
  [EFFECTS.CHROME]: { min: 0, max: 1, step: 0.1, filter: 'grayscale', units: '' },
  [EFFECTS.SEPIA]: { min: 0, max: 1, step: 0.1, filter: 'sepia', units: '' },
  [EFFECTS.MARVIN]: { min: 0, max: 100, step: 1, filter: 'invert', units: '%' },
  [EFFECTS.PHOBOS]: { min: 0, max: 3, step: 0.1, filter: 'blur', units: 'px' },
  [EFFECTS.HEAT]: { min: 1, max: 3, step: 0.1, filter: 'brightness', units: '' }
};

export const DOWNLOAD_SERVER_URL = 'https://28.javascript.htmlacademy.pro/kekstagram/data';
export const UPLOAD_SERVER_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';

export const RENDER_DELAY = 500;

export const REQUIRED_SIMBOLS = /^#[а-яА-ЯёЁa-zA-Z0-9]{1,19}$/i;
export const MAX_HASHTAG_QUANTITY = 5;

export const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif'];

export const RANDOM_SORTED_COUNT = 10;

export const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};
