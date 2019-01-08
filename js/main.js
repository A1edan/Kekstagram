let pictures = [];

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const descriptions = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вамиотгоняйте все сомненья. Не обижайте всех словами...',
  'Вот это тачка!'
];

const pictureAdding = (quantity) => {
  for (let i = 0; i < quantity; i++) {
    pictures[pictures.length] =
    {
      name: picNumber(),
      url: 'photos/'+picNumber()+'.jpg',
      likes: randomLike(15, 200),
      comments: comments[randomComments()],
      description: descriptions[randomDescription()]
    }
  }
};

const picNumber = () => {
   return pictures.length + 1;
};

const randomLike = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};

  const randomComments = () => {
    let random = Math.random() * comments.length;
    random = Math.floor(random);
    return random;
};

  const randomDescription = () => {
    let random = Math.random() * descriptions.length;
    random = Math.floor(random);
    return random;
};
