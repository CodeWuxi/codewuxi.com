// import '../css/base.scss'
import '../css/hackathon-2019.scss'

const $D = $(document)
const $W = $(window)
const $body = $('body')
const $scrollBar = $('.scroll-bar')
const $scrollSlider = $('.scroll-slider')
const $colTitle = $('.hack-col-title')
const $title = $('.cw-title')
const $bannerWrap = $('.banner-wrapper .container')
const docH = $D.outerHeight(true)
const winH = $W.height()

const setScrollReveal = () => {
  window.sr = ScrollReveal();

  sr.reveal('.section-content', {
    delay: 200,
    distance: '100px',
    duration: 500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    scale: 1,
    cleanup: false,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.4,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
  })
}
console.log($bannerWrap);
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

  if (!$body.hasClass('body-white') && scrollT > (winH / 2)) {
    console.log('变色！');
    $body.removeClass('body-home').addClass('body-white')
    $colTitle.removeClass('turn-white')
    $scrollBar.removeClass('turn-white')
    $bannerWrap.animate({
      opacity: 0
    })
  } else if (!$body.hasClass('body-home') && scrollT <= (winH / 2)) {
    $body.removeClass('body-white').addClass('body-home')
    $colTitle.addClass('turn-white')
    $scrollBar.addClass('turn-white')

    $bannerWrap.animate({
      opacity: 1
    })
  }

  $scrollSlider.css('height', `${100 - scrollScale}%`)
})


let titleMap = $title.map((idx,ele) => {
  let $ele = $(ele)
  return $ele.text().trim()
})

console.log(titleMap);
