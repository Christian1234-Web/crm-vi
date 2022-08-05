import React from "react";

import DefaultLayout from "../../shared/Layouts/Default";
import LayoutsBoxWrapperComponent from "./Content";

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
			{/* START PAGE CONTENT WRAPPER */}
			<LayoutsBoxWrapperComponent path={path} />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
	);
};

export default Component;
