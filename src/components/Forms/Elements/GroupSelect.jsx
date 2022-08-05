import React, { useState } from "react";
import Select, {components} from 'react-select';
import { alaskanOptions, timezonegroupedOptions } from './selectData';
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

let path = location.pathname;
let focusColor = "1px solid #7252D3"
function setFocusColor(theme){
	focusColor=theme;
}

if(path.includes("/condensed")){
	setFocusColor('1px solid #7252D3');
}else if(path.includes("/corporate")){
	setFocusColor('1px solid #6d5eac');
}else if(path.includes("/executive")){
	setFocusColor('1px solid #7252D3');
}else if(path.includes("/casual")){
	setFocusColor('1px solid #00a46c');
}else if(path.includes("/simple")){
	setFocusColor('1px solid #007be8');
}

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
  </div>
);

export default () => (
  <Select
    defaultValue={alaskanOptions[0]}
    options={timezonegroupedOptions}
    formatGroupLabel={formatGroupLabel}
	components={{ DropdownIndicator, IndicatorSeparator:() => null }}
	styles={{
        dropdownIndicator:(provided,state) => ({
            ...provided,
            transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
			marginRight:'5px',
        }),
		control:(provided,state) => ({
			...provided,
			borderRadius: '2px',
			borderWidth: '1px',
			border: state.isFocused ? focusColor: 'default',
			"&:hover":{
				border: state.isFocused ? focusColor: 'default',
			},
			boxShadow: 'none',
			maxHeight:'35px',
			minHeight:'20px',
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
			marginTop: '1px',
			borderTopLeftRadius:'0px',
			borderTopRightRadius:'0px'
		}),
    }}
  />
);