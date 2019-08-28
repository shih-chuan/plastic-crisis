$(function(){ 
    $(".cross").click(function(evt){
        $(".sidePanel").toggleClass("show")
        $(".darkness").toggleClass("show")
    })
    $(".menu li .link").hover(function(){
        $(".decoration").toggleClass("show")
        $(".decoration").css("transform","translateX(" + parseInt($(this).attr("id"))*-80 + "vw")
    })
})