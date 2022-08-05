import React from "react";

import DefaultLayout from "../../shared/Layouts/Default";
import ExtratimeLineWrapperComponent from "./Content";

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
			{/* START PAGE CONTENT WRAPPER */}
			<ExtratimeLineWrapperComponent path={path} />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
		//</DefaultLayout>
	);
};

export default Component;
