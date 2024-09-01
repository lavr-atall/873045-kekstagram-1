
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
