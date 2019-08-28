$(function(){
  $(".top-link").click(function(){
    $('html, body').animate({
      scrollTop: $('html, body').offset().top
    }, 500)
  })
})