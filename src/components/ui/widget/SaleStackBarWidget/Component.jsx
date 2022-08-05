import React from 'react';
import 'echarts-gl';
import ReactEcharts from 'echarts-for-react';

const Component = () => {
    const option = {
        color: ['#D83C30'],
        // tooltip: {
        //     trigger: 'axis'
        // },
        grid: {
            left: '0%',
            right: '0%',
            top: 0,
            bottom: 180,
			width:150,
            containLabel: true
        },
        xAxis: [
            {   
                type: 'category',
                boundaryGap: true,
                show: false,
                data: [1, 2, 3, 4, 5, 6, 7]
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
                type: 'bar',
                showBackground: true,
				barCategoryGap: '10px',
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        // backgroundColor: 'white'
                    }
                },
                data: [180, 145, 90, 160, 90, 150, 180]
            }
        ]
    };

	const styles={
		width:'100%',
		marginLeft:'-30px',
		marginRight:'20px',
		paddingLeft:'0px',
		paddingRight:'0px'		
	}

    return (
        <ReactEcharts 
            option={option}
			style={styles}
        />
    )
}

export default Component
