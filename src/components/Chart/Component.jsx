import React from "react";

import HeaderComponent from "../ui/Header/Component";
import DefaultLayout from "../shared/Layouts/Default";
import ChartWrapperComponent from "./Content";

const Component = ({ location }) => {
	let path = location.pathname;
	return (
		//<DefaultLayout location={location}>
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
			<ChartWrapperComponent path={path} />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
		//</DefaultLayout>
	);
};

export default Component;
