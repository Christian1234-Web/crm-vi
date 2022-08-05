import React from "react";

import HeaderComponent from "../../ui/Header/Component";
import BuilderWrapperComponent from "./Content";
import CustomHeaderLayout from "../../shared/Layouts/WithoutHeader";

const Component = ({ location }) => {
    let path = location.pathname;
    return (
        // <CustomHeaderLayout location={location}>
        <div
            className={
                path.includes("/executive") || path.includes("/casual")
                    ? "no-padding page-container"
                    : "page-container"
            }
        >
            {/* START HEADER */}
            {/* <HeaderComponent location={location} /> */}
            {/* END HEADER */}
            {/* START PAGE CONTENT WRAPPER */}
            <BuilderWrapperComponent path={path} />
            {/* END PAGE CONTENT WRAPPER */}
        </div>
        // </CustomHeaderLayout>
    );
};

export default Component;
