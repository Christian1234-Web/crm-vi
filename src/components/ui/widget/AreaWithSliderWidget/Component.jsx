import React from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";
import echarts from "echarts";
import { getChartRealtimeColor } from "../../../../Theme/ThemeColors";

const Component = () => {
  let base = +new Date(1968, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let date = [];
  let chartColor = getChartRealtimeColor();

  let data = [Math.random() * 300];

  for (let i = 1; i < 20000; i++) {
    let now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }

  const option = {
    height: "300px",
    top: 80,
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
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
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date,
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
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
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 5,
      },
      {
        start: 0,
        end: 10,
        handleIcon:
          "M13.4 7H6.6C5.2 7 4 8.3 4 10v21c0 1.7 1.2 3 2.6 3h6.9c1.4 0 2.6-1.3 2.6-3V10c-.1-1.7-1.3-3-2.7-3zm-.8 16H7.4v-1h5.1v1zm0-4H7.4v-1h5.1v1z",
        handleSize: "30%",
        handleStyle: {
          color: "#fff",
          shadowBlur: 2,
          shadowColor: "rgba(0, 0, 0, 0.42)",
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        },
        dataBackground: {
          areaStyle: {
            color: chartColor,
          },
        },
        height: 80,
        bottom: 20,
      },
    ],
    series: [
      {
        name: "Temperature",
        type: "line",
        smooth: true,
        symbol: "none",
        sampling: "average",
        lineStyle: {
          width: 0,
        },
        areaStyle: {
          color: chartColor,
          opacity: 0.5,
        },
        data: data,
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: "100%" }} />;
};

export default Component;
