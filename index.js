const socialBtn = document.getElementById('social');
const mediaContainer = document.querySelector('.media');
const userContainer = document.querySelector('.user')
// const returnBtn = document.querySelector('#return');

socialBtn.addEventListener('click', () => {
  mediaContainer.classList.remove('hidden')
//   console.log(mediaContainer)
    userContainer.style.display = 'none'

})