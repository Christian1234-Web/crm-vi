import React from "react";

import ContentWrapperComponent from "./Content";

const Component = ({ location }) => {
  let path = location.pathname;

  return (
    <>
      <div className="page-container p-l-0">
        {/* START PAGE CONTENT WRAPPER */}
        <ContentWrapperComponent path={path} />
        {/* END PAGE CONTENT WRAPPER */}
      </div>
    </>
  );
};

export default Component;
