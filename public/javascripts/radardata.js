let dataset = {
  chart: {
    polar: true,
    type: 'line'
  },
  title: {
    text: 'Your Name',
    x: -50
  },
  pane: {
    size: '100%',
  },
  xAxis: {
    categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Aggreableness',
      'Neuroticism'],
    tickmarkPlacement: 'on',
    lineWidth: 0,
    ceiling: 250,
  },
  yAxis: {
    gridLineInterpolation: 'polygon',
    lineWidth: 0,
    min: 0,
    tickAmount: 4,
    ceiling: 100,
  },
  tooltip: {
    shared: true,
    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
  },
  legend: {
    align: 'right',
    verticalAlign: 'top',
    y: 70,
    layout: 'vertical'
  },
  series: [{
    name: 'You',
    data: [74, 49, 96, 55, 54],
    pointPlacement: 'on'
  }]
}

module.exports = dataset;
