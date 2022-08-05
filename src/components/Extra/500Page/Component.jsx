import React from "react";

import Extra500PageWrapperComponent from "./Content";

const Component = ({ location }) => {
  let path = location.pathname;
  return <Extra500PageWrapperComponent path={path} />;
};

export default Component;