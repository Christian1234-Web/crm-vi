import React, { Component } from "react";
import "echarts-gl";
import ReactEcharts from "echarts-for-react";

require("echarts/map/js/world.js");

export default function MapContainer(props){

	const customOptions = {
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
			  center: props.country,
	          roam: "move",
	          zoom: props.zoom,
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
	            areaColor: "#E6E6E6",
	            border: "black",
	            shadowColor: "rgba(255, 255, 255, 0.84)",
	          },
	          emphasis: {
	            itemStyle: {
	              areaColor: "#cce08f",
	            },
	          },
	        },
	      ],
	  };

	return(
		<div className="parent">
			<ReactEcharts
			option={customOptions}
			style={{ height: "660px", width: "100%" }}
			/>
      	</div>
	);
}
