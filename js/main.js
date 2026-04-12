$(function () {
  $('#menu-btn').on('click', function () {
    $(this).toggleClass('close')
    $('#mobile-menu').toggleClass('active')
    $('body').toggleClass('overflow')
  })

  var video = $('.slide video')

  var WindowWidth = $(window).width()

  if (WindowWidth < 768) {
    video.attr('src', '/video/m-50.mp4')
  } else {
    video.attr('src', '/video/d-50.mp4')
  }
})
