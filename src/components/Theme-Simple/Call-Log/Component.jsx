import React from "react";

import WithoutHeaderLayout from "../../shared/Layouts/WithoutHeader";
import Header from "../../ui/Header";
import ContentWrapperComponent from "./Content";

const Component = ({ location }) => {
  // console.log(location);
  return (
    /* START PAGE CONTENT WRAPPER */
    <div className="page-container " >
      <ContentWrapperComponent />
    </div>
    /* END PAGE CONTENT WRAPPER */
  );
};

export default Component;