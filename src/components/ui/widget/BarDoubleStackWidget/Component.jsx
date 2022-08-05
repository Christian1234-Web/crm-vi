import React from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";
import { getChartBarColor } from "../../../../Theme/ThemeColors";

const Component = ({ style, color }) => {
  let chartColor = getChartBarColor();
  const option = {
    color: [chartColor, "#E0E0E0"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "#fff",
      padding: 10,
      textStyle: {
        color: "#212121",
        fontSize: 12,
        fontFamily: "Arial",
      },

      extraCssText: "box-shadow: 0 0 6px rgba(0,0,0,.1);",
    },
    grid: {
      left: "0%",
      right: "0%",
    },
    xAxis: [
      {
        type: "category",
        show: false,
        data: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
          32, 33, 34, 35, 36, 37, 38, 39, 40,
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        show: false,
      },
    ],
    series: [
      {
        name: "Returning users",
        type: "bar",
        stack: "onstack",
        barWidth: "100%",
        itemStyle: {
          barBorderColor: "#F4F4F4",
        },
        data: [
          220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310,
          220, 182, 191, 234, 290, 330, 290, 330, 310, 220, 182, 330, 290, 330,
          310, 220, 182, 234, 290, 330, 290, 330, 310, 220, 182, 330, 290, 330,
          310, 220, 182, 220, 182,
        ],
      },
      {
        name: "New users",
        type: "bar",
        stack: "onstack",
        barWidth: 12,
        itemStyle: {
          barBorderColor: "#F4F4F4",
        },
        data: [
          150, 232, 201, 154, 190, 330, 310, 150, 232, 201, 154, 190, 330, 310,
          150, 232, 201, 154, 190, 330, 190, 330, 410, 150, 232, 330, 290, 330,
          310, 220, 182, 190, 330, 190, 330, 310, 150, 232, 330, 290, 330, 310,
          220, 182, 182, 190,
        ],
      },
    ],
  };

  return <ReactEcharts option={option} style={style} />;
};

export default Component;
