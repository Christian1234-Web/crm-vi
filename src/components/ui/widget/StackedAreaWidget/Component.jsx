import React from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";

import { data } from "../data/StackAreaCountry";

const Component = () => {
  const option = {
    color: ["#A996E5", "#8DBDF7", "#E1E2E3"],
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [
        "North America",
        "Africa",
        "South America",
        "Asia",
        "Europe",
        "Australia",
        "Antarctica",
      ],
      top: "top",
      right: "1%",
      icon: "circle",
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "#fff",
      padding: 10,
      textStyle: {
        color: "black",
        fontSize: 13,
        fontFamily: "Arial",
      },
      formatter: function (params) {
        console.log(params);
        return `${params[0].marker} ${
          params[0].seriesName
        } : ${params[0].value.toFixed(2)}<br />${params[1].marker} ${
          params[1].seriesName
        } : ${params[1].value.toFixed(2)}<br />${params[2].marker} ${
          params[2].seriesName
        } : ${params[2].value.toFixed(2)}<br />
				  `;
      },
      axisPointer: {
        type: "line",
        lineStyle: {
          opacity: 0.6,
        },
      },
      extraCssText: "box-shadow: 0 0 6px rgba(0,0,0,0.1);",
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        show: false,
        data: (function () {
          let res = [];
          let len = 0;
          while (len < 118) {
            res.push(len + 1);
            len++;
          }
          return res;
        })(),
      },
    ],
    yAxis: [
      {
        type: "value",
        show: true,
        position: "right",
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
            opacity: 0.3,
          },
        },
        backgroundColor: "red",
      },
    ],
    series: [
      {
        name: "North America",
        type: "line",
        stack: "series",
        areaStyle: {},
        data: data[0].values,
        showSymbol: false,
        lineStyle: {
          width: 0,
        },
      },

      {
        name: "Europe",
        type: "line",
        stack: "series",
        areaStyle: {},
        data: data[4].values,
        showSymbol: false,
        lineStyle: {
          width: 0,
        },
      },
      {
        name: "Australia",
        type: "line",
        stack: "series",
        areaStyle: {},
        data: data[5].values,
        showSymbol: false,
        lineStyle: {
          width: 0,
        },
      },
    ],
  };

  return <ReactEcharts option={option} style={{ height: "100%" }} />;
};

export default Component;
