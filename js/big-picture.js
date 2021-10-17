import {userPosts} from './data.js';

function getBigPicture (item) {
  const bigPicture = document.querySelector('.big-picture');
  const createBigPicture = userPosts;
  const bigPictureCancel = document.querySelector('.big-picture__cancel');

  createBigPicture.forEach(({id, url, comments, likes, description}) => {
    if ( id === item) {
      bigPicture.classList.remove('hidden');
      bigPicture.querySelector('.big-picture__img').src = url;
      bigPicture.querySelector('.likes-count').textContent = likes;
      bigPicture.querySelector('.comments-count').textContent = comments.length;
      bigPicture.querySelector('.social__caption').textContent = description;
      bigPicture.querySelector('.social__comment-count').classList.add('hidden');
      bigPicture.querySelector('.comments-loader').classList.add('hidden');
      document.body.classList.add('modal-open');}
  });

  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
    }
  });
}

export {getBigPicture};
