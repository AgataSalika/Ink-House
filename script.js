
// /*=============== BURGER MENU===============*/
const burgerMenu = document.querySelector('.burger');
const burger = document.querySelector('.burgerMenu__container')
const cardContainer = document.querySelector('.reproductions__bottom_flex');
const btnGermany = document.getElementById('germany');
const btnFrance = document.getElementById('france');
const btnEngland = document.getElementById('england');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active')
  burger.classList.toggle('hidden')
  /*=============== ЧТОБЫ ЗАФИКСИРОВАТЬ КРЕСТИК===============*/
  if (!burger.classList.contains('hidden'))
    document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})

const france = [
  {
    id: 1, author: 'Марсель Руссо', title: 'Охота Амура', description: 'Холст, масло (50х80)'
    , price: '14 500 руб', url: 'rep_01.jpeg'
  },
  {
    id: 2, author: 'Анри Селин', title: 'Дама с собачкой', description: 'Акрил, бумага (50х80)'
    , price: '16 500 руб', url: 'rep_02.jpeg'
  },
  {
    id: 3, author: 'Франсуа Дюпон', title: 'Процедура', description: 'Цветная литография (40х60)'
    , price: '20 000 руб', url: 'rep_03.jpeg'
  },
  {
    id: 4, author: 'Луи Детуш', title: 'Роза', description: 'Бумага, акрил (50х80)'
    , price: '12 000 руб', url: 'rep_04.jpeg'
  },
  {
    id: 5, author: 'Франсуа Дюпон', title: 'Птичья трапеза', description: 'Цветная литография (40х60)'
    , price: '12 500 руб', url: 'rep_05.jpeg'
  },
  {
    id: 6, author: 'Пьер Моранж', title: 'Пейзаж с рыбой', description: 'Цветная литография (40х60) '
    , price: '20 000 руб', url: 'rep_06.jpeg'
  },

]

const germany = [
  {
    id: 1, author: 'Курт Вернер', title: 'Над городом', description: 'Цветная литография (40х60)'
    , price: '16 000 руб', url: 'Germany_1.jpeg'
  },
  {
    id: 2, author: 'Макс Рихтер', title: 'Птенцы', description: 'Холст, масло (50х80)'
    , price: '14 500 руб', url: 'Germany_2.jpeg'
  },
  {
    id: 3, author: 'Мартин Майер', title: 'Среди листьев', description: 'Цветная литография (40х60)'
    , price: '20 000 руб', url: 'Germany_3.jpeg'
  },
  {
    id: 4, author: 'Герман Беккер', title: 'Яркая птица', description: 'Цветная литография (40х60)'
    , price: '13 000 руб', url: 'Germany_4.jpeg'
  },
  {
    id: 5, author: 'Вульф Бауэр', title: 'Дятлы', description: 'Бумага, акрил (50х80)'
    , price: '20 000 руб', url: 'Germany_5.jpeg'
  },
  {
    id: 6, author: 'Вальтер Хартманн', title: 'Большие воды', description: 'Бумага, акрил (50х80)'
    , price: '23 000 руб', url: 'Germany_6.jpeg'
  },

]

const england = [
  {
    id: 1, author: 'Пол Смит', title: 'Дикий зверь', description: 'Акварель, бумага (50х80)'
    , price: '19 500 руб', url: 'England_01.jpg'
  },
  {
    id: 2, author: 'Джон Уайт', title: 'Скалистый берег', description: 'Цветная литография (40х60)'
    , price: '17 500 руб', url: 'England_02.jpg'
  },
  {
    id: 3, author: 'Джим Уотсон', title: 'Река и горы', description: 'Акварель, бумага (50х80)'
    , price: '20 000 руб', url: 'England_03.jpg'
  },
  {
    id: 4, author: 'Юджин Зиллион', title: 'Белый попугай', description: 'Цветная литография (40х60)'
    , price: '15 500 руб', url: 'England_04.jpg'
  },
  {
    id: 5, author: 'Эрик Гиллман', title: 'Ночная рыба', description: 'Бумага, акрил (50х80)'
    , price: '12 500 руб', url: 'England_05.jpg'
  },
  {
    id: 6, author: 'Альфред Барр', title: 'Рыжий кот', description: 'Цветная литография (40х60)'
    , price: '21 000 руб', url: 'England_06.jpg'
  },

]


function getCards(arr) {
  cardContainer.innerHTML = ''
  for (let i = 0; i <= arr.length - 1; i++) {
    // console.log(arr[i].author);
    let html =
      `
  <div class="reproductions_card">
    <img src="/img/${arr[i].url}">
      <div class="rep__micro">${arr[i].author}</div>
      <div class="rep__title">${arr[i].title}</div>
      <div class="rep__description">${arr[i].description}</div>
      <div class="rep__price">${arr[i].price}</div>
      <button class="rep__button">В корзину</button>
  </div>
    `

    cardContainer.insertAdjacentHTML('beforeend', html)
  }
}

getCards(france)
btnGermany.addEventListener('click', function () {
  getCards(germany)
  
})

btnFrance.addEventListener('click', function () {
  getCards(france)
})

btnEngland.addEventListener('click', function () {
  getCards(england)
})