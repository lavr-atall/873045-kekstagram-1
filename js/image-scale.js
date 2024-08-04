const imagePreviewContainer = document.querySelector('.img-upload__preview-container');
const zoomOut = imagePreviewContainer.querySelector('.scale__control--smaller');
const zoomIn = imagePreviewContainer.querySelector('.scale__control--bigger');
const scaleControlOutput = imagePreviewContainer.querySelector('.scale__control--value');
const imagePreview = imagePreviewContainer.querySelector('.img-upload__preview img');
let zoomValue = parseInt(scaleControlOutput.value, 10);
const MIN_SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

zoomValue = DEFAULT_SCALE;
function updateZoom() {
  scaleControlOutput.value = `${zoomValue }%`;
  imagePreview.style.transform = `scale(${ zoomValue / 100 })`;
}

zoomIn.onclick = function() {
  if (zoomValue < MAX_SCALE) {
    zoomValue += MIN_SCALE_STEP;
    updateZoom();
  }

};

zoomOut.onclick = function() {
  if (zoomValue > MIN_SCALE) {
    zoomValue -= MIN_SCALE_STEP;
    updateZoom();
  }

};

updateZoom();

export {updateZoom};
