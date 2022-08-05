import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import persons from "./persons";

const animatedComponents = makeAnimated();

let path = location.pathname;
let focusColor = "1px solid #7252D3";
function setFocusColor(theme) {
  focusColor = theme;
}

if (path.includes("/condensed")) {
  setFocusColor("1px solid #7252D3");
} else if (path.includes("/corporate")) {
  setFocusColor("1px solid #6d5eac");
} else if (path.includes("/executive")) {
  setFocusColor("1px solid #7252D3");
} else if (path.includes("/casual")) {
  setFocusColor("1px solid #00a46c");
} else if (path.includes("/simple")) {
  setFocusColor("1px solid #007be8");
}

export default function AnimatedMulti() {
  return (
    <Select
      defaultValue={[persons[1], persons[2]]}
      isMulti
      options={persons}
      isClearable={false}
      placeholder=""
      components={{
        animatedComponents,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={{
        control: (provided, state) => ({
          ...provided,
          borderRadius: "2px",
          borderWidth: "1px",
          border: state.isFocused ? focusColor : "default",
          "&:hover": {
            border: state.isFocused ? focusColor : "default",
          },
          boxShadow: "none",
          maxHeight: "35px",
          minHeight: "20px",
        }),
        groupHeading: (provided) => ({
          ...provided,
          color: "#212121",
          fontSize: "13px",
          fontWeight: "bold",
          textTransform: "none",
        }),
        option: (provided, state) => ({
          ...provided,
          marginLeft: "10px",
          width: "95%",
          color: "default",
          cursor: "pointer",
          "&:active": {
            backgroundColor: "rgba(33, 33, 33, 0.07)",
          },
          backgroundColor: state.isSelected
            ? "rgba(33, 33, 33, 0.07)"
            : "default",
          backgroundColor: state.isFocused
            ? "rgba(33, 33, 33, 0.07)"
            : "default",
          borderRadius: "3px",
        }),
        menu: (provided) => ({
          ...provided,
          marginTop: "1px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        }),
        multiValue: (provided, state) => ({
          ...provided,
          backgroundColor: "#e0e0e0",
          backgroundImage: "none",
          border: "none",
          boxShadow: "none",
          color: "inherit",
          borderRadius: "99px",
          margin: "0px 6px 0px 0",
          padding: "0 2px 0 2px",
          lineHeight: "21px",
        }),
        multiValueLabel: (provided, state) => ({
          ...provided,
          padding: "0 2px 0 2px",
          fontSize: "13px",
        }),
        multiValueRemove: (provided, state) => ({
          ...provided,
          backgroundColor: "none",
          cursor: "pointer",
          border: "none",
          paddingRight: "2px",
          paddingLeft: "0px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }),
      }}
    />
  );
}
