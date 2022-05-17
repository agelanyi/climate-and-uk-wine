var TITLE = 'Climate: Annual Sunshine';

// x-axis label and label in tooltip
var X_AXIS = 'Year';

// y-axis label and label in tooltip
var Y_AXIS = 'Brigh Sunshine'; 

// Should y-axis start from 0? `true` or `false`
var BEGIN_AT_ZERO = false;

// `true` to show the grid, `false` to hide
var SHOW_GRID = true;

 // `true` to show the legend, `false` to hide
var SHOW_LEGEND = true;

// Set colors
var myColors = ["#f68080","#ff9f1c"]
$(document).ready(function() {

  // Read data file with random string generated by current time
  // to bypass browser cache, and create chart
  $.get('./data.csv', {'_': $.now()}, function(csvString) {

    var data = Papa.parse(csvString).data;
    var timeLabels = data.slice(1).map(function(row) { return row[0]; });

    var datasets = [];
    for (var i = 1; i < data[0].length; i++) {
      datasets.push(
        {
          label: data[0][i], // column name
          data: data.slice(1).map(function(row) {return row[i]}), // data in that column
          fill: false // `true` for area charts, `false` for regular line charts
        }
      )
    }

    // Get container for the chart
    var ctx = document.getElementById('chart-container').getContext('2d');

    new Chart(ctx, {
      type: 'line',

      data: {
        labels: timeLabels,
        datasets: datasets,
       
      },
      
      options: {
        title: {
          display: true,
          text: TITLE,
          fontSize: 14,
        },
        legend: {
          display: SHOW_LEGEND,
          postion:"top",
          Align: "start"
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: X_AXIS !== '',
              labelString: X_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              callback: function(value, index, values) {
                return value.toLocaleString();
              }
            }
          }],
          yAxes: [{
            stacked: false, // `true` for stacked area chart, `false` otherwise
            beginAtZero: true,
            scaleLabel: {
              display: Y_AXIS !== '',
              labelString: Y_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              beginAtZero: BEGIN_AT_ZERO,
              callback: function(value, index, values) {
                return value.toLocaleString()
              }
            }
          }]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: function(tooltipItem, all) {
              return all.datasets[tooltipItem.datasetIndex].label
                + ': ' + tooltipItem.yLabel.toLocaleString();
            }
          }
        },
        plugins: {
          colorschemes: {
            
            scheme: myColors
          }
        }
      }
    });

  });

});