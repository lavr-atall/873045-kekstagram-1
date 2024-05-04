//Функция 1
function checkPalindrome(str) {
  const strNoSpaces = str.replaceAll(' ', '');
  const string = strNoSpaces.toLowerCase();
  const strLength = string.length - 1;
  for (let i = 0; i < strLength / 2; i++) {
    const forwardCharacter = string[i];
    const backwardCharacter = string[strLength - i];
    if (forwardCharacter !== backwardCharacter) {
      return false;
    }
  }
  return true;
}

window.console.log(checkPalindrome ('Лёша на полке клопа нашёл '));

//Функция 2
function extractDigits(str) {
  let result = '';
  const string = String(str);
  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);
    if (!isNaN(char) && char !== ' ') { // Проверяем, является ли символ цифрой и не пробелом
      result += char;
    }
  }
  return result === '' ? NaN : parseInt(result, 10);
}

window.console.log (extractDigits(2023));


//Функция 3
function fixStringLength(inputString, minLength, additionalSymbol) {
  let stringLength = inputString.length;
  while (stringLength < minLength) {
    inputString = inputString.padStart(minLength, additionalSymbol);
    stringLength++;
  }
  // Обрезаем "добивку", если она слишком длинная
  const maxLength = inputString + additionalSymbol;
  if (maxLength > minLength) {
    additionalSymbol = additionalSymbol.slice(-1);
  }
  return inputString;
}

window.console.log(fixStringLength('1', 2, '0'));


//Функция 4
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

window.console.log (checkStringLength ('проверяемая строка', 20));
