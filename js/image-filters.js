import { EFFECTS, EFFECTS_SETTING } from './const.js';

const radiosGroup = document.querySelector('.img-upload__effects');
const effectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const imagePreview = document.querySelector('.img-upload__preview img');
const valueEffect = document.querySelector('.effect-level__value');
const DEFAULT_EFFECT = EFFECTS_SETTING[EFFECTS.DEFAULT];
let chosenEffect = DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

const updateSlider = (effect) => {
  chosenEffect = effect;
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    start: effect.max,
    step: effect.step,
  });
};

const renderSlider = () => {
  if (document.querySelector('.effects__radio:checked').value === EFFECTS.DEFAULT) {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }
};

radiosGroup.addEventListener('change', (evt) => {
  updateSlider(EFFECTS_SETTING[evt.target.value]);
  renderSlider();
});

// Обновление фильтра при изменении значения слайдера
sliderElement.noUiSlider.on('update', () => {
  const value = sliderElement.noUiSlider.get();
  valueEffect.value = value;
  if (document.querySelector('.effects__radio:checked').value === EFFECTS.DEFAULT) {
    imagePreview.style.filter = '';
  }else{
    imagePreview.style.filter = `${chosenEffect.filter}(${value}${chosenEffect.units})`;
  }
});

const reset = () => {
  document.querySelector('.img-upload__preview img').style.filter = '';
  document.querySelector('.img-upload__preview img').classList = '';
  chosenEffect = DEFAULT_EFFECT;
  effectLevel.classList.add('hidden');
  document.querySelector(`.effects__radio[value=${EFFECTS.DEFAULT}]`).checked = true;
};

reset();

export { reset };
