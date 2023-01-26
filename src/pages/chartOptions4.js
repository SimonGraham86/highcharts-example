const userScores = [31, 77, 42, 61, 26, 58, 62];

const getRagDataArray = (dataArray) => {
    let dataArrayWithColors = [];
    dataArray.map((score) => {
        if(score > 66) {
            dataArrayWithColors.push({"y":score, "color":"green"})
        } else if(score > 33) {
            dataArrayWithColors.push({"y":score, "color":"orange"})
        } else {
            dataArrayWithColors.push({"y":score, "color":"red"})
        } 
    })
    return dataArrayWithColors;
}

const options = [
    {
        chart: {
          type: 'column',
          inverted: true,
          polar: true
        },
        title: {
          text: 'Your Scores',
          align: 'left'
        },
        subtitle: {
            text: "We've collated your scores from the survey",
            align: 'left'
        },
        tooltip: {
          outside: true,
          valueSuffix: '%'
        },
        pane: {
          size: '85%',
          innerSize: '20%',
          endAngle: 270
        },
        xAxis: {
          tickInterval: 1,
          labels: {
            align: 'right',
            useHTML: true,
            allowOverlap: true,
            step: 1,
            y: 3,
            style: {
              fontSize: '13px'
            }
          },
          lineWidth: 0,
          categories: [
            'Managing Workload', 
            'Psychological Safety at Work', 
            'Work Life Balance', 'Social Interaction at Work', 
            'Organisational Support', 
            'Career Development', 
            'Extenal Factors'
            ]
        },
        yAxis: {
          crosshair: {
            enabled: true,
            color: '#333'
          },
          lineWidth: 0,
          tickInterval: 10,
          reversedStacks: false,
          endOnTick: true,
          showLastLabel: true
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            borderWidth: 0,
            pointPadding: 0,
            groupPadding: 0.15
          }
        },
        series: [{
          name: 'Your Score',
          data: getRagDataArray(userScores)
        }],
        legend: {
            enabled: false
        }
      }
]

export default options;