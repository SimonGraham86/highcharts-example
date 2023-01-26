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
        colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
        chart: {
          type: 'column',
          inverted: true,
          polar: true
        },
        title: {
          text: 'Winter Olympic medals per existing country (TOP 5)',
          align: 'left'
        },
        tooltip: {
          outside: true
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
            'Norway',
            'United States',
            'Germany',
            'Austria',
            'Canada'
          ]
        },
        yAxis: {
          crosshair: {
            enabled: true,
            color: '#333'
          },
          lineWidth: 0,
          tickInterval: 25,
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
          name: 'Gold medals',
          data: [148, 113, 104, 71, 77]
        }, {
          name: 'Silver medals',
          data: [113, 122, 98, 88, 72]
        }, {
          name: 'Bronze medals',
          data: [124, 95, 65, 91, 76]
        }]
      }
]

export default options;