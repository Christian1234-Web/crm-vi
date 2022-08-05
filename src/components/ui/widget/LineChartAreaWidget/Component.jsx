import React from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";
import { getChartAreaColor } from "../../../../Theme/ThemeColors";

const Component = ({
  colors,
  showX,
  showY,
  dataX,
  series,
  showLegend,
  tooltip,
}) => {
  const option = {
    color: colors,
    legend: {
      data: ["6 months sales"],
      show: showLegend,
      top: "top",
      right: "2%",
      icon: "circle",
    },
    tooltip: tooltip,
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: showX,
      data: dataX,
      axisLine: {
        show: false,
      },
    },
    grid: {
      left: "2%",
      right: "2%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      show: showY,
      minorTrick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: "#757575",
      },
      axisTick: {
        show: false,
      },

      splitLine: {
        show: true,
        lineStyle: {
          opacity: 0.3,
        },
      },
    },
    series: series,
  };

  return (
    <ReactEcharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

export default Component;
