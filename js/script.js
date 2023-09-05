let swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,

  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

});

let searchBox = document.querySelector ('.search');
let loupeBtn = document.querySelector ('.search__btn--loupe')
let closeBtn = document.querySelector ('.search__btn--close')
let inputSearh = document.querySelector ('.search__input')


loupeBtn.addEventListener("click", () =>{
  searchBox.classList.add("active");
  loupeBtn.classList.add("active");
  inputSearh.classList.add('active');
  closeBtn.classList.add('active');
});

closeBtn.addEventListener("click", () =>{
  searchBox.classList.remove('active');
  loupeBtn.classList.remove('active');
  inputSearh.classList.remove('active');
  closeBtn.classList.remove('active');

});

// BURGER

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function () {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__menu--active');
  document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function (el) {

  el.addEventListener('click', function () {

    menu.classList.remove('header__menu--active');
    burger.classList.remove('burger--active');
    document.body.classList.remove('stop-scroll');


  })

});

// WORK-STYLE NAV (TABS)

let tabsBtn = document.querySelectorAll('.nav-wstyle__btn');
let tabsItem = document.querySelectorAll('.wstyle-articles');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('nav-wstyle__btn--active')});
    e.currentTarget.classList.add('nav-wstyle__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('wstyle-articles--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('wstyle-articles--active');
  });
});


// ACCORDION

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,
  openOnInit: [0],
    collapse: true
});
})












