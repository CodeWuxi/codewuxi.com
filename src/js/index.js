import '../css/base.scss'
import '../css/index.scss'

const $D = $(document),
      $W = $(window),
      $scrollBar = $('.scroll-bar'),
      $scrollSlider = $('.scroll-slider'),
      $title = $('.cw-title'),
      docH = $D.outerHeight(true),
      winH = $W.height()

$W.on('scroll', (e) => {
  let scrollT = $W.scrollTop()
  let scrollScale = (scrollT / (docH - winH)) * 100

  $scrollSlider.css('height', `${100 - scrollScale}%`)
})


let titleMap = $title.map((idx,ele) => {
  let $ele = $(ele)
  return $ele.text().trim()
})
console.log(titleMap);
