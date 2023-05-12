const socialBtn = document.getElementById('social');
const navContainer = document.querySelector('.nav');
const userContainer = document.querySelector('.user')
// const returnBtn = document.querySelector('#return');

socialBtn.addEventListener('click', () => {
  navContainer.classList.remove('hidden')
//   console.log(mediaContainer)
    userContainer.style.display = 'none'

})

