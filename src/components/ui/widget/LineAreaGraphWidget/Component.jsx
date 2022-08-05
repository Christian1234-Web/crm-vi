import React from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";

const Component = () => {
  const option = {
    color: ["#21AD79"],
    tooltip: {
      trigger: "axis",

      backgroundColor: "#fff",
      padding: 10,
      textStyle: {
        color: "#212121",
        fontSize: 12,
        fontFamily: "Arial",
      },
      symbolSize: 5,
      axisPointer: {
        type: "line",
        lineStyle: {
          opacity: 0.05,
          width: 20,
          color: "#21AD79",
        },
      },
      extraCssText: "box-shadow: 0 0 6px rgba(0,0,0,.1);",
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "23%",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
      data: [1, 2, 3, 4, 5, 6, 7],
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        name: "Site visits",
        type: "line",
        stack: "总量",
        label: {
          normal: {
            show: false,
            position: "top",
          },
        },
        data: [20, 30, 60, 65, 85, 70, 40],
        symbolSize: 8,
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: "300px", width: "100%", marginTop: "-70px" }}
    />
  );
};

export default Component;
