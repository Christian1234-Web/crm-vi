import React from "react";

import PageScroll from "../../UIElements/PageScroll";
import PageBreadcrumb from "../../UIElements/Breadcrumb";
import PageContainer from "../../UIElements/Containers";
import Copyright from "../../ui/Footer/Copyright";
import './style.scss';
const content = ({ path }) => {
	return (
		<div className="page-content-wrapper simple-box-layout ">
			{ /* START PAGE CONTENT */}
			<div className="content ">
				<div className="jumbotron" data-pages="parallax">
					<PageContainer className=" sm-p-l-0 sm-p-r-0">
						<PageScroll>
							<PageBreadcrumb>
								<li className="breadcrumb-item"><a href="javascript:void(0);">Layouts</a></li>
								<li className="breadcrumb-item active">Boxed</li>
							</PageBreadcrumb>
						</PageScroll>
					</PageContainer>
				</div>
				<PageContainer>
					{/* START Content area */}
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
					{/* END Content area */}
				</PageContainer>
			</div>
			{ /* START COPYRIGHT */}
			<Copyright
				year={"2014"}
				brand={"REVOX"}
				reserved={"All rights reserved."}
				terms={"Terms of use"}
				policy={"Privacy Policy"}
			/>
			{ /* END COPYRIGHT */}
			{ /* END PAGE CONTENT */}
		</div>
	);
};

export default content;
