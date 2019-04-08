// import '../css/base.scss'
import '../css/hackathon-2019.scss'

const $D = $(document)
const $W = $(window)
const $body = $('body')

const $header = $('header')
const $menuBtn = $header.find('.icon-menu')
const $menu = $header.find('.header-menu')

const $scrollBar = $('.scroll-bar')
const $scrollSlider = $('.scroll-slider')

const $colTitle = $('.hack-col-title')
const $title = $('.cw-title')
const $lineTitle = $('.cw-line-title')
const $line = $('.line')

const $bannerBlack = $('.banner-black')
const $footerBlack = $('.footer-black')
const $bannerWrap = $('.banner-wrapper')
const $bannerCont = $('.banner-wrapper .container')
const $schedule = $('.schedule-wrapper')
const $mapButton = $('.show-map-button')
const $roadButton = $('.show-road-button')
const $registerButton = $('.register-now-button')
const $mapDialog = $('#map-dialog')
const $roadDialog = $('#road-dialog')
const $registerDialog = $('#register-dialog')
const $closeBtn = $('.cw-dialog .icon-close')
const docH = $D.outerHeight(true)
const winH = $W.height()
const winW = $W.width()

// ----------------------------------------
const $sideNav = $('.side-nav-content')
const $sectionWrapper = $('.section-wrapper')
const $scheduleWrapperSection = $('#schedule-wrapper-section')
const $navMenu = $('.side-nav-content')
const $headerMenu = $('.header-menu')
const $guideWrapper = $('.guide-wrapper')
const $signUpBtn = $('.sign-up-btn')
const $contractWrapper = $('.contact-wrapper')

let titlePos = []
let titleHeight = []
const scheduleX = $schedule.offset().top
const scheduleHeight = $schedule.offset().top + $schedule.outerHeight()

const baiduMap = () => {
  const mapW = (winW * 0.8) / 2
  const mapH = (winH * 0.8) / 2
  var map = new BMap.Map("baidu-map");
  var point = new BMap.Point(120.372702,31.498621);
  map.centerAndZoom(point, 18);
  map.addControl(new BMap.NavigationControl());
  map.setCurrentCity("无锡");
  map.enableScrollWheelZoom(false);
  var marker = new BMap.Marker(point);
  map.panBy(mapW, mapH);//中心点偏移
  map.addOverlay(marker);
}

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
  if ($W.scrollTop() !== 0) {
    $bannerBlack.show()
    $footerBlack.removeClass('active').fadeOut()
    $colTitle.removeClass('turn-white')
    $scrollBar.removeClass('turn-white')
    $bannerCont.css('opacity', 1)
  }
  if ($W.scrollTop() == 0) {
    $colTitle.addClass('turn-white')
    $scrollBar.addClass('turn-white')
  }
  // setScrollReveal()
  setTextLogoAnime()

  baiduMap()

  $mapButton.on('click', () => {
    $mapDialog.fadeIn()
  })
  $roadButton.on('click', () => {
    $roadDialog.fadeIn()
  })
  $registerButton.on('click', () => {
    $registerDialog.fadeIn()
  })
  $closeBtn.on('click', () => {
    $('.cw-dialog').fadeOut()
  })

}

$menuBtn.on('click', () => {
  $menu.slideToggle()
})

// side bar menu Toggle


$('.cw-dialog').mouseup(function (e) {
  var _con = $('.dialog-content')
  if(!_con.is(e.target) && _con.has(e.target).length === 0) {
    $('.cw-dialog').fadeOut()
  }
})

init()

$W.on('scroll', (e) => {
  let scrollT = $W.scrollTop()
  let scrollScale = (scrollT / (docH - winH)) * 100
  let scheduleTop = scheduleX - scrollT
  let colTileBottom =  scrollT + $colTitle.outerHeight()/2 + 150
  let scrollBarBottom =  scrollT + $scrollBar.outerHeight()/2 + 200
  let colTileTop =  scrollT - $scrollBar.outerHeight()/2 + 150
  let scrollBarTop =  scrollT -  $scrollBar.outerHeight()/2 + 200




  // 滚动距离在标题的±100范围内
  switch (true) {
    // 简介
    case (scrollT > (titlePos[0]-750) && scrollT <= (titlePos[0] + titleHeight[0])):
      setLineHeight(0, scrollT - (titlePos[0]-750))
      break
    // 嘉宾评委
    case (scrollT > (titlePos[1]-900) && scrollT <= (titlePos[1] + titleHeight[1])):
      // console.log('嘉宾评委', titlePos[1]);
      setLineHeight(1, scrollT - (titlePos[1]-900))
      break
    // 报名
    case (scrollT > (titlePos[2]-750) && scrollT <= (titlePos[2] + titleHeight[2])):
      // console.log('报名');
      setLineHeight(2, scrollT - (titlePos[2]-750))
      break
    // 赞助商
    case (scrollT > (titlePos[3]-750) && scrollT <= (titlePos[3] + titleHeight[3])):
      // console.log('赞助商');
      setLineHeight(3, scrollT - (titlePos[3]-750))
      break
    // 合作伙伴
    case (scrollT > (titlePos[4]-750) && scrollT <= (titlePos[4] + titleHeight[4])):
      // console.log('合作伙伴');
      setLineHeight(4, scrollT - (titlePos[3]-750))
      break
    // 媒体社区
    case (scrollT > (titlePos[5]-750) && scrollT <= (titlePos[5] + titleHeight[5])):
      // console.log('媒体社区');
      setLineHeight(5, scrollT - (titlePos[5]-750))
      break
  }

  switch (true) {
    case (!$bannerWrap.hasClass('turn-white') && scrollT > (winH / 3) && scrollT < winH):
      $bannerBlack.fadeOut()
      $headerMenu.fadeOut()
      $signUpBtn.addClass('sign-up-btn-black')
      $footerBlack.removeClass('active').fadeOut()
      $bannerCont.css('opacity', 0)
      $colTitle.removeClass('turn-white')
      $scrollBar.removeClass('turn-white')
      $line.css('background-color', '#000')
      $navMenu.removeClass('turn-white')
      // side nav menu display
      $sideNav.fadeIn()
      break
    case (scrollT <= (winH / 3)):
      $bannerBlack.fadeIn()
      $headerMenu.fadeIn()
      $colTitle.addClass('turn-white')
      $scrollBar.addClass('turn-white')
      $bannerCont.css('opacity', 1)
      $line.css('background-color', '#fff')
      $navMenu.addClass('turn-white')
      // side nav fadeOut
      $sideNav.fadeOut()
      $signUpBtn.removeClass('sign-up-btn-black')
      break
    case (scrollT > (docH - winH - 200)):
      $footerBlack.addClass('active').fadeIn()
      $colTitle.addClass('turn-white')
      $scrollBar.addClass('turn-white')
      $navMenu.addClass('turn-white')
      break
    case ($footerBlack.hasClass('active') && scrollT < (docH - winH - 100) && scrollT > winH):
      $footerBlack.removeClass('active').fadeOut()
      $colTitle.removeClass('turn-white')
      $scrollBar.removeClass('turn-white')
      $bannerBlack.fadeOut()
      $navMenu.removeClass('turn-white')
      break
    default:
      $bannerBlack.fadeOut()
      $footerBlack.removeClass('active').fadeOut()
      $colTitle.removeClass('turn-white')
      $scrollBar.removeClass('turn-white')
      $navMenu.removeClass('turn-white')
      break
  }

  if (colTileBottom > 2926 && colTileBottom < scheduleHeight) {
    $colTitle.addClass('turn-white')
  }
  if (colTileBottom >= scheduleHeight) {
    $colTitle.removeClass('turn-white')
  }

  if (scrollBarBottom > ($bannerBlack.height() +  $sectionWrapper.height() * 2.5 + $scrollBar.height()/2) && scrollBarBottom < scheduleHeight) {
    $scrollBar.addClass('turn-white')
    $navMenu.addClass('turn-white')
  }
  if (scrollBarBottom >= scheduleHeight) {
    $scrollBar.removeClass('turn-white')
    $navMenu.removeClass('turn-white')
  }
  if (($scrollBar.offset().top + $scrollBar.height() - scrollT) - ($contractWrapper.offset().top - scrollT) > 0) {
    $scrollBar.addClass('turn-white')
    $navMenu.addClass('turn-white')
    $colTitle.addClass('turn-white')
  }

  // -----------------------------------------------
  if ((scrollT - $schedule.offset().top) > 0) {
    $signUpBtn.removeClass('sign-up-btn-black')
  }
  if ((scrollT - $('.guests-wrapper').offset().top) > 0) {
    $signUpBtn.addClass('sign-up-btn-black')
  }
  if ((scrollT + $header.height() - $contractWrapper.offset().top) > 0) {
    $signUpBtn.removeClass('sign-up-btn-black')
  }
  // -------------------------------------------------

  $scrollSlider.css('height', `${100 - scrollScale}%`)
})

const setLineHeight = (index, dis) => {
  let height = 0
  dis =dis * 0.5
  height = 200 - dis > 0 ? 200 - dis : 0
  height = height > 200 ? 200 : height

  $($lineTitle[index]).find('.line-top').css('height', `${height}px`)
}

function isInViewPort (element) {
  const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  const top = element.getBoundingClientRect() && element.getBoundingClientRect().top
  // console.log('top', top)
  return top  <= viewPortHeight + 100
}

let titleMap = $title.map((idx,ele) => {
  let $ele = $(ele)
  return $ele.text().trim()
})

$('.cw-line-title').map((idx,ele) => {
  let $ele = $(ele)
  titlePos.push($ele.offset().top)
  titleHeight.push($ele.outerHeight())
})


// console.log(titleMap);
// console.log(titlePos, titleHeight);
