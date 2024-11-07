
  /*=============== BURGER MENU===============*/
  const burgerMenu = document.querySelector('.burger');
  const burger = document.querySelector('.burgerMenu__container')

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle ('active')
    burger.classList.toggle ('hidden')
      /*=============== ЧТОБЫ ЗАФИКСИРОВАТЬ КРЕСТИК===============*/
    if (!burger.classList.contains('hidden'))
    document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
})