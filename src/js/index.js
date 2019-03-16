import '../css/index.scss'

const $D = $(document)
const $W = $(window)
const ANIMATE_TIME = 8000
$D.ready(function () {
  var imageSwiper = new Swiper ('#image-swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      type: 'custom'
    },
    autoplay: {
      delay: ANIMATE_TIME
    },
    on:{
      slideChangeTransitionEnd: function(){
        let activeIndex = $('.swiper-slide-active').data('swiper-slide-index')
        let $activePagination = $(`.swiper-pagination-item[data-index="${activeIndex}"]`)
        console.log(activeIndex);
        startProgressAnimate(activeIndex)
      },
    },
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  })
})

const startProgressAnimate = (index) => {
  let $pagination = $(`.swiper-pagination-item[data-index="${index}"]`)
  let $progress = $pagination.find('.swiper-pagintaion-progress')

  $('.swiper-pagintaion-progress').removeClass('progress-active')
  $progress.addClass('progress-active')
}
