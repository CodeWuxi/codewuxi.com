import '../css/index.scss'

const $D = $(document)
const $W = $(window)
const ANIMATE_TIME = 3000

$D.ready(function () {
  var imageSwiper = new Swiper ('#image-swiper', {
    speed: 1000,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      clickable :true
    },
    autoplay: {
      delay: ANIMATE_TIME
    },
    on:{
      slideChangeTransitionStart: function() {
        let activeIndex = $('.swiper-slide-active').data('swiper-slide-index')

        startTextAnimate(activeIndex)
      },
      slideChangeTransitionEnd: function() {
        let activeIndex = $('.swiper-slide-active').data('swiper-slide-index')
        startProgressAnimate(activeIndex)
      },
    },
  })
})

const startProgressAnimate = (index) => {
  let $pagination = $(`.swiper-pagination-item[data-index="${index}"]`)
  let $progress = $pagination.find('.swiper-pagintaion-progress')

  $('.swiper-pagintaion-progress').removeClass('progress-active')
  $progress.addClass('progress-active')
}

const startTextAnimate = (index) => {
  let $text = $('.swiper-slide-active .swiper-text')

  $('.swiper-text').removeClass('text-active')
  $text.addClass('text-active')
}
