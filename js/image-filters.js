const EFFECTS = [
  /* no effect */ { min: 0, max: 1, step: 0.1, filter: '' },
  /* chrome */ { min: 0, max: 1, step: 0.1, filter: 'grayscale' },
  /* sepia */ { min: 0, max: 1, step: 0.1, filter: 'sepia' },
  /* marvin */ { min: 0, max: 100, step: 1, filter: 'invert' },
  /* phobos */ { min: 0, max: 3, step: 0.1, filter: 'blur' },
  /* heat */ { min: 1, max: 3, step: 0.1, filter: 'brightness' }
];

const effectsSwitcherList = document.querySelectorAll('.effects__radio');
const effectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const imagePreview = document.querySelector('.img-upload__preview img');
const DEFAULT_EFFECT = EFFECTS[0];
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
  sliderElement.noUiSlider.set(effect.max);
};

effectsSwitcherList.forEach((effectRadio) => {
  effectRadio.addEventListener('click', () => {
    imagePreview.className = ''; // Сброс всех классов
    effectLevel.classList.remove('hidden'); // Показать уровень эффекта

    if (effectRadio.id === 'effect-chrome') {
      imagePreview.classList.add('effects__preview--chrome');
      updateSlider(EFFECTS[1]);
    } else if (effectRadio.id === 'effect-sepia') {
      imagePreview.classList.add('effects__preview--sepia');
      updateSlider(EFFECTS[2]);
    } else if (effectRadio.id === 'effect-marvin') {
      imagePreview.classList.add('effects__preview--marvin');
      updateSlider(EFFECTS[3]);
    } else if (effectRadio.id === 'effect-phobos') {
      imagePreview.classList.add('effects__preview--phobos');
      updateSlider(EFFECTS[4]);
    } else if (effectRadio.id === 'effect-heat') {
      imagePreview.classList.add('effects__preview--heat');
      updateSlider(EFFECTS[5]);
    } else if (effectRadio.id === 'effect-none') {
      effectLevel.classList.add('hidden'); // Скрыть уровень эффекта
      imagePreview.style.filter = ''; // Сбросить фильтр
      updateSlider(EFFECTS[0]);
    }
  });
});

// Обновление фильтра при изменении значения слайдера
sliderElement.noUiSlider.on('update', (values, handle) => {
  const value = values[handle];
  if (chosenEffect.filter === 'blur') {
    imagePreview.style.filter = `${chosenEffect.filter}(${value}px)`;
  } else if (chosenEffect.filter === 'invert') {
    imagePreview.style.filter = `${chosenEffect.filter}(${value}%)`;
  } else {
    imagePreview.style.filter = `${chosenEffect.filter}(${value})`;
  }
});

export { updateSlider };
