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
 option = {
  xAxis: {
    type: 'category',
    name: 'year',
    data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
  },
  yAxis: {
    type: 'value',
    name: 'Production (hectares)'
  },
  series: [
    {
      data: ['822','801','789','755.50','722', '722','747','697','785.20','946','1095','1208','1297','1375','1506','1655','1612','1677','2138','2438','2738'],
      type: 'line',
      color : '#AA5E79',
      smooth: true
    }
  ]
};

  // 使用刚指定的配置项和数据显示图表。
  wineriesSizeChart.setOption(option);
}
