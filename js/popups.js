import { removeEscapeControl, setEscapeControl } from './keydown-control.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const closeSuccessPopup = () => {
    document.querySelector('.success').remove();
}

export const showSuccessPopup = () => {
    const successMessage = successMessageTemplate.cloneNode(true);
    successMessage.addEventListener('click', ({target}) => {
        if(target.classList.contains('success') || target.classList.contains('success__button')){
            closeSuccessPopup();
            removeEscapeControl();
        }
    })
    document.body.append(successMessage);
    setEscapeControl(closeSuccessPopup)
};

const closeErrorPopup = () => {
    document.querySelector('.error').remove();
}

export const showErrorPopup = () => {
    const errorMessage = errorMessageTemplate.cloneNode(true);
    errorMessage.addEventListener('click', ({target}) => {
        if(target.classList.contains('error') || target.classList.contains('error__button')){
            closeErrorPopup();
            removeEscapeControl();
        }
    })
    document.body.append(errorMessage);
    setEscapeControl(closeErrorPopup)
};