$(function(){
    var lastScrollTop = 0
    $(window).scroll(function(event){
        var st = $(this).scrollTop()
        if (st > lastScrollTop && this.scrollY > 100 && !$(".sidePanel").hasClass("show")){
            $("header").addClass("hide")
        } else {
            $("header").removeClass("hide")
        }
        lastScrollTop = st
    })
    $(".cross").click(function(evt){
        $(this).toggleClass("show")
    })
})
