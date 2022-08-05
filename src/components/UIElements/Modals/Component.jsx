import React from "react";

import CustomHeaderLayout from "../../shared/Layouts/WithoutHeader";
import HeaderComponent from "../../ui/Header";
import LayoutsSecondaryWrapperComponent from "./Content";

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
			{/* START HEADER CONTENT WRAPPER */}
			{/* <HeaderComponent location={location}/> */}
			{/* END HEADER CONTENT WRAPPER */}
			{/* START PAGE CONTENT WRAPPER */}
			<LayoutsSecondaryWrapperComponent path={path} />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
		// </CustomHeaderLayout>
	);
};

export default Component;
