import React from 'react';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

const Component = () => {
    const option = {
        color: ['#62CAAA'],
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0%',
            right: '0%',
            containLabel: false
        },
        xAxis: [
            {   
                type: 'category',
                boundaryGap: false,
                show: false,
                data: [1, 2, 3, 4, 5, 6]
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false,
            }
        ],
        series: [
            {
                type: 'line',
                label: {
                    normal: {
                        show: false,
                        position: 'top'
                    }
                },
                
                data: [110, 160, 130, 180, 125, 140]
            }
        ]
    };

    return (
        <ReactEcharts 
            option={option}
        />
    )
}

export default Component
