import '../css/base.scss'
import '../css/index.scss'

const $D = $(document),
      $W = $(window),
      $scrollBar = $('.scroll-bar'),
      $scrollSlider = $('.scroll-slider'),
      $title = $('.cw-title'),
      docH = $D.outerHeight(true),
      winH = $W.height()

window.sr = ScrollReveal();
console.log(sr);
sr.reveal('.section-content', {
  reset: true,
  origin: 'top',
  duration: 800,
  delay: 0,
  rotate: {x:0, y:0, z:0},
  opacity: 0.2,
  scale: 1.2,
  easing: 'ease-in-out',
  //当动画开始之前会被触发
  beforeReveal: function(domEl){
    console.log('动画执行了');
  },
  //鼠标滚轮滚动之前会被触发
  beforeReset: function(domEl){
      console.log('滚轮开始---');
  },
  //动画开始之后会被触发
  afterReveal: function(domEl){
      console.log('动画结束了');
  },
  //滚轮滚动之后会被触发
  afterReset: function(domEl){
      console.log('滚轮结束了');
  }
})
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
