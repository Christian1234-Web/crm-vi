import React from "react";

import LayoutsBoxWrapperComponent from "./Content";
import HeaderComponent from "../../ui/Header";
import BoxedLayout from "../../shared/Layouts/Boxed";

const Component = ({ location }) => {
	return (
		<BoxedLayout location={location}>
			<div className="page-container ">
				{ /* START HEADER CONTENT WRAPPER */}
				<HeaderComponent location={location} />
				{ /* END HEADER CONTENT WRAPPER */}
				{ /* START PAGE CONTENT WRAPPER */}
				<LayoutsBoxWrapperComponent />
				{ /* END PAGE CONTENT WRAPPER */}
			</div>
		</BoxedLayout>
	);
};

export default Component;
