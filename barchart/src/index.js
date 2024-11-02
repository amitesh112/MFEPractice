import * as echarts from 'echarts';

// Initialize the chart instance
var myChart = echarts.init(document.getElementById('barchart-dev'));

// Set the options for the chart
myChart.setOption({
    title: {
        text: 'Laboratory Chemical Usage',
        left: 'center',
        textStyle: {
            fontSize: 24,
            color: '#333',
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} mL',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        textStyle: {
            color: '#fff'
        }
    },
    legend: {
        data: ['Volume (mL)'],
        bottom: '5%',
        textStyle: {
            color: '#555',
            fontSize: 14,
        }
    },
    xAxis: {
        type: 'category',
        data: ['Water', 'Sodium Chloride', 'Acetic Acid', 'Ethanol', 'Hydrogen Peroxide', 'Sulfuric Acid', 'Potassium Hydroxide', 'Calcium Chloride', 'Ammonium Nitrate', 'Sodium Bicarbonate'],
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        },
        axisLabel: {
            color: '#555',
            fontSize: 14
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 70, // Adjusted for better visualization with the new data
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        },
        axisLabel: {
            color: '#555',
            fontSize: 14
        }
    },
    series: [
        {
            name: 'Volume (mL)',
            type: 'bar',
            data: [50, 30, 20, 10, 5, 15, 25, 12, 18, 22], // Updated data with new chemicals
            itemStyle: {
                color: '#3498db', // Blue color for the bars
                borderColor: '#2980b9',
                borderWidth: 2,
                barBorderRadius: 5 // Rounded corners for bars
            },
            emphasis: {
                itemStyle: {
                    color: '#1abc9c' // Change color on hover
                }
            }
        }
    ],
});
