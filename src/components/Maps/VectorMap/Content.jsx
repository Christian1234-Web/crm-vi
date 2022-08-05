import React, { useState } from "react";
import Select, {components} from 'react-select';
import makeAnimated from 'react-select/animated';
import PerfectScrollbar from "react-perfect-scrollbar";
import MapContainer from "./MapContainer"
import Copyright from "../../ui/Footer/Copyright";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCaretDown);

const CaretDownIcon = () => {
	return <FontAwesomeIcon icon="caret-down" />;
  };
  
  const DropdownIndicator = props => {
	return (
	  <components.DropdownIndicator {...props}>
		<CaretDownIcon />
	  </components.DropdownIndicator>
	);
  };

const animatedComponents = makeAnimated();

const customStyles = {
	dropdownIndicator: (provided, state) => ({
		...provided,
		transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
		marginRight:'-5px',
		padding:'0px 8px',
		marginTop:'-14px'
	}),
	control:(provided) => ({
		...provided,
		borderRadius: '2px',
		borderWidth: '1px',
		border: 'none',
		boxShadow: 'none',
		marginLeft:'-9px',
		maxHeight:'25px',
		minHeight:'20px',
		paddingTop:'0px',
		marginTop:'-2px',
	}),
	valueContainer:(provided) => ({
		...provided,
		padding:'0px 8px'
	}),
	groupHeading:(provided) => ({
		...provided,
		color: '#212121',
		fontSize: '13px',
		fontWeight: 'bold',
		textTransform: 'none',
	}),
	option:(provided,state) => ({
		...provided,
		 marginLeft:'10px',
		width:'95%',
		color:'default',
		cursor:'pointer',
		"&:active": {
			backgroundColor: "rgba(33, 33, 33, 0.07)"
		},
		backgroundColor: state.isSelected ? "rgba(33, 33, 33, 0.07)" : "default",
		backgroundColor: state.isFocused ? "rgba(33, 33, 33, 0.07)" : "default",
		borderRadius:'3px'
	}),
	menu:(provided) => ({
		...provided,
		marginTop: '5px',
		width:'105%',
		marginLeft:'-9px',
		// borderTopLeftRadius:'0px',
		// borderTopRightRadius:'0px',
		border:'0px',
		boxShadow:'none',
		position:'relative'
	}),
}

const countries = [
	{value:[133.7751, -25.2744], label:'Australia'},
	{value:[-106.3468, 56.1304], label:'Canada'},
	{value:[105.3188, 61.5240], label:'Russia'},
	{value:[-51.9253, -14.2350], label:'Brazil'},
	{value:[-95.7129, 37.0902], label:'United States'},
	{value:[2.2137, 46.2276], label:'France'},
	{value:[138.2529, 36.2048], label:'Japan'},
	{value:[22.9375, -30.5595], label:'South Africa'},
	{value:[-8.2245, 39.3999], label:'Portugal'},
];

const content = ({ path }) => {

	const [zoom, setZoom] = useState(4);
	const [country, setCountry] = useState(countries[0]);

	function selectCountry(event){
		setCountry(event);
		setZoom(4);
	}

	function expand(){
		setZoom(1);
	}

	function zoomIn(){
		if(zoom<10){
		setZoom(zoom+1);
		}
	}
	function zoomOut(){
		if(zoom>0){
		setZoom(zoom-1);
		}
	}

	return (
		<div className="page-content-wrapper ">
			{/* START PAGE CONTENT */}

		<div className="content full-width full-height overlay-footer">

          <div className="map-container full-width full-height relative">
            <div className="map-controls">
              <div className="pull-left">
                <div className="btn-group-vertical" data-toggle="buttons-radio">
                  <button aria-label="" className="btn btn-xs btn-icon" onClick={() => zoomIn()}><i className="pg-icon">add</i>
                  </button>
                  <button aria-label="" className="btn btn-xs btn-icon" onClick={() => zoomOut()}><i className="pg-icon">minus</i>
                  </button>
                </div>
                <br/>
                <a href="#" className="btn btn-xs m-t-10 clear-map btn-icon" onClick={() => expand()} >
                  <i className="pg-icon">expand</i>
                </a>
              </div>
              <div className="pull-left m-l-15">
                <form role="form">
                  <div className="form-group form-group-default " style={{width:'240px'}}>
                    <label>Country</label>
					<Select
						defaultValue={country}
						options={countries}
						isClearable={false}
						onChange={(e) => selectCountry(e)}
						components={{ animatedComponents, DropdownIndicator, IndicatorSeparator:() => null }}
						styles={customStyles}
					/>
                  </div>
                </form>
              </div>
            </div>
        </div>
		</div>

		<MapContainer country={country.value} zoom={zoom}/>

			
			{/* START COPYRIGHT */}
			<Copyright
				year={"2014"}
				brand={"REVOX"}
				reserved={"All rights reserved."}
				terms={"Terms of use"}
				policy={"Privacy Policy"}
			/>
			{/* END COPYRIGHT */}
			{/* END PAGE CONTENT */}
		</div>
	);
};

export default content;