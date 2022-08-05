import React, { useState } from "react";

import ComposeEmailWrapperComponent from "./Content";
import DefaultLayout from "../shared/Layouts/Default";

const Component = ({ location, inboxHeader }) => {
	let path = location.pathname;
	const [toggleComposeHeader, setToggleComposeHeader] = useState(false);
	return (
		// <DefaultLayout location={location} inboxHeader={setToggleComposeHeader}>
			<div
				className={
					path.includes("/executive")
						? "no-padding page-container"
						: "page-container"
				}
			>
				{/* START PAGE CONTENT WRAPPER */}
				<ComposeEmailWrapperComponent toggleHeaderPopup={inboxHeader} />
				{/* END PAGE CONTENT WRAPPER */}
			</div>
			//
		// </DefaultLayout>
	);
};

export default Component;
