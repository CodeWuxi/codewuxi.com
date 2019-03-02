import '../css/base.scss'
import '../css/index.scss'

const $D = $(document),
      $W = $(window),
      $scrollWrap = $('.scroll-wrapper'),
      $scrollSlider = $('.scroll-slider'),
      docH = $D.outerHeight(true),
      winH = $W.height()

$W.on('scroll', (e) => {
  let scrollT = $W.scrollTop()
  let scrollScale = (scrollT / (docH - winH)) * 100

  console.log('scroll', scrollScale, scrollT);
  $scrollSlider.css('height', `${100 - scrollScale}%`)
})

