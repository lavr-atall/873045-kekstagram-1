//Генератор массива фотокарточки
const mockPhotos = [];

import { getRandomDigits, getRandomInteger, generatePhotoIdAndUrl } from './generator.js';
import { userNames, commentsMessage, photoDescriprion } from './data.js';
for (let i = 0; i < 15; i++) {
  const idAndUrl = generatePhotoIdAndUrl();
  const userPhotoParams = {
    id: idAndUrl,
    url: `photos/${idAndUrl}.jpg`,
    description: photoDescriprion[getRandomDigits(1, photoDescriprion.length - 1)],
    likes: getRandomDigits(1, 50),
    comments: [
      {
        id: getRandomInteger(1, 25),
        avatar: `img/avatar-${getRandomDigits(1, 6)}.svg`,
        message: commentsMessage[getRandomDigits(0, commentsMessage.length - 1)],
        name: userNames[getRandomDigits(0, userNames.length - 1)]
      },
      {
        id: getRandomInteger(1, 25),
        avatar: `img/avatar-${getRandomDigits(1, 6)}.svg`,
        message: commentsMessage[getRandomDigits(0, commentsMessage.length - 1)],
        name: userNames[getRandomDigits(0, userNames.length - 1)]
      }
    ]
  };

  mockPhotos.push(userPhotoParams);

}

export { mockPhotos }


