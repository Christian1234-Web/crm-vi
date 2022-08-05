import React from "react";

import LayoutsRtlWrapperComponent from "./Content";

const Component = () => {
	return (
		<div
			className={
				path.includes("/executive") || path.includes("/casual")
					? "no-padding page-container"
					: "page-container"
			}
		>
			{/* START PAGE CONTENT WRAPPER */}
			<LayoutsRtlWrapperComponent path={path} />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
	);
};

export default Component;
