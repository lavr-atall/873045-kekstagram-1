const USERNAMES =
  [
    'Артём',
    'Кекс',
    'Саша',
    'Юля',
    'Лена',
  ];

const COMMENTMESSAGE =
  [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];


const PHOTODESCRIPTION =
  [
    'Закат на берегу океана',
    'Уютный кофейный уголок с книгой',
    'Радостный день на природе с семьей',
    'Городской пейзаж с высоты птичьего полета',
    'Восход солнца в горах'
  ];

import { getRandomDigits, getRandomInteger, createRandomFromRangeGenerator } from './util.js';

// Генерация id фото и url
const generatePhotoIdAndUrl = createRandomFromRangeGenerator(1, 25);

//Генератор массива фотокарточки
const mockPhotos = [];

for (let i = 0; i < 15; i++) {
  const idAndUrl = generatePhotoIdAndUrl();
  const userPhotoParams = {
    id: idAndUrl,
    url: `photos/${idAndUrl}.jpg`,
    description: PHOTODESCRIPTION[getRandomDigits(0, PHOTODESCRIPTION.length - 1)],
    likes: getRandomDigits(1, 50),
    comments: [],
  };

  const generateCommentsQty = getRandomInteger(0, 15);

  for (let j = 0; j < generateCommentsQty; j++) {
    const singleComment = {
      id: getRandomInteger(1, 25),
      avatar: `img/avatar-${getRandomDigits(1, 6)}.svg`,
      message: COMMENTMESSAGE[getRandomDigits(0, COMMENTMESSAGE.length - 1)],
      name: USERNAMES[getRandomDigits(0, USERNAMES.length - 1)],
    };
    userPhotoParams.comments.push(singleComment);
  }

  mockPhotos.push(userPhotoParams);
}

export { mockPhotos };
