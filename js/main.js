$(function () {
  // Mobile menu toggle
  $('#menu-btn').on('click', function () {
    var isOpen = $(this).hasClass('close');
    $(this).toggleClass('close');
    $('#mobile-menu').toggleClass('active').attr('aria-hidden', isOpen);
    $('body').toggleClass('overflow');
  });

  // Video: load correct source based on screen width
  // Using JS to swap <source> before play starts (correct approach)
  var video = document.getElementById('hero-video');
  if (video) {
    var isMobile = window.innerWidth < 768;
    // Remove all existing sources and set the correct one
    while (video.firstChild) { video.removeChild(video.firstChild); }

    var src1 = document.createElement('source');
    var src2 = document.createElement('source');

    if (isMobile) {
      src1.src = '/video/m-50.mp4';
      src1.type = 'video/mp4';
      video.appendChild(src1);
    } else {
      src1.src = '/video/d-50.webm';
      src1.type = 'video/webm';
      src2.src = '/video/d-50.mp4';
      src2.type = 'video/mp4';
      video.appendChild(src1);
      video.appendChild(src2);
    }

    video.load();
    video.play().catch(function(){});
  }
});
