import React from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";
import moment from "moment";
import {
  xAxisData,
  yAxisData,
  seriesOneData,
  seriesTwoData,
  seriesThreeData,
} from "./data";
import { getLineChartColors } from "../../../../Theme/ThemeColors";

import "./style.css";

const Component = ({ legend, specifiedHeight }) => {
  let dayArr = [];
  for (let i = 0; i < xAxisData.length; i++) {
    var dateString = moment.unix(xAxisData[i]).format("MM/DD/YYYY");
    const dow = moment(dateString).day();
    let weekDay;
    if (dow == 0) {
      weekDay = "Mon";
    } else if (dow == 1) {
      weekDay = "Tue";
    } else if (dow == 2) {
      weekDay = "Wed";
    } else if (dow == 3) {
      weekDay = "Thu";
    } else if (dow == 4) {
      weekDay = "Fri";
    } else if (dow == 5) {
      weekDay = "Sat";
    } else if (dow == 6) {
      weekDay = "Sun";
    }
    dayArr.push(weekDay);
  }

  const option = {
    color: getLineChartColors(),
    legend: legend,
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
        return `${params[0].axisValue}<br/> ${params[0].marker} ${
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
      left: "1%",
      right: "1%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
      data: dayArr,
    },
    yAxis: {
      type: "value",
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
      data: yAxisData,
      splitLine: {
        show: true,
        lineStyle: {
          opacity: 0.3,
        },
      },
    },
    series: [
      {
        name: "Series 1",
        type: "line",
        lineStyle: {
          width: 1.5,
        },
        stack: "总量",
        data: seriesOneData,
        showSymbol: false,
      },
      {
        name: "Series 2",
        type: "line",
        lineStyle: {
          width: 1.5,
        },
        stack: "总量",
        data: seriesTwoData,
        showSymbol: false,
      },
      {
        name: "Series 3",
        type: "line",
        lineStyle: {
          width: 1.5,
        },
        showSymbol: false,
        data: seriesThreeData,
      },
    ],
  };

  return (
    <ReactEcharts
      option={option}
      style={{ height: "100%" }}
      //   opts={{ height: specifiedHeight ? specifiedHeight : null }}
    />
  );
};

export default Component;
