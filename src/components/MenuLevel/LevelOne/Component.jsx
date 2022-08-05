import React from "react";

import CustomHeaderLayout from "../../shared/Layouts/WithoutHeader";
import HeaderComponent from "../../ui/Header/Component";
import MenuLevelOnePageWrapperComponent from "./Content";

const Component = ({ location }) => {
	let path = location.pathname;
	return (
		<CustomHeaderLayout location={location}>
			<div
				className={
					path.includes("/executive")
						? "no-padding page-container"
						: "page-container"
				}
			>
				{/* START HEADER */}
				<HeaderComponent location={location} />
				{/* END HEADER */}
				{/* START PAGE CONTENT WRAPPER */}
				<MenuLevelOnePageWrapperComponent path={path} />
				{/* END PAGE CONTENT WRAPPER */}
			</div>
		</CustomHeaderLayout>
	);
};

export default Component;
