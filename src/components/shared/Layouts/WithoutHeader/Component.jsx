import React from "react";

import Sidebar from "../../../Theme-Condensed/Sidebar";
import Quickview from "../../../Quickview";
import Search from "../../../Search";

const Component = ({ location, children }) => {
  return (
    <React.Fragment>
      <Sidebar location={location} />
      {children}
      <Quickview />
      <Search />
    </React.Fragment>
  );
};

export default Component;
