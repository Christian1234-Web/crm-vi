import React from "react";
import BuilderWrapperComponent from "./Content";

const Component = ({ location }) => {
    let path = location.pathname;
    return (
        <div
            className={
                path.includes("/executive") || path.includes("/casual")
                    ? "no-padding page-container"
                    : "page-container"
            }
        >
            {/* START HEADER */}
            {/* END HEADER */}
            {/* START PAGE CONTENT WRAPPER */}
            <BuilderWrapperComponent path={path} />
            {/* END PAGE CONTENT WRAPPER */}
        </div>
    );
};

export default Component;
