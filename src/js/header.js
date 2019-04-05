const $header = $(header)
const $menuBtn = $header.find('.icon-menu')
const $menu = $header.find('.header-menu')

$menuBtn.on('click', () => {
  console.log('click');
  $menu.addClass('active')

})
