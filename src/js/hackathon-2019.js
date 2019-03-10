import '../css/base.scss'
import '../css/index.scss'

const $D = $(document)
const $W = $(window)
const $scrollBar = $('.scroll-bar')
const $scrollSlider = $('.scroll-slider')
const $title = $('.cw-title')
const docH = $D.outerHeight(true)
const winH = $W.height()

const setScrollReveal = () => {
  window.sr = ScrollReveal();

  sr.reveal('.section-content', {
    delay: 200,
    distance: '150px',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    scale: 1.2,
    cleanup: false,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.2,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
  })
}

const setTextLogoAnime = () => {
  anime({
    targets: 'path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  })
}

const init = () => {
  setScrollReveal()
  setTextLogoAnime()
}

init()

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
