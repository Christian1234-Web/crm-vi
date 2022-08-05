import React, { useState, useEffect } from "react";

import DefaultLayout from "../shared/Layouts/Default";
import EmailContentWrapperComponent from "./Content";

const Component = (props) => {
	let path = props.location.pathname;

	return (
		// <DefaultLayout location={location} inboxHeader={setToggleInboxHeader}>
		<div
			className={
				path.includes("/executive") || path.includes("/casual")
					? "no-padding page-container"
					: "page-container"
			}
		>
			{/* START PAGE CONTENT WRAPPER */}
			<EmailContentWrapperComponent toggleHeaderPopup={props.inboxHeader} />
			{/* END PAGE CONTENT WRAPPER */}
		</div>
		// //</DefaultLayout>
	);
};

export default Component;
