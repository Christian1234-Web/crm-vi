import React from "react";

import WithoutHeaderLayout from "../../shared/Layouts/WithoutHeader";
import Header from "../Header";
import ContentWrapperComponent from "./Content";

const Component = ({ location }) => {
	let path = location.pathname;
	// console.log(location);
	return (
		// <WithoutHeaderLayout location={location}>
		<>
			{/* <Header location={location} /> */}
			<div className="page-container p-l-0">
				{/* START PAGE CONTENT WRAPPER */}
				<ContentWrapperComponent path={path} />
				{/* END PAGE CONTENT WRAPPER */}
			</div>
		</>

		// </WithoutHeaderLayout>
	);
};

export default Component;
