import * as echarts from 'echarts';

// Initialize the chart instance
var myChart = echarts.init(document.getElementById('linechart-dev'));

// Set the options for the chart
myChart.setOption({
    title: {
        text: 'pH Level Change Over Time',
        left: 'center',
        textStyle: {
            fontSize: 24,
            color: '#333',
            fontWeight: 'bold', // Bold title
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: '{a} <br/>{b} hours: {c}',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: {
        type: 'category',
        data: [0, 1, 2, 3, 4, 5],
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
        min: 5,
        max: 8, // Adjusted range for better visualization
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
            name: 'pH Level',
            type: 'line',
            data: [7.0, 6.8, 6.5, 6.2, 5.8, 5.5],
            itemStyle: {
                color: '#e74c3c', // Line color
                borderColor: '#c0392b', // Border color for data points
                borderWidth: 2,
                borderType: 'solid',
            },
            lineStyle: {
                width: 3, // Thicker line for better visibility
                type: 'solid' // Solid line
            },
            smooth: true, // Smooth line transitions
            symbol: 'circle', // Change symbol to circle
            symbolSize: 8, // Size of the symbol
            symbolRotate: 0, // Rotation of the symbol
            areaStyle: {
                color: {
                    type: 'linear', // Create a gradient
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(231, 76, 60, 0.3)' }, // Top color
                        { offset: 1, color: 'rgba(231, 76, 60, 0.0)' }  // Bottom color
                    ],
                },
                opacity: 0.5, // Semi-transparent area fill
            },
            emphasis: {
                itemStyle: {
                    color: '#f39c12' // Change color on hover
                }
            }
        }
    ]
});
