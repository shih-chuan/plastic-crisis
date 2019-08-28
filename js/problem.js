$(function(){
  var myChart = $("#myChart")
  Chart.defaults.global.defaultFontFamily = '微軟正黑體';
  Chart.defaults.global.defaultFontColor = '#777';
  var barChart = new Chart(myChart,{
    type: 'pie',
    data: {
      labels: ["包裝業", "其他產業", "紡織業", "產品製造", "交通業", "建築與建設", "電子業", "工業機械"],
      datasets: [{
        label: '塑膠廢棄物',
        data: [142, 42, 38, 37, 17, 13, 13, 1],
        backgroundColor:[
          '#5278b6',
          '#4ba4aa',
          '#ea524e',
          '#d24749',
          '#ffdb5c',
          '#add49c',
          '#80be7d',
          '#50a559'
        ],
        hoverBorderWidth:3,
        hoverBorderColor:'white'
      }]
    },
    options:{
      aspectRatio: 1.3,
      legend: {
        position: 'bottom'
      },
      title: {
        display: true,
        text: "各產業塑膠廢棄物生成量, 2015",
        fontSize: 25
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItems, data) {
            return data.datasets[0].data[tooltipItems.index] + '百萬噸';
          }
        }
      }
    }
  })
  function goLeft(){
    var now = $(".active")
    if(parseInt(now.attr("index")) != 0)
      $(".active").prev().addClass("active")
    else
      $(".slideShow li:last-child, .slide-indicators li:last-child").addClass("active")
    now.removeClass("active")
    $(".slideShow").css("transform","translateX(" + parseInt($(".slideShow .active").attr("index"))*-100 + "vw")
  }
  function goRight(){
    var now = $(".active")
    if(parseInt(now.attr("index")) != $(".slideShow li").length-1)
      $(".active").next().addClass("active")
    else
      $(".slideShow li:first-child, .slide-indicators li:first-child").addClass("active")
    now.removeClass("active")
    $(".slideShow").css("transform","translateX(" + parseInt($(".slideShow .active").attr("index"))*-100 + "vw")   
  }
  $(".rightArrow").click(function(evt){
    goRight()
  })
  $(".leftArrow").click(function(evt){
    goLeft()
  })
  $(".slideShow").hammer().on("swiperight",function(evt){
    goLeft()
  })
  $(".slideShow").hammer().on("swipeleft", function(evt){
    goRight()
  })
})