import React from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";

const Component = () => {
  const option = {
    color: ["#FFD945", "rgba(216, 60, 49, 0.8)", "#D83C32", "#4B4B4B"],
    tooltip: {
      trigger: "item",
      formatter: "{b} : {d}%",

      backgroundColor: "#fff",
      padding: 10,
      textStyle: {
        color: "gray",
        fontSize: 13,
        fontFamily: "Arial",
      },
      axisPointer: {
        type: "line",
        lineStyle: {
          opacity: 0.2,
          width: 30,
        },
      },
    },

    grid: {
      left: "0%",
      right: "0%",
      bottom: "30%",
    },

    series: [
      {
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        },
        type: "pie",
        radius: "75%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "1" },
          { value: 310, name: "2" },
          { value: 234, name: "3" },
          { value: 135, name: "4" },
        ],
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: "100%" }} />;
};

export default Component;
