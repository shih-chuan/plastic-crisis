$(function(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
  } else {
    var s = skrollr.init()
  }
  new WOW().init()
  $(".bottle").draggable({
    helper: 'clone',
    scroll: false,
    start: function(evt, ui){
      $(this).css("opacity", 0)
      $(".instruction").addClass("hide")
    },
    stop: function(evt, ui){
      $(this).css("opacity", 1)
      $(".instruction").removeClass("hide")
    }
  })
  
  $(".re-button").click(function(evt){
    $('html, body').animate({
      scrollTop: $("#choice").offset().top
    }, 500)
  })

  $(".popUp h1").hide()
  $(".option").droppable({
    over: function(evt, ui){
      switch(parseInt($(this).attr("index"))){
        case 1:
          $(".recycleCap").addClass("open")
          $(".popUp h1").html("資源回收")
          break
        case 2:
          $(".trashCap").addClass("open")
          $(".popUp h1").html("一般垃圾")
          break
        case 3:
          $(".paperBall").addClass("open")
          $(".popUp h1").html("隨便亂丟")
          break
      }
      $(".popUp h1").show()
      $(".popUp h1").addClass("animated bounceInDown")
      $(".popUp h1").removeClass("bounceOutUp")
    },
    out: function(evt, ui){
      switch(parseInt($(this).attr("index"))){
        case 1:
          $(".recycleCap").removeClass("open")
          break
        case 2:
          $(".trashCap").removeClass("open")
          break
        case 3:
          $(".paperBall").removeClass("open")
          break
      }
      $(".popUp h1").removeClass("animated bounceInDown")
      $(".popUp h1").addClass("animated bounceOutUp")
    },
    drop: function(evt, ui){
      var show = ".recycle"
      switch(parseInt($(this).attr("index"))){
        case 1:
          console.log($(this).attr("index"))
          $(".recycle").show()
          $(".garbage").hide()
          $(".litter").hide()
          show = ".recycle"
          break
        case 2:
          console.log($(this).attr("index"))
          $(".recycle").hide()
          $(".garbage").show()
          $(".litter").hide()
          show = ".garbage"
          break
        case 3:
          console.log($(this).attr("index"))
          $(".recycle").hide()
          $(".garbage").hide()
          $(".litter").show()
          show = ".litter"
          break
      }
      $(".sectionBorder2").show()
      $(".popUp h1").hide()
      $(".option .cap, .paperBall").removeClass("open")
      $('html, body').animate({
        scrollTop: $(show).offset().top
      }, 500)
    }
  })
})
