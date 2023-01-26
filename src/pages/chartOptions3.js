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
            type: 'bar'
        },
        title: {
            text: 'Your Scores Vs Cohort Avg Scores',
            align: 'left'
        },
        xAxis: {
            categories: ['Managing Workload', 'Psychological Safety at Work', 'Work Life Balance', 'Social Interaction at Work', 'Organisational Support', 'Career Development', 'Extenal Factors'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage Score',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Your Score',
            data: getRagDataArray(userScores)
        }, {
            name: 'Cohort Avg Score',
            data: [25, 48, 46, 31, 32, 45, 56],
            color: 'lightgray'
        }],
        legend: {
            enabled: false
        }
    }
]

export default options;