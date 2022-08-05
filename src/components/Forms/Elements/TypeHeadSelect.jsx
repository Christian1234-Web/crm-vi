import React from 'react';

import Select, {components} from 'react-select';
import makeAnimated from 'react-select/animated';
import { timezonegroupedOptions,alaskanOptions } from './selectData';
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

export default function AnimatedMulti() {
  return (
    <Select
      defaultValue={[alaskanOptions[0]]}
      options={timezonegroupedOptions}
	  isClearable={false}
	  components={{ animatedComponents, DropdownIndicator, IndicatorSeparator:() => null }}
	//   menuIsOpen
	  styles={{
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
			borderTopLeftRadius:'0px',
			borderTopRightRadius:'0px'
		}),
    }}
    />
  );
}