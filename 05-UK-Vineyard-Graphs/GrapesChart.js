var grapesChart = null;

function deleteGrapesChart() {
  if (grapesChart) {
    grapesChart.clear();
  }
}
function showGrapesChart(elementId) {

  // 基于准备好的dom，初始化echarts实例
  grapesChart = echarts.init(document.getElementById(elementId));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      right: 20,
      left: 60,
      top: -5,
      data: [ 'Bacchus', 'Pinot Noir', 'Chardonnay', 'Meunier', 'Rondo', 'Blanc', 'Blauer Frühburgunder', 'Pinot Blanc', 'Regent', 'Solaris']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['1990', '2018', '2020']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Bacchus',
        type: 'line',
        smooth: true,
        data: [76, 196.69, 295]
      },
      {
        name: 'Pinot Noir',
        type: 'line',
        smooth: true,
        data: [32.4, 617.56, 925]
      },
      {
        name: 'Chardonnay',
        type: 'line',
        smooth: true,
        data: [19.9, 637.52, 975]
      },
      {
        name: 'Meunier',
        type: 'line',
        smooth: true,
        data: [5.5, 182.56, 275]
      },
      {
        name: 'Pinot Gris',
        type: 'line',
        smooth: true,
        data: [2.6, 28.76, 35]
      },
      {
        name: 'Rondo',
        type: 'line',
        smooth: true,
        data: [2, 53.55, 65]
      },
      {
        name: 'Blauer Frühburgunder',
        type: 'line',
        smooth: true,
        data: [0, 39.22, 70]
      },
      {
        name: 'Regent',
        type: 'line',
        smooth: true,
        data: [0, 28.64, 35]
      },
      {
        name: 'Solaris',
        type: 'line',
        smooth: true,
        data: [0, 47.27, 70]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  grapesChart.setOption(option);
}
