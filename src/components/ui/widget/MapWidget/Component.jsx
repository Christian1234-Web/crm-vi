import React, { Component } from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";

require("echarts/map/js/world.js");

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }
  timeTicket = null;
  getInitialState = () => ({ option: this.getOption() });

  componentDidMount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
    this.timeTicket = setInterval(() => {
      const option = this.state.option;

      this.setState({ option: option });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timeTicket) {
      clearInterval(this.timeTicket);
    }
  }
  randomData() {
    return Math.round(Math.random() * 1000);
  }
  getOption = () => {
    return {
      color: ["#0e5225", "#1A9367", "#CA4845"],
      grid: {
        left: "0%",
        right: "0%",
      },
	  tooltip: {
      trigger: 'item',
      showDelay: 0,
	  color:"black",
      transitionDuration: 0.2,
	  shadowColor:"black",
	  extraCssText: "box-shadow: 0 0 6px rgba(0,0,0,0.1);",
      backgroundColor: "#fff",
      padding: 10,
      textStyle: {
        color: "#212121",
        fontSize: 12,
        fontFamily: "Arial",
      },
	  formatter: function (params) {
        return params.name;
      },
    },
      series: [
        {
          type: "map",
          mapType: "world",
          center: [-95.7129, 37.0902],
          roam: "move",
          zoom: 6,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
              color: "#fff",
            },
          },
          itemStyle: {
            areaColor: "rgba(255, 255, 255, 0.24)",
            borderColor: "rgba(255, 255, 255, 0.24)",
            shadowColor: "rgba(255, 255, 255, 0.84)",
          },
          emphasis: {
            itemStyle: {
              areaColor: "rgba(255, 255, 255, 0.34)",
            },
          },
        },
      ],
    };
  };
  render() {
    return (
      <div className="parent">
        <ReactEcharts
          option={this.state.option}
          style={{ height: "500px", width: "100%" }}
        />
      </div>
    );
  }
}
