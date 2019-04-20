const $header = $(header)
const $menuBtn = $header.find('.icon-menu')
const $menu = $header.find('.header-menu')
const $closeMenu = $header.find('.icon-closeBtn')

$menuBtn.on('click', () => {
  $menu.addClass('active')
})

$closeMenu.on('click', () => {
  $menu.removeClass('active')
})
