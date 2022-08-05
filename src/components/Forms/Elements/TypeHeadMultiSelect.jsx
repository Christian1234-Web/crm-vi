import React from 'react';

import Select, {components} from 'react-select';
import makeAnimated from 'react-select/animated';
import persons from './persons';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
	  defaultValue={[persons[2]]}
	  isMulti
	  options={persons}
	  isClearable={false}
	  placeholder=""
	  components={{ animatedComponents, DropdownIndicator:() => null, IndicatorSeparator:() => null }}
	  styles={{
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
			borderTopLeftRadius:'0px',
			borderTopRightRadius:'0px'
		}),
		multiValue:(provided,state) => ({
			...provided,
			backgroundColor: '#e0e0e0',
			backgroundImage:'none',
			border:'none',
			boxShadow: 'none',
			color: 'inherit',
			borderRadius:'99px',
			margin:'0px 6px 0px 0',
			padding:'0 2px 0 2px',
			lineHeight:'21px'
		}),
		multiValueLabel:(provided,state) => ({
			...provided,
			padding:'0 2px 0 2px',
			fontSize:'13px'
		}),
		multiValueRemove:(provided,state) =>({
			...provided,
			backgroundColor: 'none',
			cursor: 'pointer',
			border: 'none',
			paddingRight:'2px',
			paddingTop:'0px',
			paddingBottom:'0px',
			paddingLeft:'0px',
			"&:hover": {
				backgroundColor: 'transparent'
			},
		})

    }}
    />
  );
}