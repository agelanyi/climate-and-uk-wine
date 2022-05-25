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
      data: ['Seyval Blanc', 'Reichensteiner', 'Bacchus', 'Schoenburger', 'Madeleine Angevine', 'Huxelrebe', 'Pinot Noir', 'Ortega', 'Chardonnay', 'Wurzer', 'Siegerrebe', 'Auxerrois', 'Triomphe', 'Meunier', 'Dornfelder', 'Dunkelfelder', 'Pinot Gris', 'Chasselas', 'Rondo', 'Orion', 'Sauvignon Blanc', 'Phoenix', 'Acolon', 'Albarino', 'Cabernet Cortis', 'Blauer Frühburgunder', 'Pinot Blanc', 'Regent', 'Solaris']
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
        name: 'Seyval Blanc',
        type: 'line',
        smooth: true,
        data: [122.7, 101.34, 145]
      },
      {
        name: 'Reichensteiner',
        type: 'line',
        smooth: true,
        data: [113.9, 67.9, 75]
      },
      {
        name: 'Bacchus',
        type: 'line',
        smooth: true,
        data: [76, 196.69, 295]
      },
      {
        name: 'Schoenburger',
        type: 'line',
        smooth: true,
        data: [75.3, 21.63, 20]
      },
      {
        name: 'Madeleine Angevine',
        type: 'line',
        smooth: true,
        data: [54.6, 52.3, 50]
      },
      {
        name: 'Huxelrebe',
        type: 'line',
        smooth: true,
        data: [43, 16.92, 15]
      },
      {
        name: 'Pinot Noir',
        type: 'line',
        smooth: true,
        data: [32.4, 617.56, 925]
      },
      {
        name: 'Ortega',
        type: 'line',
        smooth: true,
        data: [29.5, 38.59, 55]
      },
      {
        name: 'Chardonnay',
        type: 'line',
        smooth: true,
        data: [19.9, 637.52, 975]
      },
      {
        name: 'Wurzer',
        type: 'line',
        smooth: true,
        data: [14.3, 3.33, 2]
      },
      {
        name: 'Siegerrebe',
        type: 'line',
        smooth: true,
        data: [9.3, 19.37, 20]
      },
      {
        name: 'Auxerrois',
        type: 'line',
        smooth: true,
        data: [9.1, 6.15, 7]
      },
      {
        name: 'Triomphe',
        type: 'line',
        smooth: true,
        data: [7.5, 10.08, 8]
      },
      {
        name: 'Meunier',
        type: 'line',
        smooth: true,
        data: [5.5, 182.56, 275]
      },
      {
        name: 'Dornfelder',
        type: 'line',
        smooth: true,
        data: [5.4, 18.71, 18]
      },
      {
        name: 'Dunkelfelder',
        type: 'line',
        smooth: true,
        data: [3.5, 1.78, 1.5]
      },
      {
        name: 'Pinot Gris',
        type: 'line',
        smooth: true,
        data: [2.6, 28.76, 35]
      },
      {
        name: 'Chasselas',
        type: 'line',
        smooth: true,
        data: [2.5, 1.69, 1.5]
      },
      {
        name: 'Rondo',
        type: 'line',
        smooth: true,
        data: [2, 53.55, 65]
      },
      {
        name: 'Orion',
        type: 'line',
        smooth: true,
        data: [0.7, 8.93, 10]
      },
      {
        name: 'Sauvignon Blanc',
        type: 'line',
        smooth: true,
        data: [0.5, 5.62, 7]
      },
      {
        name: 'Phoenix',
        type: 'line',
        smooth: true,
        data: [0.4, 24.63, 25]
      },
      {
        name: 'Acolon',
        type: 'line',
        smooth: true,
        data: [0, 5.83, 7]
      },
      {
        name: 'Albarino',
        type: 'line',
        smooth: true,
        data: [0, 1.47, 2]
      },
      {
        name: 'Cabernet Cortis',
        type: 'line',
        smooth: true,
        data: [0, 1.5, 2.5]
      },
      {
        name: 'Blauer Frühburgunder',
        type: 'line',
        smooth: true,
        data: [0, 39.22, 70]
      },
      {
        name: 'Pinot Blanc',
        type: 'line',
        smooth: true,
        data: [0, 29.03, 35]
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