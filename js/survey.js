$(function(){
  $("[name='Q1']").click(function(evt){
    evt.preventDefault()
    $(this).addClass('active')
    $("[name='Q1']").attr("disabled", "disabled")
    var data = { 
      qID: parseInt($(this).attr("qID")),
      value: $(this).val()
    }
    console.log(data)
    $.ajax({
      url: "response.php",
      type: "POST",
      data: data,
      datatype: "json",
      success: function(response){
        console.log(response.value)
        console.log(response.nSample)
        console.log(response.yes)
        console.log(response.no)
        console.log(response.writable)
        var yesBarWidth = response.yes/response.nSample
        $("#resultQ1 .yes .bar .val").width(yesBarWidth*100 + '%')
        $("#resultQ1 .yes p").text(response.yes + '人')
        $("#resultQ1 .no .bar .val").width((100-yesBarWidth*100) + '%')
        $("#resultQ1 .no p").text(response.no + '人')
      },
      error: function(){
        console.log("failed")
      }
    })
  })
  $("[name='Q2']").click(function(evt){
    evt.preventDefault()
    $(this).addClass('active')
    $("[name='Q2']").attr("disabled", "disabled")
    var data = { 
      qID: parseInt($(this).attr("qID")),
      value: $(this).val()
    }
    console.log(data)
    $.ajax({
      url: "response.php",
      type: "POST",
      data: data,
      datatype: "json",
      success: function(response){
        console.log(response.value)
        console.log(response.nSample)
        console.log(response.yes)
        console.log(response.no)
        console.log(response.writable)
        var yesBarWidth = response.yes/response.nSample
        $("#resultQ2 .yes .bar .val").width(yesBarWidth*100 + '%')
        $("#resultQ2 .yes p").text(response.yes + '人')
        $("#resultQ2 .no .bar .val").width((100-yesBarWidth*100) + '%')
        $("#resultQ2 .no p").text(response.no + '人')
      },
      error: function(){
        console.log("failed")
      }
    })
  })
  $("[name='Q3']").click(function(evt){
    evt.preventDefault()
    $(this).addClass('active')
    $("[name='Q3']").attr("disabled", "disabled")
    var data = { 
      qID: parseInt($(this).attr("qID")),
      value: $(this).val()
    }
    console.log(data)
    $.ajax({
      url: "response.php",
      type: "POST",
      data: data,
      datatype: "json",
      success: function(response){
        console.log(response.value)
        console.log(response.nSample)
        console.log(response.yes)
        console.log(response.no)
        console.log(response.writable)
        var yesBarWidth = response.yes/response.nSample
        $("#resultQ3 .yes .bar .val").width(yesBarWidth*100 + '%')
        $("#resultQ3 .yes p").text(response.yes + '人')
        $("#resultQ3 .no .bar .val").width((100-yesBarWidth*100) + '%')
        $("#resultQ3 .no p").text(response.no + '人')
      },
      error: function(){
        console.log("failed")
      }
    })
  })
  $("[name='Q4']").click(function(evt){
    evt.preventDefault()
    $(this).addClass('active')
    $("[name='Q4']").attr("disabled", "disabled")
    var data = { 
      qID: parseInt($(this).attr("qID")),
      value: $(this).val()
    }
    console.log(data)
    $.ajax({
      url: "response.php",
      type: "POST",
      data: data,
      datatype: "json",
      success: function(response){
        console.log(response.value)
        console.log(response.nSample)
        console.log(response.plasticBag)
        console.log(response.box)
        console.log(response.writable)
        var plasticBagBarWidth = response.plasticBag/response.nSample
        var boxBarWidth = response.box/response.nSample
        var ownBagBarWidth = response.ownBag/response.nSample
        var handBarWidth = response.hand/response.nSample
        $("#resultQ4 .plasticBag .bar .val").width(plasticBagBarWidth*100 + '%')
        $("#resultQ4 .plasticBag p").text(response.plasticBag + '人')
        $("#resultQ4 .box .bar .val").width(boxBarWidth*100 + '%')
        $("#resultQ4 .box p").text(response.box + '人')
        $("#resultQ4 .ownBag .bar .val").width(ownBagBarWidth*100 + '%')
        $("#resultQ4 .ownBag p").text(response.ownBag + '人')
        $("#resultQ4 .hand .bar .val").width(handBarWidth*100 + '%')
        $("#resultQ4 .hand p").text(response.hand + '人')
      },
      error: function(){
        console.log("failed")
      }
    })
  })
  $("[name='Q5']").click(function(evt){
    evt.preventDefault()
    $(this).addClass('active')
    $("[name='Q5']").attr("disabled", "disabled")
    var data = { 
      qID: parseInt($(this).attr("qID")),
      value: $(this).val()
    }
    console.log(data)
    $.ajax({
      url: "response.php",
      type: "POST",
      data: data,
      datatype: "json",
      success: function(response){
        console.log(response.value)
        console.log(response.nSample)
        console.log(response.yes)
        console.log(response.no)
        console.log(response.writable)
        var yesBarWidth = response.yes/response.nSample
        $("#resultQ5 .yes .bar .val").width(yesBarWidth*100 + '%')
        $("#resultQ5 .yes p").text(response.yes + '人')
        $("#resultQ5 .no .bar .val").width((100-yesBarWidth*100) + '%')
        $("#resultQ5 .no p").text(response.no + '人')
      },
      error: function(){
        console.log("failed")
      }
    })
  })
  $("[name='Q6']").click(function(evt){
    evt.preventDefault()
    $(this).addClass('active')
    $("[name='Q6']").attr("disabled", "disabled")
    var data = { 
      qID: parseInt($(this).attr("qID")),
      value: $(this).val()
    }
    console.log(data)
    $.ajax({
      url: "response.php",
      type: "POST",
      data: data,
      datatype: "json",
      success: function(response){
        console.log(response.value)
        console.log(response.nSample)
        console.log(response.yes)
        console.log(response.no)
        console.log(response.writable)
        var yesBarWidth = response.yes/response.nSample
        $("#resultQ6 .yes .bar .val").width(yesBarWidth*100 + '%')
        $("#resultQ6 .yes p").text(response.yes + '人')
        $("#resultQ6 .no .bar .val").width((100-yesBarWidth*100) + '%')
        $("#resultQ6 .no p").text(response.no + '人')
      },
      error: function(){
        console.log("failed")
      }
    })
  })
  $("[name='Q7']").click(function(evt){
    evt.preventDefault()
    $(this).addClass('active')
    $("[name='Q7']").attr("disabled", "disabled")
    var data = { 
      qID: parseInt($(this).attr("qID")),
      value: $(this).val()
    }
    console.log(data)
    $.ajax({
      url: "response.php",
      type: "POST",
      data: data,
      datatype: "json",
      success: function(response){
        console.log(response.value)
        console.log(response.nSample)
        console.log(response.yes)
        console.log(response.no)
        console.log(response.writable)
        var yesBarWidth = response.yes/response.nSample
        $("#resultQ7 .yes .bar .val").width(yesBarWidth*100 + '%')
        $("#resultQ7 .yes p").text(response.yes + '人')
        $("#resultQ7 .no .bar .val").width((100-yesBarWidth*100) + '%')
        $("#resultQ7 .no p").text(response.no + '人')
      },
      error: function(){
        console.log("failed")
      }
    })
  })
})