import { isEscapeKey } from './util.js';

const stack = [];
let listener = null;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const lastIndex = stack.length - 1;
    if(stack[lastIndex].condition && !stack[lastIndex].condition()){
      return;
    }
    stack[lastIndex].closeFunction();
    stack.length = stack.length - 1;
    if (!stack.length) {
      document.removeEventListener('keydown', onDocumentKeydown);
      listener = null;
    }
  }
};

export const setEscapeControl = (closeFunction, condition = null) => {
  stack.push({
    closeFunction,
    condition
  });
  if (!listener) {
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

export const removeEscapeControl = () => {
  stack.length = stack.length - 1;
  if (!stack.length) {
    document.removeEventListener('keydown', onDocumentKeydown);
    listener = null;
  }
};
