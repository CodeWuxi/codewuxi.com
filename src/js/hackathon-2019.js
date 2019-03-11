// import '../css/base.scss'
import '../css/hackathon-2019.scss'

const $D = $(document)
const $W = $(window)
const $body = $('body')
const $scrollBar = $('.scroll-bar')
const $scrollSlider = $('.scroll-slider')
const $colTitle = $('.hack-col-title')
const $title = $('.cw-title')
const $bannerBlack = $('.banner-black')
const $footerBlack = $('.footer-black')
const $bannerWrap = $('.banner-wrapper')
const $bannerCont = $('.banner-wrapper .container')
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
  console.log(scrollT);
  // 滚动距离在标题的±20范围内
  if (scrollT > 580 && scrollT <= 980 ) {
    let dis = 0
    dis = 250 - (scrollT - 580) > 0 ? 250 - (scrollT - 580) : 0
    dis = dis > 250 ? 250 : dis

    console.log('进入目标区域', dis);
    $($title[0]).find('.line').css('height', `${dis}px`)
  }

  // banner
  if (!$bannerWrap.hasClass('turn-white') && scrollT > (winH / 4)) {
    $bannerCont.css('opacity', 0)
    $bannerBlack.fadeOut()
    $bannerWrap.addClass('turn-white')
    $colTitle.removeClass('turn-white')
    $scrollBar.removeClass('turn-white')

  } else if (scrollT <= (winH / 4)) {
    $bannerWrap.removeClass('turn-white')
    $colTitle.addClass('turn-white')
    $scrollBar.addClass('turn-white')
    $bannerBlack.fadeIn()
    $bannerCont.css('opacity', 1)
  }

  // footer
  if (scrollT > (docH - winH - 100)) {
    console.log('footer');
    $footerBlack.fadeIn()

  } else if (scrollT < (docH - winH - 100)) {
    $footerBlack.fadeOut()

  }

  $scrollSlider.css('height', `${100 - scrollScale}%`)
})


let titleMap = $title.map((idx,ele) => {
  let $ele = $(ele)
  console.log($ele.text(), $ele.offset().top, $ele.outerHeight())
  return $ele.text().trim()
})

console.log(titleMap);
