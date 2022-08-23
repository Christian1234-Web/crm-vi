import React from "react";

import { stageOptions } from "../Elements/selectData";
import Dropdown from "react-dropdown";

const Component = ({ onSelectTabs }) => (
  <Dropdown
    className="dropdown dropdown-default tabs-dropdown"
    defaultValue={stageOptions[0]}
    options={stageOptions}
    onChange={(value) => {
      if (value.value === "0") {
        return onSelectTabs([true, false, false, false]);
      }
      if (value.value === "1") {
        return onSelectTabs([false, true, false, false]);
      }
      if (value.value === "2") {
        return onSelectTabs([false, false, true, false]);
      }
      if (value.value === "3") {
        return onSelectTabs([false, false, false, true]);
      }
    }}
  />
);

export default Component;
