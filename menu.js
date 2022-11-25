const hamburger = document.querySelector('#hamburger');
const cross = document.querySelector('#cross');
const headerTag = document.querySelector('header');

hamburger.addEventListener('click', () => {
  headerTag.style.display = 'flex';
  headerTag.style.flexDirection = 'column';
  headerTag.style.width = '100%';
  headerTag.style.height = '100%';
});

cross.addEventListener('click', () => {
  headerTag.style.display = 'none';
});
