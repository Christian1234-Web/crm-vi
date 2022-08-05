import React from "react";

import PageScroll from "../../UIElements/PageScroll";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import PageContainer from "../../UIElements/Containers";
import Copyright from "../../ui/Footer/Copyright";

const content = ({ path }) => {
	return (
		<div className="page-content-wrapper ">
			{/* START PAGE CONTENT */}
			<div className="content ">
				<div className="jumbotron" data-pages="parallax">
					<PageContainer className=" sm-p-l-0 sm-p-r-0">
						<PageScroll>
							<PageBreadcrumb>
								<li className="breadcrumb-item">
									<a href="javascript:void(0);">Pages</a>
								</li>
								<li className="breadcrumb-item active">Blank template</li>
							</PageBreadcrumb>
						</PageScroll>
					</PageContainer>
				</div>
				<PageContainer
					className={
						path.includes("/executive") || path.includes("/casual")
							? "container"
							: " "
					}
				>
					{/* START Content area */}
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					{/* END Content area */}
				</PageContainer>
			</div>
			{/* START COPYRIGHT */}
			<Copyright
				year={"2014"}
				brand={"REVOX"}
				reserved={"All rights reserved."}
				terms={"Terms of use"}
				policy={"Privacy Policy"}
			/>
			{/* END COPYRIGHT */}
			{/* END PAGE CONTENT */}
		</div>
	);
};

export default content;
