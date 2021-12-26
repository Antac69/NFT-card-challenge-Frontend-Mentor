const IMAGE = document.querySelector('.card_image')
const VIEW_IMAGE = document.getElementById('image-full')
const BTN_CLOSE = VIEW_IMAGE.querySelector('button')

IMAGE.addEventListener('click',()=>VIEW_IMAGE.classList.toggle('active'))
BTN_CLOSE.addEventListener("click",()=>VIEW_IMAGE.classList.toggle('active'))