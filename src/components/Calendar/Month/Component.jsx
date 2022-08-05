import React from "react";

import CalendarMonthWrapperComponent from "./Content";

const Component = ({path}) => {
	return (
		<div
			className={'no-padding page-container'
				// path.includes("/executive") || path.includes("/casual")
				// 	? "no-padding page-container"
				// 	: "page-container"
			}
		>
			{/* START PAGE CONTENT WRAPPER */}
				< CalendarMonthWrapperComponent
				//  path={path}
		/>
			{/* END PAGE CONTENT WRAPPER */}
		</div>
	);
};

export default Component;
