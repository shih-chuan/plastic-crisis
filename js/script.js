$(function(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#bottle").click(function(){
      $(".panelYellow").toggleClass("show")
      $("#bottle").toggleClass("rise")
    })
    $("#bag").click(function(){
      $(".panelBlue").toggleClass("show")
      $("#bag").toggleClass("rise")
    })
    $("#straw").click(function(){
      $(".panelRed").toggleClass("show")
      $("#straw").toggleClass("rise")
    })
    $("#cup").click(function(){
      $(".panelGreen").toggleClass("show")
      $("#cup").toggleClass("rise")
    })
  }else
  {
    $("#bottle").hover(
      function(evt){
        $(".panelYellow").addClass("show")
        $("#bottle").addClass("rise")
      },
      function(evt){
        $(".panelYellow").removeClass("show")
        $("#bottle").removeClass("rise")
    })
    $("#cup").hover(
      function(evt){
        $(".panelGreen").addClass("show")
        $("#cup").addClass("rise")
      },
      function(evt){
        $(".panelGreen").removeClass("show")
        $("#cup").removeClass("rise")
    })
    $("#bag").hover(
      function(evt){
        $(".panelBlue").addClass("show")
        $("#bag").addClass("rise")
      },
      function(evt){
        $(".panelBlue").removeClass("show")
        $("#bag").removeClass("rise")
    })
    $("#straw").hover(
      function(evt){
        $(".panelRed").addClass("show")
        $("#straw").addClass("rise")
      },
      function(evt){
        $(".panelRed").removeClass("show")
        $("#straw").removeClass("rise")
    })
    
    //Logo互動
    $(window).mousemove(function(evt){
      var pagex = evt.pageX
      var pagey = evt.pageY
      console.log(pagex)
      $(".bigLogo").css("transform","translate("+(pagex/-40)+"px,"+pagey/-40+"px)")
    })
  }
  $(".button").click(function(evt){
    $(".sidePanel, header").toggleClass("show")
    $(".darkness").toggleClass("show")
  })
  $(".cross").addClass("show")
  $(".cross").click(function(evt){
    $(".sidePanel, header").toggleClass("show")
    $(".darkness").toggleClass("show")
  })
  $(".menu li .link").hover(function(){
    $(".decoration").toggleClass("show")
    $(".decoration").css("transform","translateX(" + parseInt($(this).attr("id"))*-80 + "vw")
  })
})
