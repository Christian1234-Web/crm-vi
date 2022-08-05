import React, { useState, useEffect } from "react";
import cloneDeep from "lodash/cloneDeep";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";
import { getChartRealtimeColor } from "../../../../Theme/ThemeColors";

const Component = () => {
  var chartColor = getChartRealtimeColor();

  const [option] = useState({
    color: [chartColor, "#E9E9E9"],
    tooltip: {
      trigger: "axis",
      backgroundColor: "#fff",
      padding: 10,
      textStyle: {
        color: "#212121",
        fontSize: 12,
        fontFamily: "Arial",
      },
      axisPointer: {
        type: "line",
        lineStyle: {
          opacity: 0.6,
        },
      },
      extraCssText: "box-shadow: 0 0 6px rgba(0,0,0,.1);",
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        show: false,

        axisLabel: {
          show: true,
          interval: 1,
          color: "rgba(0,0,0,.3)",
        },
        data: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
        ],
      },
      {
        type: "category",
        boundaryGap: false,
        show: false,

        axisLabel: {
          show: true,
          interval: 1,
          color: "rgba(0,0,0,.3)",
        },
        data: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          interval: 1,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            opacity: 0.9,
            type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        name: "DB Server",
        type: "line",
        stack: "server",
        lineStyle: {
          width: 0,
        },

        symbolSize: 1,
        markLine: {
          label: {
            normal: {
              show: false,
            },
          },
        },
        areaStyle: { color: chartColor, opacity: "0.5" },
        smooth: false,
        data: [
          2165, 1598, 1930, 2079, 2231, 2107, 1502, 1961, 2157, 2062, 1994,
          2165, 2198, 1930, 2079, 2131, 2165, 2198, 1930, 2079, 2131, 2007,
          2102, 1961, 2157, 2062, 1994, 2007, 2102, 1961, 2157, 2062, 1994,
        ],
      },
      {
        name: "Web Server",
        type: "line",
        stack: "server",
        label: {
          normal: {
            show: false,
            position: "top",
          },
        },
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        markLine: {
          label: {
            normal: {
              show: false,
            },
          },
        },
        areaStyle: {},
        smooth: false,
        data: [
          2165, 2198, 1930, 2079, 2131, 2007, 2102, 1961, 2157, 2062, 1994,
          2165, 2198, 1930, 2079, 2131, 2007, 2102, 1961, 2157, 2062, 1994,
          2165, 2198, 1930, 2079, 2131, 2007, 2102, 1961, 2157, 2062, 1994,
        ],
      },
    ],
  });

  const [optionData, setOptionData] = useState(option);

  useEffect(() => {
    const interval = setInterval(() => {
      let count = 33;
      let axisData = 1;
      let cloneOption = cloneDeep(optionData);
      let data0 = cloneOption.series[1].data;
      let data1 = cloneOption.series[0].data;
      data0.shift();
      data0.push(Math.floor(Math.random() * (1650 - 2200) + 2200));
      data1.shift();
      data1.push(Math.floor(Math.random() * (1400 - 950) + 1800));

      cloneOption.xAxis[0].data.shift();
      cloneOption.xAxis[0].data.push(axisData);
      cloneOption.xAxis[1].data.shift();
      cloneOption.xAxis[1].data.push(count++);

      setOptionData(cloneOption);
    }, 1500);
    return () => clearInterval(interval);
  }, [optionData]);

  return (
    <ReactEcharts
      option={optionData}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default Component;
