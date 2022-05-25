var wineriesSizeChart = null;

function deleteWineriesSizeChart() {
  if (wineriesSizeChart) {
    wineriesSizeChart.clear();
  }
}

function showWineriesSizeChart(elementId) {

  // 基于准备好的dom，初始化echarts实例
  wineriesSizeChart = echarts.init(document.getElementById(elementId));

  // 指定图表的配置项和数据
  const colors = ['#5470C6', '#EE6666'];
  var option = {
    color: colors,
    tooltip: {
      trigger: 'none',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {},
    grid: {
      top: 70,
      bottom: 50
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#AA5E79'
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return (
                'Year  ' +
                params.value +
                (params.seriesData.length ? '：' + params.seriesData[0].data : '')
              );
            }
          }
        },
        // prettier-ignore
        data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
      },
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#669EC4'
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return (
                'Production  ' +
                params.value +
                (params.seriesData.length ? '：' + params.seriesData[0].data : '')
              );
            }
          }
        },
        // prettier-ignore
        data: ['822', '801', '789', '755.50', '722', '722', '747', '697', '785.20', '946', '1095', '1208', '1297', '1375', '1506', '1655', '1612', '1677', '2138', '2438', '2738']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Production (hectares)',
        type: 'line',
        xAxisIndex: 1,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [
          106, 105, 114, 109, 106, 90, 102, 98, 116, 109, 114, 124, 128, 131, 131, 133, 135, 151, 164, 171, 178
        ]
      },
      {
        name: 'Year',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [
          106, 105, 114, 109, 106, 90, 102, 98, 116, 109, 114, 124, 128, 131, 131, 133, 135, 151, 164, 171, 178
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  wineriesSizeChart.setOption(option);
}