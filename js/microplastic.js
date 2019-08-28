$(function(){
  var myChart = $("#myChart")
  Chart.defaults.global.defaultFontFamily = '微軟正黑體';
  Chart.defaults.global.defaultFontColor = '#777';
  var barChart = new Chart(myChart,{
    type: 'horizontalBar',
    data: {
      labels: ["亞洲", "非洲", "南美洲", "北美洲", "歐洲", "大洋洲"],
      datasets: [{
        label: '塑膠入海量占比',
        data: [86, 7.8, 4.8, 0.95, 0.28, 0.02],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        hoverBorderWidth:3,
        hoverBorderColor:'white'
      }]
    },
    options:{
      aspectRatio: 2.5
    }
  })

})