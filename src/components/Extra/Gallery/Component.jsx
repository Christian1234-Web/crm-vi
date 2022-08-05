import React from "react";
import ExtraGalleryWrapperComponent from "./Content";

const Component = ({ location }) => {
	const path = location.pathname;
	return (
		<div
			className={
				path.includes("/executive") || path.includes("/casual")
					? "no-padding page-container"
					: "page-container"
			}
		>
			{/* START PAGE CONTENT WRAPPER */}
			<ExtraGalleryWrapperComponent path={path} />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
	);
};

export default Component;
