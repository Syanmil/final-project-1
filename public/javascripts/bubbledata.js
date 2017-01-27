let databub = {
  chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      zoomType: 'xy'
  },
  legend: {
      enabled: false
  },
  title: {
      text: 'Personality Scatter'
  },
  xAxis: {
    gridLineWidth: 1,
    ceiling: 100,
    floor: 0,
    plotLines: [{
      color: 'black',
      dashStyle: 'dot',
      width: 2,
      value: 50,
      zIndex: 3
    }]
  },
  yAxis: {
    startOnTick: false,
    endOnTick: false,
    ceiling: 100,
    floor: 0,
    maxPadding: 0.2,
    plotLines: [{
      color: 'black',
      dashStyle: 'dot',
      width: 2,
      value: 50,
      zIndex: 3
    }]
  },
  tooltip: {
    useHTML: true,
    headerFormat: '<table>',
    pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
      '<tr><th>Work Type:</th><td> {point.y} point</td></tr>' +
      '<tr><th>Social Type:</th><td> {point.x} point</td></tr>',
    footerFormat: '</table>',
    followPointer: true
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },
  series: [{
    data: [
    ]
  }]
}
// { x: 15.6, y: 12, z: 50, name: 'INA', country: 'Indonesia' },

module.exports = databub
